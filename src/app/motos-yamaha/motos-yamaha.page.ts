import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motos-yamaha',
  templateUrl: './motos-yamaha.page.html',
  styleUrls: ['./motos-yamaha.page.scss'],
})
export class MotosYamahaPage implements OnInit {

  listaProdutos = [
    {img1: "https://www.yamaha-motor.com.br/file/v4498663521502965656/products/lateral-mtseries-mt09-321-abs-30086-fx01-img-01-v01-desktop.jpg", nome: "Motos Yamaha MT09", descricao: "Cor Preta", valor: 6000},
    {img2: "https://cdn.awsli.com.br/600x450/764/764193/produto/36448661/c0e5984615.jpg", nome: "Motos Yamaha FAZER", descricao: "Cor Vermelho", valor: 6500},
    {nome: "Motos Yamaha FACTOR 125", descricao: "Cor Azul", valor: 6100},
    {nome: "Motos Yamaha SUPERSPORT R15", descricao: "Cor Laranja", valor: 6300},
    {nome: "Motos Yamaha TRAIL CROSSER", descricao: "Cor Verde", valor: 6600}
  ];

  constructor() { }

  ngOnInit() {
  }

}
