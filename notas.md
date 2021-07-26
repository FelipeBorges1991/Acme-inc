## Considerações sobre o teste

### Páginas

- É solicitado a criação de 3 páginas obrigatórias: (Puxar imagens aleatórias da API [Picsum photos](https://picsum.photos/) )
- Página inicial contendo a lista de produtos da empresa
- Página com detalhes de cada produto
- Página do carrinho de compras, com itens selecionados na página inicial

Acrescentarei uma página "home" para apresentação do site.
**Você deverá garantir que a imagem dos itens não se altere ao longo da navegação em sua ferramenta**

### Funcionalidades

- Adicionar botão de favoritos em cada produto
- Adicionar input para pesquisa de produtos e de favoritos
- Adicionar funcionalidade de remover e adicionar itens do carrinho
- Realizar um checkout do carrinho para gerar um JSON com todas as informações

### Produto

- Para o conteúdo de cada item, como nome, descrição e valor unitário, segue a regra:
  - Para nome do produto: Um conjunto de Verbo + Adjetivo gerado aleatoriamente (sem repetir) seguindo as listas de verbos e adjetivos presentes ao fim deste arquivo.
  - Para descrição: Um texto randômico de sua escolha de 20 a 500 caracteres
  - Para valor, a seguinte pseudo-fórmula:
  - Variáveis:
    - nameLength = [O número de palavras da variável ‘nome’]
    - descrLength = [ O número total de caracteres da variável ‘descrição’ ]
  - Fórmula
    - 10 + nameLength \* ((500 - descrLength) / (4 - nameLength))
