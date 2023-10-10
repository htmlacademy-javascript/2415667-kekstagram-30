function checkLength (checkString, maxLength) {
    return checkString.length <= maxLength; 
};


function polindrom (checkText) {
    const newString = checkText.replaceAll(' ', '').toLowerCase();
    const halfSymvol = Math.floor(checkText.length/2);
    const lastChar = checkText.length - 1;
for (let i =0; i < halfSymvol; i++) {
if (newString.at(i) !== newString.at(- i -1)){
    return false;
};
return true;
};
}; 

