var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

function toggleMenu() {
  var menu = document.querySelector(".dropwdown-list-container");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function scrollToElement(products) {
  var element = document.querySelector(products);
  element.scrollIntoView({ behavior: "smooth" });
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements1 = document.querySelectorAll(".info-box");
hiddenElements1.forEach((el) => observer2.observe(el));

const hiddenElements2 = document.querySelectorAll(".feature-box");
hiddenElements2.forEach((el) => observer1.observe(el));

const hiddenElements3 = document.querySelectorAll(".icon-section");
hiddenElements3.forEach((el) => observer3.observe(el));

const hiddenElements4 = document.querySelectorAll(".category-box");
hiddenElements4.forEach((el) => observer4.observe(el));

const hiddenElements5 = document.querySelectorAll(".review-box");
hiddenElements5.forEach((el) => observer5.observe(el));

const hiddenElements6 = document.querySelectorAll(".header");
hiddenElements6.forEach((el) => observer6.observe(el));

const hiddenElements7 = document.querySelectorAll(".product-box");
hiddenElements7.forEach((el) => observer7.observe(el));

const hiddenElements8 = document.querySelectorAll(".product-header");
hiddenElements8.forEach((el) => observer7.observe(el));

const hiddenElements9 = document.querySelectorAll(".product-pricing");
hiddenElements9.forEach((el) => observer7.observe(el));

const hiddenElements10 = document.querySelectorAll(".category-header");
hiddenElements10.forEach((el) => observer8.observe(el));

const hiddenElements11 = document.querySelectorAll(".GUI-cheat");
hiddenElements11.forEach((el) => observer9.observe(el));

const hiddenElements12 = document.querySelectorAll(".hero");
hiddenElements12.forEach((el) => observer9.observe(el));

const hiddenElements13 = document.querySelectorAll(".faq-header");
hiddenElements13.forEach((el) => observer9.observe(el));

function decreaseQuantity() {
  var currentQuantity = parseInt(document.getElementById("quantity").innerHTML);
  var newQuantity = currentQuantity - 1;
  if (newQuantity > 0) {
    document.getElementById("quantity").innerHTML = newQuantity;
  }
}

function increaseQuantity() {
  var currentQuantity = parseInt(document.getElementById("quantity").innerHTML);
  var newQuantity = currentQuantity + 1;
  document.getElementById("quantity").innerHTML = newQuantity;
}

function decreasePrice() {
  var currentValue = parseInt(
    document.getElementById("price-number").innerHTML
  );
  var newValue = currentValue - 10;

  if (newValue > 0) {
    document.getElementById("price-number").innerHTML = newValue.toFixed(2);
  }
}

function increasePrice() {
  var currentValue = parseInt(
    document.getElementById("price-number").innerHTML
  );
  var newValue = currentValue + 10;
  document.getElementById("price-number").innerHTML = newValue.toFixed(2);
}

var textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ml12 .letter",
  translateX: [40, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1200,
  delay: (el, i) => 500 + 30 * i,
});
