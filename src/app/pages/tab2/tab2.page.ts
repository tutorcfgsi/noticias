import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  noticias: Article[] = [];

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.cargarNoticias(this.categorias[0]);

    this.segment.value = this.categorias[0];
    // this.noticiasService.getTopHeadlinesCategoria(this.categorias[0])
    //   .subscribe(resp => {
    //     console.log(resp);
    //     this.noticias.push(...resp.articles);
    //   });
  }

  cambioCategoria(event){
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string){
    this.noticiasService.getTopHeadlinesCategoria(categoria)
      .subscribe(resp => {
        console.log(resp);
        this.noticias.push(...resp.articles);
      });
  }
}
