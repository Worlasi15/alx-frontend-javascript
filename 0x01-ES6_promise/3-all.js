import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
