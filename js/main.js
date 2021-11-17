
// генерирует случайное целое число
const getRandomInteger = (from, to) =>{
  if (from < 0 || to < 0) {
    throw new Error('only a positive range of numbers is allowed');
  }
  const min = Math.ceil(Math.min(from, to));
  const max = Math.floor(Math.max(from, to));

  return Math.floor(Math.random() * (max - min + 1) + min);
};

// генерирует случайное число с плавающей точкой
const getRandomFloatNumber = (from, to, decimalPlaces = 1) => {
  if (from < 0 || to < 0) {
    throw new Error('only a positive range of numbers is allowed');
  }
  const min = Math.min(from, to);
  const max = Math.max(from, to);

  return Number((Math.random() * (max - min) + min).toFixed(decimalPlaces));
};

const getAvatar = () => {
  return 'img/avatars/user' + 0 + getRandomInteger(1, 8) + '.png';
};

// Добавляет обьект автор
const getAuthor = () => {
  const author = {
    avatar: getAvatar(),
  };
  return author;
};

const title = 'Заголовок';

const getAdress = () => {

  return getRandomFloatNumber(1, 999, 1) + ',' + ' ' + getRandomFloatNumber(1, 999, 1);
};

const priceCount = getRandomInteger(1, 9999);

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];


const getRoomType = () => {

  const randomTypeIndex = getRandomInteger(0, TYPE.length - 1);
  return TYPE[randomTypeIndex];
};

const roomsCount = getRandomInteger(1, 15);

const guestsCount = getRandomInteger(1, 15);

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const getCheckinTime = () => {

  const randomCheckinIndex = getRandomInteger(0, CHECKIN.length - 1);
  return CHECKIN[randomCheckinIndex];
};


const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const getCheckoutTime = () => {

  const randomCheckoutIndex = getRandomInteger(0, CHECKOUT.length - 1);
  return CHECKOUT[randomCheckoutIndex];
};

const featuresArr = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const getFeatures = () => {
  const featuresCount = getRandomInteger(0, featuresArr.length - 1);
  const features = [];
  for (let i = 0;  i <= featuresCount; i++) {
    features.push(featuresArr[i]);
  }
  return features;
};

const description = 'Описание';

const photosArr = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const getPhotos = () => {
  const photosCount = getRandomInteger(0, photosArr.length - 1);
  const photos = [];
  for (let i = 0;  i <= photosCount; i++) {
    photos.push(photosArr[i]);
  }
  return photos;
};

// Добавляет обьект offer
const getOffer = () => {
  const offer = {
    title: title,
    address: getAdress(),
    price: priceCount,
    type: getRoomType(),
    rooms: roomsCount,
    guests: guestsCount,
    checkin: getCheckinTime(),
    checkout: getCheckoutTime(),
    features: getFeatures(),
    description: description,
    photos: getPhotos(),
  };
  return offer;
};

const getCoordinateX = () => 35 + '.' + getRandomInteger(65000, 70000);

const getCoordinateY = () => 139 + '.' + getRandomInteger(70000, 80000);

const getLocation = () => {
  const location = {
    x: getCoordinateX(),
    y: getCoordinateY(),
  };
  return location;
};

const addPublication = () => {
  const publication = {
    author: getAuthor(),
    offer: getOffer(),
    location: getLocation(),
  };
  return publication;
};


const PUBLICATIONS_COUNT = 10;


const createPublicationsList = new Array(PUBLICATIONS_COUNT).fill(null).map(() => addPublication());

