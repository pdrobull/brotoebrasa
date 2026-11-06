import React from 'react';
import { Leaf, ArrowUpRight } from 'lucide-react';
import { SeasonalIngredient } from '../types';

interface SeasonalIngredientsSectionProps {
  ingredients: SeasonalIngredient[];
  onSelectIngredientRecipe: (recipeId: string) => void;
}

export const SeasonalIngredientsSection: React.FC<SeasonalIngredientsSectionProps> = ({
  ingredients,
  onSelectIngredientRecipe,
}) => {
  return (
    <section id="ingredientes-da-estacao" className="seasonal-ingredients-section">
      <div className="section-header-editorial">
        <span className="section-eyebrow">Origem & Safra</span>
        <h2 className="section-headline serif">Ingredientes em Evidência</h2>
        <p className="section-subtext">
          Conheça os alimentos no auge do sabor, frescor e valor nutritivo neste período. Cozinhar no ritmo da safra é celebrar o que a terra entrega com fartura.
        </p>
      </div>

      <div className="ingredients-editorial-grid">
        {ingredients.map((item) => (
          <div key={item.id} className="ingredient-card">
            <div className="ingredient-photo-wrapper">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="ingredient-photo"
                loading="lazy"
              />
              <span className="ingredient-peak-badge">{item.peakPeriod}</span>
              <div className="photo-credit-discreet">
                Foto por{' '}
                {item.imageCredit.authorUrl ? (
                  <a href={item.imageCredit.authorUrl} target="_blank" rel="noopener noreferrer" className="author-link">
                    {item.imageCredit.author}
                  </a>
                ) : (
                  <span className="author-name">{item.imageCredit.author}</span>
                )}
              </div>
            </div>

            <div className="ingredient-body">
              <div className="ingredient-kicker">
                <Leaf size={13} style={{ marginRight: 4 }} />
                <span>{item.scientificOrFamily || 'Safra Brasileira'}</span>
              </div>
              <h3 className="ingredient-title serif">{item.name}</h3>
              <p className="ingredient-description">{item.description}</p>
              
              <div className="ingredient-flavor-box">
                <span className="flavor-label">Perfil gustativo:</span>
                <span className="flavor-text">{item.flavorProfile}</span>
              </div>

              {item.recipeIds && item.recipeIds.length > 0 && (
                <div className="ingredient-action">
                  <button 
                    className="ingredient-link-btn"
                    onClick={() => onSelectIngredientRecipe(item.recipeIds[0])}
                  >
                    <span>Ver receita com este ingrediente</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
