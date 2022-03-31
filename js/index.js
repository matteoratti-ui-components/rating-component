class Rating {
  constructor() {
    this.ratingInputs = document.querySelectorAll(".rating__input");
    this.submitButton = document.querySelector(".card__submit");
    this.ratingCard = document.querySelector("#rating-card");
    this.resultCard = document.querySelector("#result-card");
    this.loader = document.querySelector("#loader");
    this.ratingResultElement = document.querySelector(
      ".result-card__rating-result"
    );
    this.ratingValue = "";
    this.isLoading = false;
    this.events();
  }

  events() {
    this.ratingInputs.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedInput = document.querySelector(".rating__input--active");
        if (selectedInput !== null) {
          selectedInput.classList.remove("rating__input--active");
        }
        e.target.classList.add("rating__input--active");
        this.ratingValue = e.target.value;
      });
    });

    this.submitButton.addEventListener("click", (e) => {
      e.preventDefault;
      this.isLoading = true;
      this.handleCards();
      setTimeout(() => {
        this.isLoading = false;
        this.ratingResultElement.textContent = `You selected ${this.ratingValue} out of 5`;
        this.handleCards();
      }, 500);
      //this.show(this.resultCard);
    });
  }

  //methods
  hide(e) {
    e.classList.add("hide");
  }
  show(e) {
    e.classList.remove("hide");
  }

  handleCards() {
    if (this.isLoading) {
      this.hide(this.ratingCard);
      this.show(this.loader);
    } else {
      this.hide(this.loader);
      this.show(this.resultCard);
    }
  }
}

const rating = new Rating();
