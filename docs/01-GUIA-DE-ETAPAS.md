# Guia de etapas
Use este arquivo como mapa de trabalho. Os critérios abaixo são a mesma régua de `ATIVIDADE.md`; as perguntas existem para orientar a investigação sem entregar implementação.

## E1 · Ambiente e primeiro commit (5 pts)
**Marco da etapa:** Ambiente e primeiro commit passa a estar verificável pelos critérios abaixo.
**Capítulo da apostila:** 1

### Critérios de aceite

- [ ] Repositório criado a partir do template, clonado localmente.
- [ ] `npm install` e `npm run dev` funcionam e a URL local abre sem tela branca.
- [ ] `.gitignore` ignora `node_modules`, `dist`, `.env` e `.env.*`, mas **não** ignora `.env.example`.
- [ ] `.env.example` versionado; `.env` **não** aparece em `git status`.
- [ ] Primeiro commit enviado ao GitHub.

> **Atenção de sala:** se você for recriar o projeto do zero com `npm create vite@latest .`, confirme antes com `pwd` que você está **dentro da pasta do projeto**. Rodar esse comando na sua pasta pessoal apaga arquivos da pasta atual. É um acidente real, comum e irreversível.

### O que a apostila não te deu

Missões: **nenhuma**.

### Perguntas para se fazer antes de codar

- Você consegue abrir a URL local sem tela branca antes de começar a implementar?
- O que o seu `git status` mostra antes do primeiro commit?
- Quais arquivos nunca podem aparecer no repositório?

### Como testar

1. Rode a instalação e o servidor de desenvolvimento em um clone local.
2. Abra a URL mostrada pelo Vite e confirme que a tela de partida aparece sem tela branca.
3. Rode `git status` e confirme que `.env`, `node_modules` e `dist` não estão sendo rastreados.
4. Abra o GitHub depois do push e confirme que o primeiro commit chegou.

### Sinal de que você terminou

Todos os critérios de aceite da **E1** podem ser demonstrados no navegador, DevTools ou Git sem explicação baseada em “deveria funcionar”.

## E2 · Componentes, listas e chaves (10 pts)
**Marco da etapa:** Componentes, listas e chaves passa a estar verificável pelos critérios abaixo.
**Capítulo da apostila:** 2

### Critérios de aceite

- [ ] Existem, em arquivos separados: `CartaoTarefa`, `ListaTarefas`, `Painel`.
- [ ] `ListaTarefas` gera os cartões a partir do array com `map()`, sem `<article>` repetido à mão.
- [ ] Cada item tem `key` estável vinda do dado, não o índice do array.
- [ ] Lista vazia mostra uma mensagem própria, diferente de erro.
- [ ] O cartão de tarefa concluída tem aparência diferente do pendente (renderização condicional).
- [ ] O console do navegador não mostra aviso de `key`.

### O que a apostila não te deu

Missões: **M11**.

### Perguntas para se fazer antes de codar

- Qual parte da interface se repete e merece virar componente?
- Qual valor do dado continua estável mesmo quando a posição da tarefa muda?
- O que a interface deve mostrar quando a lista estiver vazia?
- Como você vai perceber visualmente a diferença entre uma tarefa concluída e uma pendente?

### Como testar

1. Com os dados iniciais, confirme que cada tarefa vira exatamente um cartão na tela.
2. Abra o console do navegador e confirme que não existe aviso de `key`.
3. Teste temporariamente uma lista vazia e confirme que aparece uma mensagem própria.
4. Compare uma tarefa concluída e uma pendente e confirme que a diferença é visível.

### Sinal de que você terminou

Todos os critérios de aceite da **E2** podem ser demonstrados no navegador, DevTools ou Git sem explicação baseada em “deveria funcionar”.

## E3 · Props, callbacks e children (10 pts)
**Marco da etapa:** Props, callbacks e children passa a estar verificável pelos critérios abaixo.
**Capítulo da apostila:** 3

### Critérios de aceite

- [ ] `CartaoTarefa` recebe dados **somente leitura** por props e não altera nenhuma delas.
- [ ] `Painel` usa a prop especial `children` e é reutilizado em pelo menos dois lugares com conteúdos diferentes.
- [ ] Uma ação nasce no cartão e é executada por uma função recebida do componente que possui o estado.
- [ ] Nenhum handler é executado durante a renderização (nada de `onClick={minhaFuncao(id)}`).

### O que a apostila não te deu

Missões: **nenhuma**.

### Perguntas para se fazer antes de codar

- Quais dados cada cartão precisa apenas receber e exibir?
- Qual componente realmente deve executar a ação iniciada no cartão?
- Em que dois lugares o mesmo contêiner visual pode receber conteúdos diferentes?
- Algum handler seu está sendo chamado durante a renderização em vez de ser entregue ao evento?

### Como testar

1. Acione a interação no cartão e observe se a ação chega ao componente que possui o estado.
2. Use o mesmo `Painel` em dois lugares e confirme que os conteúdos internos podem ser diferentes.
3. Recarregue a página e confirme que nenhuma ação dispara sozinha durante a renderização.

### Sinal de que você terminou

Todos os critérios de aceite da **E3** podem ser demonstrados no navegador, DevTools ou Git sem explicação baseada em “deveria funcionar”.

## E4 · Estado, imutabilidade e exclusão (15 pts)
**Marco da etapa:** Estado, imutabilidade e exclusão passa a estar verificável pelos critérios abaixo.
**Capítulo da apostila:** 4

### Critérios de aceite

- [ ] `useState` guarda o array de tarefas.
- [ ] Alternar concluída/pendente funciona **sem mutar** o array nem o objeto originais.
- [ ] **Excluir tarefa** funciona e remove apenas a tarefa clicada.
- [ ] O total de concluídas é **valor derivado**, calculado na renderização. Não existe um segundo `useState` guardando essa contagem.
- [ ] Depois de excluir a tarefa do meio da lista, as demais continuam corretas. *(Se você usou o índice como `key`, é aqui que vai quebrar. Investigue antes de perguntar.)*

### O que a apostila não te deu

Missões: **M11**.

### Perguntas para se fazer antes de codar

- Quem deve ser o dono do array de tarefas?
- Quando uma tarefa muda, você cria um array e um objeto novos ou altera os existentes?
- A contagem de concluídas precisa ser armazenada ou pode ser calculada a partir das tarefas?
- O que acontece com as tarefas restantes quando você exclui o item do meio?

### Como testar

1. Alterne uma tarefa e confirme que só ela muda.
2. Exclua a tarefa do meio e confirme que as demais continuam associadas aos dados corretos.
3. Observe a contagem de concluídas antes e depois de alternar uma tarefa e confirme que ela acompanha o array.
4. Use o React DevTools para observar a mudança do estado depois de uma atualização.

### Sinal de que você terminou

Todos os critérios de aceite da **E4** podem ser demonstrados no navegador, DevTools ou Git sem explicação baseada em “deveria funcionar”.

## E5 · Formulário controlado (15 pts)
**Marco da etapa:** Formulário controlado passa a estar verificável pelos critérios abaixo.
**Capítulo da apostila:** 5

### Critérios de aceite

- [ ] Formulário de nova tarefa com quatro campos: título (texto), categoria (**`<select>` controlado**), voluntários (número) e uma caixa de seleção para "já concluída".
- [ ] Todos os campos são controlados pelo estado. Nenhum campo mantém o valor apenas no DOM.
- [ ] Validação: título obrigatório, voluntários precisa ser número maior que zero. Mensagem de erro visível, sem `alert`.
- [ ] `onSubmit` no `<form>` com `event.preventDefault()`. A página não recarrega.
- [ ] Após sucesso, a tarefa aparece na lista imediatamente e o formulário é limpo.
- [ ] A nova tarefa recebe um `id` próprio, e não a posição na lista.
- [ ] **Filtro por categoria** funciona: um controle permite ver só uma categoria ou todas, e a contagem exibida reflete o que está visível.

> Três coisas aqui não estão escritas na apostila: como se controla um `<select>`, como se controla uma caixa de seleção, e como o `<select>` difere de um `<input>` quanto ao atributo que carrega o valor. Missões **M1**, **M2** e **M3**.

### O que a apostila não te deu

Missões: **M1, M2 e M3**.

### Perguntas para se fazer antes de codar

- Quais valores do formulário precisam nascer do estado e voltar para os campos?
- Como você vai representar a categoria escolhida e a caixa de seleção no estado?
- Quais condições tornam o envio inválido antes de adicionar uma tarefa?
- Qual lista deve alimentar a tela quando o filtro deixa de ser “todas”?

### Como testar

1. Tente enviar com título vazio e depois com voluntários igual a zero; a página não deve recarregar.
2. Preencha todos os campos, cadastre e confirme que a nova tarefa aparece e o formulário volta ao estado inicial.
3. Troque o filtro entre todas as categorias e uma categoria específica e confira lista e contagem visíveis.
4. Edite cada campo e confirme que o valor mostrado acompanha o estado controlado.

### Sinal de que você terminou

Todos os critérios de aceite da **E5** podem ser demonstrados no navegador, DevTools ou Git sem explicação baseada em “deveria funcionar”.

## E6 · Efeitos, persistência e limpeza (15 pts)
**Marco da etapa:** Efeitos, persistência e limpeza passa a estar verificável pelos critérios abaixo.
**Capítulo da apostila:** 6

### Critérios de aceite

- [ ] As tarefas sobrevivem ao recarregamento da página (persistência no navegador).
- [ ] A leitura inicial acontece **uma vez**, e não a cada renderização.
- [ ] Se o dado salvo estiver corrompido, a aplicação volta aos dados iniciais **sem tela branca**. Teste editando o valor à mão no DevTools e recarregando.
- [ ] O título da aba reflete o progresso e tem **função de limpeza** que restaura o título anterior.
- [ ] Os arrays de dependência listam exatamente os valores reativos lidos por cada efeito. Nada removido para calar aviso.

### O que a apostila não te deu

Missões: **M9 e M12**.

### Perguntas para se fazer antes de codar

- Qual dado precisa ser lido apenas na inicialização e qual precisa ser gravado quando muda?
- O que sua aplicação deve fazer se o valor salvo não puder ser lido como dado válido?
- Qual valor reativo cada efeito lê e, portanto, precisa considerar nas dependências?
- Que estado externo deve voltar ao valor anterior quando o efeito for limpo?

### Como testar

1. Altere tarefas, recarregue a página e confirme que o estado salvo volta.
2. Abra DevTools → Application → Local Storage, corrompa manualmente o valor salvo e recarregue; a aplicação não deve ficar branca.
3. Observe o título da aba enquanto o efeito está ativo e depois ao sair/desmontar a parte responsável.
4. Com React StrictMode em desenvolvimento, observe a execução dos efeitos sem remover dependências para esconder comportamento.

### Sinal de que você terminou

Todos os critérios de aceite da **E6** podem ser demonstrados no navegador, DevTools ou Git sem explicação baseada em “deveria funcionar”.

## E7 · Contexto, rotas e rede (20 pts)
**Marco da etapa:** Contexto, rotas e rede passa a estar verificável pelos critérios abaixo.
**Capítulo da apostila:** 7, 8, 9, 10 e 11

### Critérios de aceite

**Contexto**
- [ ] Um `TarefasProvider` possui estado, persistência e ações; os componentes consomem o contexto.
- [ ] Nenhum componente intermediário recebe uma prop só para repassá-la.
- [ ] Se um componente for usado fora do Provider, o erro é claro e informa isso.

**Rotas** — exatamente sete, nem mais nem menos:

| Caminho | Tela |
| --- | --- |
| `/` | painel do dia |
| `/nova` | cadastro |
| `/tarefas` | lista completa (rota pai com layout próprio) |
| `/tarefas/:tarefaId` | detalhe de uma tarefa |
| `/relatorio` | relatório, com condição de acesso |
| `/sugestoes` | sugestões vindas da API |
| `/sobre` | sobre o projeto |
| `*` | página não encontrada |

- [ ] Navegação por `Link`/`NavLink`, sem recarregar o documento.
- [ ] O link da raiz **não** fica ativo em todas as rotas.
- [ ] `/tarefas` usa rota aninhada com `Outlet`. O cabeçalho não aparece duplicado.
- [ ] `/tarefas/:tarefaId` mostra a tarefa correta e trata id inexistente com mensagem própria.
- [ ] Há um botão que volta uma entrada no histórico e outro que vai a um destino fixo. Você deve saber explicar quando usar cada um.
- [ ] `/relatorio` redireciona quando não há tarefas, e **nunca exibe `NaN`**.
- [ ] Após cadastrar, a aplicação navega por código para o painel.

**Rede**
- [ ] Módulo de serviço separado em `src/services/`. Nenhum `fetch` dentro de componente de tela.
- [ ] URL base vem de variável de ambiente, com valor padrão seguro. Documentada no `.env.example`.
- [ ] O status HTTP é verificado antes de ler o corpo da resposta.
- [ ] A carga é automática ao entrar em `/sugestoes`.
- [ ] Os quatro estados aparecem **sem se sobrepor**: inicial, carregando, sucesso (com lista ou com "nenhum resultado") e erro (com botão de tentar novamente que realmente refaz a busca).
- [ ] Resposta vazia é tratada como sucesso sem itens, não como erro.
- [ ] A requisição é cancelada ao sair da página, e o cancelamento **não** vira mensagem de erro para o usuário.
- [ ] `npm run build` termina sem erro e `npm run preview` serve a aplicação com todas as rotas funcionando.

### O que a apostila não te deu

Missões: **M4, M5, M6, M7, M8 e M10**.

### Perguntas para se fazer antes de codar

- Quais dados e ações são compartilhados por telas distantes o suficiente para justificar contexto?
- Qual parte visual pertence ao layout da rota pai e qual parte muda nas rotas filhas?
- Quais valores da URL chegam pela rota e em que ponto você precisa compará-los com seus dados?
- Como cada um dos quatro estados da requisição pode aparecer sem se sobrepor aos demais?
- O que deve acontecer com uma requisição quando o usuário sai da página antes do fim?

### Como testar

1. Clique por todas as sete rotas e depois digite cada URL diretamente na barra do navegador.
2. Acesse um id existente e um inexistente na rota de detalhe e observe os dois resultados.
3. Teste a condição do relatório com e sem tarefas e confirme que nunca aparece `NaN`.
4. Na tela de sugestões, observe separadamente estado inicial, carregamento, sucesso com itens, sucesso vazio e erro com nova tentativa.
5. Inicie a carga de sugestões e saia da rota antes de concluir; confirme que o cancelamento não vira erro visível.
6. Rode `npm run build` e `npm run preview` e repita a navegação no build.

### Sinal de que você terminou

Todos os critérios de aceite da **E7** podem ser demonstrados no navegador, DevTools ou Git sem explicação baseada em “deveria funcionar”.

## E8 · Entrega (10 pts)
**Marco da etapa:** Entrega passa a estar verificável pelos critérios abaixo.
**Capítulo da apostila:** 1 e 11

### Critérios de aceite

- [ ] `README.md` explica requisitos, instalação, execução, build e funcionalidades.
- [ ] `RESPOSTAS.md` com as 12 missões respondidas, cada uma com a **URL** onde você achou a resposta.
- [ ] `DIARIO.md` com no mínimo 5 entradas contendo mensagens de erro reais.
- [ ] Histórico com no mínimo 8 commits progressivos e mensagens descritivas.
- [ ] `git status` limpo. Sem `.env`, sem `node_modules`, sem `dist`, sem segredos.

### O que a apostila não te deu

Missões: **nenhuma**.

### Perguntas para se fazer antes de codar

- O README permite que outra pessoa instale, rode, gere o build e entenda as funcionalidades?
- As doze missões têm resposta em suas palavras, URL oficial e localização no código?
- O diário contém pelo menos cinco mensagens de erro reais e o que você fez com elas?
- O histórico mostra progresso por etapas em vez de um único commit final?

### Como testar

1. Faça um clone limpo em outra pasta e siga somente o README até a aplicação abrir.
2. Confira `RESPOSTAS.md`, `DIARIO.md` e o histórico de commits contra o checklist final.
3. Rode `git status` e confirme que está limpo e que arquivos locais/gerados não foram versionados.
4. Abra o repositório no GitHub e confirme que o último push contém todos os arquivos de entrega.

### Sinal de que você terminou

Todos os critérios de aceite da **E8** podem ser demonstrados no navegador, DevTools ou Git sem explicação baseada em “deveria funcionar”.
