    const urlParams = new URLSearchParams(window.location.search);
    const idselection = urlParams.get("song");

    const url = "https://group-f263.restdb.io/rest/oursongs/" + idselection + "?apikey=6138a75043cedb6d1f97ee5b&fbclid=IwAR3DWWlYBChPoMgWHarnMM3sutmEnB3FE0xyhtaoRAjfq2FrR0IUQfHtVCY";


    fetch(url)
        .then((res) => res.json())
        .then((data) => showsongs(data));

    function showsongs(song) {
        console.log(song);


        document.querySelector("h1").textContent = `${song.song}`;
        document.querySelector("h2").textContent = `${song.artist}`;
        document.querySelector("h3").textContent = `${song.album}`;
        document.querySelector("#year").textContent = `${song.year}`;
        document.querySelector("#genre").textContent = `${song.genre}`;
    

        document.querySelector("#imgtop").src = song.img;
        document.querySelector("#imgblur").src = song.img;

        document.querySelector("iframe").src = song.video;


        document.querySelector("#artistnamelink").setAttribute("href","artistpage.html?artist=" + song.artist + "&id=" + song._id);
    }



    



document.querySelector("#hamb").addEventListener("click", hambani)




function hambani() {

    console.log("open");
    document.querySelector("nav").classList.toggle("showup");

    document.querySelector("#one").classList.toggle("oneactive");
    document.querySelector("#two").classList.toggle("twoactive");
    document.querySelector("#three").classList.toggle("threeactive");
}