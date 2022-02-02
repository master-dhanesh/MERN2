const form = document.querySelector('form');
const Cards = document.querySelector('.cards-container')

const CardsArray = [];

AddCard(CardsArray);

function AddCard(cards) {
    Cards.innerHTML = '';
    cards.forEach(function (card) {
        Cards.innerHTML += `
        <div class="card me-3" style="width: 15.5rem;">
        <img src="${card.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">
            ${card.name} <br>
            ${card.contact} <br>
            ${card.message}
        </p>
        </div>
    </div>
        `
    })
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const { name, contact, avatar, message } = e.target;
    const newCard = {
        name: name.value,
        contact: contact.value,
        avatar: avatar.value,
        message: message.value
    }
    CardsArray.push(newCard);

    AddCard(CardsArray);
})