import { OrderDetailsAdmin } from './../models/interface';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { OrderType } from '../single-order/single-order.component';

@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.scss'],
})
export class CompletedOrdersComponent implements OnInit {
  @Input() deliveredOrders: OrderDetailsAdmin[] = [] as OrderDetailsAdmin[];
  OrderType = OrderType;
  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {}
}
