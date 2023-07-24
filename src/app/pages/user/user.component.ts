import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSource: UserModel[]=[]; //qualquer tipo de um array
  userAdd: UserModel = new UserModel;


  constructor(private UserService: UserService){} //adicionado -- pegar os métodos do http

  ngOnInit(): void {
    this.dataSource=[
   
   
      /*
    
    {id: 0, 
      name: 'teste',
      email: 'teste@email.com'
      },
      {id: 1, 
      name: 'teste1',
      email: 'teste1@email.com'
      },


    */
      
    ]
    this.loadUsers();
  }

  loadUsers(){
    this.UserService.getAll().subscribe((resul:UserModel[])=>{
      console.log(resul);
      this.dataSource=resul;
    })
  }

  btnSearch(user:UserModel):void{
    this.UserService.getById(user.id).subscribe((resultado: UserModel)=>{
      let json = JSON.stringify(resultado);
      alert(json);
    })
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
