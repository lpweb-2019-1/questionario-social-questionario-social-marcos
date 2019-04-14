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
    if (soma > 0){
    return (soma/cont).toFixed(1);
    }
    else {
      return 0
    }
  }

  mediaSexoCidade(cidade, sexo) {
    let porcentagem = 0;
    let qtPessoas = 0
    let totalPessoas = 0;
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));
    for(var i=0; i< pessoas.length; i++) {
      if (pessoas[i].cidade ==  cidade) {
          totalPessoas ++;
        if (pessoas[i].sexo == sexo){
          qtPessoas ++;
        }
      }
      
    }
    porcentagem = (qtPessoas*100)/totalPessoas
    if (qtPessoas > 0) {
      return porcentagem;
          
  }
    else {
      return 0;
    }

}
}



