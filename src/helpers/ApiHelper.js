const defaultParams = {
  mode: 'no-cors',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),

function ApiHelper(method, url, params) {
  return fetch(url, {
    ...defaultParams,
    ...params,
    method: method,
  }).then(response => {
    return response.json();
  }).then(json => {
    console.log('response:', json);
    return json;
  }).catch(err => {
    console.log('error:', err)
  })
}
