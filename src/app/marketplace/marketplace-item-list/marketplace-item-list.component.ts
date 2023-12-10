
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MarketplaceItemType } from '../../types/marketplace.type';


@Component({
  selector: 'app-marketplace-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace-item-list.component.html',
  styleUrl: './marketplace-item-list.component.scss'
})
export class MarketplaceItemListComponent {
  public marketplaceItems: MarketplaceItemType[] = [
    {
      id: 1,
      title: 'ADIDAS NMD',
      category: 'HOMME',
      image: 'https://via.placeholder.com/500',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      price: 50.00
    },
    {
      id: 2,
      title: 'LEBRON MAX AIR',
      category: 'KIDS',
      image: 'https://via.placeholder.com/500',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      price: 55.00
    },
    {
      id: 3,
      title: 'PUMA SIT',
      category: 'ADULT',
      image: 'https://via.placeholder.com/500',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      price: 45.00
    }
  ];
}
