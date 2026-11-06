# Broto & Brasa — Cozinha Editorial Sazonal Brasileira

> **"O melhor da estação, à sua mesa."**  
> Duas receitas por dia: uma para o almoço e outra para o jantar, selecionadas no ritmo das safras brasileiras.

---

## 1. Sobre o Projeto

O **Broto & Brasa** é uma publicação gastronômica editorial concebida para incentivar uma cozinha cotidiana saborosa, intuitiva e profundamente conectada com os ingredientes de cada época do ano no Brasil.

Ao contrário de catálogos volumosos e impessoais de receitas, o projeto aposta em uma curadoria diária focada em dois preparos por dia — um almoço vibrante e um jantar acolhedor —, eliminando a fadiga de escolha e resgatando a rica biodiversidade da terra brasileira.

### Pilares Fundamentais
- **Gastronomia brasileira cotidiana:** Ingredientes acessíveis, afeto à mesa e valorização da culinária regional.
- **Sazonalidade e safra:** Ingredientes colhidos no ápice do frescor, doçura e valor nutricional.
- **Duas receitas por dia:** Foco e carinho na escolha, sem algoritmos invasivos.
- **Identidade editorial contemporânea:** Design limpo, tipografia expressiva e equilíbrio estético.
- **Fotografia real de alimentos:** Compromisso intransigente com fotos autênticas, créditos transparentes e recusa ao uso de imagens geradas por inteligência artificial.

---

## 2. Identidade Visual & Tipografia

A paleta e a tipografia foram desenhadas para transmitir acolhimento, naturalidade e contemporaneidade:

| Cor | Código Hex | Aplicação |
| :--- | :--- | :--- |
| **Verde Oliva** | `#64765A` | Elementos principais, botões de ação e destaques botânicos |
| **Sálvia** | `#A7AD8B` | Elementos secundários, bordas suaves e detalhes sutis |
| **Terracota** | `#C77B55` | Acentos visuais, pequenas etiquetas de destaque e safra |
| **Creme** | `#F1EBDD` | Fundo principal, áreas de respiro e cartões de leitura |
| **Grafite** | `#383A32` | Tipografia de leitura, contrastes e elementos escuros |

### Tipografia
- **Títulos e Chamadas:** `DM Serif Display`
- **Textos, Navegação e Interface:** `Inter`

---

## 3. Diretriz Obrigatória de Fotografias (Sem IA)

O projeto adota uma política rigorosa de respeito à fotografia gastronômica real:
1. **É proibido gerar imagens por inteligência artificial.**
2. Todas as fotos do site são fotografias reais de alimentos capturadas por fotógrafos em iluminação natural.
3. Cada imagem apresenta crédito discreto no formato *"Foto por [Autor]"*, com link direto para a fonte original e licença comercial confirmada.

---

## 4. Estrutura do Site

- **Cabeçalho:** Navegação fluida, seletor de ciclos/estações brasileiras, busca de receitas em tempo real e atalho para o caderno de receitas salvas.
- **Destaque da Estação (Hero):** Painel editorial da safra atual (*Outono, Inverno, Primavera e Verão*) com ingredientes em evidência.
- **Receitas do Dia:** Apresentação lado a lado do Almoço e do Jantar de hoje, sem carrosséis automáticos, contendo tempos de preparo, rendimento, dificuldade e tags.
- **Ingredientes da Safra:** Seção dedicada aos alimentos no auge da colheita, descrevendo famílias botânicas, períodos de pico e perfis gustativos.
- **Diário da Cozinha:** Histórico das publicações de dias anteriores para consulta de cardápios passados.
- **Modal de Detalhes:** Visualização completa da receita, lista de compras na feira, modo de preparo passo a passo, segredos do chef, sugestão de harmonização e ficha de transparência da fotografia.
- **Caderno de Receitas:** Gaveta lateral com receitas salvas pelo usuário com persistência em `localStorage`.

---

## 5. Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- Gerenciador de pacotes **npm** ou **yarn**

### Instalação e Execução

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Gerar a compilação de produção
npm run build

# 4. Pré-visualizar a build de produção localmente
npm run preview
6. Tecnologias Utilizadas
React 19
TypeScript
Vite
Lucide React (iconografia limpa e funcional)
Google Fonts (DM Serif Display e Inter)
7. Licença
Este projeto é desenvolvido para fins editoriais e culturais sob licença MIT. Fotografias pertencem aos seus respectivos autores e são creditadas individualmente.
