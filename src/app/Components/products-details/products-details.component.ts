import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from 'src/app/services/producst.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent {
  public _productId: number = 0;

  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductsService
  ) {
    this.route.params.subscribe((params) => {
      this._productId = +params['productId']; // + გადაყავს სტრინგი ნამბერში
    });

    this.product = this._productService.getPhoneById(this._productId);
  }
}
