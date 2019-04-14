import { Component } from '@angular/core';
import { PessoasManagerService } from './pessoas-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pesssoas';
  nome = null;
  idade = null;
  cidade = null;
  sexo = null;
  


  constructor (private pessoas : PessoasManagerService){}

  salvar(form) {
    this.pessoas.salvar(this.nome, this.idade, this.sexo, this.cidade);
    form.reset();

  
}

}


