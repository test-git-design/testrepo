import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },   // Route to list all products
  { path: 'add-product', component: ProductFormComponent }, // Route to add a new product
  { path: '', redirectTo: '/products', pathMatch: 'full' }  // Default route to redirect to product list
];
