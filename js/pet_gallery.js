var imageNames = []; //Declare an empty element to store image file names
var photos = []; //Declare an empty array to store image element
var photoAlbum = []; //Declare an empty array to store html photos 
var nameTexts = ["Charlie", "Bruce", "Ron", "Sarah", "Max", "Emma", "Watson", "Essex", "Ron", "Preston", "Liz", "Bronx"];
// var typesH3 = [];
// var sexesP = [];
// var locationsP = [];
var descTexts = ["Charlie Coolz", "Bruce Almighty", "Ron The Great", "Sarah Says So", "Max-A-Million", "Emma the Amazing", "Watson the Wizard", "Essex The Prince", "Ron-stoppable", "Player Preston", "Liz The Queen", "Bronx the King"]; //Descriptions for all dogs
var moreInfos = ["Charlie LOVES to be cuddle! So don't be stingy!", "Bruce is definitely strong and loves to play rough. Don't underestimate his strength!", "Ron's extra tip coming soon!", 
"Sarah's extra tip coming soon!", "Max's extra tip coming soon!", "Emma's extra tip coming soon!", 
"Watson's extra tip coming soon!", "Essex's extra tip coming soon!", "Ron's extra tip coming soon!", 
"Preston' extra tip coming soon!", "Liz's extra tip coming soon!", "Bronx's extra tip coming soon!"]

var photo; //Declare an empty variable to store the assembled image list codes
// var nameH2 = "<h2>Name</h2>"; //Declare variable to store pet name
var typeH3 = "<h3>Type</h3>"; //Declare variable to store pet type 
var sexP = "<p>Sex</p>"; //Declare variable to store pet sex
var locationP = "<p>Location</p>"; //Declare variable to store pet location 
var altName = "Dog image"; //Declare a variable to store alt name

var openListTag = "<li "; //Declare a variable to contain open list tag
var closeListTag = "</li>"; //Declare a variable to contain close list tag

var openNameTag = "<h2 class='name'>";
var closeNameTag = "</h2>"

// var openTypeTag = "<h2 class='type'>";
// var closeTypeTag = "</h2>"

// var openSexTag = "<h2 class='sex'>";
// var closeSexTag = "</h2>"

// var openLocationTag = "<h2 class='location'>";
// var closeLocationTag = "</h2>"

var openDescTag = "<div class='description'>"
var closeDescTag = "</div>";    

for (var i = 0; i <= 11; i++) {
    imageNames.push("https://placedog.net/300/300?id="+[i+1*23]); //Create image filename w/ID and store in array (used 23 because it's my lucky number:)* ) 
    photos.push("id=photo"+[i]+">" + "<img src=" + imageNames[i] + " " + altName + ">"); //Assemble file name into image element and store in an array 
    photo = openListTag + photos[i] + openNameTag + nameTexts[i] + closeNameTag + typeH3 + sexP + locationP + openDescTag + descTexts[i] + closeDescTag + closeListTag; //Assemble image element from array with list elements and store in a variable
    photoAlbum.push(photo); //Store(push) the assembled list codes into an array  
}

//Display all eight images stored in the array
document.getElementById("petGallery").innerHTML = photoAlbum.join(" ");

// ______________________ Make info box visible _______________________
var petGalleryList = document.getElementById('petGallery');

for(let i = 0; i <= petGalleryList.children.length; i++) {
    // console.log('Img:', petGalleryList.children[i].children[0].outerHTML);
    // console.log('Name:', petGalleryList.children[i].children[1].textContent);
    // console.log('Description:', petGalleryList.children[i].children[5].textContent);
    // console.log('pet list:', petGalleryList.children[i].children);

    // var petName = petGalleryList.children[i].children[1].textContent;
    // var description = petGalleryList.children[i].children[5];

    // description.addEventListener('click', () => {
    //     console.log(description.textContent + 'clicked!');
    // });

    petGalleryList.children[i].children[5].addEventListener('click', ()=> {
        // console.log(petGalleryList.children[i].children[5].textContent + ' clicked!');
        var infoBox = document.getElementById('info-box');
        var petName = document.getElementById('pet-name');
        var moreInfo = document.getElementById('more-info');

        //Assign pet name as header
        petName.innerHTML = petGalleryList.children[i].children[1].textContent;
        
        //Assign more info to appropriate pet
        moreInfo.innerHTML = moreInfos[i];

        //Display info box
        infoBox.style.visibility = "visible";
        
        //Close info box if close link clicked
        document.getElementById('close-link').addEventListener('click', () => {
            infoBox.style.visibility = "hidden";
        })
    });
} 