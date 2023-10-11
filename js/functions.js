function checkLength (checkString, maxLength) {
    return checkString.length <= maxLength; 
};
// Cтрока короче 20 символов
checkLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLength('проверяемая строка', 10); // false

function polindrom (checkText) {
    const newString = checkText.replaceAll(' ', '').toLowerCase();
    const halfSymvol = Math.floor(checkText.length / 2);
for (let i = 0; i < halfSymvol; i++) {
if (newString.at(i) !== newString.at(- i -1)){
    return false;
};
return true;
};
}; 

// Строка является палиндромом
polindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
polindrom('ДовОд'); // true
// Это не палиндром
polindrom('Кекс');  // false

polindrom('Лёша на полке клопа нашёл '); // true