import { TIMEOUT_SEC } from './config.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

/*
//La obtencion de una api o json siempre debe ser asincrona (trasbasbalinas)
export const getJSON = async function (url) {
  try {
    //Usamos la API ya hecha por nuestro amigo Jonas de forkify
    //La funcion devolvera una promesa, y dado que estamos en una funcion asincrona podemos esperar esa promesa
    //La promesa que estamos haciendo es que se cumpla el fetch y si no lo receta en 0.5, es decir si la solicitud ocn la api/servidor tarda demasiado por la mala conexion lanzara el error
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    //Una vez tengamos el restultado tenemos que transformarla a json
    const data = await res.json();

    //Si la res no es ok, entonces dame un nuevo error que sera la resp del servidor osea la api=data
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    //Una vez tengamos el restultado tenemos que transformarla a json
    const data = await res.json();

    //Si la res no es ok, entonces dame un nuevo error que sera la resp del servidor osea la api=data
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};


export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
*/
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
