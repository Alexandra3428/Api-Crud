import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.page.html',
  styleUrls: ['./product-create.page.scss'],
})
export class ProductCreatePage {
  product: any = {};

  constructor(private productService: ProductService, private router: Router) { }

  createProduct() {
    this.productService.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }
}
