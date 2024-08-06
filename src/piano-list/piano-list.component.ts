import { Component } from '@angular/core';
import { piano } from '../assets/data';
import { CommonModule } from '@angular/common';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-piano-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule,NavBarComponent],
  templateUrl: './piano-list.component.html',
  styleUrl: './piano-list.component.css'
})

export class PianoListComponent {
  piano = piano
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  getStars(rating: number) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push({ icon: this.faStar, class: 'text-yellow-500' });
    }

    if (halfStars) {
      stars.push({ icon: this.faStarHalfStroke, class: 'text-yellow-500' });
    }

    return stars;
    
  }

}
