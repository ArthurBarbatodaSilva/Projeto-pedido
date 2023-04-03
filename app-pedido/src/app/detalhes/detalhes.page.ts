import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public pathImgs   = '../../assets/img/';
  quantidade = 0;

  public item = { 
    categoria: '', 
    id: 0,
    detalhes: '', 
    nome: '',
    valor: 0.00, 
    imagens: [],
    status: false 
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.item = params['items'];
    });
   }

  ngOnInit() {
  }

  public add(){
    this.quantidade += 1;
  }
  public remover(){
    if (this.quantidade > 0){
      this.quantidade -=1;
    }
  }

}
