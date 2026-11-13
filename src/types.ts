export type MealType = 'almoco' | 'jantar';

export type Season = 'outono' | 'inverno' | 'primavera' | 'verao';

export interface ImageCredit {
  originalUrl: string;
  source: string;
  author: string;
  authorUrl?: string;
  license: string;
  licenseConfirmed: boolean;
  notes?: string;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  meal: MealType;
  season: Season;
  datePublished: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: 'Fácil' | 'Médio' | 'Elaborado';
  servings: number;
  imageUrl: string;
  imageCredit: ImageCredit;
  highlightSeasonalIngredient: string;
  ingredients: {
    name: string;
    amount: string;
    seasonal?: boolean;
  }[];
  instructions: string[];
  chefTip?: string;
  suggestedPairing?: string;
  tags: string[];
  biome?: string;
}

export interface SeasonalIngredient {
  id: string;
  name: string;
  scientificOrFamily?: string;
  season: Season;
  peakPeriod: string;
  description: string;
  flavorProfile: string;
  occurrence?: string;
  marketTip?: string;
  shortHarvest?: boolean;
  imageUrl: string;
  imageCredit: ImageCredit;
  recipeIds: string[];
}
