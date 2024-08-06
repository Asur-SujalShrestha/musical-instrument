import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { guitar } from '../../assets/data';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Route } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-guitar',
  standalone: true,
  imports: [CommonModule,RouterModule,NavBarComponent,FontAwesomeModule,RouterLink],
  templateUrl: './guitar.component.html',
  styleUrl: './guitar.component.css'
})
export class GuitarComponent {
  id: any;
  items: any;
  guitar = guitar
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private path: Router
  ) {}

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
