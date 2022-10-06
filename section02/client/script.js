import { fetchGreeting } from './func.js';

window.onload = async () => {
    const el = document.getElementById('server-response');
    el.textContent = 'Loading...'

   const { data } = await fetchGreeting();


   setTimeout(() => {
        el.textContent = data?.greeting;
   }, 1000);
}

