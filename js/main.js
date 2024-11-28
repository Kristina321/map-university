(() => {
  const page = document.getElementById('page');
  const map = document.getElementById('map');
  let scrollPosition;

  const data = {
    "rating": [
      {
        "id": "123",
        "name": "Владимир",
        "lastName": "Ларионов",
        "img": "../img/rating/male.png",
        "points": "463"
      },
      {
        "id": "9",
        "name": "Владимир",
        "lastName": "Сергеев",
        "img": "../img/rating/male.png",
        "points": "521"
      },
      {
        "id": "231",
        "name": "Вениамин",
        "lastName": "Васильев",
        "img": "../img/rating/male.png",
        "points": "865"
      },
      {
        "id": "321",
        "name": "Мария",
        "lastName": "Логинова",
        "img": "../img/rating/female.png",
        "points": "865"
      },
      {
        "id": "492",
        "name": "Борис",
        "lastName": "Казанцев",
        "img": "../img/rating/male.png",
        "points": "784"
      },
      {
        "id": "452",
        "name": "Полина",
        "lastName": "Калинина",
        "img": "../img/rating/female.png",
        "points": "225"
      },
      {
        "id": "796",
        "name": "Даниил",
        "lastName": "Воробьёв",
        "img": "../img/rating/male.png",
        "points": "642"
      },
      {
        "id": "4",
        "name": "Эрик",
        "lastName": "Аксёнов",
        "img": "../img/rating/male.png",
        "points": "150"
      },
      {
        "id": "1155",
        "name": "Иван",
        "lastName": "Иванов",
        "img": "../img/rating/male.png",
        "points": "100"
      },
      {
        "id": "12145",
        "name": "Артем",
        "lastName": "Алексеев",
        "img": "../img/rating/male.png",
        "points": "1000"
      }
    ],
    "friends": [
      {
        "id": "9",
        "name": "Владимир",
        "lastName": "Сергеев",
        "img": "../img/rating/male.png"
      },
      {
        "id": "4",
        "name": "Эрик",
        "lastName": "Аксёнов",
        "img": "../img/rating/male.png"
      },
      {
        "id": "15411",
        "name": "Ирина",
        "lastName": "Чеснокова",
        "img": "../img/rating/female.png"
      },
      {
        "id": "15564",
        "name": "Дарина",
        "lastName": "Боброва",
        "img": "../img/rating/female.png"
      }
    ]
  }

  class Step {
    constructor(id, x, y) {
      this.id = id;
      this.x = x;
      this.y = y;
    }

    get translate() {
      return `${this.x}px, ${this.y}px`;
    }
  }

  const stepsArr = [
    new Step('step0', 433, 499),
    new Step('step1', 343, 470),
    new Step('step2', 269, 514),
    new Step('step3', 182, 532),
    new Step('step4', 103, 504),
    new Step('step5', 111, 436),
    new Step('step6', 135, 384),
    new Step('step7', 207, 347),
    new Step('step8', 169, 276),
    new Step('step9', 131, 223),
    new Step('step10', 189, 189),
    new Step('step11', 246, 239),
    new Step('step12', 289, 201),
    new Step('step13', 324, 152),
    new Step('step14', 365, 106),
    new Step('step15', 408, 32),
    new Step('step16', 497, 74),
    new Step('step17', 453, 147),
    new Step('step18', 478, 220),
    new Step('step19', 444, 293),
    new Step('step20', 378, 343),
    new Step('step21', 368, 406),
    new Step('step22', 446, 423),
    new Step('step23', 518, 463),
    new Step('step24', 610, 491),
    new Step('step25', 708, 518),
    new Step('step26', 802, 466),
    new Step('step27', 877, 418),
    new Step('step28', 940, 379),
    new Step('step29', 948, 306),
    new Step('step30', 895, 283),
    new Step('step31', 834, 321),
    new Step('step32', 776, 357),
    new Step('step33', 713, 347),
    new Step('step34', 718, 293),
    new Step('step35', 784, 249),
    new Step('step36', 799, 184),
    new Step('step37', 744, 174),
    new Step('step38', 671, 211),
    new Step('step39', 617, 252),
    new Step('step40', 573, 300),
    new Step('step41', 510, 279),
    new Step('step42', 499, 226),
    new Step('step43', 537, 171),
    new Step('step44', 583, 137),
    new Step('step45', 607, 79),
    new Step('step46', 639, 27),
    new Step('step47', 686, 50),
    new Step('step48', 665, 134),
    new Step('step49', 744, 79),
    new Step('step50', 812, 133),
    new Step('step51', 858, 102),
    new Step('step52', 873, 165),
  ];


  function createStepOnRoad() {
    const stepsBtnArr = [];

    stepsArr.forEach(({ id, x, y }, index) => {
      const step = createBtn(id, ['btn', 'road-btn']);

      step.style.transform = `translate(${x}px, ${y}px)`;

      if (index === 0 || index === 52) {
        step.classList.add('road-location');
      } else if (
        index === 5 ||
        index === 10 ||
        index === 15 ||
        index === 19 ||
        index === 24 ||
        index === 29 ||
        index === 35 ||
        index === 41 ||
        index === 47) {
        step.classList.add('road-point');
      } else {
        step.classList.add('road-step');
      }

      stepsBtnArr.push(step);

    });
    return stepsBtnArr;
  }

  function createIcon() {
    const icon = document.createElement('span');

    icon.classList.add('icon');
    icon.style.transform = 'translate(434px, 438px)';
    icon.id = 'icon';

    return icon;
  }

  function createFriendBlock() {
    const arrArrowLeftClass = ['btn', 'friend__arrow', 'arrow-left'];
    const arrArrowRightClass = ['btn', 'friend__arrow', 'arrow-right'];
    const friendBlock = document.createElement('div');
    const newFriendBtnWrap = createFriendElement('div');
    const sliderWrapper = document.createElement('div');
    const friendList = createFriendList();
    const newFriendBtn = createBtn('addFriend', arrBtnClass('friend'));
    const arrowLeft = createBtn('arrowLeft', arrArrowLeftClass);
    const arrowRight = createBtn('arrowRight', arrArrowRightClass);

    friendBlock.classList.add('map__friend', 'friend', 'slider-container');
    sliderWrapper.classList.add('friend__slider');
    sliderWrapper.id = 'slider';

    newFriendBtnWrap.append(newFriendBtn);
    sliderWrapper.append(friendList);
    friendBlock.append(arrowLeft, newFriendBtnWrap, sliderWrapper, arrowRight);

    slider(arrowLeft, arrowRight, friendList);

    return friendBlock;
  }

  function createBtnForControl(id, arrBtnClass, arrWrappClass, fn) {
    const btnWrap = document.createElement('div');
    const btn = createBtn(id, arrBtnClass);

    btnWrap.classList.add(...arrWrappClass);

    btnWrap.append(btn);

    if (!fn) {
      fn = () => console.log('btn click');
    }

    btn.addEventListener('click', fn);

    return btnWrap;
  }

  function createBtn(id, arrClass) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = id;
    btn.classList.add(...arrClass);

    return btn;
  }

  function createFriendList() {
    const list = document.createElement('ul');
    const dataFriendsEl = data.friends.map(({ img }) => createFriendElement('li', img));

    completeFullFriendSlots(dataFriendsEl);

    list.classList.add('friend__list');

    list.append(...dataFriendsEl);

    function completeFullFriendSlots(arr) {
      const totalSlots = 10;

      while (arr.length < totalSlots) {
        const emptyFriendBox = createFriendBox('li');
        arr.push(emptyFriendBox);
      }
    }

    return list;
  }

  function createFriendElement(elTag, src = '../img/map/avatar.png') {
    const friend = createFriendBox(elTag);
    const avatarFriend = document.createElement('img');

    avatarFriend.classList.add('friend__avatar');
    avatarFriend.src = src;
    avatarFriend.alt = 'Аватар игрока';

    friend.append(avatarFriend);

    return friend;
  }

  function createFriendBox(elTag) {
    const friend = document.createElement(elTag);
    friend.classList.add('friend__item');

    return friend;
  }

  function createModal() {
    const dialog = document.createElement('dialog');
    const content = document.createElement('div');
    const modalTitle = document.createElement('h2');
    const closeBtn = createBtn('closeModalBtn', ['btn', 'modal__btn-close']);
    const table = createRatingTable();

    dialog.classList.add('flex', 'modal');
    content.classList.add('modal__content');
    modalTitle.classList.add('modal__title');

    dialog.id = 'dialogRating';
    dialog.ariaLabel = 'Окно с рейтингом игроков';
    modalTitle.textContent = 'Рейтинг игроков';

    content.append(modalTitle, closeBtn, table);
    dialog.append(content);

    dialog.addEventListener("click", closeOnBackDropClick);

    closeBtn.addEventListener('click', () => closeModal(dialog));

    dialog.addEventListener('keydown', (e) => closeAfterEsc(e, dialog));

    return dialog;
  }

  function createRatingTable() {
    const table = document.createElement('div');
    const header = createHeaderTable();
    const body = document.createElement('div');
    const tableList = document.createElement('ul');

    table.id = 'table';
    body.classList.add('table__body');
    table.classList.add('table');
    tableList.classList.add('table__body-list');

    const sortRatingArr = data.rating.toSorted(sortForRating);

    sortRatingArr.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('table__body-item');
      listItem.append(createPlayer(item, index));
      tableList.append(listItem);
    })

    body.append(tableList);
    table.append(header, body);

    return table;
  }

  function createHeaderTable() {
    const wrapper = document.createElement('div');
    const headerList = document.createElement('ul');

    wrapper.classList.add('table__header');
    headerList.classList.add('table__list');

    const columnHeader = ['Место', '', 'Имя Фамилия', 'Опыт'];
    //на случай, если колонку с аватаркой всё же проименуют - оставляю в массиве пустой слот
    //если не предусмотрено в будущем именовать эту колонку, то следует удалить

    columnHeader.forEach((title) => {
      const col = document.createElement('li');
      const titleCol = document.createElement('span');

      if (title === 'Имя Фамилия') col.classList.add('name-cell');

      col.classList.add(`table__list-item`);
      titleCol.textContent = title;

      if (title) col.append(titleCol);

      headerList.append(col);
    })

    wrapper.append(headerList);

    return wrapper;
  }

  function createPlayer(playerObj, rat) {
    const player = document.createElement('div');
    const ratingCell = document.createElement('span');
    const avatarCell = document.createElement('div');
    const playerNameCell = document.createElement('span');
    const pointCell = document.createElement('span');
    const avatar = document.createElement('img');

    player.id = playerObj.id;

    if (data.friends.some(({ id }) => id === playerObj.id)) {
      player.classList.add('player-friend');
    }

    player.classList.add('player', 'table__list');
    playerNameCell.classList.add('player__name');
    avatarCell.classList.add('player__avatar');
    avatar.classList.add('player__avatar-img');

    ratingCell.textContent = rat + 1;
    playerNameCell.textContent = `${playerObj.name} ${playerObj.lastName}`;
    pointCell.textContent = playerObj.points;

    avatar.src = playerObj.img;
    avatar.alt = 'Аватар игрока';

    avatarCell.append(avatar);
    player.append(ratingCell, avatarCell, playerNameCell, pointCell);

    return player;
  }

  function arrBtnClass(str) {
    return ['btn', `${str}__btn`];
  }

  function arrWrappClass(str) {
    return [`map__${str}`, `${str}`];
  }


  function moveIcon() {
    const icon = document.getElementById('icon');
    const stepsArray = stepsArr.slice(1, 6);

    let currentStep = 0;

    moveToNextStep();

    function moveToNextStep() {
      if (currentStep < stepsArray.length) {

        setStep(stepsArray[currentStep]);

        currentStep++;

        setTimeout(moveToNextStep, 1000);
      }
    }

    function setStep(stepObj) {
      if (!stepObj) return;

      const stepElement = document.getElementById(stepObj.id);

      if (!stepElement) return;

      const { x, y } = calculateCoordinates(icon, stepElement);

      requestAnimationFrame(() => {
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  }

  function calculateCoordinates(elementA, elementB) {
    const rectA = elementA.getBoundingClientRect();
    const rectB = elementB.getBoundingClientRect();

    const widthA = rectA.width;
    const heightA = rectA.height;

    const centerXB = rectB.left + (rectB.width / 2);
    const centerYB = rectB.top + (rectB.height / 2);

    const newX = centerXB - (widthA / 2);
    const newY = centerYB + (rectB.height / 2) - heightA;

    return { x: Math.round(newX), y: Math.round(newY) };
  }

  function slider(arrowLeft, arrowRight, friendList) {
    let translateX = 0;
    const visibleSlides = 7;

    requestAnimationFrame(() => {
      const firstItem = friendList.children[0];
      const slideWidth = firstItem.getBoundingClientRect().width;
      const gap = parseInt(window.getComputedStyle(friendList).gap, 10) || 0;
      const totalSlideWidth = slideWidth + gap;
      const maxTranslateX = -(friendList.children.length - visibleSlides) * totalSlideWidth;

      const updateButtonsState = () => {
        arrowLeft.disabled = translateX === 0;
        arrowRight.disabled = translateX <= maxTranslateX;
      };

      const handleArrowClick = (direction) => {
        const newTranslateX = translateX + direction * totalSlideWidth;
        if (newTranslateX <= 0 && newTranslateX >= maxTranslateX) {
          translateX = newTranslateX;
          friendList.style.transform = `translateX(${translateX}px)`;
          updateButtonsState();
        }
      };

      arrowLeft.addEventListener('click', () => handleArrowClick(1));
      arrowRight.addEventListener('click', () => handleArrowClick(-1));

      updateButtonsState();
    });
  }

  function sortForRating(a, b) {
    return parseInt(b.points) - parseInt(a.points);
  }

  function closeModal(dialog) {
    dialog.classList.add('modal__close')
    page.classList.remove('scroll-lock');

    window.scrollTo(0, scrollPosition);
    page.style.top = '';

    setTimeout(() => {
      dialog.close();
      dialog.remove();
    }, 1000);
  }

  function closeAfterEsc(e, dialog) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal(dialog);
    }
  }

  function closeOnBackDropClick({ currentTarget, target }) {
    const dialogElement = currentTarget;
    const isClickedOnBackDrop = target === dialogElement;
    if (isClickedOnBackDrop) closeModal(dialogElement);
  }

  function openDialog() {
    const dialog = createModal();
    scrollPosition = window.scrollY;

    const lockPageScroll = (position) => {
      page.style.top = `-${position}px`;
      page.classList.add('scroll-lock');
    };

    lockPageScroll(scrollPosition);

    map.append(dialog);

    dialog.showModal();
  }

  function renderMapElements() {
    const elements = [
      ...createStepOnRoad(),
      createFriendBlock(),
      createBtnForControl('chatBtn', arrBtnClass('chat'), arrWrappClass('chat')),
      createBtnForControl('uniBtn', arrBtnClass('university'), arrWrappClass('university'), moveIcon),
      createBtnForControl('mailBtn', arrBtnClass('mail'), arrWrappClass('mail')),
      createBtnForControl('ratingBtn', arrBtnClass('rating'), arrWrappClass('rating'), openDialog),
      createIcon()];

    map.append(...elements);
  }

  function startGame() {
    renderMapElements();
  }

  window.startGame = startGame;

})();

document.addEventListener('DOMContentLoaded', function () {
  startGame(document.getElementById('map'));
});