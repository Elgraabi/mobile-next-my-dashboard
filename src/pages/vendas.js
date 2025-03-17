import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Vendas() {
  const [vendas, setVendas] = useState([]);

  // Função para buscar as vendas da API
  useEffect(() => {
    const fetchVendas = async () => {
      try {
        const response = await fetch(
          'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/venda'
        );
        const data = await response.json();
        setVendas(data.vendas);
      } catch (error) {
        console.error('Erro ao buscar vendas:', error);
      }
    };

    fetchVendas();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Vendas</h1>

      {/* Botão para voltar ao dashboard */}
      <Link href="/">
        <button className={styles.button}>Voltar ao Dashboard</button>
      </Link>

      {/* Botão para cadastrar nova venda */}
      <Link href="/cadastrar-venda">
        <button className={styles.button} style={{ marginLeft: '10px' }}>
          Cadastrar Venda
        </button>
      </Link>

      {/* Lista de vendas */}
      <div className={styles.grid}>
        {vendas.map((venda) => (
          <div key={venda.id_venda} className={styles.card}>
            <h2>Venda #{venda.id_venda}</h2>
            <p>
              <strong>ID Cliente:</strong> {venda.id_cliente}
            </p>
            <p>
              <strong>Data da Venda:</strong>{' '}
              {new Date(venda.data_venda).toLocaleDateString('pt-BR')}
            </p>
            <p>
              <strong>Valor Total:</strong> R$ {venda.valor_total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}