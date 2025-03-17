---

# **Sistema de Gerenciamento de Vendas (Frontend)**

Este é o frontend de um sistema de gerenciamento de vendas desenvolvido com **Next.js**. O sistema permite o cadastro e gerenciamento de clientes, fornecedores, produtos, vendas, compras, locais e classificações. O backend será integrado posteriormente.

---

## **Funcionalidades**

- **Clientes:**
  - Cadastro de clientes.
  - Listagem de clientes.

- **Fornecedores:**
  - Cadastro de fornecedores.
  - Listagem de fornecedores.

- **Produtos:**
  - Cadastro de produtos.
  - Listagem de produtos.

- **Vendas:**
  - Cadastro de vendas.
  - Listagem de vendas.

- **Compras:**
  - Cadastro de compras.
  - Listagem de compras.

- **Locais:**
  - Cadastro de locais.
  - Listagem de locais.

- **Classificações:**
  - Cadastro de classificações.
  - Listagem de classificações.

---

## **Tecnologias Utilizadas**

- **Frontend:**
  - Next.js
  - React
  - CSS Modules

- **Ferramentas:**
  - Git
  - VSCode

---

## **Como Executar o Projeto**

### **Pré-requisitos**

- Node.js (v16 ou superior)

---

### **Passos para Configuração**

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/sistema-vendas-frontend.git
   cd sistema-vendas-frontend
   ```

2. **Instale as Dependências:**

   ```bash
   npm install
   ```

3. **Execute o Projeto:**

   ```bash
   npm run dev
   ```

   O frontend estará disponível em: `http://localhost:3000`.

---

## **Estrutura do Projeto**

```
sistema-vendas-frontend/
├── public/                # Arquivos estáticos (imagens, ícones, etc.)
├── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas do Next.js
│   │   ├── api/           # API Routes do Next.js (não utilizado neste caso)
│   │   ├── clientes/      # Páginas relacionadas a clientes
│   │   ├── fornecedores/  # Páginas relacionadas a fornecedores
│   │   ├── produtos/      # Páginas relacionadas a produtos
│   │   ├── vendas/        # Páginas relacionadas a vendas
│   │   ├── compras/       # Páginas relacionadas a compras
│   │   ├── locais/        # Páginas relacionadas a locais
│   │   ├── classificacoes/ # Páginas relacionadas a classificações
│   │   └── index.js       # Página inicial (dashboard)
│   ├── styles/            # Estilos CSS
│   │   └── Home.module.css # Estilos da página
│   └── ...                # Outros arquivos do frontend
├── package.json           # Dependências do frontend
└── ...                    # Outros arquivos de configuração do frontend
```

---

## **Integração com o Backend**

O backend será integrado posteriormente. Para isso, siga os passos abaixo:

1. **Crie o Backend:**
   - Desenvolva as APIs necessárias para o sistema (por exemplo, em PHP, Node.js, etc.).
   - Certifique-se de que as APIs estejam acessíveis via HTTP.

2. **Atualize as Chamadas da API:**
   - No frontend, substitua as simulações de dados pelas chamadas reais à API.
   - Exemplo:
     ```javascript
     const response = await fetch('URL_DO_ENDPOINT_AQUI');
     const data = await response.json();
     ```

3. **Teste a Integração:**
   - Verifique se os dados estão sendo enviados e recebidos corretamente.
   - Ajuste as validações e tratamentos de erro conforme necessário.

---

## **Como Contribuir**

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adicionando nova funcionalidade'
   ```
4. Envie as alterações:
   ```bash
   git push origin minha-feature
   ```
5. Abra um pull request.

---

## **Licença**

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## **Contato**

- **Nome:** Gabriel Silva Oliveira
- **Email:** silvatdb8@gmail.com

---

**Observação:** Este projeto está em desenvolvimento. Novas funcionalidades serão adicionadas conforme necessário.

---