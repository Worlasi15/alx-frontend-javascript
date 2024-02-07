function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return Promise.resolve({ status: 200, body: 'success' });
    })
    .catch((error) => {
      console.log('Got a response from the API');
      return Promise.reject(new Error());
    });
}

export default handleResponseFromAPI;
