import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MAP_EXERCISE } from '../../configs/exercises.configs';


@Component({
  selector: 'app-exercises',
  imports: [],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {

  public exerciseList = signal(Array.from(MAP_EXERCISE.values()));
  private idSelecionado = signal<string | null>(null);

  public exercicioSelecionado = computed(() => {
    const id = this.idSelecionado();
    return id ? MAP_EXERCISE.get(id) : null;
  });
  
  constructor(private router: Router) {}

  selectExercise(id: string): void {
    this.idSelecionado.set(id);
    this.redirectToExercise()
  }

  redirectToExercise(): void {
    const ex = this.exercicioSelecionado();
    console.log(ex)
    if (ex) {
      this.router.navigate([ex.rota]);
    }
  }
}
