import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Angular Material modules
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

// App imports
import { HpService } from '../../services/hp.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,           // Needed for [(ngModel)] on the select
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  templateUrl: './characterfilter.component.html',
  styleUrl: './characterfilter.component.scss'
})
export class CharacterfilterComponent {

  // ── The four Hogwarts houses (+ no-house option) ───────────────────────────
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  selectedHouse = '';              // Bound to the mat-select dropdown
  characters: Character[] = [];    // Characters belonging to selected house
  loading = false;
  error = '';

  constructor(
    private hpService: HpService,
    private router: Router
  ) {}

  // ── Called whenever the user picks a house from the dropdown ──────────────
  onHouseChange(): void {
    if (!this.selectedHouse) return;

    this.loading = true;
    this.error = '';
    this.characters = [];

    this.hpService.getCharactersByHouse(this.selectedHouse).subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Could not load characters for this house.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // ── Navigate to character details page ────────────────────────────────────
  viewDetails(id: string): void {
    this.router.navigate(['/character', id]);
  }

  // ── House CSS class helper ─────────────────────────────────────────────────
  getHouseClass(house: string): string {
    return house ? house.toLowerCase() : 'no-house';
  }

  // ── Image fallback ─────────────────────────────────────────────────────────
  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src =
      'https://via.placeholder.com/300x400?text=No+Image';
  }
}
