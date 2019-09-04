const drawData = list => {
  const table = document.getElementById('results');
  const tableBody = table.querySelector('tbody');
  list.forEach(anime => {
    const line = document.createElement('tr');
    line.innerHTML = `<td><img height="120" src=${anime.cover} /></td>
        <td style="vertical-align:middle">${anime.title}</td>
        <td style="vertical-align:middle">${anime.score}</td>`;
    tableBody.appendChild(line);
  });
};

const getData = () => {
  return fetch('/api/anime').then(data => data.json());
};

const onLoad = () => {
  // Obtener data de la API
  getData()
    .then(topList => {
      // Dibujar en el DOM la lista
      drawData(topList.slice(0, 15));
    })
    .catch(e => console.log(e));
};
