import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  // Função para buscar os clientes da API
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch(
          'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/clientes'
        );
        const data = await response.json();
        setClientes(data.clientes);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Clientes</h1>

      {/* Botão para voltar ao dashboard */}
      <Link href="/">
        <button className={styles.button}>Voltar ao Dashboard</button>
      </Link>

      {/* Botão para cadastrar novo cliente */}
      <Link href="/cadastrar-cliente">
        <button className={styles.button} style={{ marginLeft: '10px' }}>
          Cadastrar Cliente
        </button>
      </Link>

      {/* Lista de clientes */}
      <div className={styles.grid}>
        {clientes.map((cliente) => (
          <div key={cliente.id_cliente} className={styles.card}>
            <h2>{cliente.nome}</h2>
            <p>
              <strong>Email:</strong> {cliente.email}
            </p>
            <p>
              <strong>Telefone:</strong> {cliente.telefone}
            </p>
            <p>
              <strong>Endereço:</strong> {cliente.endereco}
            </p>
            <p>
              <strong>Data de Nascimento:</strong>{' '}
              {new Date(cliente.data_nascimento).toLocaleDateString('pt-BR')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}