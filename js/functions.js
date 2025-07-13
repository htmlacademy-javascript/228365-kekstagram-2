// Функция для проверки длины строки
/* Вариант 1: декларативное объявление функции
function isValidLength(input, maxLength) {
  return input.length <= maxLength;
}
*/

/* Вариант 2: стрелочная функция с return:
const isValidLength = (input, maxLength) => {
  return input.length <= maxLength;
};
*/

// Вариант 3: стрелочная функция с неявным return:
const isValidLength = (input, maxLength) => input.length <= maxLength;
isValidLength('Проверка', 2); // false
isValidLength('Проверка', 10); // true


// Функция для проверки, является ли строка палиндромом.
function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^а-яa-z0-9]/gi, '');
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized.at(i);
  }
  return normalized === reversed;
}
isPalindrome('Лёша на полке клопа нашёл '); // true
isPalindrome('Шалаш'); // true
isPalindrome('тоПот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false


// Функция для получения числа из строки
function extractDigits(value) {
  const str = value.toString();
  let digits = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const num = parseInt(char, 10);

    if (!Number.isNaN(num)) {
      digits += char;
    }
  }

  return digits === '' ? NaN : parseInt(digits, 10);
}
extractDigits('2023 год'); // 2023
extractDigits('ECMAScript 2022');
extractDigits('1 кефир, 0.5 батона'); // 105
extractDigits('агент 007'); // 7
extractDigits('а я томат'); // NaN
extractDigits(2023); // 2023
extractDigits(-1); // 1
extractDigits(1.5); // 15
extractDigits(NaN); // NaN
extractDigits(true); // NaN
extractDigits(false); // NaN
extractDigits(''); // NaN
