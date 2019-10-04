import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
    { path: 'todos/:status', component: TodoComponent },
    //{ path: "", component: TodoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})

export class AppRoutingModule {}