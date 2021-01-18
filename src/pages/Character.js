import getData from '../utils/getData';
import getHash from '../utils/getHash';

// import '../styles/styles.css';

const Character = async () => {

  const id = await getHash();

  const info = await getData(id);

  const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
          <img src="${info.image}" alt="${info.name}"/>
          <h2>${info.name}</h2>
        </article>
        <article class="Characters-card">
          <h3>Episodes: ${info.episode.length -1}</h3>
          <h3>Status: ${info.status}</h3>
          <h3>Species: ${info.species}</h3>
          <h3>Gender:${info.gender}</h3>
          <h3>Origin: ${info.origin.name}</h3>
          <h3>Last location: ${info.location.name}</h3>
        </article>
    </div>
  `;
  return view;
};

export default Character;