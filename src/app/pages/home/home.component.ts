import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, 
AfterContentInit, AfterContentChecked, OnDestroy {
  
  text:string="";

  ngOnInit(): void {
 //   console.log('ngOnInit');   //Significa que teve o Primeiro momento da tela, quando teve a inicialização
    this.text="Conteúdo Inicial";
  }
  ngOnChanges(){
   // console.log('ngOnChanges');
  }
  ngDoCheck(){
    console.log('ngDoCheck', this.text);  // Faz a checagem da inicialização e visualiza o texto por causa do this.text
  }
  ngAfterViewInit(){
    this.text="Conteúdo alterado após [ngAfterViewInit]"; //trocar o valor
    //console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(){
    this.text = "Conteúdo alterado após [ngAfterContentChecked]"
    console.log(this.text);
  }
  ngAfterContentInit(){    // Depois que o conteúdo é carregado
    this.text="Conteúdo alterado após [ngAfterContentInit]"; //trocar o valor
   // console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(){
    //console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){   // serve para destruir
    console.log('ngOnDestroy');
  }
}
