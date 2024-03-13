import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RunaroundComponent } from './runaround/runaround.component';
import { SlidingPuzzleComponent } from './sliding-puzzle/sliding-puzzle.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'runaround',
        component: RunaroundComponent
    },
    {
        path: 'sliding-puzzle',
        component: SlidingPuzzleComponent
    }
];
