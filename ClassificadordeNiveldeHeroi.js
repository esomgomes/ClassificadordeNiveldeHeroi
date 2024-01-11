const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita que o usuário digite o nome do herói e a quantidade de experiência (XP)
rl.question('Digite o nome do herói: ', (nomeHeroi) => {
  rl.question('Digite a quantidade de experiência (XP): ', (xpHeroi) => {
    xpHeroi = parseInt(xpHeroi);

    // Define as faixas de XP para cada nível
    const faixasXP = [
      { min: 0, max: 1000, nivel: "Ferro" },
      { min: 1001, max: 2000, nivel: "Bronze" },
      { min: 2001, max: 5000, nivel: "Prata" },
      { min: 5001, max: 7000, nivel: "Ouro" },
      { min: 7001, max: 8000, nivel: "Platina" },
      { min: 8001, max: 9000, nivel: "Ascendente" },
      { min: 9001, max: 10000, nivel: "Imortal" },
      { min: 10001, max: Infinity, nivel: "Radiante" },
    ];

    // Inicializa o nível como vazio
    let nivelHeroi = "";

    // Loop para verificar em qual faixa de XP o herói se encontra
    for (let faixa of faixasXP) {
      if (xpHeroi >= faixa.min && xpHeroi <= faixa.max) {
        nivelHeroi = faixa.nivel;
        break;
      }
    }

    // Exibe a mensagem com o nome do herói e o nível alcançado
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

    // Fecha a interface de leitura
    rl.close();
  });
});
