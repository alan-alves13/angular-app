import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // OnInit -- quando o componente for inicializado, vai atualizar a variável

  title = 'angular-app';
  showFiller = false;  //referente ao navbar do angular Material
  isAuth: boolean = false;

  constructor(private shared: SharedService){}

  ngOnInit(): void {
      this.shared.getUsername().subscribe((retorno: string)=>{
      if(retorno){
        this.isAuth=true;  // referente a acesso (autenticação)
      } else {
        this.isAuth=false;
      }
    }); 
  }
}
