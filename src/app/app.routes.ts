import { Routes } from '@angular/router';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { CharacterfilterComponent } from './components/characterfilter/characterfilter.component';
import { CharacterdetailsComponent } from './components/characterdetails/characterdetails.component';

export const routes: Routes = [
  // Default redirect to character list
  { path: '', redirectTo: 'characters', pathMatch: 'full' },

  // Page 1 – All characters grid
  { path: 'characters', component: CharacterlistComponent },

  // Page 2 – Filter by house
  { path: 'filter', component: CharacterfilterComponent },

  // Page 3 – Single character details (passes :id via route param)
  { path: 'character/:id', component: CharacterdetailsComponent },

  // Fallback – redirect unknown routes to characters list
  { path: '**', redirectTo: 'characters' }
];
