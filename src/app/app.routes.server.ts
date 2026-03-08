import { Routes as AngularRoutes } from '@angular/router';
import { Routes } from './enum/routes.enum';
import { CountableComponent } from './components/countable/countable.component';
import { ExercisesComponent } from './components/exercises/exercises.component';

export const routes: AngularRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: Routes.EXERCISES
    },
    {
        path: Routes.EXERCISES,
        component: ExercisesComponent
    },
    {
        path: Routes.COUNTABLE,
        component: CountableComponent
    },

];
