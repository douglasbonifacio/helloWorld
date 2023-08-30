import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carros-nacionais',
  templateUrl: './carros-nacionais.page.html',
  styleUrls: ['./carros-nacionais.page.scss'],
})
export class CarrosNacionaisPage implements OnInit {

  qtdeItensCarrinho = 0

  listaProdutos = [
    {nome: "Carro S10 2020", descricao: "Cor Branco", valor: 76000, foto: 'https://cdn.autopapo.com.br/box/uploads/2019/05/15183246/chevrolet_s10_2020-1.jpg'},
    {nome: "Carro Onix", descricao: "Cor Branco", valor: 70500, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPReAYM97-LtUTPTS1R3JuZU0JWfSVUl9JMA&usqp=CAU'},
    {nome: "Carro Virtus", descricao: "Cor Vermelho", valor: 96100, foto:'https://garagem360.com.br/wp-content/uploads/2022/10/2022-vw-virtus-3.webp'},
    {nome: "Carro Fiat FastBack", descricao: "Cor Preto", valor: 130000, foto:'https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/Fiat_Fastback_Limted-1.3-turbo-43.jpg?quality=70&strip=info'},
    {nome: "Toyota Corolla", descricao: "Cor Branco", valor: 200000, foto:'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/582b6f3c0e216302700e8c4fcorolla-dynamic-1.jpg?quality=70&strip=all'}
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
