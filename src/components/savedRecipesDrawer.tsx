import { useEffect } from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import type { Recipe } from '../types';

interface SavedRecipesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedRecipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onRemoveRecipe: (recipeId: string) => void;
  onClearAll: () => void;
  onPrintMenu: () => void;
}

export function SavedRecipesDrawer({
  isOpen,
  onClose,
  savedRecipes,
  onSelectRecipe,
  onRemoveRecipe,
  onClearAll,
  onPrintMenu,
}: SavedRecipesDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <aside className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="drawer-title-group">
            <h3 className="drawer-title serif">Caderno</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Fechar gaveta">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          {savedRecipes.length === 0 ? (
            <div className="drawer-empty-state">
              <p className="empty-title serif">Nenhuma receita guardada ainda</p>
              <p className="empty-sub">
                O caderno ainda está em branco. Em qualquer prato, use “Guardar no caderno”.
              </p>
            </div>
          ) : (
            <div className="drawer-cards-list">
              {savedRecipes.map((recipe) => (
                <div key={recipe.id} className="drawer-recipe-card">
                  <div className="drawer-card-thumb">
                    <img src={recipe.imageUrl} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="drawer-card-content">
                    <span className="drawer-card-meal">
                      {recipe.meal === 'almoco' ? 'Almoço' : 'Jantar'} · {recipe.highlightSeasonalIngredient}
                    </span>
                    <h4 
                      className="drawer-card-name serif" 
                      onClick={() => {
                        onClose();
                        onSelectRecipe(recipe);
                      }}
                    >
                      {recipe.title}
                    </h4>
                    <div className="drawer-card-actions">
                      <button
                        className="btn-drawer-open"
                        onClick={() => {
                          onClose();
                          onSelectRecipe(recipe);
                        }}
                      >
                        <span>Abrir</span>
                        <ArrowRight size={14} />
                      </button>
                      <button
                        className="btn-drawer-remove"
                        onClick={() => onRemoveRecipe(recipe.id)}
                        aria-label="Remover receita"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {savedRecipes.length > 0 && (
          <div className="drawer-footer">
            <button type="button" className="btn-text" onClick={onPrintMenu}>
              Imprimir menu
            </button>
            <button
              type="button"
              className="btn-drawer-remove"
              onClick={() => {
                if (window.confirm('Esvaziar o caderno?')) onClearAll();
              }}
            >
              Esvaziar caderno
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
