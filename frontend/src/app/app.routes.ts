import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimultaneousComponent } from './simultaneous/simultaneous.component';
import { SlidingPuzzleComponent } from './sliding-puzzle/sliding-puzzle.component';
import { SequenceComponent } from './sequence/sequence.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'simultaneous',
        component: SimultaneousComponent
    },
    {
        path: 'sequence',
        component: SequenceComponent
    },
    {
        path: 'sliding-puzzle',
        component: SlidingPuzzleComponent
    }
];
