import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';           // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http';  // Correct import
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,  // Mark as standalone component
  imports: [FormsModule, HttpClientModule],  // Import FormsModule and HttpClientModule here
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Product = { name: '', price: 0, quantity: 0 };

  constructor(private productService: ProductService, private router: Router) {}

  saveProduct(): void {
    this.productService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
