/* eslint-disable import/named */
/* eslint-disable import/extensions */
import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((vals) => [
      {
        status: vals[0],
        value: vals[0],
      },
    ]);
}
