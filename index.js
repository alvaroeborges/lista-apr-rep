const nomeE1 = document.getElementById("nome");
const notaE1 = document.getElementById("nota");
const tabelaE1 = document.querySelector("#tabela tbody");
const botaoAdicionar = document.getElementById("adicionar");
const botaoImprimir = document.getElementById("imprimir");

function adicionarAluno() {
  // Pega os valores e remove espaços em branco do nome
  const nome = nomeE1.value.trim();
  const nota = parseFloat(notaE1.value);

  // Valida se o nome não está vazio e a nota é um número válido entre 0 e 100
  if (nome && !isNaN(nota) && nota >= 0 && nota <= 100) {
    const novaLinha = tabelaE1.insertRow();


    // Adiciona as células (nome e nota)
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = nota.toFixed(1);
    const celulaSituacao = novaLinha.insertCell(2);

    // **Verifica a situação e adiciona a classe e o texto correspondente**
    if (nota >= 60) {
      celulaSituacao.textContent = "Aprovado";
      novaLinha.className = "aprovado";
    } else {
      celulaSituacao.textContent = "Reprovado";
      novaLinha.className = "reprovado";
    }

    // Limpa os campos e foca no nome para a próxima inserção
    nomeE1.value = "";
    notaE1.value = "";
    nomeE1.focus();
  } else {
    alert("Por favor, insira um nome válido e uma nota entre 0 e 100.");
  }
}

botaoAdicionar.addEventListener("click", adicionarAluno);

