import { Injectable } from '@angular/core';
import { FirebaseFood, Food } from '../models/interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  orderStatusEvent: Subject<boolean> = new Subject<boolean>();
  constructor() {}
  closingTime: string = '19:00:00';
  openingTime = '07:00:00';
  foodArray: Food[] = [
    {
      id: '4d2da93389ce48aa8841c56891494942',
      body: 'Chicken Salad',
      image: '../../assets/chickensalad.jpeg',
      alt: 'Chicken Salad ',
      price: '35.00',
    },
    {
      id: 'c92a574c98634a70998b71d110f51fd5',
      body: 'Avocado Chicken Salad',
      image: '../../assets/avocadosalad.jpeg',
      alt: 'Avocado Chicken Salad',
      price: '40.00',
    },
    {
      id: '33cc84aebc4b49b9bdc181782680c493',
      body: 'Tuna Salad',
      image: '../../assets/tunasalad.jpeg',
      alt: 'Tuna Salad',
      price: '35.00',
    },
    {
      id: '3646754e10574da3a16a90e2ecff5e06',
      body: 'Ghanaian Salad',
      image: '../../assets/ghaniansalad.jpeg',
      alt: 'Ghanaian Salad',
      price: '35.00',
    },
    {
      id: '4226d4f1e91e404880345bc18be88e5b',
      body: 'Potato Salad',
      image: '../../assets/banku.jpeg',
      alt: 'Potato Salad',
      price: '40.00',
    },
    {
      id: 'ddbf19c31b9c4844865bf59fbb8fc985',
      body: 'Big Three Pack(Potato, Gizzard and chicken)',
      image: '../../assets/threepack.jpeg',
      alt: 'Big Three Pack',
      price: '50.00',
    },
    {
      id: 'ab62ad68aff443afa4c827a78a22e3a3',
      body: 'Club Sandwich',
      image: '../../assets/clubsandwich.jpeg',
      alt: 'Club Sandwich',
      price: '45.00',
    },
    {
      id: 'c4d3ddc886c540149323387915598847',
      body: 'Potato Chips with Chicken Wings',
      image: '../../assets/chickenwings.jpeg',
      alt: 'Potato Chips with Chicken Wings',
      price: '40.00',
    },
    {
      id: 'c4d3ddc886c540149323387915598848',
      body: 'Potato Chips with Chicken Donor',
      image: '../../assets/chickendonor.jpeg',
      alt: 'Potato Chips with Chicken Donor -',
      price: '40.00',
    },
    {
      id: 'c4d3ddc886c540149323387915598849',
      body: 'Assorted Noodles',
      image: '../../assets/noodles.jpeg',
      alt: 'Assorted Noodles',
      price: '45.00',
    },
    {
      id: 'c4d3ddc886c540149323387915598850',
      body: 'Pineapple Ginger Juice (Very Fresh n Pure) No Sugar Added',
      image: '../../assets/ginger.jpeg',
      alt: 'Pineapple Ginger Juice',
      price: '20.00',
    },
    {
      id: 'c4d3ddc886c540149323387915598851',
      body: 'Watermelon Juice (Very Fresh n Pure) No Sugar Added',
      image: '../../assets/ginger.jpeg',
      alt: 'Watermelon Juice',
      price: '20.00',
    },
  ];

  getFoodByID(id: string): Food {
    return this.foodArray.filter((item) => item.id === id)[0];
  }

  getAllFoods(): Food[] {
    return this.foodArray;
  }

  getClosingTime(): { closingTime: string; openingTime: string } {
    return { closingTime: this.closingTime, openingTime: this.openingTime };
  }
}
