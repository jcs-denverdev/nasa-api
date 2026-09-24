//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.getElementById('button').addEventListener('click', getFetch);
const card = document.querySelector('card');
let image = document.querySelector('img');
let vid_frame = document.querySelector('iframe');

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=5avu6im8LjSWFacolHxZLJuxqn7VKAEVFTukXO0x&date=${choice}`;
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(choice)
        
        card.classList.add('card');
        if ( data.media_type === 'image' ) {
          // make sure video disappears
          // make your own!!

          image.classList.remove("hidden");
          // document.querySelector('iframe').classList.add("hidden");
          image.src = data.url;
          
        } else if ( data.media_type === 'video' ) {
          image.classList.add("hidden");
          vid_frame.src = data.url;
          vid_frame.classList.remove("hidden");
        }
      
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}