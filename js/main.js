
// генерирует случайное целое число
const getRandomInteger = function (from, to) {
  if (from < 0 || to < 0) {
    throw new Error('only a positive range of numbers is allowed');
  }
  const min = Math.ceil(Math.min(from, to));
  const max = Math.floor(Math.max(from, to));

  return Math.floor(Math.random() * (max - min + 1) + min);
};

// генерирует случайное число с плавающей точкой
const getRandomFloatNumber = function (from, to, decimalPlaces = 1) {
  if (from < 0 || to < 0) {
    throw new Error('only a positive range of numbers is allowed');
  }
  const min = Math.min(from, to);
  const max = Math.max(from, to);

  return Number((Math.random() * (max - min) + min).toFixed(decimalPlaces));
};

getRandomInteger(1, 5);

getRandomFloatNumber(1, 2, 2);
