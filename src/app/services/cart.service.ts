import { Injectable } from '@angular/core';
import { MarketplaceItemType } from '../types/marketplace.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems = new BehaviorSubject<Array<{ item: MarketplaceItemType; quantity: number }>>([]);
  constructor() { }

  getCartItems = () => this._cartItems;
  addItem = (item: MarketplaceItemType, quantity = 1) => {
    let currentCartItems = this._cartItems.getValue();
  const foundItem = currentCartItems.find(i => i.item.id === item.id);

  if (foundItem) {
    foundItem.quantity += quantity;
    // Supprimez l'article du panier si la quantité est inférieure ou égale à 0
    //J'utilise la même fonction pour gérer l'ajout et la suppression 
    if (foundItem.quantity <= 0) {
      foundItem.item.isSelected = false; // Mise à jour de l'état de sélection
      currentCartItems = currentCartItems.filter(i => i.item.id !== item.id);
    }
  } else if (quantity > 0) {
    item.isSelected = true; // L'article est sélectionné lors de l'ajout
    currentCartItems.push({ item, quantity });
  }
  
  this._cartItems.next(currentCartItems);
  }
  removeItem = (item: MarketplaceItemType) => {
    let currentCartItems = this._cartItems.getValue();
    currentCartItems = currentCartItems.filter(i => i.item.id !== item.id);
    this._cartItems.next(currentCartItems);
  }
}
