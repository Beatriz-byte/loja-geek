import CardProduto from "./CardProduto";
import produtos from "../data/produtos";
import "./ListaProdutos.css";

function ListaProdutos() {
  return (
    <section className="pagina-produtos">
      <h2>Produtos</h2>
      <div className="lista-produtos">
        {produtos.map((produto, index) => (
          <CardProduto
            key={index}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaProdutos;
