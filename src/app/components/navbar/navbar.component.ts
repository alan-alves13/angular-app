import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() Drawer: any;
  //  usuariologado: string="Alan";  -- exemplo que deve aparece ao lado direito ao fazer acesso (login)
  usuariologado: string="";
   
  subscription! : Subscription; //quando não tem nenhum valor, então ele é um underfine, por isso o sinal de exclamação (!)

  constructor(private shared: SharedService){
    this.subscription =  this.shared.getUsername().subscribe((retorno: string)=>{
      //o subscribe (assinando o método) diz que quando o usuário é citado.
      //quando o usuário for citado, vai atribuir para nós o resultado dentro da variável "usuariologado" 
      this.usuariologado=retorno;
    });
  }

  public showMenu(){
    this.Drawer.toggle();
  }

}
