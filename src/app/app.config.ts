import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

// ── App-level providers (replaces NgModule's providers array) ─────────────────
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),       // Sets up Angular Router with our routes
    provideHttpClient(),         // Enables HttpClient for API calls
    provideAnimations()          // Required for Angular Material animations
  ]
};
