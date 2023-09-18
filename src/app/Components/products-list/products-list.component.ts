import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/producst.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  productsArray: any[] = [];

  constructor(
    private _productsService: ProductsService,
    private router: Router
  ) {
    this.productsArray = this._productsService.getMobilePhones();
  }

  viewDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
}
