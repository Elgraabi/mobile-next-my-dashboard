import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function CadastrarProduto() {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade_estoque: '',
    id_fornecedor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/produto',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('Produto cadastrado com sucesso!');
        // Redirecionar para a lista de produtos
        window.location.href = '/produtos';
      } else {
        alert('Erro ao cadastrar produto.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastrar Produto</h1>

      {/* Botão para voltar à lista de produtos */}
      <Link href="/produtos">
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
          <label>Descrição:</label>
          <input
            type="text"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Preço:</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Quantidade em Estoque:</label>
          <input
            type="number"
            name="quantidade_estoque"
            value={formData.quantidade_estoque}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>ID Fornecedor:</label>
          <input
            type="number"
            name="id_fornecedor"
            value={formData.id_fornecedor}
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