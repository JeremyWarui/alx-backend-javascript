export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error());
    }
  }).catch(() => console.log('Got a response from the API'));
}
