
//toggle showing add artist form
document.querySelector("#artistSearch .btn").addEventListener("click", function(){
    let form = document.querySelector(".addArtistForm");
    if (form.style.display == "none" || form.style.display == "") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
});


//adding new artist
document.querySelector(".addArtistForm .btn").addEventListener("click", function(){
    let form = document.querySelector(".addArtistForm");
    let formData = new FormData(form);
    var object = {};
    formData.forEach((value, key) => {object[key] = value});
    
    //main div for artist item
    var artistDiv = document.createElement("div");
    artistDiv.className = "artist";
    
    //image of artist from form url
    var imgNode = document.createElement("img");
    imgNode.className = "artistImage";
    imgNode.src = object["url"];

    //artist info section
    var artistInfoDiv = document.createElement("div");
    artistInfoDiv.className = "artistInfo";
    
    var artistName = document.createElement("p");
    artistName.className = "artistName";
    var artistDesc = document.createElement("p");
    artistDesc.className = "artistDesc";
    
    //delete artist button
    var delArtistBtn = document.createElement("button");
    delArtistBtn.addEventListener("click", function(e){
        var artist = e.target.parentNode
        artist.parentNode.removeChild(artist);
    });
    delArtistBtn.className = "deleteBtn";

    //setting text of each tag
    var nameTextNode = document.createTextNode(object["name"]);
    var descTextNode = document.createTextNode(object["desc"]);
    var delBtnTextNode = document.createTextNode("Delete");
    
    //appending all elements to dom in right order
    artistDiv.appendChild(imgNode);
    artistDiv.appendChild(artistInfoDiv);
    artistDiv.appendChild(delArtistBtn);
    artistInfoDiv.appendChild(artistName);
    artistInfoDiv.appendChild(artistDesc);
    artistName.appendChild(nameTextNode);
    artistDesc.appendChild(descTextNode);
    delArtistBtn.appendChild(delBtnTextNode);

    //adding new artist to artist list, reseting and closing form
    var element = document.querySelector("#artistList");
    element.appendChild(artistDiv);
    form.reset();
    form.style.display = "none";

});

document.querySelector(".deleteBtn").addEventListener("click", function(e){
    var artist = e.target.parentNode
    artist.parentNode.removeChild(artist);
});