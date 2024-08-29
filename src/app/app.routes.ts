import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path : "login", component:LoginComponent},
    {path : "bienvenidos", component:BienvenidosComponent},
    {path : "error" , component:ErrorComponent}

];
