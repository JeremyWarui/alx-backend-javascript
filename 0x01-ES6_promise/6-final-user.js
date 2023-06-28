import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = {
    status: 'pending',
    value: '',
  };

  try {
    const newUser = await signUpUser(firstName, lastName);
    user.status = 'fulfilled';
    user.value = newUser;
  } catch (error) {
    user.status = 'rejected';
    user.value = error.toString();
  }

  const photo = {
    status: 'fulfilled',
    value: '',
  };

  try {
    const newPhoto = await uploadPhoto(fileName);
    photo.status = 'fulfilled';
    photo.value = newPhoto;
  } catch (error) {
    photo.status = 'rejected';
    photo.value = error.toString();
  }

  return [user, photo];
}
