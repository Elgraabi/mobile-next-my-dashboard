import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.grid}>
        {/* Card Cliente */}
        <Link href="/clientes">
          <div className={styles.card}>
            <h2>Clientes</h2>
            <p>Gerencie seus clientes.</p>
          </div>
        </Link>

        {/* Card Compra */}
        <Link href="/compras">
          <div className={styles.card}>
            <h2>Compras</h2>
            <p>Acompanhe as compras realizadas.</p>
          </div>
        </Link>

        {/* Card Fornecedor */}
        <Link href="/fornecedores">
          <div className={styles.card}>
            <h2>Fornecedores</h2>
            <p>Gerencie seus fornecedores.</p>
          </div>
        </Link>

        {/* Card Local */}
        <Link href="/locais">
          <div className={styles.card}>
            <h2>Locais</h2>
            <p>Veja os locais de operação.</p>
          </div>
        </Link>

        {/* Card Produto */}
        <Link href="/produtos">
          <div className={styles.card}>
            <h2>Produtos</h2>
            <p>Gerencie seu catálogo de produtos.</p>
          </div>
        </Link>

        {/* Card Venda */}
        <Link href="/vendas">
          <div className={styles.card}>
            <h2>Vendas</h2>
            <p>Acompanhe as vendas realizadas.</p>
          </div>
        </Link>

        {/* Card Classificação */}
        <Link href="/classificacao">
          <div className={styles.card}>
            <h2>Classificação</h2>
            <p>Classifique seus dados.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}