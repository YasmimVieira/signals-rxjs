import { Routes } from "../enum/routes.enum";
import { ExercicioInfo } from "../interfaces/exercise.interface";

export const MAP_EXERCISE = new Map<string, ExercicioInfo>([
  ['ex1', { id: 'ex1', titulo: 'Contador Signals', dificuldade: 'Iniciante', rota: Routes.COUNTABLE }],
  ['ex4', { id: 'ex4', titulo: 'Busca RxJS', dificuldade: 'Intermediário', rota: '/busca' }],
  ['ex5', { id: 'ex5', titulo: 'Híbrido (Bridge)', dificuldade: 'Avançado', rota: '/bridge' }]
]);