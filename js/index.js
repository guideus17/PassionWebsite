
const url= "https://songs-9c7e.restdb.io/rest/music?";

const options = {
    headers: {
        "x-apikey":"61376b4343cedb6d1f97edd7",
    },
};

fetch(url, options)
.then((response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
})

.then((data)=> {
    handData(data);
    console.log(data);
})
.catch((e)=> {
    console.error("An error occured:", e.message);
});




function handData(data) {
    
    
        data.forEach(showsongs);
    }

    function showsongs(song){
        console.log(song);
        }
// -------------------------------------Clone template and put it in place---------------------------------

function showsongs(song) {
    // grab template and cloone it
const templateSelection = document.querySelector(".allsongs").content;
const cloneOfTemplate = templateSelection.cloneNode(true);


// change content

cloneOfTemplate.querySelector("h1").textContent = `${song.song}`;
cloneOfTemplate.querySelector(".songcoverimg").src = `${song.img}`;
cloneOfTemplate.querySelector("h2").textContent = `${song.artist}`;

cloneOfTemplate.querySelector("a").href = `songpage.html${song.artist}`;

cloneOfTemplate.querySelector("a").setAttribute("href","songpage.html?song=" + song._id);



// put clone in the place
const GridWithsongs = document.querySelector("main");
GridWithsongs.appendChild(cloneOfTemplate);


};



document.querySelector("#hamb").addEventListener("click", hambani)



    
  function hambani() {
   
    console.log("open");
    document.querySelector("nav").classList.toggle("showup");

    document.querySelector("#one").classList.toggle("oneactive");
    document.querySelector("#two").classList.toggle("twoactive");
    document.querySelector("#three").classList.toggle("threeactive");
}





