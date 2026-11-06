import React, { useEffect } from 'react';
import { X, Trash2, ArrowRight, Bookmark } from 'lucide-react';
import { Recipe } from '../types';

interface SavedRecipesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedRecipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onRemoveRecipe: (recipeId: string) => void;
}

export const SavedRecipesDrawer: React.FC<SavedRecipesDrawerProps> = ({
  isOpen,
  onClose,
  savedRecipes,
  onSelectRecipe,
  onRemoveRecipe,
}) => {
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
            <Bookmark size={18} style={{ marginRight: 8, color: 'var(--color-terracotta)' }} />
            <h3 className="drawer-title serif">Meu Caderno de Receitas</h3>
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
                Clique no ícone de marcador nas receitas do dia para salvar seus preparos favoritos para cozinhar mais tarde.
              </p>
            </div>
          ) : (
            <div className="drawer-cards-list">
              {savedRecipes.map((recipe) => (
                <div key={recipe.id} className="drawer-recipe-card">
                  <div className="drawer-card-thumb">
                    <img src={recipe.imageUrl} alt={recipe.title} />
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
      </aside>
    </div>
  );
};
