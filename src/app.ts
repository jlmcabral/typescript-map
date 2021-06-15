import axios from 'axios';

const API_KEY = process.env.GOOGLE_API;

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
        const enteredAddress = addressInput.value;

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${API_KEY}`)
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
}
form.addEventListener('submit', searchAddressHandler);