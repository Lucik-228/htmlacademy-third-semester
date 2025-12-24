// Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// Примеры использования функции проверки длины строки
console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 10)); // false

// Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
}

// Примеры использования функции палиндрома
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс'));  // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

// Функция для перевода времени в минуты
const parseTimeToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

// Функция проверки встречи в рабочее время
function isMeetingWithinWorkingHours(workStart, workEnd, meetingStart, meetingDuration) {
  const workStartMinutes = parseTimeToMinutes(workStart);
  const workEndMinutes = parseTimeToMinutes(workEnd);
  const meetingStartMinutes = parseTimeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}

// Примеры использования функции проверки времени встречи
console.log(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120));     // true
console.log(isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90));  // false
console.log(isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900)); // false
