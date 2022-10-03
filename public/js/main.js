"use strict";
const numbers = [4, 7, -6, 57, -27, 1, 160.06, 18, -103, 99, -4, 18, 20, -65, -100, 88, 5, -555];
const words = ["Sausis", "Vasaris", "Kovas", "Balandis", "GEGUŽĖ", "BIRŽELIS", "LIEPA", "RUGPJŪTIS", "RUGSĖJIS", "Spalis", "Lapkritis", "GRUODIS"];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function myFunction(arr) {
        console.log(arr.length - 1);
    }
    console.log(numbers);
    myFunction(numbers);
    console.log(words);
    myFunction(words);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function myFunction(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(i);
    }
    console.log(numbers);
    myFunction(numbers);
    console.log(words);
    myFunction(words);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function myFunction(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i]);
    }
    console.log(numbers);
    myFunction(numbers);
    console.log(words);
    myFunction(words);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    function myFunction(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(`[${i}] => ${arr[i]}`);
    }
    console.log(numbers);
    myFunction(numbers);
    console.log(words);
    myFunction(words);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function myFunction(arr) {
        for (let i = arr.length - 1; i >= 0; i--)
            console.log(arr[i]);
    }
    console.log(numbers);
    myFunction(numbers);
    console.log(words);
    myFunction(words);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function myFunction(arr) {
        const res = arr.map((_, i) => i).join(' ');
        console.log(res);
        console.log(...arr.map((_, i) => i));
    }
    console.log(numbers);
    myFunction(numbers);
    console.log(words);
    myFunction(words);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    function myFunction(arr) {
        const res = arr.join(' ');
        console.log(res);
    }
    console.log(numbers);
    myFunction(numbers);
    console.log(words);
    myFunction(words);
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    function myFunction(arr) {
        const res = arr.map((x, i) => `[${i}]=>${x}`).join(', ');
        console.log(res);
    }
    console.log(numbers);
    myFunction(numbers);
    console.log(words);
    myFunction(words);
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    function myFunct(arr) {
        return arr.map(x => x * 2);
    }
    const result = myFunct(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    function myFunct(arr) {
        return arr.map(x => x ** 2);
    }
    const result = myFunct(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    function myFunct(arr) {
        return arr.map((x, i) => x * i);
    }
    const result = myFunct(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    function myFunct(arr) {
        return arr.filter((x) => x > 0);
    }
    const result = myFunct(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    function myFunction(arr) {
        return arr.filter((x) => x <= 0);
    }
    const result = myFunction(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    function myFunction(arr) {
        return arr.filter((x) => x % 2 === 0);
    }
    const result = myFunction(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    function myFunction(arr) {
        return arr.filter((x) => Math.abs(x) % 2 === 1);
    }
    const result = myFunction(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    function myFunction(arr) {
        return arr.map((x) => x < 0 ? x * -1 : x);
    }
    const result = myFunction(numbers);
    console.log(numbers);
    console.log(result);
}
console.groupEnd();
//# sourceMappingURL=main.js.map