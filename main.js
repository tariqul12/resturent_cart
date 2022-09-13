const menuItems = [
  {
    id: 1,
    item: "Food Item1",
    oneline:
      "one: Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    img: "image/R.jpg",
    hotel: "hotel name1",
    desc: "one: Ldforem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
  },
  {
    id: 2,
    item: "Food Item2",
    oneline:
      "two: Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    img: "image/kkkk.jpg",
    hotel: "hotel name2",
    desc: "two: Lorffem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
  },
  {
    id: 3,
    item: "Food Item3",
    oneline:
      "three: Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    img: "image/ooo.jpg",
    hotel: "hotel name3",
    desc: "three: Lgrorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
  },
  {
    id: 4,
    item: "Food Item4",
    oneline:
      "four: Lordgem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    img: "image/ppp.jpg",
    hotel: "hotel name4",
    desc: "four: Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
  },
  {
    id: 5,
    item: "Food Item5",
    oneline:
      "five: Lorem geipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
    img: "image/jjjj.jpg",
    hotel: "hotel name5",
    desc: "five: Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ",
  },
];
// console.log(menuItems.length);
const item = document.getElementById("item");
const oneline = document.getElementById("oneLine");
const hotel = document.getElementById("hotel");
const desc = document.getElementById("desc");
const prev = document.getElementById("prev");
const random = document.getElementById("random");
const next = document.getElementById("next");

let currentMenu = 0;

window.addEventListener("DOMContentLoaded", function () {
  // let menu = menuItems[currentMenu];
  // controlTextContent(item, menu.item);
  // controlTextContent(oneline, menu.oneline);
  // img.src = menu.img;
  // controlTextContent(hotel, menu.hotel);
  // controlTextContent(desc, menu.desc);
  allMenu(currentMenu);
});

const allMenu = () => {
  let menu = menuItems[currentMenu];
  controlTextContent(item, menu.item);
  controlTextContent(oneline, menu.oneline);
  img.src = menu.img;
  controlTextContent(hotel, menu.hotel);
  controlTextContent(desc, menu.desc);
};

function controlTextContent(props, menuItm) {
  if (props) {
    props.textContent = menuItm;
  }
}

// rendom Meno
random.addEventListener("click", () => {
  currentMenu = Math.floor(Math.random() * menuItems.length);
  // console.log(currentMenu);
  allMenu(currentMenu);
});
next.addEventListener("click", () => {
  currentMenu++;
  if (currentMenu > menuItems.length - 1) {
    currentMenu = 0;
  }
  allMenu(currentMenu);
});
prev.addEventListener("click", () => {
  currentMenu--;
  if (currentMenu < 0) {
    currentMenu = menuItems.length - 1;
  }
  allMenu(currentMenu);
});
