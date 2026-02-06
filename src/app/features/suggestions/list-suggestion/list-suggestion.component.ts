import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {

  searchText: string = '';
  favorites: Suggestion[] = [];

  // (5) Liste statique EXACTEMENT comme le PDF
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: "Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.",
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur",
      description: "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    },
  ];

  // (7) Like -> incrémente
  likeSuggestion(s: Suggestion) {
    s.nbLikes++;
  }

  // (7) Ajouter aux favoris -> ajoute à favorites
  addToFavorites(s: Suggestion) {
    const exists = this.favorites.some(f => f.id === s.id);
    if (!exists) this.favorites.push(s);
  }

  // (8) Filtrer par titre OU catégorie
  get filteredSuggestions(): Suggestion[] {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.suggestions;

    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );
  }
}
