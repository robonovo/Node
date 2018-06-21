console.log('Starting App');

setTimeout(() => {
  console.log('Inside of Callback');
}, 2000);

setTimeout(() => {
  console.log('Inside of Second Callback');
}, 0);

console.log('Finishing Up');
