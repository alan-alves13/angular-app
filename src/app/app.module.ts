import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthGuard } from './shared/auth-guard.service';
import { UserComponent } from './pages/user/user.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule, //adicionado -- referente ao navbar
    MatListModule, //adicionado -- referente a lista
    MatIconModule, //adicionado -- referente ao icone
    MatCardModule, //adicionado -- referente ao card no formulario
    MatFormFieldModule, //adicionado -- referente ao formulario dentro do card
    MatButtonModule, //adicionado -- referente ao botão presente no formulario de contato
    MatInputModule,
    FormsModule, // Referente ao NgModel -> relacionar o input ao declarado no ts, como nome...
    MatToolbarModule, //Referente ao Toolbar -- Navbar
    MatTableModule, //Usar a tabela oferecida pelo angula Material
    HttpClientModule,
  ],
  providers: [AuthGuard], //providers é todo escopo do projeto, só vai ter acesso, se estiver autenticado (feito login)
  bootstrap: [AppComponent]
})
export class AppModule { }
