import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function CadastrarCompra() {
  const [formData, setFormData] = useState({
    id_fornecedor: '',
    data_compra: '',
    valor_total: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/compras',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('Compra cadastrada com sucesso!');
        // Redirecionar para a lista de compras
        window.location.href = '/compras';
      } else {
        alert('Erro ao cadastrar compra.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar compra:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastrar Compra</h1>

      {/* Botão para voltar à lista de compras */}
      <Link href="/compras">
        <button className={styles.button}>Voltar</button>
      </Link>

      {/* Formulário de cadastro */}
      <form onSubmit={handleSubmit} className={styles.form}>
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

        <div className={styles.formGroup}>
          <label>Data da Compra:</label>
          <input
            type="datetime-local"
            name="data_compra"
            value={formData.data_compra}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Valor Total:</label>
          <input
            type="number"
            step="0.01"
            name="valor_total"
            value={formData.valor_total}
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