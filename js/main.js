//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.getElementById('button').addEventListener('click', getFetch);
document.getElementById('button__today').addEventListener('click', fetchToday);
const card = document.querySelector('.card');
const image = document.querySelector('img');
const vid_frame = document.querySelector('iframe');

function getFetch(){
  const choice = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=5avu6im8LjSWFacolHxZLJuxqn7VKAEVFTukXO0x&date=${choice}`;


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        if ( data.media_type === 'image' ) {

          card.classList.remove("hidden");
          image.classList.remove("hidden");
          image.src = data.url;
          
        }
        else if ( data.media_type === 'video' ) {

          image.classList.add("hidden");
          vid_frame.src = data.url;
          vid_frame.classList.remove("hidden");

        }
        card.classList.add('card');
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function fetchToday(){
  const url = 'https://api.nasa.gov/planetary/apod?api_key=5avu6im8LjSWFacolHxZLJuxqn7VKAEVFTukXO0x';

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        if ( data.media_type === 'image' ) {

          card.classList.remove("hidden");
          image.classList.remove("hidden");
          image.src = data.url;
          
        }
        else if ( data.media_type === 'video' ) {

          image.classList.add("hidden");
          vid_frame.src = data.url;
          vid_frame.classList.remove("hidden");

        }
        card.classList.add('card');
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}