function positions(firstPlace, seconPlace, lastPlace) {
  let posicoes = [firstPlace, seconPlace, lastPlace];

  if (posicoes[2] == "Daniel") {
    return console.log(
      `Primeiro Lugar:${posicoes[0]}, Segundo Lugar:${posicoes[2]}, Terceiro Lugar:${posicoes[1]}`
    );
  } else if (posicoes[1] == "Daniel") {
    return console.log(
      `Primeiro Lugar:${posicoes[1]}, Segundo Lugar:${posicoes[0]}, Terceiro Lugar:${posicoes[2]}`
    );
  } else {
    return console.log(
      `Primeiro Lugar:${posicoes[0]}, Segundo Lugar:${posicoes[1]}, Terceiro Lugar:${posicoes[2]}`
    );
  }
}

positions("Rafael", "Manoel", "Daniel");
