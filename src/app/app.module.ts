import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './todo/todo.component'
@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
