const getArtists = async (query) => {
  return await fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/artist/" + query,
    {
      headers: {
        "x-rapidapi-key": "dadb0572d1mshf513c7c09dbd153p184fa1jsndbdedc59fd83",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  ).then((respone) => respone.json());
};

const getCard = function (artist) {
  return `
            
        <div class="col my-2 px-2 d-flex justify-content-center">
            <div class="card text-white" style='background-color:#282828'>
                <img src="${artist.picture_medium}" class="card-img-top" alt="">
                <div class="card-body p-2 pb-0">
                    <h6>${artist.name}</h6>
                    <div class='d-flex justify-content-between align-content-between '>
                        <div class='mt-3'>
                            <span style=' font-size:15px;' class="badge badge-secondary badge-pill">${artist.id}</span>
                        </div>
                        <div class='d-flex'>
                            <div class='d-flex flex-column pl-2 text-right'>
                                <span style='font-size:15px; colour:green;'>Album fans:${artist.nb_fan}</span>
                                <span class='text-warning' style=' font-size:25px;'> ${artist.nb_album}</span>
                            </div>
                            <i class="fa fa-shopping-cart bg-success text-white p-2 rounded ml-2 d-none fa-lg"></i>
                        </div>
                    </div>
                    <a class="btn btn-primary" href="${artist.share}" target='_blank'>Share</a>
                    <a class="btn btn-primary" href="detail.html?${artist.id}" target='_blank'>Preview</a>
                </div>
                
            </div>
        </div>
        
        `;
};

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector("nav form input");
  console.log(searchInput);
  const artistBody = document.querySelector("#covers");

  searchInput.onkeyup = () => {
    const value = searchInput.value;
    getArtists(value).then((artist) => {
      console.log(artist);
      artistBody.innerHTML += getCard(artist);
    });
  };
});
