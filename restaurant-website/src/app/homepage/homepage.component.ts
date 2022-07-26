import { Food } from './../models/interface';
import { Firestore } from '@angular/fire/firestore';
import { SocketService } from './../services/socket-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FirebaseFood } from '../models/interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  private socket: any;
  menu: Food[] = [];
  firestore: any;
  constructor(
    private router: Router,
    private socketService: SocketService,
    private http: HttpClient,
    private fireStore: AngularFirestore
  ) {
    this.socket = io('https://lebenebeansapi.azurewebsites.net/');
    // this.socket = io('http://localhost:8000/');
    this.menu = this.socketService.getAllFoods();
  }

  foodArray: any;
  closingTime: string = '';
  currentTime: string = '';
  public orderStatus: boolean = false;
  loading: boolean = true;
  breakTime: { closingTime: string; openingTime: string } = {
    closingTime: '',
    openingTime: '',
  };
  closingTimeError = false;
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.http
      .get('https://lebenebeansapi.azurewebsites.net/')
      .subscribe((res: any) => {
        this.orderStatus = res.orderStatus;
        if (this.orderStatus) {
          this.closingTimeError = true;
        } else {
          this.closingTimeError = false;
        }
      });

    this.socket.on('orderStatus', (res: { orderStatus: boolean }) => {
      this.orderStatus = res.orderStatus;
      if (res.orderStatus) {
        this.closingTimeError = true;
      } else {
        this.closingTimeError = false;
      }
    });

    this.foodArray = this.socketService.getAllFoods();
  }

  onProceedToOrderPage(id: string): void {
    if (this.orderStatus) {
      this.closingTimeError = true;
    } else {
      this.closingTimeError = false;
      this.router.navigate(['/orders', id]);
    }
  }

  onGetAllFoods(): Observable<any> {
    return this.fireStore
      .collection('menu', (food) => food.where('status', '==', true))
      .valueChanges({ idField: 'id' });
  }
}
