import { useState, useEffect, useMemo } from 'react';
import { Header } from './components/header';
import { HeroSeason } from './components/heroSeason';
import { DailyPair } from './components/dailyPair';
import { SeasonalIngredientsSection } from './components/seasonalingredientsSection';
import { KitchenArchiveSection } from './components/kitchenArchiveSection';
import { RecipeDetailModal } from './components/recipeDetailModal';
import { SavedRecipesDrawer } from './components/savedRecipesDrawer';
import { AboutModal } from './components/aboutModal';
import { Footer } from './components/footer';
import { PrintSheet } from './components/printSheet';

import { recipesData } from './data/recipes';
import { seasonalIngredientsData } from './data/seasonalIngredients';
import type { Recipe, Season } from './types';
import { brazilianSeason } from './seasons';

function recipeFromHash(): Recipe | null {
  const hash = window.location.hash;
  const match = hash.match(/^#receita\/([^/]+)/);
  if (!match) return null;
  return recipesData.find((r) => r.id === match[1]) ?? null;
}

function matchesQuery(recipe: Recipe, query: string): boolean {
  return (
    recipe.title.toLowerCase().includes(query) ||
    recipe.subtitle.toLowerCase().includes(query) ||
    recipe.highlightSeasonalIngredient.toLowerCase().includes(query) ||
    recipe.tags.some((t) => t.toLowerCase().includes(query)) ||
    recipe.ingredients.some((i) => i.name.toLowerCase().includes(query)) ||
    (recipe.biome?.toLowerCase().includes(query) ?? false)
  );
}

export default function App() {
  const [currentSeason, setCurrentSeason] = useState<Season>(() => brazilianSeason());
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(() => recipeFromHash());
  const [savedRecipeIds, setSavedRecipeIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('broto_brasa_saved');
      const parsed: unknown = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(parsed)) return [];
      const known = new Set(recipesData.map((r) => r.id));
      return parsed.filter((id): id is string => typeof id === 'string' && known.has(id));
    } catch {
      return [];
    }
  });
  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [printRecipes, setPrintRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('broto_brasa_saved', JSON.stringify(savedRecipeIds));
    } catch {
      // quota or private mode
    }
  }, [savedRecipeIds]);

  useEffect(() => {
    document.title = selectedRecipe
      ? `${selectedRecipe.title} — Broto & Brasa`
      : 'Broto & Brasa — Duas panelas por dia';
  }, [selectedRecipe]);

  useEffect(() => {
    const onPop = () => setSelectedRecipe(recipeFromHash());
    window.addEventListener('hashchange', onPop);
    window.addEventListener('popstate', onPop);
    return () => {
      window.removeEventListener('hashchange', onPop);
      window.removeEventListener('popstate', onPop);
    };
  }, []);

  const openRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    const next = `#receita/${recipe.id}`;
    if (window.location.hash !== next) {
      window.history.pushState(null, '', next);
    }
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
    if (window.location.hash.startsWith('#receita/')) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const printSheet = (recipes: Recipe[]) => {
    if (recipes.length === 0) return;
    setPrintRecipes(recipes);
  };

  useEffect(() => {
    if (printRecipes.length === 0) return;
    let cancelled = false;
    const clear = () => {
      if (!cancelled) setPrintRecipes([]);
    };
    window.addEventListener('afterprint', clear);
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (!cancelled) window.print();
      });
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(id);
      window.removeEventListener('afterprint', clear);
    };
  }, [printRecipes]);

  const toggleSaveRecipe = (recipe: Recipe) => {
    setSavedRecipeIds((prev) =>
      prev.includes(recipe.id)
        ? prev.filter((id) => id !== recipe.id)
        : [...prev, recipe.id]
    );
  };

  const query = searchTerm.trim().toLowerCase();

  const seasonRecipes = useMemo(
    () => recipesData.filter((r) => r.season === currentSeason),
    [currentSeason]
  );

  const lunchToday = useMemo(() => {
    return seasonRecipes.find((r) => r.meal === 'almoco') ?? recipesData.find((r) => r.meal === 'almoco')!;
  }, [seasonRecipes]);

  const dinnerToday = useMemo(() => {
    return seasonRecipes.find((r) => r.meal === 'jantar') ?? recipesData.find((r) => r.meal === 'jantar')!;
  }, [seasonRecipes]);

  const pastRecipes = useMemo(() => {
    if (query) return recipesData.filter((r) => matchesQuery(r, query));
    return recipesData.filter((r) => r.id !== lunchToday.id && r.id !== dinnerToday.id);
  }, [lunchToday, dinnerToday, query]);

  useEffect(() => {
    if (!query) return;
    const id = window.setTimeout(() => {
      document.getElementById('arquivo-culinario')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => window.clearTimeout(id);
  }, [query]);

  const searchMiss = Boolean(query) && !seasonRecipes.some((r) => matchesQuery(r, query)) && pastRecipes.length === 0;

  const seasonalIngredients = useMemo(() => {
    return seasonalIngredientsData.filter((i) => i.season === currentSeason);
  }, [currentSeason]);

  const savedRecipesList = useMemo(() => {
    return recipesData.filter((r) => savedRecipeIds.includes(r.id));
  }, [savedRecipeIds]);

  const handleSelectIngredientRecipe = (recipeId: string) => {
    const found = recipesData.find((r) => r.id === recipeId);
    if (found) openRecipe(found);
  };

  return (
    <div className="app-shell">
      <Header
        currentSeason={currentSeason}
        onSeasonChange={setCurrentSeason}
        savedCount={savedRecipesList.length}
        onOpenSaved={() => setSavedDrawerOpen(true)}
        onOpenAbout={() => setAboutModalOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="main-content" key={currentSeason}>
        <HeroSeason
          currentSeason={currentSeason}
          lunchRecipe={lunchToday}
          dinnerRecipe={dinnerToday}
          harvestNames={seasonalIngredients.map((item) => item.name)}
          onExploreToday={() => {
            document.getElementById('receitas-do-dia')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {searchMiss && (
          <p className="search-empty">
            Nenhuma receita encontrada para “{searchTerm}” nesta edição. Tente cabotiá, mandioca ou peixe.
          </p>
        )}

        <DailyPair
          lunchRecipe={lunchToday}
          dinnerRecipe={dinnerToday}
          onSelectRecipe={openRecipe}
          savedRecipeIds={savedRecipeIds}
          onToggleSave={toggleSaveRecipe}
        />

        <SeasonalIngredientsSection
          ingredients={seasonalIngredients}
          onSelectIngredientRecipe={handleSelectIngredientRecipe}
        />

        <KitchenArchiveSection
          pastRecipes={pastRecipes}
          savedRecipeIds={savedRecipeIds}
          onSelectRecipe={openRecipe}
        />
      </main>

      <Footer
        onSeasonChange={setCurrentSeason}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      <RecipeDetailModal
        recipe={selectedRecipe}
        onClose={closeRecipe}
        isSaved={selectedRecipe ? savedRecipeIds.includes(selectedRecipe.id) : false}
        onToggleSave={toggleSaveRecipe}
        onPrint={(recipe) => printSheet([recipe])}
      />

      <SavedRecipesDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedRecipes={savedRecipesList}
        onSelectRecipe={openRecipe}
        onRemoveRecipe={(id) => setSavedRecipeIds((prev) => prev.filter((item) => item !== id))}
        onClearAll={() => setSavedRecipeIds([])}
        onPrintMenu={() => printSheet(savedRecipesList)}
      />

      <PrintSheet recipes={printRecipes} />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />
    </div>
  );
}
