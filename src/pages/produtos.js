import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  // Função para buscar os produtos da API
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/produto'
        );
        const data = await response.json();
        setProdutos(data.produtos);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Produtos</h1>

      {/* Botão para voltar ao dashboard */}
      <Link href="/">
        <button className={styles.button}>Voltar ao Dashboard</button>
      </Link>

      {/* Botão para cadastrar novo produto */}
      <Link href="/cadastrar-produto">
        <button className={styles.button} style={{ marginLeft: '10px' }}>
          Cadastrar Produto
        </button>
      </Link>

      {/* Lista de produtos */}
      <div className={styles.grid}>
        {produtos.map((produto) => (
          <div key={produto.id_produto} className={styles.card}>
            <h2>{produto.nome}</h2>
            <p>
              <strong>Descrição:</strong> {produto.descricao}
            </p>
            <p>
              <strong>Preço:</strong> R$ {produto.preco.toFixed(2)}
            </p>
            <p>
              <strong>Quantidade em Estoque:</strong> {produto.quantidade_estoque}
            </p>
            <p>
              <strong>ID Fornecedor:</strong> {produto.id_fornecedor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}