import { DetalhesPage } from './../detalhes/detalhes.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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
    {categoria:'Hamburguer',id : 1, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'X-Bacon' , valor:9.99, imagem:['Hamburguer1.jpeg'], status: false},
    {categoria:'Hamburguer',id : 2, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'X-salada' , valor:9.99, imagem:['Hamburguer1.jpeg'], status: false},
    {categoria:'Salgados',id : 3, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'Coxinha' , valor:9.99, imagem:['salgado2.jpeg'], status: false},
    {categoria:'Salgados',id : 4, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'Coxinha' , valor:9.99, imagem:['salgado2.jpeg'], status: false},
    {categoria:'Bebidas',id : 5, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'Coca-Cola' , valor:9.99, imagem:['Bebida.jpg'], status: false},
    {categoria:'Bebidas',id : 6, detalhes :'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',nome:'Coca-Cola' , valor:9.99, imagem:['Bebida.jpg'], status: false},
  ]

  public pathImgs = '../../assets/';
  

  constructor(private navController: NavController) {
    this.navController

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
  
  public itemsdetails(items:any) {
    this.navController.navigateForward('detalhes', {
      queryParams: { items: items }
    });
  }
}
