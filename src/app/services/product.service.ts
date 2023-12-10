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
    image: 'https://via.placeholder.com/500',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    price: 50.00,
    isSelected: false
  },
  {
    id: 2,
    title: 'LEBRON XI AIR',
    category: 'KIDS',
    image: 'https://via.placeholder.com/500',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    price: 55.00,
    isSelected: true
  },
  {
    id: 3,
    title: 'NIKE AIR',
    category: 'HOMME',
    image: 'https://via.placeholder.com/500',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    price: 49.99,
    isSelected: true
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
