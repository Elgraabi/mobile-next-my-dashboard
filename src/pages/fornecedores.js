import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);

  // Função para buscar os fornecedores da API 
  const fetchFornecedores = async () => {
    try {
      // const response = await fetch('URL_DO_ENDPOINT_AQUI');
      // const data = await response.json();
      // setFornecedores(data);

      // Simulação de dados
      const data = [
        {
          id_fornecedor: 1,
          nome: 'Fornecedor A',
          email: 'fornecedorA@example.com',
          telefone: '(11) 98765-4321',
          endereco: 'Rua A, 123, Cidade A',
        },
        {
          id_fornecedor: 2,
          nome: 'Fornecedor B',
          email: 'fornecedorB@example.com',
          telefone: '(21) 97654-3210',
          endereco: 'Avenida B, 456, Cidade B',
        },
      ];
      setFornecedores(data);
    } catch (error) {
      console.error('Erro ao buscar fornecedores:', error);
    }
  };

  useEffect(() => {
    fetchFornecedores();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fornecedores</h1>

      {/* Botão para voltar ao dashboard */}
      <Link href="/">
        <button className={styles.button}>Voltar ao Dashboard</button>
      </Link>

      {/* Botão para cadastrar novo fornecedor */}
      <Link href="/cadastrar-fornecedor">
        <button className={styles.button} style={{ marginLeft: '10px' }}>
          Cadastrar Fornecedor
        </button>
      </Link>

      {/* Lista de fornecedores */}
      <div className={styles.grid}>
        {fornecedores.map((fornecedor) => (
          <div key={fornecedor.id_fornecedor} className={styles.card}>
            <h2>{fornecedor.nome}</h2>
            <p>
              <strong>Email:</strong> {fornecedor.email}
            </p>
            <p>
              <strong>Telefone:</strong> {fornecedor.telefone}
            </p>
            <p>
              <strong>Endereço:</strong> {fornecedor.endereco}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}