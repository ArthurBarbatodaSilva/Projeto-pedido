import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    
  
  public comidas = [
    {id : 1, nome: 'Hamburgers' },
    {id : 2, nome: 'Salgados'},
    {id : 3, nome: 'Bebidas'}
  ]

  items: any[] = [];
  public produtos = [
    {categoria:'Hamburguer',id : 1, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'Burgão1' , valor:12.50, imagem:['Hamburger.jpg']},
    {categoria:'Hamburguer',id : 2, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'Burgão2' , valor:10.00, imagem:['Hamburger.jpg']},
    {categoria:'Salgados',id : 3, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'salgado1' , valor:8.00, imagem:['Salgado.jpg']},
    {categoria:'Salgados',id : 4, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'salgado2' , valor:7.00, imagem:['Salgado.jpg']},
    {categoria:'Bebidas',id : 5, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'bebida1' , valor:3.50, imagem:['Bebida.jpg']},
    {categoria:'Bebidas',id : 6, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'bebida2' , valor:3.50, imagem:['Bebida.jpg']},
  ]

  public pathImgs = '../../assets/';
  

  constructor() {
    this.items = this.produtos;
  }

  filtrarProdutos(evento:any) {
    console.log(evento.detail.value);
    const categoria = evento.detail.value;
    if (categoria === 'Hamburguer') {
      this.items = this.produtos.filter(item => item.categoria === 'Hamburguer');
    } else if (categoria === 'Salgados') {
      this.items = this.produtos.filter(item => item.categoria === 'Salgados');
    } else if (categoria === 'Bebidas') {
      this.items = this.produtos.filter(item => item.categoria === 'Bebidas');
    }
  }
  
 
}
