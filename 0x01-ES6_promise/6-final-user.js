import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [userData, photoData] = await Promise.allSettled([userPromise, photoPromise]);
    return [
      { status: userData.status, value: userData.value },
      { status: photoData.status, value: photoData.value },
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error }];
  }
};

export default handleProfileSignup;
