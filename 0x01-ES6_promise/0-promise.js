function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ data: 'Dummy API response' });
      } else {
        reject(new Error('Failed to fetch data from the API'));
      }
    }, 1000);
  });
}

export default getResponseFromAPI;
