import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  qtdeItensCarrinho = 0

  listaProdutos = [
    {nome: "Carro Fusca 1969", descricao: "Cor Preto", valor: 6000, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NoW9GnKbYyTU5qiHLPrh1rd2YmyHgZY_Yg&usqp=CAU'},
    {nome: "Carro Parati GL", descricao: "Cor Branco", valor: 19500, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiHQEDY59DGFZoq-qJsl1f4tI_0zP2vgJRA&usqp=CAU'},
    {nome: "Jet Ski Sea Doo", descricao: "Cor Branco", valor: 17000, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiiNKraNSkoO9GhFMbfck5rztovjb5Jh2ig&usqp=CAU'},
    {nome: "Moto Honda Biz 125", descricao: "Cor Marron", valor: 68000, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiwhWoiV1JwuSO-AB-zL0paDwISpj32Mq8w&usqp=CAU'},
    {nome: "Honda Quadriciclo TRX", descricao: "Cor Vermelho", valor: 10000, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKJDTF7ODvsJhlbNmwvv-9iOjoGnB5GNB2Q&usqp=CAU'}
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

