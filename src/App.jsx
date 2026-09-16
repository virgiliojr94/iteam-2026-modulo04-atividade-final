import "./App.css";

/*
  MUTIRÃO DO BAIRRO — ponto de partida.

  Este arquivo está propositalmente quase vazio. Construir a aplicação é a
  atividade. Leia ATIVIDADE.md e docs/01-GUIA-DE-ETAPAS.md antes de escrever
  a primeira linha.

  Ordem sugerida (cada etapa tem critérios de aceite no ATIVIDADE.md):
    E2  componentes, lista com map() e key estável
    E3  props, callback do filho para o pai, children
    E4  useState, atualização imutável, excluir, valor derivado
    E5  formulário controlado, select, validação, filtro
    E6  useEffect, persistência no navegador, limpeza
    E7  contexto, rotas, requisição HTTP com quatro estados

  As pastas já existem para orientar a organização:
    src/components  src/context  src/layouts  src/pages  src/services

  Antes de pedir ajuda, passe pelo docs/04-PROTOCOLO-DE-DEPURACAO.md.
*/

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">MUTIRÃO DO BAIRRO</p>
        <h1>Ponto de partida</h1>
        <p>
          Se você está lendo isto no navegador, o ambiente está funcionando.
          Agora abra o ATIVIDADE.md e comece pela etapa E1.
        </p>
      </header>
    </main>
  );
}
