// ! JSON -> JavaScript Object Notation

const cardsContainer = document.querySelector(".cards__container");

const database = [
  {
    id: 1,
    fullName: "Jon Kantner",
    profession: "designer",
    imgURL: "unsplash_YcclkJH1TIk.svg",
  },
  {
    id: 2,
    fullName: "Debbie LaChusa",
    profession: "CEO",
    imgURL: "img-2.svg",
  },
];

function showCardsUI() {
  database.forEach((item) => {
    const newCard = createCard(item);
    cardsContainer.insertAdjacentHTML("beforeend", newCard);
  });
}

showCardsUI();

function createCard(data) {
  return `
    <div data-id='${data.id}' class="card__container">
        <div class="card__header__img">
          <img src="./assets/images/${data.imgURL}" alt="" />
        </div>

        <div class="card__footer">
          <p class="card__name">${data.fullName}</p>
          <p class="card__profession">${data.profession}</p>
        </div>
    </div>
    `;
}
