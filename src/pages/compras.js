import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Compras() {
  const [compras, setCompras] = useState([]);

  // Função para buscar as compras da API
  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await fetch(
          'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/compras'
        );
        const data = await response.json();
        setCompras(data.compras);
      } catch (error) {
        console.error('Erro ao buscar compras:', error);
      }
    };

    fetchCompras();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Compras</h1>

      {/* Botão para voltar ao dashboard */}
      <Link href="/">
        <button className={styles.button}>Voltar ao Dashboard</button>
      </Link>

      {/* Botão para cadastrar nova compra */}
      <Link href="/cadastrar-compra">
        <button className={styles.button} style={{ marginLeft: '10px' }}>
          Cadastrar Compra
        </button>
      </Link>

      {/* Lista de compras */}
      <div className={styles.grid}>
        {compras.map((compra) => (
          <div key={compra.id_compra} className={styles.card}>
            <h2>Compra #{compra.id_compra}</h2>
            <p>
              <strong>ID Fornecedor:</strong> {compra.id_fornecedor}
            </p>
            <p>
              <strong>Data da Compra:</strong> {compra.data_compra}
            </p>
            <p>
              <strong>Valor Total:</strong> R$ {compra.valor_total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}