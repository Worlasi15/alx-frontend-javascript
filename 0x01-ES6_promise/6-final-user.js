import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  try {
    const [signUpResult, uploadPhotoResult] = await Promise.allSettled([
      signUpPromise,
      uploadPhotoPromise,
    ]);

    return [
      {
        status: signUpResult.status,
        value: signUpResult.status === 'fulfilled' ? signUpResult.value : signUpResult.reason,
      },
      {
        status: uploadPhotoResult.status,
        value: uploadPhotoResult.status === 'fulfilled' ? uploadPhotoResult.value : uploadPhotoResult.reason,
      },
    ];
  } catch (error) {
    // Handle any unexpected errors here
    return [
      { status: 'rejected', value: error },
      { status: 'rejected', value: error },
    ];
  }
}

export default handleProfileSignup;
