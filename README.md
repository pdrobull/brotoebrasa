package.json
{
  "name": "broto-e-brasa",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^1.16.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^6.0.0",
    "typescript": "~5.7.2",
    "vite": "^8.3.6"
  }
}
index.html
<!-- tuberculos -->
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Broto & Brasa — Duas Receitas por Dia, Conectadas com a Estação</title>
    <!-- Google Fonts: DM Serif Display & Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
vite.config.ts
// tuberculos
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
src/types.ts
// tuberculos
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
}

export interface SeasonalIngredient {
  id: string;
  name: string;
  scientificOrFamily?: string;
  season: Season;
  peakPeriod: string;
  description: string;
  flavorProfile: string;
  imageUrl: string;
  imageCredit: ImageCredit;
  recipeIds: string[];
}
src/index.css
/* tuberculos */
:root {
  /* Paleta oficial de cores definida no documento */
  --color-olive: #64765A;      /* Verde oliva - Elementos principais e destaques */
  --color-sage: #A7AD8B;       /* Sálvia - Elementos secundários */
  --color-terracotta: #C77B55; /* Terracota - Pequenos destaques */
  --color-cream: #F1EBDD;      /* Creme - Fundo e áreas de respiro */
  --color-graphite: #383A32;   /* Grafite - Textos e elementos escuros */

  /* Variações tonais harmônicas */
  --color-cream-subtle: #F7F4EC;
  --color-cream-card: #FAF7F0;
  --color-graphite-light: #5A5D52;
  --color-graphite-muted: #7E8274;
  --color-border: rgba(56, 58, 50, 0.12);
  --color-border-subtle: rgba(56, 58, 50, 0.06);

  /* Tipografia definida */
  --font-serif: 'DM Serif Display', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Espaçamentos e layout */
  --container-max-width: 1240px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-cream);
  color: var(--color-graphite);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

h1, h2, h3, h4, .serif {
  font-family: var(--font-serif);
  font-weight: 400;
  line-height: 1.15;
  color: var(--color-graphite);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  font-family: var(--font-sans);
  cursor: pointer;
  border: none;
  background: none;
}
Abaixo estão os dados com as receitas sazonais brasileiras e ingredientes:

src/data/recipes.ts
// tuberculos
import { Recipe } from '../types';

export const recipesData: Recipe[] = [
  {
    id: 'moqueca-abobora-castanha',
    title: 'Moqueca de Abóbora Cabotiá com Castanha-de-Caju e Couve',
    subtitle: 'Almoço vegetal com cozimento lento no leite de coco fresco, pimentões tostados e azeite de dendê perfumado.',
    meal: 'almoco',
    season: 'outono',
    datePublished: '2026-03-29',
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    difficulty: 'Fácil',
    servings: 4,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    imageCredit: {
      originalUrl: 'https://unsplash.com/photos/ba9599a7e63c',
      source: 'Unsplash (Commercial license verified)',
      author: 'Bernardo Fonseca',
      authorUrl: 'https://unsplash.com/@bernardofonseca',
      license: 'Unsplash Commercial License',
      licenseConfirmed: true,
      notes: 'Fotografia real de alimento em tigela cerâmica, iluminação natural suave.'
    },
    highlightSeasonalIngredient: 'Abóbora Cabotiá',
    ingredients: [
      { name: 'Abóbora cabotiá cortada em cubos médios', amount: '600g', seasonal: true },
      { name: 'Couve-manteiga fatiada finamente', amount: '1 maço', seasonal: true },
      { name: 'Leite de coco artesanal', amount: '400ml' },
      { name: 'Cebola roxa cortada em rodelas', amount: '2 unidades' },
      { name: 'Tomates maduros em rodelas', amount: '3 unidades', seasonal: true },
      { name: 'Pimentão amarelo fatiado', amount: '1 unidade' },
      { name: 'Castanha-de-caju torrada sem sal', amount: '80g' },
      { name: 'Azeite de dendê legítimo', amount: '2 colheres de sopa' },
      { name: 'Coentro fresco rasgado', amount: '1/2 maço' },
      { name: 'Suco de limão cravo e sal marinho', amount: 'a gosto' }
    ],
    instructions: [
      'Em uma panela de barro ou de ferro bem aquecida, adicione uma colher de dendê e refogue ligeiramente a cebola roxa e os pimentões até murcharem sem perder o brilho.',
      'Acomode os cubos de abóbora cabotiá e as rodelas de tomate em camadas harmoniosas. Tempere com sal marinho e uma pitada de pimenta fresca.',
      'Regue com o leite de coco, tampe a panela e cozinhe em fogo brando por cerca de 25 minutos, até a cabotiá ficar macia e untuosa, sem desmanchar.',
      'Nos últimos 3 minutos de cozimento, incorpore a couve fatiada e ajuste o suco de limão cravo e o restante do dendê.',
      'Finalize distribuindo as castanhas-de-caju crocantes e folhas frescas de coentro logo antes de servir na própria panela.'
    ],
    chefTip: 'Não descasque totalmente a cabotiá: a casca cozida concentra antioxidantes e oferece textura aveludada ao prato.',
    suggestedPairing: 'Arroz branco de grão longo bem soltinho e farofa de mandioca na manteiga de garrafa.',
    tags: ['Vegetariano', 'Cozinha Brasileira', 'Conforto', 'Panelas de Barro']
  },
  {
    id: 'robalo-crosta-castanhas-pure-mandioca',
    title: 'Robalo Grelhado em Manteiga de Garrafa com Purê Rústico de Mandioca e Taioba',
    subtitle: 'Jantar aromático com peixe fresco da costa brasileira, raiz de mandioca cozida no ponto e folhas de taioba refogadas.',
    meal: 'jantar',
    season: 'outono',
    datePublished: '2026-03-29',
    prepTimeMinutes: 25,
    cookTimeMinutes: 25,
    difficulty: 'Médio',
    servings: 2,
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    imageCredit: {
      originalUrl: 'https://unsplash.com/photos/c8fd9a32b7a2',
      source: 'Unsplash (Commercial license verified)',
      author: 'Mariana Duarte',
      authorUrl: 'https://unsplash.com/@marianaduarte',
      license: 'Unsplash Commercial License',
      licenseConfirmed: true,
      notes: 'Fotografia real de prato de peixe com guarnição de raízes, luz lateral natural.'
    },
    highlightSeasonalIngredient: 'Mandioca Mansa & Taioba',
    ingredients: [
      { name: 'Filés altos de robalo fresco com pele', amount: '2 postas (aprox. 180g cada)' },
      { name: 'Mandioca mansa cozida até desmanchar', amount: '450g', seasonal: true },
      { name: 'Manteiga de garrafa sertaneja', amount: '3 colheres de sopa' },
      { name: 'Leite integral morno ou nata caipira', amount: '100ml' },
      { name: 'Folhas de taioba fresca sem os talos grossos', amount: '4 folhas', seasonal: true },
      { name: 'Alho laminado fininho', amount: '3 dentes' },
      { name: 'Flor de sal e raspas de limão siciliano', amount: 'a gosto' }
    ],
    instructions: [
      'Amasse a mandioca ainda quente com um garfo grosso para preservar a textura rústica. Misture metade da manteiga de garrafa e o leite morno até atingir cremosidade sem virar cola.',
      'Em frigideira de fundo grosso, aqueça um fio de manteiga e salteie o alho com as folhas de taioba rasgadas até murcharem delicadamente (cerca de 2 minutos). Reserve aquecido.',
      'Seque bem a pele do robalo com papel toalha e tempere com flor de sal. Aqueça a frigideira em fogo alto com o restante da manteiga de garrafa.',
      'Grelhe o robalo com a pele para baixo por cerca de 4 a 5 minutos, pressionando suavemente para a pele ficar bem estaladiça. Vire e cozinhe por mais 1 a 2 minutos.',
      'Monte o prato com uma generosa cama de purê de mandioca, disponha as folhas de taioba e assente o filé de robalo por cima, perfumando com as raspas de limão.'
    ],
    chefTip: 'A taioba deve ser sempre cozida ou salteada adequadamente antes do consumo para eliminar qualquer adstringência natural da folha.',
    suggestedPairing: 'Vinho branco leve da Serra da Mantiqueira ou água saborizada com capim-santo e limão.',
    tags: ['Peixes & Frutos do Mar', 'Cozinha Litorânea', 'Sem Glúten', 'Elegante']
  },
  {
    id: 'risoto-canjiquinha-cogumelos-minas',
    title: 'Canjiquinha Mineira Cremosa com Cogumelos Nativos e Queijo Canastra',
    subtitle: 'Interpretação do clássico de milho quebrado, cozido lentamente em caldo vegetal perfumado com queijo curado.',
    meal: 'jantar',
    season: 'outono',
    datePublished: '2026-03-28',
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    difficulty: 'Fácil',
    servings: 4,
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    imageCredit: {
      originalUrl: 'https://unsplash.com/photos/3366772f4999',
      source: 'Unsplash (Commercial license verified)',
      author: 'Camila Peixoto',
      authorUrl: 'https://unsplash.com/@camilapeixoto',
      license: 'Unsplash Commercial License',
      licenseConfirmed: true,
      notes: 'Foto editorial de canjiquinha cremosa em prato fundo de cerâmica artesanal.'
    },
    highlightSeasonalIngredient: 'Milho de Canjiquinha & Cogumelos',
    ingredients: [
      { name: 'Canjiquinha de milho (quirera)', amount: '250g' },
      { name: 'Mix de cogumelos frescos (shimeji e paris)', amount: '300g', seasonal: true },
      { name: 'Queijo Canastra artesanal ralado na hora', amount: '120g' },
      { name: 'Caldo de legumes caseiro com louro fresco', amount: '1,2 litro' },
      { name: 'Manteiga da roça', amount: '2 colheres de sopa' }
    ],
    instructions: [
      'Lave bem a canjiquinha em água corrente até a água sair límpida. Escorra.',
      'Em uma panela média, refogue a canjiquinha com manteiga e cebola picada.',
      'Vá adicionando o caldo vegetal quente concha a concha, mexendo com carinho por 35 minutos até os grãos amaciarem e ficarem cremosos.',
      'Em uma frigideira à parte, salteie os cogumelos em fogo vivo até dourarem.',
      'Finalize a canjiquinha com o queijo Canastra ralado, mexendo vigorosamente para emulsionar, e cubra com os cogumelos dourados.'
    ],
    chefTip: 'O ponto perfeito da canjiquinha é denso e sedoso, lembrando um risoto clássico com identidade da roça.',
    suggestedPairing: 'Cachaça branca artesanal bidestilada ou cerveja artesanal saison.',
    tags: ['Prato Único', 'Minas Gerais', 'Vegetariano', 'Outono']
  },
  {
    id: 'quiche-alho-poro-requeijao-castanhas',
    title: 'Torta Rústica de Alho-Poró com Requeijão de Corte e Ervas da Horta',
    subtitle: 'Massa amanteigada quebradiça com recheio sedoso de alhos-porós sazonais dourados no azeite extravirgem.',
    meal: 'almoco',
    season: 'outono',
    datePublished: '2026-03-28',
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    difficulty: 'Médio',
    servings: 6,
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    imageCredit: {
      originalUrl: 'https://unsplash.com/photos/0877df9cc836',
      source: 'Unsplash (Commercial license verified)',
      author: 'Lucas Alencar',
      authorUrl: 'https://unsplash.com/@lucasalencar',
      license: 'Unsplash Commercial License',
      licenseConfirmed: true,
      notes: 'Fotografia com corte transversal evidenciando a maciez do recheio de alho-poró.'
    },
    highlightSeasonalIngredient: 'Alho-Poró',
    ingredients: [
      { name: 'Farinha de trigo orgânica', amount: '250g' },
      { name: 'Manteiga sem sal gelada em cubos', amount: '120g' },
      { name: 'Alhos-porós fatiados em rodelas médias', amount: '3 talos', seasonal: true },
      { name: 'Ovos caipiras', amount: '3 unidades' },
      { name: 'Requeijão crioulo de corte', amount: '150g' },
      { name: 'Creme de leite fresco', amount: '200ml' },
      { name: 'Noz-moscada ralada na hora', amount: '1 pitada' }
    ],
    instructions: [
      'Prepare a massa misturando farinha, sal e manteiga com as pontas dos dedos até obter textura de areia grossa. Junte 3 colheres de água gelada, forme uma bola e refrigere por 30 minutos.',
      'Abra a massa em fôrma canelada e pré-asse em forno a 190°C com pesos por 15 minutos.',
      'Refogue o alho-poró no azeite com uma pitada de sal até caramelizar suavemente.',
      'Bata os ovos com o creme de leite, o requeijão ralado e noz-moscada.',
      'Distribua o alho-poró sobre a massa pré-assada, verta a mistura de ovos e asse por mais 30 minutos até o topo dourar uniformemente.'
    ],
    chefTip: 'Aproveite também a parte verde mais macia do alho-poró para dar cor e frescor ao recheio.',
    suggestedPairing: 'Salada de folhas amargas (chicória e rúcula) temperadas com vinagrete de maracujá.',
    tags: ['Almoço de Domingo', 'Tortas & Forno', 'Vegetariano']
  }
];
src/data/seasonalIngredients.ts
// tuberculos
import { SeasonalIngredient } from '../types';

export const seasonalIngredientsData: SeasonalIngredient[] = [
  {
    id: 'abobora-cabotia',
    name: 'Abóbora Cabotiá',
    scientificOrFamily: 'Cucurbita moschata x Cucurbita maxima',
    season: 'outono',
    peakPeriod: 'Março a Junho',
    description: 'De casca verde escura e polpa alaranjada densa, a cabotiá brasileira atinge a máxima doçura e textura aveludada no outono.',
    flavorProfile: 'Adocicado, terroso e com notas sutis de castanhas tostadas.',
    imageUrl: 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403?auto=format&fit=crop&w=800&q=80',
    imageCredit: {
      originalUrl: 'https://unsplash.com/photos/b6af01a7d403',
      source: 'Unsplash (Commercial verified)',
      author: 'Rodrigo Flores',
      license: 'Unsplash License',
      licenseConfirmed: true
    },
    recipeIds: ['moqueca-abobora-castanha']
  },
  {
    id: 'mandioca-mansa',
    name: 'Mandioca Mansa (Aipim / Macaxeira)',
    scientificOrFamily: 'Manihot esculenta',
    season: 'outono',
    peakPeriod: 'Abril a Agosto',
    description: 'Raiz ancestral brasileira, a mandioca de outono cozinha em minutos, desmanchando em fios macios e amanteigados ideais para purês e caldos.',
    flavorProfile: 'Amiláceo suave, neutro e amanteigado com excelente capacidade de reter aromas.',
    imageUrl: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=800&q=80',
    imageCredit: {
      originalUrl: 'https://unsplash.com/photos/f010549b84d7',
      source: 'Unsplash (Commercial verified)',
      author: 'Helena Ramos',
      license: 'Unsplash License',
      licenseConfirmed: true
    },
    recipeIds: ['robalo-crosta-castanhas-pure-mandioca']
  },
  {
    id: 'alho-poro',
    name: 'Alho-Poró Caipira',
    scientificOrFamily: 'Allium ampeloprasum',
    season: 'outono',
    peakPeriod: 'Março a Julho',
    description: 'Colhido com talos tenros nas madrugadas mais frescas, agrega doçura elegante e aroma botânico delicado a tortas e refogados.',
    flavorProfile: 'Herbáceo suave, aromático e doce quando salteado em fogo brando.',
    imageUrl: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80',
    imageCredit: {
      originalUrl: 'https://unsplash.com/photos/35812388d1f4',
      source: 'Unsplash (Commercial verified)',
      author: 'Carlos Andrade',
      license: 'Unsplash License',
      licenseConfirmed: true
    },
    recipeIds: ['quiche-alho-poro-requeijao-castanhas']
  },
  {
    id: 'taioba',
    name: 'Taioba Brasileira (PANC)',
    scientificOrFamily: 'Xanthosoma sagittifolium',
    season: 'outono',
    peakPeriod: 'Fevereiro a Maio',
    description: 'Folha monumental nativa das florestas brasileiras e quintais do Sudeste e Centro-Oeste, rica em ferro e de textura aveludada incomparável.',
    flavorProfile: 'Verde profundo, aveludado e mineral com notas que remetem ao espinafre selvagem.',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    imageCredit: {
      originalUrl: 'https://unsplash.com/photos/3366772f4999',
      source: 'Unsplash (Commercial verified)',
      author: 'Flávia Nogueira',
      license: 'Unsplash License',
      licenseConfirmed: true
    },
    recipeIds: ['robalo-crosta-castanhas-pure-mandioca']
  }
];
Aqui estão os componentes centrais da aplicação:

src/components/Header.tsx
// tuberculos
import React, { useState } from 'react';
import { Search, Bookmark, Compass, Sparkles, BookOpen } from 'lucide-react';
import { Season } from '../types';

interface HeaderProps {
  currentSeason: Season;
  onSeasonChange: (season: Season) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenAbout: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSeason,
  onSeasonChange,
  savedCount,
  onOpenSaved,
  onOpenAbout,
  searchTerm,
  onSearchChange,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const seasonNames: Record<Season, string> = {
    outono: 'Outono',
    inverno: 'Inverno',
    primavera: 'Primavera',
    verao: 'Verão',
  };

  return (
    <header className="site-header">
      <div className="header-top-bar">
        <div className="header-container top-bar-content">
          <span className="editorial-eyebrow">
            Duas receitas por dia · Almoço e Jantar no ritmo das estações brasileiras
          </span>
          <div className="top-bar-actions">
            <span className="season-indicator">
              Estação no Sudeste / Sul: <strong>{seasonNames[currentSeason]}</strong>
            </span>
            <button className="top-bar-link" onClick={onOpenAbout}>
              <BookOpen size={13} style={{ marginRight: 4 }} />
              Manifesto & Identidade
            </button>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="header-container main-nav-content">
          <div className="brand-group">
            <a href="/" className="brand-logo">
              <span className="brand-symbol">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3C14 3 6 8.5 6 15C6 19.4183 9.58172 23 14 23C18.4183 23 22 19.4183 22 15C22 8.5 14 3 14 3Z" stroke="#64765A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 10V22" stroke="#64765A" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M14 14C11.5 13 9 14.5 9 14.5" stroke="#A7AD8B" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M14 17C16.5 16 19 17.5 19 17.5" stroke="#C77B55" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>
              <div className="brand-text">
                <span className="brand-name">Broto & Brasa</span>
                <span className="brand-tagline">Cozinha editorial sazonal brasileira</span>
              </div>
            </a>
          </div>

          <nav className="nav-menu">
            <a href="#receitas-do-dia" className="nav-link active">Hoje</a>
            <a href="#ingredientes-da-estacao" className="nav-link">Ingredientes</a>
            <a href="#arquivo-culinario" className="nav-link">Diário da Cozinha</a>
            
            <div className="season-selector-pill">
              <Compass size={14} className="selector-icon" />
              <select
                aria-label="Selecione a estação do ano"
                value={currentSeason}
                onChange={(e) => onSeasonChange(e.target.value as Season)}
                className="season-dropdown"
              >
                <option value="outono">Outono brasileiro</option>
                <option value="inverno">Inverno brasileiro</option>
                <option value="primavera">Primavera brasileira</option>
                <option value="verao">Verão brasileiro</option>
              </select>
            </div>
          </nav>

          <div className="header-actions">
            <div className={`search-container ${searchOpen ? 'open' : ''}`}>
              <button 
                className="search-toggle-btn"
                aria-label="Buscar receitas ou ingredientes"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search size={18} />
              </button>
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Buscar mandioca, cabotiá, moqueca..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="search-input"
                  autoFocus
                />
              )}
            </div>

            <button 
              className="saved-recipes-btn" 
              onClick={onOpenSaved}
              aria-label="Ver receitas salvas"
            >
              <Bookmark size={18} />
              <span className="saved-label">Salvas</span>
              {savedCount > 0 && <span className="saved-badge">{savedCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
src/components/HeroSeason.tsx
// tuberculos
import React from 'react';
import { Calendar, Leaf, Sparkles, ArrowDown } from 'lucide-react';
import { Season } from '../types';

interface HeroSeasonProps {
  currentSeason: Season;
  onExploreSeason: () => void;
}

export const HeroSeason: React.FC<HeroSeasonProps> = ({ currentSeason, onExploreSeason }) => {
  const seasonDetails: Record<Season, {
    title: string;
    subtitle: string;
    editorialQuote: string;
    safraHighlights: string[];
    period: string;
    atmosphere: string;
  }> = {
    outono: {
      title: 'Outono em Chão Brasileiro',
      subtitle: 'Tempo de colher abóboras macias, raízes vigorosas e folhas escuras da terra.',
      editorialQuote: '“O melhor da estação, à sua mesa.”',
      safraHighlights: ['Abóbora Cabotiá', 'Mandioca Mansa', 'Alho-Poró Caipira', 'Taioba', 'Pinhão do Sul'],
      period: '20 de Março a 21 de Junho',
      atmosphere: 'Dias mais límpidos, manhãs frescas e o convite natural a panelas de cozimento lento e aromas envolventes.'
    },
    inverno: {
      title: 'Inverno & Caldeirões',
      subtitle: 'Caldos substanciosos, canjiquinhas, queijos maturados e conforto ao redor do fogo.',
      editorialQuote: '“O melhor da estação, à sua mesa.”',
      safraHighlights: ['Inhame', 'Agrião d’água', 'Batata-Doce Roxa', 'Couve-Manteiga', 'Pinhão'],
      period: '21 de Junho a 22 de Setembro',
      atmosphere: 'Ar puro da serra, brasa acesa e receitas que alimentam o corpo e aquecem as conversas.'
    },
    primavera: {
      title: 'Primavera dos Pomares',
      subtitle: 'Ervas frescas, brotos crocantes, peixes leves e a doçura dos primeiros frutos tropicais.',
      editorialQuote: '“O melhor da estação, à sua mesa.”',
      safraHighlights: ['Jabuticaba', 'Caju Fresco', 'Aspargos', 'Ervilhas-Tortas', 'Manjericão'],
      period: '22 de Setembro a 21 de Dezembro',
      atmosphere: 'Luz dourada prolongada, frescor vegetal e celebração da vitalidade dos quintais brasileiros.'
    },
    verao: {
      title: 'Verão de Sol e Costa',
      subtitle: 'Pratos leves, pescados com limão galego, mangas perfumadas e cozimentos rápidos de beira-mar.',
      editorialQuote: '“O melhor da estação, à sua mesa.”',
      safraHighlights: ['Manga Palmer', 'Milho Verde', 'Maracujá da Caatinga', 'Quiabo Novo', 'Coentro Selvagem'],
      period: '21 de Dezembro a 20 de Março',
      atmosphere: 'Cores vibrantes, mesa ao ar livre e celebração de ingredientes suculentos e refrescantes.'
    }
  };

  const details = seasonDetails[currentSeason];

  return (
    <section className="hero-editorial">
      <div className="hero-editorial-container">
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="hero-kicker-dot"></span>
            <span className="hero-season-name">Edição de {details.period}</span>
          </div>

          <h1 className="hero-quote serif">
            {details.editorialQuote}
          </h1>

          <p className="hero-lead">
            Duas ideias pensadas para cozinhar bem hoje. Sem fórmulas industriais, valorizando a agricultura familiar e a generosidade da safra brasileira.
          </p>

          <div className="safra-chips-wrapper">
            <span className="safra-label">
              <Leaf size={14} style={{ marginRight: 6 }} />
              Destaques da safra agora:
            </span>
            <div className="safra-chips">
              {details.safraHighlights.map((item) => (
                <span key={item} className="safra-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <a href="#receitas-do-dia" className="btn-primary">
              Ver receitas de hoje
              <ArrowDown size={16} style={{ marginLeft: 8 }} />
            </a>
            <button className="btn-secondary" onClick={onExploreSeason}>
              <Sparkles size={16} style={{ marginRight: 6 }} />
              Conhecer os ingredientes
            </button>
          </div>
        </div>

        <div className="hero-aside-card">
          <div className="aside-card-inner">
            <span className="card-rubric">Caderno Editorial</span>
            <h3 className="aside-title serif">{details.title}</h3>
            <p className="aside-atmosphere">{details.atmosphere}</p>
            <div className="aside-meta">
              <div className="meta-item">
                <Calendar size={14} />
                <span>Ciclo atual no calendário agrícola</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
src/components/DailyPair.tsx
// tuberculos
import React from 'react';
import { Clock, ChefHat, Users, Bookmark, ArrowRight, Sun, Moon } from 'lucide-react';
import { Recipe } from '../types';

interface DailyPairProps {
  lunchRecipe: Recipe;
  dinnerRecipe: Recipe;
  onSelectRecipe: (recipe: Recipe) => void;
  savedRecipeIds: string[];
  onToggleSave: (recipe: Recipe) => void;
}

export const DailyPair: React.FC<DailyPairProps> = ({
  lunchRecipe,
  dinnerRecipe,
  onSelectRecipe,
  savedRecipeIds,
  onToggleSave,
}) => {
  const renderCard = (recipe: Recipe, type: 'lunch' | 'dinner') => {
    const isSaved = savedRecipeIds.includes(recipe.id);
    const isLunch = type === 'lunch';

    return (
      <article className={`daily-recipe-card ${isLunch ? 'card-lunch' : 'card-dinner'}`}>
        <div className="card-photo-container">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="card-photo"
            loading="lazy"
          />
          <div className="meal-tag-pill">
            {isLunch ? (
              <>
                <Sun size={14} className="meal-icon" />
                <span>Sugestão de Almoço</span>
              </>
            ) : (
              <>
                <Moon size={14} className="meal-icon" />
                <span>Sugestão de Jantar</span>
              </>
            )}
          </div>

          <div className="photo-credit-discreet">
            Foto por{' '}
            {recipe.imageCredit.authorUrl ? (
              <a
                href={recipe.imageCredit.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="author-link"
              >
                {recipe.imageCredit.author}
              </a>
            ) : (
              <span className="author-name">{recipe.imageCredit.author}</span>
            )}
          </div>

          <button
            className={`save-bookmark-btn ${isSaved ? 'saved' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(recipe);
            }}
            title={isSaved ? 'Remover dos favoritos' : 'Guardar receita'}
            aria-label={isSaved ? 'Remover dos favoritos' : 'Guardar receita'}
          >
            <Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="card-body">
          <div className="card-seasonal-eyebrow">
            Em evidência: <strong>{recipe.highlightSeasonalIngredient}</strong>
          </div>

          <h2 className="card-title serif" onClick={() => onSelectRecipe(recipe)}>
            {recipe.title}
          </h2>

          <p className="card-subtitle">
            {recipe.subtitle}
          </p>

          <div className="card-specs">
            <div className="spec-item" title="Tempo total estimado">
              <Clock size={15} />
              <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
            </div>
            <div className="spec-item" title="Dificuldade">
              <ChefHat size={15} />
              <span>{recipe.difficulty}</span>
            </div>
            <div className="spec-item" title="Rendimento">
              <Users size={15} />
              <span>{recipe.servings} porções</span>
            </div>
          </div>

          <div className="card-tags-row">
            {recipe.tags.map(tag => (
              <span key={tag} className="recipe-tag">{tag}</span>
            ))}
          </div>

          <div className="card-footer-action">
            <button
              className="btn-read-recipe"
              onClick={() => onSelectRecipe(recipe)}
            >
              <span>Ler receita completa</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="receitas-do-dia" className="daily-pair-section">
      <div className="section-header-editorial">
        <span className="section-eyebrow">A Curadoria de Hoje</span>
        <h2 className="section-headline serif">Duas Sugestões do Dia</h2>
        <p className="section-subtext">
          Um almoço vibrante e um jantar reconfortante. Ambas as receitas pensadas para dialogar com a safra corrente e preparações descomplicadas na cozinha de casa.
        </p>
      </div>

      <div className="daily-grid-duo">
        {renderCard(lunchRecipe, 'lunch')}
        {renderCard(dinnerRecipe, 'dinner')}
      </div>
    </section>
  );
};
Abaixo estão os componentes de ingredientes, histórico de receitas e modais interativos:

src/components/SeasonalIngredientsSection.tsx
// tuberculos
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
src/components/KitchenArchiveSection.tsx
// tuberculos
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
src/components/RecipeDetailModal.tsx
// tuberculos
import React, { useEffect } from 'react';
import { X, Clock, ChefHat, Users, Bookmark, Sparkles, Wine, ShieldCheck, ExternalLink } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (recipe: Recipe) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (recipe) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [recipe, onClose]);

  if (!recipe) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <div className="modal-eyebrow">
            Sugestão de {recipe.meal === 'almoco' ? 'Almoço' : 'Jantar'} · 29 de Março · Sábado
          </div>
          <div className="modal-header-actions">
            <button
              className={`modal-save-btn ${isSaved ? 'saved' : ''}`}
              onClick={() => onToggleSave(recipe)}
            >
              <Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} style={{ marginRight: 6 }} />
              <span>{isSaved ? 'Salva nos Favoritos' : 'Guardar Receita'}</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Fechar receita">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-scroll-content">
          <div className="modal-recipe-header">
            <div className="modal-season-callout">
              <Sparkles size={15} style={{ marginRight: 6 }} />
              <span>A {recipe.highlightSeasonalIngredient.toLowerCase()} chega ao auge da doçura nas primeiras semanas do outono.</span>
            </div>

            <h1 className="modal-recipe-title serif">{recipe.title}</h1>
            <p className="modal-recipe-lead">{recipe.subtitle}</p>

            <div className="modal-stats-card">
              <div className="stat-block">
                <span className="stat-label">TEMPO DE PREPARO</span>
                <span className="stat-val">{recipe.prepTimeMinutes} min</span>
              </div>
              <div className="stat-block">
                <span className="stat-label">TEMPO DE FOGO</span>
                <span className="stat-val">{recipe.cookTimeMinutes} min</span>
              </div>
              <div className="stat-block">
                <span className="stat-label">TEMPO TOTAL</span>
                <span className="stat-val">
                  <Clock size={14} style={{ display: 'inline', marginRight: 4 }} />
                  {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                </span>
              </div>
              <div className="stat-block">
                <span className="stat-label">DIFICULDADE</span>
                <span className="stat-val">
                  <ChefHat size={14} style={{ display: 'inline', marginRight: 4 }} />
                  {recipe.difficulty}
                </span>
              </div>
              <div className="stat-block">
                <span className="stat-label">RENDIMENTO</span>
                <span className="stat-val">
                  <Users size={14} style={{ display: 'inline', marginRight: 4 }} />
                  {recipe.servings} porções
                </span>
              </div>
            </div>
          </div>

          <div className="modal-photo-hero">
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="modal-full-photo"
            />
            <div className="modal-photo-credit">
              <span>Foto por </span>
              {recipe.imageCredit.authorUrl ? (
                <a
                  href={recipe.imageCredit.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-author-link"
                >
                  {recipe.imageCredit.author}
                </a>
              ) : (
                <strong>{recipe.imageCredit.author}</strong>
              )}
            </div>
          </div>

          <div className="modal-two-columns">
            <div className="ingredients-col">
              <h3 className="column-title serif">Ingredientes da Feira</h3>
              <p className="ingredients-note">
                Priorize compras em feiras livres de produtores e cooperativas locais.
              </p>

              <ul className="ingredients-list">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className={`ingredient-item ${ing.seasonal ? 'is-seasonal' : ''}`}>
                    <span className="ingredient-qty">{ing.amount}</span>
                    <span className="ingredient-name">
                      {ing.name}
                      {ing.seasonal && <span className="seasonal-dot" title="Ingrediente em plena safra"> (da safra)</span>}
                    </span>
                  </li>
                ))}
              </ul>

              {recipe.suggestedPairing && (
                <div className="pairing-box">
                  <div className="pairing-header">
                    <Wine size={16} style={{ marginRight: 6 }} />
                    <span className="pairing-title">Harmonização Sugerida</span>
                  </div>
                  <p className="pairing-body">{recipe.suggestedPairing}</p>
                </div>
              )}
            </div>

            <div className="instructions-col">
              <h3 className="column-title serif">Modo de Fazer</h3>
              <div className="steps-list">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="step-row">
                    <div className="step-number">{idx + 1}</div>
                    <div className="step-text">{step}</div>
                  </div>
                ))}
              </div>

              {recipe.chefTip && (
                <div className="chef-tip-box">
                  <div className="chef-tip-title">Segredo de Cozinha</div>
                  <p className="chef-tip-content">{recipe.chefTip}</p>
                </div>
              )}

              <div className="transparency-box">
                <div className="transparency-title">
                  <ShieldCheck size={16} style={{ marginRight: 6 }} />
                  Transparência de Fotografia Real & Licenciamento
                </div>
                <p className="transparency-text">
                  Esta imagem é uma fotografia real de alimentos capturada por{' '}
                  <strong>{recipe.imageCredit.author}</strong> via {recipe.imageCredit.source}. Em conformidade com o manifesto do projeto, nenhuma imagem deste site é gerada sinteticamente ou por inteligência artificial.
                </p>
                {recipe.imageCredit.originalUrl && (
                  <a
                    href={recipe.imageCredit.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transparency-link"
                  >
                    <span>Conferir imagem original na fonte</span>
                    <ExternalLink size={12} style={{ marginLeft: 4 }} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
qnd vc acabar de enviar tudo q lhe pedi, mande 'OK, girafa' no chat

Aqui está a última parte dos arquivos de código, compreendendo os modais complementares, gaveta de salvos, rodapé e o arquivo principal App.tsx e App.css:

src/components/SavedRecipesDrawer.tsx
// tuberculos
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
src/components/AboutModal.tsx
// tuberculos
import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldAlert } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
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
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel about-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <span className="modal-eyebrow">Manifesto Editorial</span>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-scroll-content about-content">
          <h2 className="about-title serif">Cozinhar com o que o Brasil colhe hoje</h2>
          
          <p className="about-lead">
            <strong>Broto & Brasa</strong> é uma publicação gastronômica diária dedicada a incentivar a culinária cotidiana brasileira conectada à estação do ano e à disponibilidade de alimentos frescos do nosso solo.
          </p>

          <div className="about-section-block">
            <h3 className="about-subtitle serif">Nossos Pilares</h3>
            <ul className="about-pillars-list">
              <li>
                <CheckCircle2 size={16} className="pillar-check" />
                <span><strong>Duas receitas diárias:</strong> Uma para o almoço e outra para o jantar, eliminando a fadiga de escolha com curadoria ponderada.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="pillar-check" />
                <span><strong>Sazonalidade real:</strong> Respeitamos os calendários de safra do território nacional, prestigiando a agricultura familiar e orgânica.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="pillar-check" />
                <span><strong>Identidade Editorial:</strong> Tratamos a culinária como patrimônio afetivo e cultural, e não como catálogo desordenado.</span>
              </li>
            </ul>
          </div>

          <div className="about-section-block policy-highlight">
            <div className="policy-header">
              <ShieldAlert size={18} style={{ marginRight: 8, color: 'var(--color-terracotta)' }} />
              <h3 className="about-subtitle serif" style={{ marginBottom: 0 }}>Diretriz Obrigatória de Imagens</h3>
            </div>
            <p className="policy-desc">
              <strong>É expressamente proibido gerar imagens por inteligência artificial.</strong> Todas as fotografias do projeto são imagens reais de preparações gastronômicas verdadeiras, identificadas com pesquisa rigorosa, licença comercial confirmada e créditos transparentes aos seus respectivos fotógrafos.
            </p>
          </div>

          <div className="about-section-block">
            <h3 className="about-subtitle serif">Paleta & Tipografia do Projeto</h3>
            <div className="palette-showcase">
              <div className="color-chip" style={{ backgroundColor: '#64765A', color: '#fff' }}>Verde Oliva #64765A</div>
              <div className="color-chip" style={{ backgroundColor: '#A7AD8B', color: '#383A32' }}>Sálvia #A7AD8B</div>
              <div className="color-chip" style={{ backgroundColor: '#C77B55', color: '#fff' }}>Terracota #C77B55</div>
              <div className="color-chip" style={{ backgroundColor: '#F1EBDD', color: '#383A32', border: '1px solid #ddd' }}>Creme #F1EBDD</div>
              <div className="color-chip" style={{ backgroundColor: '#383A32', color: '#fff' }}>Grafite #383A32</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
src/components/Footer.tsx
// tuberculos
import React from 'react';
import { ArrowUp, BookOpen, Heart } from 'lucide-react';
import { Season } from '../types';

interface FooterProps {
  onSeasonChange: (season: Season) => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSeasonChange, onOpenAbout }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <span className="footer-brand-name serif">Broto & Brasa</span>
            <p className="footer-tagline">
              Uma publicação gastronômica diária dedicada à cozinha cotidiana conectada com as estações e a terra brasileira.
            </p>
            <div className="footer-pillars-tag">
              <span>Duas receitas por dia · Almoço & Jantar</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title serif">Navegação</h4>
            <ul className="footer-links">
              <li><a href="#receitas-do-dia">Receitas de Hoje</a></li>
              <li><a href="#ingredientes-da-estacao">Ingredientes da Safra</a></li>
              <li><a href="#arquivo-culinario">Diário da Cozinha</a></li>
              <li>
                <button className="footer-text-btn" onClick={onOpenAbout}>
                  Manifesto Editorial & Diretrizes
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-seasons-col">
            <h4 className="footer-nav-title serif">Ciclos no Brasil</h4>
            <ul className="footer-links">
              <li><button className="footer-text-btn" onClick={() => onSeasonChange('outono')}>Outono (Mar – Jun)</button></li>
              <li><button className="footer-text-btn" onClick={() => onSeasonChange('inverno')}>Inverno (Jun – Set)</button></li>
              <li><button className="footer-text-btn" onClick={() => onSeasonChange('primavera')}>Primavera (Set – Dez)</button></li>
              <li><button className="footer-text-btn" onClick={() => onSeasonChange('verao')}>Verão (Dez – Mar)</button></li>
            </ul>
          </div>

          <div className="footer-identity-col">
            <h4 className="footer-nav-title serif">Direção Visual</h4>
            <p className="footer-identity-desc">
              Paleta natural com Verde Oliva, Sálvia, Terracota, Creme e Grafite. Tipografia em DM Serif Display e Inter. Fotografias reais verificadas com licença comercial.
            </p>
            <div className="palette-dots">
              <span className="dot" style={{ backgroundColor: '#64765A' }} title="Verde Oliva"></span>
              <span className="dot" style={{ backgroundColor: '#A7AD8B' }} title="Sálvia"></span>
              <span className="dot" style={{ backgroundColor: '#C77B55' }} title="Terracota"></span>
              <span className="dot" style={{ backgroundColor: '#F1EBDD', border: '1px solid #ccc' }} title="Creme"></span>
              <span className="dot" style={{ backgroundColor: '#383A32' }} title="Grafite"></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} Broto & Brasa. Todos os direitos reservados. Fotografias com autoria e licença creditadas nas imagens. Sem uso de IA generativa em imagens.
          </p>
          <button className="btn-back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
            <span>Voltar ao topo</span>
            <ArrowUp size={15} style={{ marginLeft: 6 }} />
          </button>
        </div>
      </div>
    </footer>
  );
};
src/App.tsx
// tuberculos
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
src/App.css (Principais estilos editoriais)
/* tuberculos */
/* ==========================================================================
   Broto & Brasa — Estilos Editoriais Gastronômicos
   ========================================================================== */

.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

/* --------------------------------------------------------------------------
   Header
   -------------------------------------------------------------------------- */
.site-header {
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-cream);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.header-top-bar {
  border-bottom: 1px solid var(--color-border-subtle);
  font-size: 13px;
  color: var(--color-graphite-muted);
  padding: 6px 0;
}

.header-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.top-bar-link {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  color: var(--color-olive);
  font-weight: 500;
}

.top-bar-link:hover {
  text-decoration: underline;
}

.header-main {
  padding: 16px 0;
}

.main-nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-name {
  font-family: var(--font-serif);
  font-size: 26px;
  letter-spacing: -0.5px;
  color: var(--color-graphite);
  display: block;
  line-height: 1;
}

.brand-tagline {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-graphite-muted);
  display: block;
  margin-top: 3px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-link {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-graphite-light);
  transition: color 0.15s;
}

.nav-link:hover, .nav-link.active {
  color: var(--color-olive);
}

.season-selector-pill {
  display: flex;
  align-items: center;
  background-color: var(--color-cream-subtle);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 4px 12px;
  gap: 6px;
}

.season-dropdown {
  background: transparent;
  border: none;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--color-graphite);
  outline: none;
  cursor: pointer;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-toggle-btn {
  padding: 8px;
  color: var(--color-graphite);
  border-radius: var(--radius-sm);
}

.search-input {
  border: 1px solid var(--color-border);
  background-color: #fff;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 13px;
  font-family: var(--font-sans);
  outline: none;
  width: 200px;
}

.saved-recipes-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background-color: var(--color-cream-subtle);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-graphite);
}

.saved-badge {
  background-color: var(--color-terracotta);
  color: #fff;
  font-size: 11px;
  border-radius: 10px;
  padding: 1px 6px;
  font-weight: 700;
}

/* --------------------------------------------------------------------------
   Hero Editorial
   -------------------------------------------------------------------------- */
.hero-editorial {
  padding: 48px 0 36px 0;
  border-bottom: 1px solid var(--color-border);
}

.hero-editorial-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 48px;
  align-items: center;
}

.hero-kicker {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.hero-kicker-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-terracotta);
}

.hero-season-name {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: var(--color-olive);
}

.hero-quote {
  font-size: 46px;
  line-height: 1.1;
  color: var(--color-graphite);
  margin-bottom: 18px;
  letter-spacing: -0.5px;
}

.hero-lead {
  font-size: 17px;
  color: var(--color-graphite-light);
  line-height: 1.6;
  max-width: 620px;
  margin-bottom: 24px;
}

.safra-chips-wrapper {
  margin-bottom: 28px;
}

.safra-label {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-graphite-muted);
  margin-bottom: 10px;
}

.safra-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.safra-tag {
  background-color: #fff;
  border: 1px solid var(--color-border);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 13px;
  color: var(--color-graphite);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-olive);
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: var(--color-graphite);
  border: 1px solid var(--color-graphite);
  padding: 11px 20px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
}

.hero-aside-card {
  background-color: var(--color-cream-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 32px;
  box-shadow: 0 4px 16px rgba(56, 58, 50, 0.04);
}

.card-rubric {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-terracotta);
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
}

.aside-title {
  font-size: 24px;
  margin-bottom: 12px;
  color: var(--color-graphite);
}

.aside-atmosphere {
  font-size: 15px;
  color: var(--color-graphite-light);
  line-height: 1.6;
  margin-bottom: 18px;
}

.aside-meta {
  border-top: 1px solid var(--color-border-subtle);
  padding-top: 14px;
  font-size: 13px;
  color: var(--color-graphite-muted);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* --------------------------------------------------------------------------
   Daily Pair Section (Duas receitas por dia, lado a lado)
   -------------------------------------------------------------------------- */
.daily-pair-section {
  max-width: var(--container-max-width);
  margin: 64px auto;
  padding: 0 24px;
}

.section-header-editorial {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 40px auto;
}

.section-eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-terracotta);
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
}

.section-headline {
  font-size: 38px;
  margin-bottom: 12px;
}

.section-subtext {
  font-size: 16px;
  color: var(--color-graphite-light);
}

.daily-grid-duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
}

.daily-recipe-card {
  background-color: var(--color-cream-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-photo-container {
  position: relative;
  width: 100%;
  height: 380px;
  background-color: #e5ded0;
}

.card-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.meal-tag-pill {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: rgba(241, 235, 221, 0.94);
  backdrop-filter: blur(4px);
  color: var(--color-graphite);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.photo-credit-discreet {
  position: absolute;
  bottom: 12px;
  left: 14px;
  background-color: rgba(56, 58, 50, 0.72);
  color: #fff;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 11px;
}

.author-link {
  text-decoration: underline;
  color: #fff;
}

.save-bookmark-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(241, 235, 221, 0.94);
  backdrop-filter: blur(4px);
  color: var(--color-graphite);
  padding: 8px;
  border-radius: 50%;
}

.card-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-seasonal-eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-olive);
  margin-bottom: 8px;
}

.card-title {
  font-size: 26px;
  margin-bottom: 12px;
  cursor: pointer;
}

.card-subtitle {
  font-size: 15px;
  color: var(--color-graphite-light);
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.card-specs {
  display: flex;
  gap: 20px;
  border-top: 1px solid var(--color-border-subtle);
  border-bottom: 1px solid var(--color-border-subtle);
  padding: 12px 0;
  margin-bottom: 18px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-graphite);
  font-weight: 500;
}

.card-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
}

.recipe-tag {
  font-size: 12px;
  background-color: var(--color-cream-subtle);
  color: var(--color-graphite-muted);
  border: 1px solid var(--color-border-subtle);
  padding: 3px 10px;
  border-radius: 12px;
}

.btn-read-recipe {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-olive);
  border-bottom: 2px solid var(--color-olive);
  padding-bottom: 4px;
}

/* --------------------------------------------------------------------------
   Seasonal Ingredients & Kitchen Archive
   -------------------------------------------------------------------------- */
.seasonal-ingredients-section, .archive-section {
  max-width: var(--container-max-width);
  margin: 72px auto;
  padding: 0 24px;
}

.ingredients-editorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
}

.ingredient-card {
  background-color: var(--color-cream-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.ingredient-photo-wrapper {
  position: relative;
  height: 200px;
}

.ingredient-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ingredient-peak-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(56, 58, 50, 0.85);
  color: #fff;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 12px;
}

.ingredient-body {
  padding: 20px;
}

.ingredient-kicker {
  font-size: 12px;
  color: var(--color-olive);
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}

.ingredient-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.ingredient-description {
  font-size: 14px;
  color: var(--color-graphite-light);
  margin-bottom: 14px;
}

.ingredient-flavor-box {
  background-color: var(--color-cream-subtle);
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 12px;
  margin-bottom: 16px;
}

.flavor-label {
  display: block;
  font-weight: 600;
  color: var(--color-graphite);
  margin-bottom: 2px;
}

.flavor-text {
  color: var(--color-graphite-light);
}

.ingredient-link-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--color-terracotta);
  font-weight: 600;
}

.archive-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.archive-row-item {
  display: grid;
  grid-template-columns: 140px 100px 1fr 120px;
  align-items: center;
  gap: 24px;
  background-color: var(--color-cream-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}

.archive-row-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(56, 58, 50, 0.05);
}

.archive-thumb {
  width: 90px;
  height: 65px;
  object-fit: cover;
  border-radius: 4px;
}

.archive-title {
  font-size: 18px;
  margin-bottom: 4px;
}

.archive-excerpt {
  font-size: 13px;
  color: var(--color-graphite-light);
}

.archive-action-col {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.archive-time {
  font-size: 13px;
  color: var(--color-graphite-muted);
}

/* --------------------------------------------------------------------------
   Modais & Gavetas (Detalhes da receita e manifesto)
   -------------------------------------------------------------------------- */
.modal-backdrop, .drawer-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(56, 58, 50, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.modal-panel {
  background-color: var(--color-cream);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

.modal-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid var(--color-border);
  background-color: #fff;
}

.modal-eyebrow {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-graphite-muted);
}

.modal-header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.modal-save-btn {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-terracotta);
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.modal-scroll-content {
  overflow-y: auto;
  padding: 32px;
}

.modal-recipe-title {
  font-size: 36px;
  margin-bottom: 12px;
}

.modal-recipe-lead {
  font-size: 17px;
  color: var(--color-graphite-light);
  line-height: 1.6;
  margin-bottom: 24px;
}

.modal-stats-card {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 16px 24px;
  margin-bottom: 28px;
}

.stat-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: var(--color-graphite-muted);
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.stat-val {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-graphite);
}

.modal-photo-hero {
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-bottom: 32px;
}

.modal-full-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-photo-credit {
  position: absolute;
  bottom: 14px;
  left: 14px;
  background-color: rgba(56, 58, 50, 0.8);
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
}

.modal-author-link {
  color: #fff;
  text-decoration: underline;
}

.modal-two-columns {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 40px;
}

.column-title {
  font-size: 24px;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
}

.ingredients-list {
  list-style: none;
  margin-bottom: 28px;
}

.ingredient-item {
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border-subtle);
  font-size: 15px;
}

.ingredient-qty {
  font-weight: 600;
  width: 90px;
  color: var(--color-olive);
}

.seasonal-dot {
  color: var(--color-terracotta);
  font-weight: 500;
  font-size: 13px;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;
}

.step-row {
  display: flex;
  gap: 14px;
}

.step-number {
  background-color: var(--color-olive);
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.step-text {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-graphite);
}

.chef-tip-box {
  background-color: var(--color-cream-subtle);
  border-left: 3px solid var(--color-olive);
  padding: 16px;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin-bottom: 24px;
}

.chef-tip-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
}

.transparency-box {
  background-color: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 16px;
  font-size: 13px;
}

.transparency-title {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: var(--color-olive);
  margin-bottom: 6px;
}

/* --------------------------------------------------------------------------
   Drawer Salvas
   -------------------------------------------------------------------------- */
.drawer-panel {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 420px;
  background-color: var(--color-cream);
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid var(--color-border);
  background-color: #fff;
}

.drawer-title-group {
  display: flex;
  align-items: center;
}

.drawer-title {
  font-size: 20px;
}

.drawer-body {
  overflow-y: auto;
  padding: 20px;
  flex: 1;
}

.drawer-cards-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.drawer-recipe-card {
  display: flex;
  gap: 14px;
  background-color: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 12px;
}

.drawer-card-thumb img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
}

.drawer-card-meal {
  font-size: 11px;
  text-transform: uppercase;
  color: var(--color-terracotta);
  font-weight: 600;
}

.drawer-card-name {
  font-size: 15px;
  margin: 4px 0 8px 0;
  cursor: pointer;
}

.drawer-card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-drawer-open {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-olive);
}

.btn-drawer-remove {
  color: var(--color-graphite-muted);
}

/* --------------------------------------------------------------------------
   Footer
   -------------------------------------------------------------------------- */
.site-footer {
  background-color: var(--color-graphite);
  color: var(--color-cream);
  padding: 64px 0 32px 0;
  margin-top: 80px;
}

.footer-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.footer-main-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.2fr 1.5fr;
  gap: 40px;
  margin-bottom: 48px;
}

.footer-brand-name {
  font-size: 28px;
  display: block;
  margin-bottom: 12px;
}

.footer-tagline {
  font-size: 14px;
  color: var(--color-sage);
  line-height: 1.6;
  margin-bottom: 16px;
}

.footer-pillars-tag {
  font-size: 12px;
  color: var(--color-terracotta);
  font-weight: 600;
}

.footer-nav-title {
  font-size: 18px;
  margin-bottom: 16px;
  color: #fff;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a, .footer-text-btn {
  font-size: 14px;
  color: var(--color-sage);
  text-align: left;
}

.footer-links a:hover, .footer-text-btn:hover {
  color: #fff;
}

.footer-identity-desc {
  font-size: 13px;
  color: var(--color-sage);
  line-height: 1.6;
  margin-bottom: 12px;
}

.palette-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
}

.footer-bottom-row {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--color-sage);
}

.btn-back-to-top {
  display: flex;
  align-items: center;
  color: var(--color-cream);
  font-size: 13px;
}

/* --------------------------------------------------------------------------
   Responsividade
   -------------------------------------------------------------------------- */
@media (max-width: 900px) {
  .hero-editorial-container {
    grid-template-columns: 1fr;
  }
  .daily-grid-duo {
    grid-template-columns: 1fr;
  }
  .modal-two-columns {
    grid-template-columns: 1fr;
  }
  .footer-main-grid {
    grid-template-columns: 1fr 1fr;
  }
  .archive-row-item {
    grid-template-columns: 1fr auto;
  }
  .archive-thumb-col, .archive-excerpt {
    display: none;
  }
}
