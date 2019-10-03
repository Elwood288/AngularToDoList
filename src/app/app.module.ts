import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { TodoService } from './services/todo.service'
@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent
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
