import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { usersReducer } from './users.reducer';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot({ users: usersReducer }),
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
