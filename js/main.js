//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://api.nasa.gov/planetary/apod?api_key=5avu6im8LjSWFacolHxZLJuxqn7VKAEVFTukXO0x&date=${choice}`;
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(choice)
        if ( data.media_type === 'image' ) {
          // make sure video disappears
          // make your own!!

          document.querySelector('img').classList.remove("hidden");
          // document.querySelector('iframe').classList.add("hidden");
          document.querySelector('img').src = data.url;
        } else if ( data.media_type === 'video' ) {
          document.querySelector('img').classList.add("hidden");
          // document.querySelector('iframe').classList.remove("hidden");
          document.querySelector('iframe').src = data.url;
        }
        
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}