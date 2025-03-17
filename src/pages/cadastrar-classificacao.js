import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function CadastrarClassificacao() {
  const [formData, setFormData] = useState({
    id_cliente: '',
    id_produto: '',
    nota: '',
    comentario: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/classificacao',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('Classificação cadastrada com sucesso!');
        // Redirecionar para a lista de classificações
        window.location.href = '/classificacao';
      } else {
        alert('Erro ao cadastrar classificação.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar classificação:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastrar Classificação</h1>

      {/* Botão para voltar à lista de classificações */}
      <Link href="/classificacoes">
        <button className={styles.button}>Voltar</button>
      </Link>

      {/* Formulário de cadastro */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>ID Cliente:</label>
          <input
            type="number"
            name="id_cliente"
            value={formData.id_cliente}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>ID Produto:</label>
          <input
            type="number"
            name="id_produto"
            value={formData.id_produto}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Nota:</label>
          <input
            type="number"
            min="1"
            max="5"
            name="nota"
            value={formData.nota}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Comentário:</label>
          <textarea
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}