let sidebarLinks = document.querySelectorAll(".spotify-bg-sidebar a.pl-4.mb-2");
let sidebarSpan = document.querySelectorAll(".spotify-bg-sidebar a span");
function selectItem(e) {
  // Remove all show and border classes
  removeBorder();

  // Add border to current link
  this.classList.add("linkBorder");
}

function selectSpan(e) {
  removeColor();
  this.classList.add("spotify-text-secondary");
}

function removeBorder() {
  sidebarLinks.forEach((item) => {
    item.classList.remove("linkBorder");
  });
}

function removeColor() {
  sidebarSpan.forEach((item) => {
    item.classList.remove("spotify-text-secondary");
  });
}

sidebarLinks.forEach((item) => {
  item.addEventListener("click", selectItem);
});

sidebarSpan.forEach((item) => {
  item.addEventListener("click", selectSpan);
});
