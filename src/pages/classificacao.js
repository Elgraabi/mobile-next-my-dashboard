import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Classificacoes() {
  const [classificacoes, setClassificacoes] = useState([]);

  // Função para buscar as classificações da API
  useEffect(() => {
    const fetchClassificacoes = async () => {
      try {
        const response = await fetch(
          'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/classificacao'
        );
        const data = await response.json();
        setClassificacoes(data.classificacoes);
      } catch (error) {
        console.error('Erro ao buscar classificações:', error);
      }
    };

    fetchClassificacoes();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Classificações</h1>

      {/* Botão para voltar ao dashboard */}
      <Link href="/">
        <button className={styles.button}>Voltar ao Dashboard</button>
      </Link>

      {/* Botão para cadastrar nova classificação */}
      <Link href="/cadastrar-classificacao">
        <button className={styles.button} style={{ marginLeft: '10px' }}>
          Cadastrar Classificação
        </button>
      </Link>

      {/* Lista de classificações */}
      <div className={styles.grid}>
        {classificacoes.map((classificacao) => (
          <div key={classificacao.id_classificacao} className={styles.card}>
            <h2>Classificação #{classificacao.id_classificacao}</h2>
            <p>
              <strong>ID Cliente:</strong> {classificacao.id_cliente}
            </p>
            <p>
              <strong>ID Produto:</strong> {classificacao.id_produto}
            </p>
            <p>
              <strong>Nota:</strong> {classificacao.nota}
            </p>
            <p>
              <strong>Comentário:</strong> {classificacao.comentario}
            </p>
            <p>
              <strong>Data da Classificação:</strong>{' '}
              {new Date(classificacao.data_classificacao).toLocaleString('pt-BR')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}