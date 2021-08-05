# Tarefa de casa para Desenvolvimento Front-end da Hype

Link para a aplicação: [Link](https://felipe-acme-inc.netlify.app/)

## Apresentação dos resultados:

- Link para página estática -

## Considerações sobre o teste

- A documentação do teste é clara e objetiva.
- Entendi que a empresa quer que seja criada uma aplicação web de E-commerce, devido à necessidade de implementação da funcionalidade carrinho.
- Possibilidade de utilizar qualquer tipo de linguagem de programação. Utilizarei JavaScript, React, axios e Bootstrap(UI).
- Será avaliado a arquitetura do código, interface e experiencia do usuário e apresentação dos resultados.
- Escolhi como apresentação de resultados a página estática hospedada no Netilify.

## Diário

O objetivo dessa sessão é explicitar a minha linha de raciocínio, coisas que eu executei ou tentei executar, conforme o andamento do projeto.

### 26/07/2021 (1º dia)

- [x] Leitura da documentação do teste
- [x] Criação da aplicação com create react app
- [x] Instalação das dependencias (Axios, ReactRouterDom e Bootstrap)
- [x] Escolher paleta de cores e fonte (Fonte = Ubunto; Cores = fundo(#193C40); elementos(#F28705); textos(#F2EDE9))
- [x] Criação dos componentes das páginas e rotas
- [x] Executar componente da página inicial (Home) e renderizar página com título e botão com link para a rota de lista de produtos.
- [x] Atualizar componente App.js com a rota da página inicial.
- [x] Renderizar produtos na rota ProductList

Tive dificuldade em renderizar apenas fotos aleatórias da API, não consegui fazer a conexão com a url responsável por isso (https://picsum.photos/200/300). Por isso fiz a conexão com a url que contém as imagens e renderizei as 20 primeiras. Para não atrasar o projeto, irei dar continuidade às outras funcionalidade, e quando tiver tempo voltarei para tentar resolver o problema.

### 27/07/2021 (2º dia)

- [x] Acrescentar os nomes de cada produto, utilizando as variáveis solicitadas no teste.
- [x] Executar componentes Navbar e Footer
- [x] Iniciar confecção do componente de rota ProductDetail
- [] Incluir nome do produto na rota Product Detail
- [x] Incluir descrição do produto, de acordo com o que foi solicitado no teste.

### 28/07/2021 (3º dia) / 29/07/2021 (4º dia) / 30/07/2021 (5º dia)

Durante esses dias ocorreram imprevistos, problemas pessoais e de saúde. Por isso não consegui implementar as funções necessárias e nem aplicar os códigos que eu queria. Seguem abaixo algumas coisas que consegui realizar, quando arrumava tempo.

- Lógica do carrinho de compras com useContext, porém sem o botão com funão de adicionar.
- Rota para a lista do carrinho (porén vazia)

### Dias extras!!

- [x] Implementada função de preço de cada produto na rota ProductList
- [x] Implementada funcionalidade de busca por produtos(Bug.. A busca está filtrando as imagens de cada produto pelo texto. Porém não retorna o texto junto)
- [x] Lógica do carrinho rota do carrinho (Mesmo os itens sendo adicionados ao state, não consegui passar para a rota do carrinho em si)
- [x] Acrescentar botão de favoritos (Bug... Está selecionando todos os elementos, e o botão só volta pro state inicial depois de dois clicks)
- [x] Implementar fórmula de preço para cada produto.
