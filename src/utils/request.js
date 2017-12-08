import 'whatwg-fetch';

const fetch = fetch || require('node-fetch');

async function request(url, method, payload) {
  const headers = {};

  /* eslint-disable dot-notation */
  if (payload) {
    headers['Content-Type'] = 'application/json';
  }

  headers['Accept'] = 'application/json';
  /* eslint-enable dot-notation */

  const options = {
    method,
    headers,
    body: JSON.stringify(payload),
  };

  const res = await fetch(url, options);
  return await res.json();
}

export async function get(url) {
  return await request(url, 'GET');
}

export async function post(url, payload) {
  return await request(url, 'POST', payload);
}

export async function put(url, payload) {
  return await request(url, 'PUT', payload);
}

export async function del(url) {
  return await request(url, 'DELETE');
}
