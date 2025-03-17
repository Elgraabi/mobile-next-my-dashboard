import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Locais() {
  const [locais, setLocais] = useState([]);

  // Função para buscar os locais da API
  useEffect(() => {
    const fetchLocais = async () => {
      try {
        const response = await fetch(
          'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/local'
        );
        const data = await response.json();
        setLocais(data.locais);
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    fetchLocais();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Locais</h1>

      {/* Botão para voltar ao dashboard */}
      <Link href="/">
        <button className={styles.button}>Voltar ao Dashboard</button>
      </Link>

      {/* Botão para cadastrar novo local */}
      <Link href="/cadastrar-local">
        <button className={styles.button} style={{ marginLeft: '10px' }}>
          Cadastrar Local
        </button>
      </Link>

      {/* Lista de locais */}
      <div className={styles.grid}>
        {locais.map((local) => (
          <div key={local.id_local} className={styles.card}>
            <h2>{local.nome}</h2>
            <p>
              <strong>Endereço:</strong> {local.endereco}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}