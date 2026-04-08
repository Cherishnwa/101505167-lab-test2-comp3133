import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

// App imports
import { HpService } from '../../services/hp.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.scss'
})
export class CharacterlistComponent implements OnInit {

  characters: Character[] = [];   // Holds all fetched characters
  loading = true;                  // Shows spinner while loading
  error = '';                      // Holds any error message

  constructor(
    private hpService: HpService,  // Injected API service
    private router: Router          // For navigation to details page
  ) {}

  // ── Lifecycle hook: runs when component initialises ────────────────────────
  ngOnInit(): void {
    this.hpService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load characters. Please try again.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // ── Navigate to CharacterDetails when a card is clicked ───────────────────
  viewDetails(id: string): void {
    this.router.navigate(['/character', id]);
  }

  // ── Returns house-specific CSS class for coloured badge ───────────────────
  getHouseClass(house: string): string {
    return house ? house.toLowerCase() : 'no-house';
  }

  // ── Fallback image if character image is missing ───────────────────────────
  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src =
      'https://via.placeholder.com/300x400?text=No+Image';
  }
}
