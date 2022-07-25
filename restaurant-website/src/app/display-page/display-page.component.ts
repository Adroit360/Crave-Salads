import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable, Subscription, tap } from 'rxjs';
import { FirebaseFood, OrderDetailsAdmin } from '../models/interface';
import { OrderType } from '../single-order/single-order.component';

interface Order {
  // foodName: string;
  name: string;
  phoneNumber: string;
  location: string;
  extraComments?: string;
}

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.scss'],
})
export class DisplayPageComponent implements OnInit {
  @Input() foodsOrdered: OrderDetailsAdmin[] = [] as OrderDetailsAdmin[];
  OrderType = OrderType;
  notificationAudio = new Audio('../../assets/Short-notification-sound.mp3');
  isFirstTime = true;
  itemLength: number = 0;
  subscriptions: Subscription[] = [];
  constructor(private firestore: AngularFirestore) {}

  success: boolean = false;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((sub) => sub?.unsubscribe());
  }

  onOrderDelivered(id: string, orderId: string): void {
    if (window.confirm(`Are you sure you want to comfirm oder: ${orderId}?`)) {
      this.updateOrder(id, { completed: true })
        // .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.success = true;
    }
  }

  onCancelOrder(id: string, orderId: string) {
    if (window.confirm(`Do you really want to delete oder: ${orderId}?`)) {
      this.deleteOrder(id)
        // .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  updateOrder(id: string, data: { completed: boolean }): Promise<void> {
    return this.firestore.collection('orders').doc(id).update(data);
  }

  deleteOrder(id: string): Promise<void> {
    return this.firestore.collection('orders').doc(id).delete();
  }
}
