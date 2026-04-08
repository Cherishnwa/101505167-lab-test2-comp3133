import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'  // Available throughout the whole app
})
export class HpService {

  // Base URL for the Harry Potter API
  private baseUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  // ── Get all HP characters ──────────────────────────────────────────────────
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`);
  }

  // ── Get characters filtered by house (e.g. 'Gryffindor') ──────────────────
  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters/house/${house}`);
  }

  // ── Get a single character by their unique ID ──────────────────────────────
  // NOTE: The API returns an array even for a single character
  getCharacterById(id: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/character/${id}`);
  }
}
