// Redirect to homepage when logo clicked

const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  location.assign("/");
});

// slider on hp
var contentSlider = document.querySelector(".content-slider");
var slideCount = 4;
var selectedIndex = 4;

function rotateCarousel() {
  // if (sliderPressFlag === 0) {
  //   contentSlider.style.transform = "translateZ(-256px) rotateY(360)";
  // }
  // weird next line is necessary because for whatever reason we're counting up from 4?
  var angle = (selectedIndex / slideCount) * -360 + 360;
  contentSlider.style.transform =
    "translateZ(-256px) rotateY(" + angle + "deg)";
}

// var sliderPressFlag = 0;

var prevButton = document.querySelector(".previous-button");
if (prevButton) {
  prevButton.addEventListener("click", function() {
    selectedIndex--;
    // limitSelectedIndex();
    rotateCarousel();
  });
  console.log("selectedIndex", selectedIndex);
  console.log("slideCount", slideCount);
}

var nextButton = document.querySelector(".next-button");
if (nextButton) {
  nextButton.addEventListener("click", function() {
    selectedIndex++;
    console.log("selectedIndex", selectedIndex);
    console.log("slideCount", slideCount);
    // limitSelectedIndex();
    rotateCarousel();
  });
}

const limitSelectedIndex = () => {
  if (selectedIndex > slideCount) {
    selectedIndex = 1;
  } else if (selectedIndex <= 0) {
    selectedIndex = slideCount;
  }
};

// Pass selected category to the back-end

const selectButton = document.querySelector(".select-button");

// resets index to a range that corresponds with a page
const changeSelectedIndex = () => {
  if (selectedIndex < 4 && selectedIndex > 7) {
    selectedIndex = (selectedIndex % 4) + 1;
  }
};

if (selectButton) {
  selectButton.addEventListener("click", () => {
    changeSelectedIndex();
    console.log("selectedIndex2", selectedIndex);
    // selectedIndex++;
    // limitSelectedIndex();
    location.assign(`/results/${selectedIndex}`);
  });
}

// Upvote comments

const upvoteButtons = Array.from(
  document.getElementsByClassName("upvote-button")
);

// fetch to send upvote to db

const postUpvote = (commentId, upvotesNumber) => {
  console.log("posting upvote with comment id", commentId);
  fetch("/upvote", {
    method: "POST",
    body: JSON.stringify({ commentId, upvotesNumber }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function(data) {
      console.log("Request success: ", data);
    })
    .catch(function(error) {
      console.log("Request failure: ", error);
    });
};

const addUpvote = () => {
  const idNumber = event.target.id.split("-")[3];
  const numberOfUpvotes = document.getElementById(`upvotes-${idNumber}`);

  const currentVotes = numberOfUpvotes.textContent;
  const newUpvotes = Number(currentVotes) + 1;
  numberOfUpvotes.textContent = newUpvotes;

  const upvoteButton = document.getElementById(event.target.id);
  upvoteButton.style.display = "none";

  postUpvote(idNumber, newUpvotes);
};

if (upvoteButtons) {
  upvoteButtons.map(upvoteButton => {
    upvoteButton.addEventListener("click", () => addUpvote());
  });
}

//back button

const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", () => {
  window.history.back();
});

// Burger menu animation

const burgerButton = document.querySelector("#burgerMenuIcon");
const burgerMenu = document.querySelector("#burgerMenu");
const burgerItemLinks = Array.from(
  document.getElementsByClassName("burgerItemLink")
);

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("visible");
  burgerItemLinks.map(link => link.classList.toggle("visible"));
});

// display Stars

const ratings = Array.from(document.getElementsByClassName("result-rating"));
if (ratings) {
  ratings.map(rating => {
    let number = rating.textContent;
    let stars = "";
    for (let i = 1; i <= number; i++) {
      stars += "⭐";
    }
    rating.textContent = stars;
  });
}

// Allow all parts of recipe card to be clickable

const resultCards = Array.from(document.getElementsByClassName("result-card"));
const resultLinks = Array.from(document.getElementsByClassName("result-link"));

if (resultCards) {
  resultCards.forEach((item, index) => {
    item.addEventListener("click", () => {
      location.assign(resultLinks[index].href);
    });
  });
}
