import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _username: BehaviorSubject<string> = new BehaviorSubject<string>('');  // variável que vai ser compartilhado em todo o projeto
  //essa varíavel é uma string que no final ela é vázia ('')
  // BehaviorSubject é um tipo no angular onde podemos dizer que a variável faz parte de um observable onde podemos escrever componentes que estão escutando ele
  constructor() { }

  isauthenticated():boolean{
    let user = this._username.getValue();  //consegue pegar o usuário que está logado
    if(user){
      return true; //se usuário existe, então é verdadeiro
    } else {
      return false;
    }
  }

  setUsername(username: string){
    this._username.next(username);
  }

  getUsername(){
    return this._username.asObservable();
  }
}
