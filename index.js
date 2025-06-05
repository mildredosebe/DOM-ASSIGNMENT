document.body.style.backgroundColor = "silver";
document.getElementById("title").style.color = "green";
document.getElementById("title").style.textAlign = "center";
document.getElementById('title').style.fontFamily = 'cursive';
document.getElementById('title').style.fontSize = '60px';
const h3Tags = document.getElementsByTagName("h3");
for (let i = 0; i < h3Tags.length; i++) {
    h3Tags[i].style.textTransform = "uppercase";
}
const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
const fruitDiv = document.createElement("div");
fruitDiv.className = "background-image";
fruitDiv.style.backgroundImage = "url('\orange.jpg')";
fruitDiv.style.width='100px';
fruitDiv.style.height='100px';
const fruitName = document.createElement("div");
fruitName.textContent = "Oranges";
fruitName.style.marginTop='-1px';
const fruitPrice = document.createElement("div");
fruitPrice.className = "price";
fruitPrice.textContent = "$5.00";
fruitDiv.appendChild(fruitName);
fruitName.appendChild(fruitPrice);
newFruit.appendChild(fruitDiv);
fruitList.appendChild(newFruit);
const vegetableList = document.getElementById("vegList");
const newVegetable = document.createElement("li");
const vegDiv=document.createElement("div")
vegDiv.className='img';
vegDiv.style.backgroundImage="url('images/carrots.jpg')";
vegDiv.style.width='100px';
vegDiv.style.height='100px';
vegDiv.style.borderRadius='20px';
const vegName=document.createElement("div");
vegName.textContent = "Carrots";
newVegetable.appendChild(vegDiv)
vegetableList.appendChild(newVegetable);
vegDiv.appendChild(vegName)
function addHoverEffect(list) {
    const items = list.getElementsByTagName("li");
    for (let item of items) {
        item.addEventListener("mouseenter", function () {
            item.style.color = "green";
        });
        item.addEventListener("mouseleave", function () {
            item.style.color = "";
        });
    }
}
function addLogo() {
    const logo = document.createElement('img');
    logo.src = 'images/greenkiosklogo.png';
    logo.alt = 'Website Logo';
    logo.style.width = '200px';
    logo.style.height = 'auto';
    const header = document.getElementById('header');
    header.appendChild(logo);
}
addLogo();
addHoverEffect(fruitList);
addHoverEffect(vegetableList);
const backgroundDiv = document.createElement("div");
backgroundDiv.className = "background-image";
backgroundDiv.style.backgroundImage = "url('\kiosk.jpg')";
const titleElement = document.getElementById("title");
titleElement.insertAdjacentElement('afterend', backgroundDiv);
