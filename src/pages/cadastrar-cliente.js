import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function CadastrarCliente() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    senha: '',
    data_nascimento: '',
  });

  const [mostrarSenha, setMostrarSenha] = useState(false); // Estado para controlar a visibilidade da senha

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://ceteia.guanambi.ifbaiano.edu.br:15050/api/clientes',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('Cliente cadastrado com sucesso!');
        // Redirecionar para a lista de clientes
        window.location.href = '/clientes';
      } else {
        alert('Erro ao cadastrar cliente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastrar Cliente</h1>

      {/* Botão para voltar à lista de clientes */}
      <Link href="/clientes">
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

        <div className={styles.formGroup}>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="data_nascimento"
            value={formData.data_nascimento}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Senha:</label>
          <div style={{ position: 'relative' }}>
            <input
              type={mostrarSenha ? 'text' : 'password'} // Alterna entre 'text' e 'password'
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)} // Alterna a visibilidade da senha
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {mostrarSenha ? '🙈' : '👁️'} {/* Ícone para mostrar/ocultar senha */}
            </button>
          </div>
        </div>

        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}