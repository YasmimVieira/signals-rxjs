export interface ExercicioInfo {
  id: string;
  titulo: string;
  dificuldade: 'Iniciante' | 'Intermediário' | 'Avançado';
  rota: string;
}