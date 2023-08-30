import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carros-importados',
  templateUrl: './carros-importados.page.html',
  styleUrls: ['./carros-importados.page.scss'],
})
export class CarrosImportadosPage implements OnInit {
  qtdeItensCarrinho = 0

  listaProdutos = [
    {nome: "Carro Mercedes CLE", descricao: "Cor Chumbo", valor: 450000, foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2023/07/mercedes-benz_cle-klasse_amg_lin-1-e1688585989690.jpg?quality=70&strip=info&w=1280&h=720&crop=1'},
    {nome: "Carro Rolls Royce Drak", descricao: "Cor Preta", valor: 980000, foto: 'https://cdn.autopapo.com.br/box/uploads/2021/05/03193923/drake-rolls-royce-cullinan-1-1920x1080.jpg'},
    {nome: "Carro Mustang GT", descricao: "Cor Azul", valor: 300000, foto:'https://cdn.motor1.com/images/mgl/mMPmzP/s1/2024-ford-mustang-gt-exterior-front-quarter.webp'},
    {nome: "Carro BMW X6", descricao: "Cor Vermelho", valor: 900000, foto:'https://cdn.motor1.com/images/mgl/ZnM07K/s1/bmw-x6-m-competition-teste-br.jpg'},
    {nome: "Carro Mercedes AMG", descricao: "Cor Chumbo", valor: 660000, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGsOfZJfOFHpe4OU1m4oNeTc10IhoMMxtSA&usqp=CAU'}
  ];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }
  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);

    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho')

  }

}
