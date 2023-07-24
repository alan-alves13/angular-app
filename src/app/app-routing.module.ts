import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/auth-guard.service';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},  //CanActivate --> controle de acesso -- só se tiver logado
  {path: 'contact', component: ContactComponent, canActivate:[AuthGuard]},
  {path: 'user', component: UserComponent, canActivate:[AuthGuard]}, //Referente ao usuário - tabela: nome e email
  {path: 'login', component: LoginComponent},   //rota de login
  {path: '', redirectTo: 'login', pathMatch: 'full'},  // quando for vazio, redirecionar para página Home --OBS: não está funcionando
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
