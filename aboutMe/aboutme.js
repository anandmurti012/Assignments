// task-2
let newStyle = document.createElement("style");
newStyle.textContent = `body {font-family: Arial, Helvetica, sans-serif}`;
document.head.appendChild(newStyle);

//task-3
let nickName = document.getElementById("nickname");
let fav = document.getElementById("favorites");
let homeTown = document.getElementById("hometown");

nickName.innerText = "Sonu";
fav.innerHTML = "Watching Movies";
homeTown.textContent = "Rourkela";

//task-4
let liList = document.querySelectorAll("li");
console.log(liList);

liList.forEach((list) => {
    list.classList.add("list-item");
})

//task-5
let listItem = document.querySelectorAll(".list-item");
console.log(listItem);

listItem.forEach((listitem) => {
    listitem.style.color = "red";
})


//task-6
let imgElement = document.createElement("img");
imgElement.getAttribute("src");
imgElement.setAttribute("src", "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg");
document.body.appendChild(imgElement);