import { Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { ItemDescriptionComponent } from '../item-description/item-description.component';
import { CartComponent } from '../cart/cart.component';
import { PlaceOrderComponent } from '../place-order/place-order.component';
import { PianoListComponent } from '../piano-list/piano-list.component';
import { ViolinListComponent } from '../violin-list/violin-list.component';
import { DrumListComponent } from '../drum-list/drum-list.component';
import { RegisterComponent } from '../user/register/register.component';
import { LoginComponent } from '../user/login/login.component';
import { GuitarListComponent } from '../guitar-list/guitar-list.component';
import { GuitarComponent } from './guitar/guitar.component';

export const routes: Routes = [
    {
        path: '', component:CategoryComponent
    },
    {
        path: 'register', component:RegisterComponent
    },
    {
        path: 'login', component:LoginComponent
    },
    
    {
        path: 'piano', component:PianoListComponent
    },
    {
        path: 'violin', component:ViolinListComponent
    },
    {
        path: 'drum', component:DrumListComponent
    },
    {
        path: 'desc/:id', component:ItemDescriptionComponent
    },
    {
        path: 'cart', component:CartComponent
    },
    {
        path: 'order', component:PlaceOrderComponent

    },
    {
        path: 'desc', component:ItemDescriptionComponent
    },
    // {
    //     path:'guitar',component:GuitarComponent
    // },
    {
        path:'guitar',component:GuitarListComponent
    }
];
