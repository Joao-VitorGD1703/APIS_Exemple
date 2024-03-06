
export default class Produto{

    constructor(idProduto, nome, descricao, preco, qEstoque, categoria){
        this.idProduto = idProduto;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.qEstoque = qEstoque;
        this.categoria = categoria;
    }

    get idProduto(){
       return this.idProduto = idProduto;
    }
    set idProduto(newIdProduto){
          this.idProduto = newIdProduto
    }


    get nome(){
       return this.nome = nome;
    }
    set nome(newNome){
          this.nome = newNome;
    }



    get descricao(){
       return this.descricao = descricao;
    }
    set descricao(newDescricao){
          this.descricao = newDescricao
    }



    get preco(){
       return this.preco = preco;
    }
    set preco(newPreco){
          this.preco = newPreco
    }



    get qEstoque(){
       return this.qEstoque = qEstoque;
    }
    set qEstoque(newQEstoque){
          this.qEstoque = newQEstoque
    }



    get categoria(){
       return this.categoria = categoria;
    }
    set categoria(NewCategoria){
          this.categoria = NewCategoria
    }

    atualizaEstoque(estoque){
        this.qEstoque += estoque
    }

    compraProduto(quantidade){
        if(quantidade <= this.qEstoque){
          this.qEstoque -= quantidade
          return true
        }else{
            return false
        }

    }
}
