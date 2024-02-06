function handleResponseFromAPI(promise) {
  return promise
    .then((resolvedValue) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.error('Error:', error.message);
      throw new Error();  // Throw an empty Error object for rejection
    });
}

export default handleResponseFromAPI;
