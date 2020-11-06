let hearts = document.querySelectorAll(".covers i:nth-child(1)");
let albumTitle = document.querySelectorAll(".covers p");

const saveToLibrary = (e) => {
  const node = e.currentTarget;

  const firstParent = node.parentElement;
  const secondParent = firstParent.parentElement;
  const thirdParent = secondParent.parentElement;

  const title = thirdParent.querySelector("p");

  let ulElement = document.querySelector(".myLibrary ul");
  let liElement = document.createElement("li");

  if (node.className.includes("far")) {
    node.className = node.className.replace("far", "fas");
    liElement.innerText = title.innerText;
    liElement.style.listStyle = "none";
    liElement.style.color = "white";
    ulElement.appendChild(liElement);
  } else {
    node.className = node.className.replace("fas", "far");
  }
};
for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = saveToLibrary;
}
