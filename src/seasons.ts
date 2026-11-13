import type { Season } from './types';

export function brazilianSeason(date = new Date()): Season {
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return 'outono';
  if (month >= 5 && month <= 7) return 'inverno';
  if (month >= 8 && month <= 10) return 'primavera';
  return 'verao';
}

export function capitalizePtDate(raw: string): string {
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

export function formatRecipeDate(iso: string): string {
  const parsed = new Date(`${iso}T12:00:00`);
  const raw = parsed.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });
  return raw.replace(/de ([a-záàâãéêíóôõú])/, (_, letter: string) => `de ${letter.toUpperCase()}`);
}
