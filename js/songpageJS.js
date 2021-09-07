    const urlParams = new URLSearchParams(window.location.search);
        const idselection = urlParams.get("song");
        
        const url= "https://songs-9c7e.restdb.io/rest/music/"+ idselection +"?apikey=61376b4343cedb6d1f97edd7&fbclid=IwAR3DWWlYBChPoMgWHarnMM3sutmEnB3FE0xyhtaoRAjfq2FrR0IUQfHtVCY";
        
        
       



        fetch (url)
        .then((res) => res.json())
        .then((data)=>showsongs(data));
        
        function showsongs(song){
        console.log(song);
    
        
        document.querySelector("h1").textContent=song.song;
        document.querySelector("h2").textContent=song.artist;
        document.querySelector("h3").textContent=song.album;
        document.querySelector("#year").textContent=song.year;
        document.querySelector("#genre").textContent=song.genre;
        document.querySelector("#genre").textContent=song.genre;

        document.querySelector("#imgtop").src=song.img;
        document.querySelector("#imgblur").src=song.img;
        // document.querySelector("h1").textContent=product.productdisplayname;
        // document.querySelector(".productname").textContent=product.productdisplayname;
     
        
        }






