import { Routes } from '@angular/router';
import { ExampleComponent } from './example.component';
import { AuthGuard } from '../../../service/auth.guard';

export const EXAMPLE_ROUTES: Routes = [
  { path: '', component: ExampleComponent, canActivate: [AuthGuard] },
];
