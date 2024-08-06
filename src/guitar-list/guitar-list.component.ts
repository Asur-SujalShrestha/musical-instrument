import { Component } from '@angular/core';
import { guitar } from '../assets/data';
import { CommonModule } from '@angular/common';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-guitar-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, NavBarComponent],
  templateUrl: './guitar-list.component.html',
  styleUrl: './guitar-list.component.css'
})
export class GuitarListComponent {
  id: any;
  items: any;
  guitar = guitar
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    // const id = this.router.snapshot.paramMap.get('id');
    this.items = guitar.find((item) => item.id === this.id);
  }

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
