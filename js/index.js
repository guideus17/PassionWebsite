
const url= "https://songs-9c7e.restdb.io/rest/music?apikey=61373a7043cedb6d1f97edb4&fbclid=IwAR0DKv7KYEalUnZm5aYSXdZlqHRTcQodZ3cJ1ZEDHOY-opMBI5ek017HBLE";




fetch(url)
.then(function(res){
    return res.json();
})
.then(function (data){
    handlesongsList(data);
})



function handlesongsList(data) {
    console.log(data);
    
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

cloneOfTemplate.querySelector("h1").textContent = `${music.song}`;







// put clone in the place
const GridWithsongs = document.querySelector("main");
GridWithsongs.appendChild(cloneOfTemplate);


}













// cloneOfTemplate.querySelector(".songcoverimg").src = `${songs.img}`;
// cloneOfTemplate.querySelector("h2").textContent = `${songs.artist}`;