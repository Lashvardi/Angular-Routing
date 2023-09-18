import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  mobilePhones: any[] = [
    {
      id: 1,
      phoneName: 'Samsung Galaxy S21 Ultra',
      phonePrice: 2000,
      description: 'ამ ტელეფონის აღწერილობა',
    },
    {
      id: 2,
      phoneName: 'Iphone 12 Pro Max',
      phonePrice: 2500,
      description: 'ამ ტელეფონის აღწერილობა',
    },
    {
      id: 3,
      phoneName: 'Xiaomi Mi 11',
      phonePrice: 1500,
      description: 'ამ ტელეფონის აღწერილობა',
    },
  ];

  getMobilePhones(): any[] {
    return this.mobilePhones;
  }

  getPhoneById(id: number): any {
    return this.mobilePhones.find((phone) => phone.id === id);
  }
}
