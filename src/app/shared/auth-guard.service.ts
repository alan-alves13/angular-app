import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(private shared: SharedService, private router: Router) { }

  canActivate():Observable<boolean> | boolean{

    let logged: boolean=this.shared.isauthenticated();

    if(!logged){
      //redireciona para tela de login
      this.router.navigate(['login']);  //se o logged for falso (não estiver autenticado), redireciona para tela de login
    }
    return logged;
  }
}
