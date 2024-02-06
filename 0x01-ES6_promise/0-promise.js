function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const success = true; // Change this based on your API response
      if (success) {
        resolve("API call successful");
      } else {
        reject("API call failed");
      }
    }, 1000); // Simulating a 1-second delay
  });
}

export default getResponseFromAPI;
