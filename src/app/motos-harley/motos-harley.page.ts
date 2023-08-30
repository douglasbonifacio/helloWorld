import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-motos-harley',
  templateUrl: './motos-harley.page.html',
  styleUrls: ['./motos-harley.page.scss'],
})
export class MotosHarleyPage implements OnInit {

  qtdeItensCarrinho = 0

  listaProdutos = [
    {nome: "Moto Harley Davidson Sportste", descricao: "Cor Branca", valor: 86000, foto: 'https://www.revistafullpower.com.br/wp-content/uploads/2022/05/2021-harley-davidson-sportster-s-1.webp'},
    {nome: "Moto Harley Davidson Luxembourg", descricao: "Cor Azul", valor: 99500, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRPFex3dEQvzKkViVHUfEIaxZopWqDLGEoBQTKAUDMN55cx0Bod0fHDiukaR7wpx9NRc&usqp=CAU'},
    {nome: "Moto Harley Davidson Nigth Road", descricao: "Cor Branco", valor: 100000, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsELKVEpIX48n15WCYCoqKdMntoWJjOutQA&usqp=CAU'},
    {nome: "Moto Harley Davidson CVO", descricao: "Cor Preto", valor: 68000, foto:'https://www.chavesnamao.com.br/imn/0600x0400/A/veiculos/101296/2329941/harley-davidson-cvo-breakout-fxsbse_f4e9f379e13.jpeg'},
    {nome: "Moto Harley Davidson Chopper", descricao: "Cor Prata", valor: 100000, foto:'https://i.pinimg.com/736x/01/33/a6/0133a66c9b92d0dd08867baaeab5c51b--moto-harley-yahoo.jpg'}
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
