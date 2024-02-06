function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const success = true; // Set to false to simulate a failure
      if (success) {
        resolve("API response data");
      } else {
        reject(new Error("API request failed"));
      }
    }, 1000); // Simulating a delay of 1 second
  });
}

export default getResponseFromAPI;
