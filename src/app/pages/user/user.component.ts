import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSource: UserModel[]=[]; //qualquer tipo de um array
  userAdd: UserModel = new UserModel;

  ngOnInit(): void {
    this.dataSource=[
      {id: 0, 
      name: 'teste',
      email: 'teste@email.com'
      },
      {id: 1, 
      name: 'teste1',
      email: 'teste1@email.com'
      },

    ]
  }

  btnSearch(user:UserModel):void{
    alert('buscando');
  }

  btnDelete(user:UserModel):void{
    alert('deletado');
    //encontrar o indice
    let index = this.dataSource.findIndex((item)=> item==user);
    //remover o indice do array
    this.dataSource.splice(index,1);  //splice é para retirar o elemento do array
    this.dataSource = Array.from(this.dataSource);  //recliando uma nova instância
  }
  btnSave():void{
    if(this.userAdd.name){
      alert('salvo');

      this.dataSource.push(this.userAdd);
      this.dataSource = Array.from(this.dataSource);  //recliando uma nova instância
    }
  }
}
