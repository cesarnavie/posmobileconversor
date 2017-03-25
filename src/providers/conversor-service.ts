import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

const API_URL = 'http://api.fixer.io/latest?base=BRL';
@Injectable()
export class ConversorService {

  constructor(public http: Http) {
    console.log('Hello ConversorService Provider');
  }

  getCotacoes() {
    return this.http.get(API_URL).toPromise().then(response => {
      return response.json().rates;
    }).catch(erro => {
     return {erro: 'Ocorreu um erro'};
    });
  }
}
