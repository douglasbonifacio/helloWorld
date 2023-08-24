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
    {nome: "Moto Yamaha FAZER", descricao: "Cor Preta", valor: 6500, foto: 'https://www.yamaha-motor.com.br/file/v1552257033840217422/products/478.faixa3.detalhe.mobile.jpg'},
    {nome: "Moto Yamaha FACTOR 125", descricao: "Cor Vermelha", valor: 6100, foto:'https://motos2024.com.br/wp-content/uploads/2023/02/Yamaha-Factor-125-2024-Precos-mudancas-consumo-e-lancamento-1200x675-1-1200x900.jpg'},
    {nome: "Moto Yamaha SUPERSPORT R15", descricao: "Cor Azul", valor: 6300, foto:'https://mobilidade.estadao.com.br/wp-content/uploads/2023/06/Nova-Yamaha-R15.jpg'},
    {nome: "Moto Yamaha TRAIL CROSSER", descricao: "Cor Azul", valor: 6600, foto:'https://i0.statig.com.br/bancodeimagens/3u/rt/0p/3urt0pijihi93cfqpkzp5f8rq.jpg'}
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
