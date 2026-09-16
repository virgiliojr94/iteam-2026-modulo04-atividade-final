// Dados semente do Mutirão do Bairro.
// Categorias válidas: "limpeza" | "pintura" | "jardim" | "doacao"
// Cada tarefa tem um id próprio e estável. Ele continua o mesmo mesmo que a
// posição do item na lista mude — isso vai importar quando você escolher as keys.

export const tarefasIniciais = [
  {
    id: "praca-limpeza",
    titulo: "Limpeza da praça central",
    categoria: "limpeza",
    voluntarios: 4,
    concluida: false,
  },
  {
    id: "muro-pintura",
    titulo: "Pintura do muro da escola",
    categoria: "pintura",
    voluntarios: 2,
    concluida: true,
  },
  {
    id: "horta-comunitaria",
    titulo: "Preparo da horta comunitária",
    categoria: "jardim",
    voluntarios: 6,
    concluida: false,
  },
];
