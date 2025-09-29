
📚 Quiz Interativo (React + Vite)
Este é um projeto simples de um Quiz Interativo desenvolvido em React com Vite. Ele é projetado como uma Aplicação de Página Única (SPA) estática, onde toda a experiência do usuário—da tela de início ao resultado final—é gerenciada de forma eficiente pelo estado do componente principal, sem a necessidade de rotas complexas.

✨ Funcionalidades Principais
Fluxo de Jogo Estático: Toda a lógica de exibição (Tela Inicial, Perguntas, Pontuação Final) é controlada por um único estado no componente App.jsx.

Controle de Pontuação: O sistema rastreia e exibe o número de respostas corretas ao longo da sessão.

Transição de Pergunta: Avanço automático para a próxima pergunta após a seleção de uma opção.

Reinício Rápido: Opção para reiniciar o quiz e voltar ao estado inicial.

Estrutura Modular: Uso de componentes separados (como Header) e dados externos (questions.js) para código limpo e organizado.

🛠️ Tecnologias Utilizadas
React: Biblioteca para a construção da interface.

Vite: Ferramenta de build moderna e rápida para desenvolvimento.

JSX: Sintaxe de marcação do React.

JavaScript (ES6+): Lógica principal de gerenciamento de estado.

🚀 Como Iniciar o Projeto
Siga os passos abaixo para ter uma cópia local do projeto rodando.

Pré-requisitos
Certifique-se de ter o Node.js (que inclui o npm) instalado em sua máquina.

1. Instalar Dependências
No diretório raiz do projeto, execute o comando para instalar todas as dependências necessárias:

Bash

npm install
# ou

2. Rodar o Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento do Vite. O projeto estará acessível no seu navegador (geralmente em http://localhost:5173/).

Bash

npm run dev
# ou
yarn dev
📂 Estrutura de Arquivos
A estrutura do projeto é crucial para o seu funcionamento:

quiz-interativo/
├── src/
│   ├── Components/
│   │   ├── Header/          # Componente de Cabeçalho (com seus estilos)
│   │   └── ...
│   ├── data/
│   │   └── questions.js     # Fonte de dados com as perguntas do quiz
│   ├── App.jsx              # Componente principal que gerencia o estado e o fluxo do jogo
│   └── App.css              # Estilos globais do quiz
└── ...