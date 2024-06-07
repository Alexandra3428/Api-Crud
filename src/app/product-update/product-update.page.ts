import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.page.html',
  styleUrls: ['./product-update.page.scss'],
})
export class ProductUpdatePage implements OnInit {
  product: any = {};

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(Number(id)).subscribe((product: any) => {
        this.product = product;
      });
    }
  }

  updateProduct() {
    this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }
}
