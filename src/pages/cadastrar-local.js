import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function CadastrarLocal() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/local',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('Local cadastrado com sucesso!');
        // Redirecionar para a lista de locais
        window.location.href = '/locais';
      } else {
        alert('Erro ao cadastrar local.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar local:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastrar Local</h1>

      {/* Botão para voltar à lista de locais */}
      <Link href="/locais">
        <button className={styles.button}>Voltar</button>
      </Link>

      {/* Formulário de cadastro */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Endereço:</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
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