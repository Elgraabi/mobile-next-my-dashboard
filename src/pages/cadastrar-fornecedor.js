import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function CadastrarFornecedor() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Substitua pela chamada à API
      // const response = await fetch('URL_DO_ENDPOINT_AQUI', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   alert('Fornecedor cadastrado com sucesso!');
      //   window.location.href = '/fornecedores';
      // } else {
      //   alert('Erro ao cadastrar fornecedor.');
      // }

      // Simulação de sucesso
      console.log('Dados do fornecedor:', formData);
      alert('Fornecedor cadastrado com sucesso!');
      window.location.href = '/fornecedores';
    } catch (error) {
      console.error('Erro ao cadastrar fornecedor:', error);
      alert('Erro ao cadastrar fornecedor.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastrar Fornecedor</h1>

      {/* Botão para voltar à lista de fornecedores */}
      <Link href="/fornecedores">
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
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
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