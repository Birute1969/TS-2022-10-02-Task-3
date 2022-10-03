//TypeScript - tipų aprašymo užtvirtinimas

const numbers: number[] = [4, 7, -6, 57, -27, 1, 160.06, 18, -103, 99, -4, 18, 20, -65, -100, 88, 5, -555];
const words: string[] = ["Sausis", "Vasaris", "Kovas", "Balandis", "GEGUŽĖ", "BIRŽELIS", "LIEPA", "RUGPJŪTIS", "RUGSĖJIS", "Spalis", "Lapkritis", "GRUODIS"];
// 1
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function myFunction(arr: any[]): void {
        console.log(arr.length - 1);
      }
    
      console.log(numbers);
      myFunction(numbers);
    
      console.log(words);
      myFunction(words);
}
console.groupEnd();

// 2
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function myFunction(arr: any[]): void {
        for (let i = 0; i < arr.length; i++) console.log(i);
      }
    
      console.log(numbers);
      myFunction(numbers);
    
      console.log(words);
      myFunction(words);
}
console.groupEnd();

// 3
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function myFunction(arr: any[]): void {
        for (let i = 0; i < arr.length; i++) console.log(arr[i]);
      }
    
      console.log(numbers);
      myFunction(numbers);
    
      console.log(words);
      myFunction(words);
}
console.groupEnd();

// 4
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
    function myFunction(arr: any[]): void {
        for (let i = 0; i < arr.length; i++) console.log(`[${i}] => ${arr[i]}`);
      }
    
      console.log(numbers);
      myFunction(numbers);
    
      console.log(words);
      myFunction(words);
}
console.groupEnd();

// 5
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function myFunction(arr: any[]): void {
        for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
      }
    
      console.log(numbers);
      myFunction(numbers);
    
      console.log(words);
      myFunction(words);
}
console.groupEnd();

// 6
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function myFunction(arr: any[]): void {
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

// 7
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    function myFunction(arr: any[]): void {
        const res = arr.join(' ');
        console.log(res);
        // console.log(...arr);
      }
    
      console.log(numbers);
      myFunction(numbers);
    
      console.log(words);
      myFunction(words);
}
console.groupEnd();

// 8
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
    function myFunction(arr: any[]): void {
        const res = arr.map((x, i) => `[${i}]=>${x}`).join(', ');
        console.log(res);
        // console.log(...arr.map((x, i) => `[${i}]=>${x} `));
      }
    
      console.log(numbers);
      myFunction(numbers);
    
      console.log(words);
      myFunction(words);
}
console.groupEnd();

// 9
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    function myFunct(arr: number[]): number[] {
        return arr.map(x => x * 2);
      }
    
      const result = myFunct(numbers);
      console.log(numbers);
      console.log(result);
}
console.groupEnd();

// 10
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    function myFunct(arr: number[]): number[] {
        return arr.map(x => x ** 2);
      }
    
      const result = myFunct(numbers);
      console.log(numbers);
      console.log(result);
}
console.groupEnd();

// 11
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    function myFunct(arr: number[]): number[] {
        return arr.map((x, i) => x * i);
      }
    
      const result = myFunct(numbers);
      console.log(numbers);
      console.log(result);
}
console.groupEnd();

// 12
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    function myFunct(arr: number[]): number[] {
        return arr.filter((x) => x > 0);
      }
    
      const result = myFunct(numbers);
      console.log(numbers);
      console.log(result);
}
console.groupEnd();

// 13
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    function myFunction(arr: number[]): number[] {
        return arr.filter((x) => x <= 0);
      }
    
      const result = myFunction(numbers);
      console.log(numbers);
      console.log(result);
}
console.groupEnd();

// 14
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    function myFunction(arr: number[]): number[] {
        return arr.filter((x) => x % 2 === 0);
      }
    
      const result = myFunction(numbers);
      console.log(numbers);
      console.log(result);
}
console.groupEnd();

// 15
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    function myFunction(arr: number[]): number[] {
        return arr.filter((x) => Math.abs(x) % 2 === 1);
      }
    
      const result = myFunction(numbers);
      console.log(numbers);
      console.log(result);
}
console.groupEnd();

// 16
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    function myFunction(arr: number[]): number[] {
        return arr.map((x) => x < 0 ? x * -1 : x);
      }
    
      const result = myFunction(numbers);
      console.log(numbers);
      console.log(result);
}
console.groupEnd();
