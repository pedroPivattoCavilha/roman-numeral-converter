function convertToRoman(num) {
  const ROMAN_NUMERALS = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  const DECIMAL_NUMBERS = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  
  let romanNum = "";
  let i=ROMAN_NUMERALS.length;

  while(num > 0) {
    while (num >= DECIMAL_NUMBERS[i]) {
      romanNum += ROMAN_NUMERALS[i];
      num -= DECIMAL_NUMBERS[i];
    }
    i--;
  }
  return romanNum;
}
