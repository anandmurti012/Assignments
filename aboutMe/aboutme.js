
//Task-1 Add script tage to the bottom of the HTML body.
//Task-2(In the javaScript) change the body tag's style so it has a font-family of "Arial, sans-serif".
let newStyle = document.createElement("style");
newStyle.textContent = `body{font-family: Arial, Helvetica, sans-serif;}`;
document.head.appendChild(newStyle);

//task-3 (In the javaScript) Replace each of the spans (nickname, favourite, hometown) with your own information.
let nickName = document.getElementById("nickname");
nickName.innerHTML = "Andy";

let favourite = document.getElementById("favourites");
favourite.innerHTML = "Singing a song";

let homeTown = document.getElementById("hometown");
homeTown.innerHTML = "jamalpur";

//task-4Iterate through each li and change the class to "list-item".
let liList = document.querySelectorAll("li");
console.log(liList);

liList.forEach((list) =>{
list.classList.add("list-item");
});

//task-5(in the HTML head) Add a style tag that sets  a rule for .list-item to make the color red.
 let listItem = document.querySelectorAll(".list-item");
console.log(listItem);

listItem.forEach((listitem) => {
    listitem.style.color = "red";
})

 //Task-6 Create a new img element ans set its src attribute to a picture of you. Append that element to the page.
 let imgElement = document.createElement("img");
 imgElement.getAttribute("src");
 imgElement.setAttribute("src", "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg");
 document.body.appendChild(imgElement);

  