

export default class Produto{

    constructor(){
        this.vendas =[]
    }

    registrarVenda(produto, quantidade){
        if(produto.registrarVenda(quantidade)){
            this.vendas.push({
                produto: produto.nome,
                quantidade,
                data: new Date()
            })
        }

    }

    gerarRelatorioDeVendas() {
        return this.vendas;
      }

}