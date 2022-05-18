let nomeAluno = "John Doe";

let idadeAluno = 20;

let nota1 = 7;
let nota2 = 8.5;
let nota3 = 6.9;

let mediaAluno = (nota1 * 4 + nota2 * 3 + nota3 * 3) / (4 + 3 + 3);

console.log(nomeAluno, idadeAluno, mediaAluno);

if (mediaAluno >= 7) {
  console.log("Aluno aprovado");
} else if (mediaAluno !== 0) {
  console.log("Aluno reprovado");
} else {
  console.log("Aluno zerou");
}
