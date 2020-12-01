import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0d50364e350944d48725ce6745bc8f37`);
  }

}
