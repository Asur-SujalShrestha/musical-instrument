import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { data_list, drums, guitar, piano, violin } from '../assets/data';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { CounterComponent } from '../app/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, NavBarComponent, RouterModule, CounterComponent, FormsModule],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.css',
})
export class ItemDescriptionComponent {
  faArrowLeft = faArrowLeft;

  items: any;
  id: any;
  category: any;

  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  //empty Array
  cart: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private path: Router
  ) {

  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];
      this.category = params['category']
    });


    if (this.category === 'guitar') {
      this.items = guitar.find((item) => item.id === this.id);
    }

    else if (this.category === 'piano') {
      this.items = piano.find((item) => item.id === this.id);
    }

    else if (this.category === 'violin') {
      this.items = violin.find((item) => item.id === this.id);
    }

    else if (this.category === 'drums') {
      this.items = drums.find((item) => item.id === this.id);
    }

    else {
      this.items = data_list.find((item) => item.id === this.id);
    }
  }

  // newCartItem:any[]=[]
  // cartItems(item:any, quantity:number){
  //   name:"{{item.name}}",

  // }

  addToCart(item: any) {

    const user = localStorage.getItem('userCredentials');
    if(user){

    const storedArray = localStorage.getItem('cartItems');
    const currentArray: any = storedArray ? JSON.parse(storedArray) : [];
    const itemExists = currentArray.some((i: any) => i.name === item.name);

    if (itemExists) {
      // alert("Item already exists");
      currentArray.forEach((i: any) => {
        if (i.name === item.name) {
          i.quantity++;
          localStorage.setItem('cartItems', JSON.stringify(currentArray));
        }
      });
    } else {
      currentArray.push(item);
      localStorage.setItem('cartItems', JSON.stringify(currentArray));
    }
  
    this.path.navigate(['/cart']);

  }
  else {
        alert('login first');
        this.path.navigate(['/login']);
      }
  }

  goBack() {
    this.location.back();
  }

  getStars(rating: number) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push({ icon: this.faStar, class: 'text-orange-500' });
    }

    if (halfStars) {
      stars.push({ icon: this.faStarHalfStroke, class: 'text-orange-500' });
    }

    return stars;

  }

  // addToCart(){
  //   const user = localStorage.getItem('userCredentials');
  //   if (user) {
  //     this.cartService.addToCart(this.items);
  //     this.path.navigate(['/cart']);
  //   } else {
  //     alert('login first');
  //     this.path.navigate(['/login']);
  //   }
  // }


  value: number = 1;
  total: number = 1;

  increaseValue() {
    this.value++;
    this.calculateTotal();
  }

  decreaseValue() {
    if (this.value > 1) {
      this.value--;
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.total = this.total * this.value
  }


}
