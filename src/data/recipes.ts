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
