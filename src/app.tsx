import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSeason } from './components/HeroSeason';
import { DailyPair } from './components/DailyPair';
import { SeasonalIngredientsSection } from './components/SeasonalIngredientsSection';
import { KitchenArchiveSection } from './components/KitchenArchiveSection';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { SavedRecipesDrawer } from './components/SavedRecipesDrawer';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';

import { recipesData } from './data/recipes';
import { seasonalIngredientsData } from './data/seasonalIngredients';
import { Recipe, Season } from './types';

export const App: React.FC = () => {
  const [currentSeason, setCurrentSeason] = useState<Season>('outono');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [savedRecipeIds, setSavedRecipeIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('broto_brasa_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('broto_brasa_saved', JSON.stringify(savedRecipeIds));
    } catch (e) {
      console.error('Falha ao salvar favoritos no localStorage', e);
    }
  }, [savedRecipeIds]);

  const toggleSaveRecipe = (recipe: Recipe) => {
    setSavedRecipeIds((prev) =>
      prev.includes(recipe.id)
        ? prev.filter((id) => id !== recipe.id)
        : [...prev, recipe.id]
    );
  };

  const filteredRecipes = useMemo(() => {
    if (!searchTerm.trim()) {
      return recipesData.filter((r) => r.season === currentSeason);
    }
    const query = searchTerm.toLowerCase();
    return recipesData.filter(
      (r) =>
        r.title.toLowerCase().includes(query) ||
        r.subtitle.toLowerCase().includes(query) ||
        r.highlightSeasonalIngredient.toLowerCase().includes(query) ||
        r.tags.some((t) => t.toLowerCase().includes(query)) ||
        r.ingredients.some((i) => i.name.toLowerCase().includes(query))
    );
  }, [currentSeason, searchTerm]);

  const lunchToday = useMemo(() => {
    return (
      filteredRecipes.find((r) => r.meal === 'almoco') ||
      recipesData.find((r) => r.meal === 'almoco')!
    );
  }, [filteredRecipes]);

  const dinnerToday = useMemo(() => {
    return (
      filteredRecipes.find((r) => r.meal === 'jantar') ||
      recipesData.find((r) => r.meal === 'jantar')!
    );
  }, [filteredRecipes]);

  const pastRecipes = useMemo(() => {
    return recipesData.filter(
      (r) => r.id !== lunchToday.id && r.id !== dinnerToday.id
    );
  }, [lunchToday, dinnerToday]);

  const seasonalIngredients = useMemo(() => {
    return seasonalIngredientsData.filter((i) => i.season === currentSeason);
  }, [currentSeason]);

  const savedRecipesList = useMemo(() => {
    return recipesData.filter((r) => savedRecipeIds.includes(r.id));
  }, [savedRecipeIds]);

  const handleSelectIngredientRecipe = (recipeId: string) => {
    const found = recipesData.find((r) => r.id === recipeId);
    if (found) {
      setSelectedRecipe(found);
    }
  };

  return (
    <div className="app-shell">
      <Header
        currentSeason={currentSeason}
        onSeasonChange={setCurrentSeason}
        savedCount={savedRecipeIds.length}
        onOpenSaved={() => setSavedDrawerOpen(true)}
        onOpenAbout={() => setAboutModalOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="main-content">
        <HeroSeason
          currentSeason={currentSeason}
          onExploreSeason={() => {
            const el = document.getElementById('ingredientes-da-estacao');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <DailyPair
          lunchRecipe={lunchToday}
          dinnerRecipe={dinnerToday}
          onSelectRecipe={setSelectedRecipe}
          savedRecipeIds={savedRecipeIds}
          onToggleSave={toggleSaveRecipe}
        />

        <SeasonalIngredientsSection
          ingredients={seasonalIngredients}
          onSelectIngredientRecipe={handleSelectIngredientRecipe}
        />

        <KitchenArchiveSection
          pastRecipes={pastRecipes}
          onSelectRecipe={setSelectedRecipe}
        />
      </main>

      <Footer
        onSeasonChange={setCurrentSeason}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      <RecipeDetailModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        isSaved={selectedRecipe ? savedRecipeIds.includes(selectedRecipe.id) : false}
        onToggleSave={toggleSaveRecipe}
      />

      <SavedRecipesDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedRecipes={savedRecipesList}
        onSelectRecipe={setSelectedRecipe}
        onRemoveRecipe={(id) => setSavedRecipeIds((prev) => prev.filter((item) => item !== id))}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />
    </div>
  );
};

export default App;
