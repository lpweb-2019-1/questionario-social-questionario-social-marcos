import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasManagerService {
pessoas = [];


  constructor() { }

  salvar(nome: string, idade: number, sexo: string, cidade: string){
    const pessoa= {
      nome : nome,
      idade : idade,
      sexo : sexo,
      cidade : cidade
    }
    this.pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(this.pessoas));
  };



  PessoaVelha(){
    let aux = 0;
    let maisvelho = [{idade: null}];
    let pessoas =  JSON.parse(localStorage.getItem("pessoas"));


    for (const pessoa of pessoas){
      if (pessoa.idade > aux ){
        maisvelho = [pessoa];
        aux= pessoa.idade;
      } 
    }
    return maisvelho;
  }

  PessoaNova(){
    let aux = 0;
    let maisnovo = [{idade: null}];
    let pessoas =  JSON.parse(localStorage.getItem("pessoas"));

    for (const pessoa of pessoas){
      if (aux == 0){
        maisnovo = [pessoa];
        aux= pessoa.idade;
    }
      else{
        if (pessoa.idade < aux){
          maisnovo = [pessoa];
          aux = pessoa.idade;
        }
      }
    }
    return maisnovo;

  }

  mediaFeminina(){
    let soma = 0;
    let cont = 0;
    let pessoas =  JSON.parse(localStorage.getItem("pessoas"));


    for (const pessoa of pessoas){
      if (pessoa.sexo == "Feminino"){
        soma = soma + pessoa.idade;
        cont = cont + 1;
      }
    }
    return (soma/cont).toFixed(1);
  }

  mediaMasculina(){
    let soma = 0;
    let cont = 0;
    let pessoas =  JSON.parse(localStorage.getItem("pessoas"));


    for (const pessoa of pessoas){
      if (pessoa.sexo == "Masculino"){
        soma = soma + pessoa.idade;
        cont = cont + 1;
      }
    }
    return (soma/cont).toFixed(1);
  }

  mediaCidade(cidade){
    let soma = 0;
    let cont = 0;
    let pessoas =  JSON.parse(localStorage.getItem("pessoas"));

    for (const pessoa of pessoas){
      if (pessoa.cidade == cidade){
        soma = soma + pessoa.idade;
        cont = cont + 1;
      }
    }
    return (soma/cont).toFixed(1);
  }

  mediaSexoCidade(cidade, sexo){
    let pessoas =  JSON.parse(localStorage.getItem("pessoas"));
    
    for (const pessoa of pessoas){
      if (pessoa.cidade == 'Palmas' && pessoa.sexo == "Feminino"){
       this.cidades.Palmas.F =+ 1;
       this.cidades.Palmas.cont =+ 1;
      }
      else if (pessoa.cidade == 'Palmas' && pessoa.sexo == "Masculino"){
        this.cidades.Palmas.M =+ 1;
        this.cidades.Palmas.cont =+ 1;
        
      }
      else if (pessoa.cidade == 'Paraiso' && pessoa.sexo == "Feminino"){
        this.cidades.Paraiso.F =+ 1;
        this.cidades.Paraiso.cont =+ 1;
    }
    else if (pessoa.cidade == 'Paraiso' && pessoa.sexo == "Masculino"){
      this.cidades.Paraiso.M =+ 1;
      this.cidades.Paraiso.cont =+ 1;
    }
    else if (pessoa.cidade == 'Porto Nascional' && pessoa.sexo == "Feminino"){
      this.cidades.Porto.F =+ 1;
      this.cidades.Porto.cont =+ 1;      
    }
    else if (pessoa.cidade == 'Porto Nascional' && pessoa.sexo == "Masculino"){
      this.cidades.Porto.M =+ 1;
      this.cidades.Porto.cont =+ 1;  
    };
  }
  
    
  }
}



