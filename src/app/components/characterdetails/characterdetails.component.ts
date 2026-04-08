import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

// App imports
import { HpService } from '../../services/hp.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule
  ],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.scss'
})
export class CharacterdetailsComponent implements OnInit {

  character: Character | null = null;  // The character to display
  loading = true;
  error = '';

  constructor(
    private hpService: HpService,
    private route: ActivatedRoute,   // Reads :id from the URL
    private router: Router
  ) {}

  // ── On init: read the :id param from the URL and fetch the character ───────
  ngOnInit(): void {
    // Get the 'id' route parameter (e.g. /character/861c4cde-...)
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.error = 'No character ID provided.';
      this.loading = false;
      return;
    }

    // The API returns an array even for a single ID — we take index [0]
    this.hpService.getCharacterById(id).subscribe({
      next: (data) => {
        this.character = data[0] || null;
        this.loading = false;
        if (!this.character) {
          this.error = 'Character not found.';
        }
      },
      error: (err) => {
        this.error = 'Failed to load character details.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // ── Navigate back to the character list ───────────────────────────────────
  goBack(): void {
    this.router.navigate(['/characters']);
  }

  // ── House CSS class helper ─────────────────────────────────────────────────
  getHouseClass(house: string): string {
    return house ? house.toLowerCase() : 'no-house';
  }

  // ── Image fallback ─────────────────────────────────────────────────────────
  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src =
      'https://via.placeholder.com/400x500?text=No+Image';
  }
}
