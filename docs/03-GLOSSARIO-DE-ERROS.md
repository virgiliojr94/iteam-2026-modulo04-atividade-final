# Glossário de erros

Use este arquivo para interpretar a mensagem e montar um experimento. Ele não entrega a correção.

## `X is not defined`

**O que a mensagem está dizendo:** um nome foi usado onde o JavaScript não encontra uma definição visível para ele.

**Três lugares para olhar, em ordem:**
1. o import do arquivo que apresenta o erro
2. o export do arquivo de origem
3. a grafia do nome e do caminho do arquivo

**Como provar:** isole a linha indicada pelo console e confira, um por um, se o nome existe na origem e chega ao arquivo atual.

## Tela branca

**O que a mensagem está dizendo:** a renderização foi interrompida por uma exceção antes de a interface conseguir aparecer.

**Três lugares para olhar, em ordem:**
1. a primeira exceção no console do navegador
2. o arquivo e a linha apontados nessa primeira exceção
3. a última mudança feita antes da tela desaparecer

**Como provar:** recarregue com o console aberto e anote apenas o primeiro erro; volte temporariamente a última mudança e veja se a tela reaparece.

## `Each child in a list should have a unique "key"`

**O que a mensagem está dizendo:** uma lista renderizada tem itens sem uma identidade estável que o React consiga acompanhar.

**Três lugares para olhar, em ordem:**
1. o ponto em que a lista é transformada em elementos
2. o valor usado como identidade de cada item
3. se esse valor continua o mesmo quando a ordem da lista muda

**Como provar:** observe os dados de dois ou três itens antes e depois de reordenar ou excluir e verifique se a identidade escolhida continua pertencendo ao mesmo item.

## `Cannot read properties of undefined`

**O que a mensagem está dizendo:** alguma expressão tentou acessar uma propriedade de um valor que naquele momento era `undefined`.

**Três lugares para olhar, em ordem:**
1. a linha exata indicada no stack trace
2. a origem da prop ou do valor usado nessa linha
3. a grafia do nome entre quem envia e quem recebe o dado

**Como provar:** inspecione o valor imediatamente antes do acesso e confirme se ele já existe no momento da renderização.

## `Cannot destructure property ... of null`

**O que a mensagem está dizendo:** um valor `null` chegou onde o componente esperava receber um objeto e a desestruturação tentou abri-lo.

**Três lugares para olhar, em ordem:**
1. o componente que aparece no topo útil do stack trace
2. a árvore acima dele e o Provider esperado
3. o contexto importado e o contexto realmente fornecido

**Como provar:** observe o valor retornado antes da desestruturação; se ele estiver `null`, a hipótese está confirmada.

## Campo não aceita digitação

**O que a mensagem está dizendo:** o valor visível do campo está sendo controlado, mas a mudança feita pelo usuário não está conseguindo atualizar a fonte desse valor.

**Três lugares para olhar, em ordem:**
1. o valor entregue ao campo
2. o evento disparado ao digitar
3. a atualização do estado usada por esse evento

**Como provar:** digite um caractere e acompanhe no React DevTools se o estado correspondente muda junto com o campo.

## Página recarrega ao enviar

**O que a mensagem está dizendo:** o envio do formulário está seguindo o comportamento padrão do navegador em vez de permanecer dentro da aplicação.

**Três lugares para olhar, em ordem:**
1. o elemento que recebe o envio
2. o handler associado ao envio
3. o primeiro passo executado por esse handler

**Como provar:** abra a aba Network ou observe a navegação ao enviar; se o documento inteiro recarregar, o comportamento padrão ainda está ativo.

## `Invalid hook call`

**O que a mensagem está dizendo:** um Hook foi chamado num lugar em que as regras de Hooks não permitem, ou a aplicação está com uma combinação inválida de React.

**Três lugares para olhar, em ordem:**
1. o local exato de cada chamada de Hook no componente envolvido
2. se alguma chamada está dentro de condição, laço ou função comum
3. as versões e a quantidade de instalações do React no projeto

**Como provar:** reduza o componente até localizar a chamada cuja posição depende de uma condição ou que não está no corpo de um componente/função permitida.

## Loop infinito de renderização

**O que a mensagem está dizendo:** uma atualização está causando nova renderização que dispara a mesma atualização repetidamente.

**Três lugares para olhar, em ordem:**
1. efeitos que atualizam estado
2. dependências desses efeitos
3. handlers que podem estar sendo executados durante a renderização

**Como provar:** pare a execução, observe qual valor muda em toda renderização e remova temporariamente uma única atualização para identificar o ciclo.

## Variável de ambiente `undefined`

**O que a mensagem está dizendo:** o valor esperado não foi exposto ao código do navegador na forma em que o Vite disponibiliza variáveis.

**Três lugares para olhar, em ordem:**
1. o nome da variável no arquivo de ambiente
2. o lugar em que ela é lida no código
3. se o servidor de desenvolvimento foi iniciado antes ou depois da última alteração no ambiente

**Como provar:** confira o valor lido em tempo de execução e reinicie o servidor apenas como experimento para comparar o resultado.

## `No routes matched location`

**O que a mensagem está dizendo:** a URL atual não correspondeu a nenhum caminho declarado na árvore de rotas.

**Três lugares para olhar, em ordem:**
1. a URL exata mostrada no navegador
2. os caminhos declarados na árvore de rotas
3. a relação entre rota pai, rota filha e segmentos dinâmicos

**Como provar:** compare, segmento por segmento, a URL atual com a árvore de rotas e teste primeiro o caminho pai antes do filho.

## `useNavigate` fora do Router

**O que a mensagem está dizendo:** um recurso de navegação foi usado por um componente que não está sendo renderizado dentro do contexto de roteamento.

**Três lugares para olhar, em ordem:**
1. o componente que chama a navegação
2. a árvore de renderização acima desse componente
3. o ponto em que o Router envolve a aplicação

**Como provar:** desenhe ou inspecione a árvore de componentes e confirme se o componente problemático está realmente abaixo do Router.
