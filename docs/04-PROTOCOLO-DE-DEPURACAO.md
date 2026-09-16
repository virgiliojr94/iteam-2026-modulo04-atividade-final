## 7. Protocolo de depuração

Antes de perguntar qualquer coisa a qualquer pessoa ou assistente, passe por aqui. Este protocolo é o conteúdo mais durável do módulo.

1. **Leia a primeira mensagem de erro**, não a última. Erros em cascata nascem do primeiro.
2. **Copie a mensagem inteira** para o `DIARIO.md`. O ato de copiar já revela coisa.
3. **Localize o arquivo e a linha.** A mensagem quase sempre diz.
4. **Formule a pergunta em uma frase** começando com "eu esperava X e aconteceu Y".
5. **Reduza.** Comente metade do código. O erro continua? Está na metade que ficou.
6. **Um experimento por vez.** Duas mudanças simultâneas escondem qual delas resolveu.
7. **Procure o nome do erro na documentação oficial**, não em fórum.
8. **Só então pergunte** — e pergunte trazendo os itens 1 a 7.

Erros que você provavelmente vai encontrar, e o que cada um costuma estar dizendo:

| Mensagem | O que investigar |
| --- | --- |
| `X is not defined` | import, export, grafia do nome do arquivo |
| Tela branca | primeira exceção no console do navegador |
| `Each child in a list should have a unique "key"` | onde o `map()` cria elementos |
| `Cannot read properties of undefined` | origem e nome da prop |
| `Cannot destructure property ... of null` | o Provider envolve esse componente? |
| Campo não aceita digitação | `value` existe, `onChange` não atualiza o estado |
| Página recarrega ao enviar | `preventDefault` no `onSubmit` |
| `Invalid hook call` | Hook dentro de `if`, laço ou função comum |
| Loop infinito de renderização | efeito atualizando o estado do qual ele depende |
| Variável de ambiente `undefined` | prefixo, e servidor reiniciado depois da mudança |
| `No routes matched location` | `path` e URL |
| `useNavigate` fora do Router | onde o `BrowserRouter` envolve a árvore |
