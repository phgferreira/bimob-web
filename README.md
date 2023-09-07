<style>
@font-face {
  font-family: "Garamond";
  src: url("/src/assets/fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf");
  font-style: normal;
  font-weight: 400;
}
.fonte {
  font-family: "Geramond";
}
.fonte2 {
  font-family: Ver;
}
</style>

# Bimob

Jogo de banco imobiliário que permite cadastrar diferentes localidades.

## Instalação
Clone o projeto com um dos comandos abaixo:
```
// HTTPS
git clone https://github.com/phgferreira/bimob-web.git
// SSH
git clone git@github.com:phgferreira/bimob-web.git
// GitHub CLI
gh repo clone phgferreira/bimob-web
```
Acesse a pasta `bimob-web` e baixe as dependências:
```
npm i
```

## Execução
Todos os scripts abaixo são executados seguindo o modelo `npm run <script>`:
```
build     -> Compila todo o código na pasta /dist
dev       -> Sobe o projeto em um servidor web com auto-reload (ambiente de desenvolvimento)
test      -> Executa os testes de unidade (ainda não implementado)
lint      -> Verifica o estilo de código em todo o projeto, configurado em 'eslintrc.cjs'
lint:fix  -> Além de verifica também executa o fix para corrgir as incoformidades no estilo de código
```

## Dependências
Esse projeto utiliza as seguintes bibliotecas:
* [Vue 3](https://vuejs.org/): Framework principal
* [Quasar](https://quasar.dev/): Componentes de interface com o usuário
* [Vite](https://vitejs.dev/): Ferramenta de construção e desenvolvimento front-end
* [Vue Router](https://router.vuejs.org/): Gerenciamento das rotas
* [Typescript](https://www.typescriptlang.org/): Biblioteca de tipagem
* [Vitest](https://vitest.dev/): Teste de unidade
* [Quasar Testing](https://testing.quasar.dev/packages/unit-vitest/): Extensão para teste de unidade com Vitest e Quasar
* [Cypress](https://www.cypress.io/): Teste end-to-end

## Estrutura de arquivos
```
                        ->
public                  -> Arquivos públicos
src                     -> Código fonte
  | assets              -> Arquivos usados pelo código fonte (ícones, imagens, etc.)
  | boot                ->
  | components          -> Componentes escritos em VueJs
  | css                 -> Arquivos de estilo
  | layouts             -> Layouts que podem ser usados como templates em páginas
  | pages               -> Páginas escritas em VueJs
  | router              -> Arquivos de configuração de rotas
  | App.vue             -> Componente principal, responsável por englobar os demais
.eslintignore           -> Lista de pastas ignoradas pelo Lint
.eslintrc.cjs           -> Arquivo de configuração e regras do Lint
.gitignore              -> Lista dos arquivos que serão ignorados pelo git
index.html              -> Página HTML que recebe todo o conteúdo do Vue
package.json            -> Arquivo de configuração do projeto
postcss.config.cjs      -> Arquivo de configuração do PostCSS
quasar.config.js        -> Arquivo de configuração do Quasar
REAMEME.md              -> Explicação do projeto
tsconfig.json           -> Arquivo de configuração do Typescript
```

## Paleta de cores
```css
/* Em Hexadecimal*/
.bimob-1-hex { color: #151859; }
.bimob-2-hex { color: #222559; }
.bimob-3-hex { color: #03A64A; }
.bimob-4-hex { color: #4EBF7F; }
.bimob-5-hex { color: #F2F2F2; }

/* Em RGBA */
.bimob-1-rgba { color: rgba(20, 23, 89, 1); }
.bimob-2-rgba { color: rgba(33, 36, 89, 1); }
.bimob-3-rgba { color: rgba(3, 165, 73, 1); }
.bimob-4-rgba { color: rgba(78, 191, 127, 1); }
.bimob-5-rgba { color: rgba(242, 242, 242, 1); }

/* Em HSLA */
.bimob-1-hsla { color: hsla(236, 62, 21, 1); }
.bimob-2-hsla { color: hsla(236, 44, 24, 1); }
.bimob-3-hsla { color: hsla(146, 96, 33, 1); }
.bimob-4-hsla { color: hsla(146, 46, 52, 1); }
.bimob-5-hsla { color: hsla(0, 0, 95, 1); }
```
Fonte da paleta: [Adobe Color](https://color.adobe.com/)

## Tipografia
A fonte escolhida para esse projeto é a EB Garamond simplesmente por ser uma fonte elegante, existem outras fontes consideradas elegantes como a *Times New Roman* mas eu quis que fosse uma fonte diferente.

<h1 class="fonte">Título 1</h1>
<h2 class="fonte">Título 2</h2>
<h3 class="fonte">Título 3</h3>
<h4 class="fonte">Título 4</h4>
<h5 class="fonte">Título 5</h5>
<h6 class="fonte">Título 6</h6>
<span class="fonte">Normal</span><br>
<strong class="fonte">Negrito</strong><br>
<em class="fonte">Itálico</em><br>

