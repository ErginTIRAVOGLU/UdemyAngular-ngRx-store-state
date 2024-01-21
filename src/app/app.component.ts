import { Component } from '@angular/core';
import { UserModel } from './user.model';
import { addUser } from './users/users.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="user.name" />
    <input [(ngModel)]="user.lastName" />
    <button (click)="add()">Kaydet</button>
    <app-users></app-users>
  `,
})
export class AppComponent {
  title = 'ngRx-state-sample-2';
  user: UserModel = new UserModel();

  constructor(private store: Store<{ users: UserModel[] }>) {}
  //constructor(private store: Store) {}

  add() {
    this.store.dispatch(addUser({ user: this.user }));
    this.user = new UserModel();
  }
}
