// shows navbar background
const header = document.querySelector("#header");
((page) => {
  page.addEventListener("scroll", () => {
    page.pageYOffset > 40
      ? header.classList.add("show-bg")
      : header.classList.remove("show-bg");
  });
})(window);
// burger button clicked
((burger) => {
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", (e) => {
    //show nav-links mobile device
    if (
      e.target.classList.contains("burger-btn") ||
      e.target.classList.contains("line") ||
      e.target.classList.contains("bg-nav-links")
    ) {
      // make animation while the link shows
      document
        .querySelectorAll(".nav-links li")
        .forEach((li) => li.classList.toggle("show"));

      document.body.classList.toggle("non-scroll");
      document.querySelector(".bg-nav-links").classList.toggle("active");
      navLinks.classList.toggle("show");
      document
        .querySelectorAll(".line")
        .forEach((line) => line.classList.toggle("active"));
    }
  });
})(document.body);

// show modal
const modalContainer = document.querySelector(".modal-container");
const modal = document.getElementById("modal");

function showModal(button) {
  button.preventDefault();
  modalContainer.classList.add("show");
  modal.classList.add("show");
  document.body.classList.add("non-scroll");
}
function closeModal() {
  modalContainer.classList.remove("no-scroll");
  modalContainer.classList.remove("show");
  modal.classList.remove("show");
  successBox.classList.remove("show");
  document.body.classList.remove("non-scroll");
}

document.querySelector(".btn-back").addEventListener("click", (e) => {
  showModal(e);
});
// close modal
document.body.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("close-modal-btn") ||
    e.target.classList.contains("close-modal-btn-line") ||
    e.target.classList.contains("modal-container")
  ) {
    closeModal();
  }
});

//show success box
const successBox = document.querySelector(".success-box");
((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-continue")) {
      e.preventDefault();
      modalContainer.classList.add("no-scroll");
      successBox.classList.add("show");
      modal.classList.remove("show");
    } else if (e.target.classList.contains("btn-got")) {
      closeModal();
    }
  });
})(document.querySelector(".modal-container"));

// modal card clicked
const isThereAvtiveCard = (target) => {
  const cardStuffs = document.querySelectorAll(".card-stuff");
  const btnChecks = document.querySelectorAll(".btn-check");
  const pledgeBoxes = document.querySelectorAll(".pledge-box");
  cardStuffs.forEach((card) => {
    if (!card.contains(target) || card.classList.contains("active")) {
      card.classList.remove("active");
    }
  });
  btnChecks.forEach((check) => {
    if (!check.contains(target) || check.classList.contains("bg")) {
      check.classList.remove("bg");
    }
  });
  pledgeBoxes.forEach((box) => {
    if (!box.contains(target) || box.classList.contains("show")) {
      box.classList.remove("show");
    }
  });
};

// click select button and show active modal
((select) => {
  select.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-select")) {
      let target = e.target.dataset.target;
      let cardActivated = document.querySelector(
        `.card-stuff[data-target='${target}'`
      );

      showModal(e);

      // show card active
      cardActivated.classList.add("active");
      cardActivated.children[0].classList.add("bg");
      cardActivated.children[5].classList.add("show");
    }
  });
})(document.querySelector(".stuffs-contain"));

((modalCard) => {
  modalCard.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-stuff")) {
      isThereAvtiveCard(e.target);
      e.target.children[0].classList.add("bg");
      e.target.classList.add("active");
      e.target.children[5].classList.add("show");
    } else if (e.target.classList.contains("btn-check")) {
      isThereAvtiveCard(e.target);
      e.target.classList.add("bg");
      e.target.closest(".card-stuff").classList.add("active");
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "show"
      );
    }
  });
})(document.getElementById("modal"));
