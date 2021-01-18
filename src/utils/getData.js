const URL_API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {

  const conc = id ? `${URL_API}${id}` : URL_API;

  try {    
    const request = await fetch(conc);
    const response = await request.json();
    console.log(response);
    return response;    
  } catch (error) {
    console.log('Fetch error', error);
  }
};

export default getData;