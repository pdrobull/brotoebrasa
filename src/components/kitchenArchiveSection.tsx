import React from 'react';
import { Calendar, ArrowRight, Sun, Moon } from 'lucide-react';
import { Recipe } from '../types';

interface KitchenArchiveSectionProps {
  pastRecipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
}

export const KitchenArchiveSection: React.FC<KitchenArchiveSectionProps> = ({
  pastRecipes,
  onSelectRecipe,
}) => {
  return (
    <section id="arquivo-culinario" className="archive-section">
      <div className="section-header-editorial">
        <span className="section-eyebrow">Memória & Repertório</span>
        <h2 className="section-headline serif">Diário da Cozinha</h2>
        <p className="section-subtext">
          Um histórico das receitas sugeridas nos dias anteriores. Consulte quando quiser revisitar preparos e planejar o cardápio da semana.
        </p>
      </div>

      <div className="archive-list">
        {pastRecipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="archive-row-item"
            onClick={() => onSelectRecipe(recipe)}
          >
            <div className="archive-meta-col">
              <span className="archive-date">
                <Calendar size={13} style={{ marginRight: 5 }} />
                {recipe.datePublished}
              </span>
              <span className={`archive-meal-badge ${recipe.meal}`}>
                {recipe.meal === 'almoco' ? (
                  <>
                    <Sun size={12} style={{ marginRight: 4 }} />
                    Almoço
                  </>
                ) : (
                  <>
                    <Moon size={12} style={{ marginRight: 4 }} />
                    Jantar
                  </>
                )}
              </span>
            </div>

            <div className="archive-thumb-col">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title} 
                className="archive-thumb"
                loading="lazy"
              />
            </div>

            <div className="archive-info-col">
              <span className="archive-seasonal-tag">Safra: {recipe.highlightSeasonalIngredient}</span>
              <h3 className="archive-title serif">{recipe.title}</h3>
              <p className="archive-excerpt">{recipe.subtitle}</p>
            </div>

            <div className="archive-action-col">
              <span className="archive-time">{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
              <button className="archive-open-btn" aria-label={`Abrir ${recipe.title}`}>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
