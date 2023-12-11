import { Injectable } from '@angular/core';
import { MarketplaceItemType } from '../types/marketplace.type';
import { of,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  
private _products:MarketplaceItemType[]=[
  
  {
    id: 1,
    title: 'ADIDAS NMD',
    category: 'HOMME',
    image: 'assets/images/Chaussure1.jpg',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    price: 50.00,
    isSelected: false
  },
  {
    id: 2,
    title: 'LEBRON XI AIR',
    category: 'KIDS',
    image: 'assets/images/Chaussure2.jpg',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    price: 55.00,
    isSelected: false
  },
  {
    id: 3,
    title: 'NIKE AIR',
    category: 'HOMME',
    image: 'assets/images/Chaussure3.jpeg',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    price: 49.99,
    isSelected: false
  }

];
 getProducts =(): Observable<Array<MarketplaceItemType>> =>{
  return of(this._products);
  }
   
  markProductAsSelected=(item:MarketplaceItemType)=>{
    item.isSelected=true;
  }
  
  markProductAsUnselected=(item: MarketplaceItemType)=>{
  item.isSelected=false;
  }
}
