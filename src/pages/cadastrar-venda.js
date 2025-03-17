import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function CadastrarVenda() {
  const [formData, setFormData] = useState({
    id_cliente: '',
    data_venda: '',
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
        'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/venda',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('Venda cadastrada com sucesso!');
        // Redirecionar para a lista de vendas
        window.location.href = '/vendas';
      } else {
        alert('Erro ao cadastrar venda.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar venda:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastrar Venda</h1>

      {/* Botão para voltar à lista de vendas */}
      <Link href="/vendas">
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
          <label>Data da Venda:</label>
          <input
            type="date"
            name="data_venda"
            value={formData.data_venda}
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