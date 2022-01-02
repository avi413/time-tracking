const initialCards  = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];
const renderCards = (time="daily") => {
  initialCards.forEach(element => {
    addCardItem(element);
});
};

const container = document.querySelector(".cards");
const cards     = container.querySelector(".cards__list");

const dailyBtn = document.querySelector(".profile__btn_type_daily"); 
const weeklyBtn = document.querySelector(".profile__btn_type_weekly");
const monthlyyBtn = document.querySelector(".profile__btn_type_monthly");

dailyBtn.addEventListener('click',() => handleTimeCardData("daily")); 
weeklyBtn.addEventListener('click',() => handleTimeCardData("weekly")); 
monthlyyBtn.addEventListener('click',() => handleTimeCardData("monthly")); 

function handleTimeCardData (time) {
  initialCards.forEach(element => {
    editCard(element,time);
});
}

function addCardItem(item, time="daily") {
    const galeryitemEl = createCard(item, time)
    cards.append(galeryitemEl); 
}

function editCard(card, time) {
  const cardTitle = card.title.toLowerCase().replace(" ", "-");
  const cardElementclass = ".card_type_" + cardTitle;
  const topClass  = "card__top_type_" + cardTitle;
  let timeframe = card.timeframes.daily;

  if(time === "weekly") timeframe = card.timeframes.weekly;
  if(time === "monthly") timeframe = card.timeframes.monthly;

  const cardElement          = document.querySelector(cardElementclass);
  const elementCardTop       = cardElement.querySelector(".card__top");
  const elementCardTopImg    = cardElement.querySelector(".card__top-img");
  const elementCardTitle     = cardElement.querySelector(".card__title");
  const elementCardHrs         = cardElement.querySelector(".card__hrs");
  const elemenCardLsatTime     = cardElement.querySelector(".card__lsat-time");

  elementCardTopImg.src = "./images/icon-"+cardTitle+".svg";
  elementCardTopImg.alt = card.title;
  elementCardTitle.textContent = card.title;
  elementCardHrs.textContent = timeframe.current+"hrs";;
  elemenCardLsatTime.textContent = "Last Week - " + timeframe.previous+"hrs";
  return cardElement;
}


function createCard(card, time) {
    const cardTemplate         = document.querySelector("#card-template").content;
    const cardElement          = cardTemplate.querySelector('.card').cloneNode(true);
    const elementCardTop       = cardElement.querySelector(".card__top");
    const elementCardTopImg    = cardElement.querySelector(".card__top-img");
    const elementCardTitle     = cardElement.querySelector(".card__title");
    const elementCardHrs         = cardElement.querySelector(".card__hrs");
    const elemenCardLsatTime     = cardElement.querySelector(".card__lsat-time");

    const cardTitle = card.title.toLowerCase().replace(" ", "-");
    const cardElementclass = "card_type_" + cardTitle;
    const topClass  = "card__top_type_" + cardTitle;
    let timeframe = card.timeframes.daily;

    if(time === "weekly") timeframe = card.timeframes.weekly;
    if(time === "monthly") timeframe = card.timeframes.monthly;

    cardElement.classList.add(cardElementclass);
    elementCardTop.classList.add(topClass);

    elementCardTopImg.src = "./images/icon-"+cardTitle+".svg";
    elementCardTopImg.alt = card.title;
    elementCardTitle.textContent = card.title;
    elementCardHrs.textContent = timeframe.current+"hrs";;
    elemenCardLsatTime.textContent = "Last Week - " + timeframe.previous+"hrs";
    return cardElement;
  }

  renderCards();