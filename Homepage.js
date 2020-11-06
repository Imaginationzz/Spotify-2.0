let singUP = document.querySelector(".spotify-btn-primary");
let logIN = document.querySelector(".spotify-btn-secondary");

singUP.onclick = function () {
  window.location.href = "loginPage.html";
};

logIN.onclick = function () {
  window.location.href = "loginPage.html";
};
 /*------------------------------------------------------------------------------------------------------- */


/*SELECTED HTML ELEMENTS */
let listTitle = document.querySelectorAll('.spotify-text-secondary')
let images = document.querySelectorAll('.covers .img-fluid')
let result = document.getElementById('result')
let play = document.querySelectorAll('.fa-play-circle')
let playerImg = document.getElementById('track-image')
let playerTitle = document.getElementById('track-title-player')
let playerAlbum = document.getElementById('track-album-player')
let playTrack = document.getElementById('play')

/* CREATE ELEMENTS */


const playlistResult = (img) => {
  return result = `
    <img src='${img}' class='album-cover'/>
    <div class='row album-tracks'>
      <ul class='container track-list'></ul>
    </div>
`
}
const tracksList = (title, img, albumTitle, preview) => {
  return track = `
    <li class='track'>
      <div class='track-info'>
        <img src='${img}'/>
        <div class='track-title'>
          <p>${title}</p> 
          <p>${albumTitle}</p> 
        </div>
      </div>
      <audio src='${preview}'></audio>
    </li>
  
  `
}

/*JS ELEMENTS */
let workout = '2153050122'
let coffe = '1295770586'
let gaming = '2298075882'
let goodVibes = '2268939442'
let casaDePapel = '6257604024'
let peakyBlinders = '6166124464'

let playlists = [workout, coffe, gaming, goodVibes, casaDePapel, peakyBlinders]

let titleList = []
let imgList = []

/*FUNCTIONS */
const fetcher = (array)=>{
  for(let a = 0; a < array.length; a++){
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/playlist/${array[a]}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "6cc8e6c6femsh03ff5cffd3927e2p12ac5djsn4ad2e0705629",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
      }
    })
    .then(response => response.json()
    )
    .then(parsedJson => {
      console.log(parsedJson)
      listTitle[(a+2)].innerText = parsedJson.title
      images[a].src = parsedJson.picture_medium

      titleList = parsedJson.tracks.data
      titleList = titleList.slice(0, 15)

      console.log(titleList)

      const clear = () => {
        result.innerHTML = ''
        result.innerHTML = result.innerHTML + playlistResult(parsedJson.picture_xl)
        let trackList = document.querySelector('.track-list')
        for(let c=0; c < titleList.length; c++){
          trackList.innerHTML = trackList.innerHTML + tracksList(titleList[c].title, titleList[c].album.cover_small, titleList[c].album.title, titleList[c].preview )
        }
        let tracks = document.querySelectorAll('.track')
        let audio = document.querySelectorAll('.track audio')
        let trackTitle = document.querySelectorAll('.track-title p:nth-of-type(1)')
        let trackAlbum = document.querySelectorAll('.track-title p:nth-of-type(2)')
        let trackImg = document.querySelectorAll('.track-info img')
        for(let b = 0; b < tracks.length; b++){
          tracks[b].addEventListener('click', function(){
            if(audio[b].paused){
              audio[b].play()
            }
            else{
              audio[b].pause()
            }
            playerImg.src = trackImg[b].src
            playerTitle.innerText = trackTitle[b].innerText
            playerAlbum.innerText = trackAlbum[b].innerText

            
          })
        }
      }
      play[a].addEventListener('click', clear)
    })
    .catch(err => {
      console.error(err);
    });
  }
  
}
window.onload = () => {
  fetcher(playlists)
}
 

