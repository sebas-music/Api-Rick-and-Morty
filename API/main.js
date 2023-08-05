const container = document.querySelector(".container");

const buscarPersonajes = async () => {
  try {
    const url = "https://rickandmortyapi.com/api/character";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    results.map((element) => {
      const card = document.createElement("article");
      card.innerHTML = `
        <h3>${element.name}</h3>
        <img src="${element.image}" alt="${element.name}">
        `;
      container.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
};

buscarPersonajes();
