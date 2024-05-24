# Projeto: Adivinhaê

Olá, 

Vamos iniciar um jogo de adivinhação projeto final do módulo de lógica de programação do ciclo 10.

## Funcionalidades do Adivinhaê
### ----- Momento guiado -----
  1. [ x ] Não aceitar palpites vazios.
  2. [ ] Dar dicas a cada palpite errado.
  3. [ ] Atualizar a pontuação a cada palpite errado.
  4. [ ] Mostrar todos os palpites errados do jogo para evitar que repitam o erro.
  5. [ ] Possibilidade de poder reiniciar o jogo a qualquer momento.
  6. [ ] Se a pontuação chegar a zero, deve ser exibido um alerta e o jogo reiniciado.

### ----- Momento individual -----
  7. [ ] Só deve aceitar numeros entre 1 e 100.
  8. [ ] Não deve aceitar palpite repetido. Ou seja, o usuário deve ser alertado de que já tentou esse palpite, não devemos contar como palpite, nem adicionar na lista de palpites errados.
  9. [ ] Publicar no netlify

## Instruções

Para começar a praticar, siga estes passos:

1. Crie um fork e Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` em seu navegador para acessar o Adivinhaê.

## Recursos Adicionais

- Durante o projeto guiado, preste atenção e siga o fluxo, caso contrário você terá que fazer todas as funcionalidades sozinha depois.
- Explore o código existente para maior entendimento.
- Cuidado ao mexer no html, css e scripts. Esses arquivos compões a base do seu código e alterações podem quebrar o código. Se souber o que está fazendo fique a vontade <3

## Estrutura de Pastas:

```
- assets/
- src/
  - index.js
  - script.js
- index.html
- styles.css
- README.md
```

## Diagrama de Organização do Projeto:

```
      +-----------------+---+--
      |   projeto Adivinhaê   |
      +--------+--------+---+---
               |
               v
      +-----------------+
      | assets/         |
      |  background.png |
      |  magic-wand.png |
      +-----------------+
               |
               v
      +-----------------+
      |  src/           |
      |    script.js    |
      |    index.js     |
      +-----------------+
               |
               v
      +-----------------+
      |    styles.css   |
      +-----------------+
               |
               v
      +-----------------+
      |   index.html    |
      +-----------------+
               |
               v
      +-----------------+
      |    README.md    |
      +-----------------+
```

## Passo a Passo para realizar a sua entrega do Projeto

Certifique-se de seguir cada passo cuidadosamente para garantir que suas contribuições sejam integradas ao repositório original.

- [ ] **Fork do Repositório:**
   - [ ] Acesse o repositório de [origem](https://github.com/lisandrascruz/PretaLab-c10-Disney-LP-Projeto).
   - [ ] No canto superior direito da página, clique no botão "Fork" para criar uma cópia do repositório para sua conta.

- [ ] **Clone do Fork na Sua Máquina:**
   - [ ] No seu perfil do GitHub, acesse o fork do repositório que você acabou de criar.
   - [ ] Clique no botão verde "Code" e copie o URL fornecido.
   - [ ] Abra o terminal ou prompt de comando no diretório onde deseja clonar o repositório.
   - [ ] Execute o comando `git clone URL-do-seu-fork`.

- [ ] **Prepare-se para as mudanças:**
   - [ ] Navegue para o diretório do projeto usando o comando `cd nome-do-repositório` ou abra a pasta de forma visual.

- [ ] **Inserir sua Resposta:**
   - [ ] Dentro da pasta "src", localize o arquivo script.js.
   - [ ] Edite o arquivo implementando as funcionalidades.

- [ ] **Adicione as Mudanças:**
   - [ ] Para adicionar todas as alterações, execute o comando `git add .` 
   - [ ] Se preferir adicionar apenas um arquivo específico, use `git add nome_do_arquivo`.

- [ ] **Commit das Mudanças:**
   - [ ] Commit cada mudança faça um commit utilizando o comando `git commit -m "Mensagem do commit"`.

- [ ] **Envie as Alterações para o GitHub:**
   - [ ] Envie os commits para sua branch usando o comando `git push`.

- [ ] **Publique no netlify**

## Conclusão

Agora você está familiarizado em como criar uma aplicação usando a triade web: html, css e javascript. Experimente personalizar e expandir este projeto para ser parte do seu portifólio pessoal. A prática é a chave para entendermos cada vez mais a lógica de programação!

Divirta-se jogando e enviando seu jogo para os amiguinhas através da url do netlify! Se tiver dúvidas ou precisar de ajuda, não hesite em nos contatar.