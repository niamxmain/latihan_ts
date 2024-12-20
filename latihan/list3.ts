let isFinished: boolean = false;
console.log(isFinished, typeof isFinished);
let price: number = 150.34;
console.log(price, typeof price);
let numOfEmployees: number = 25;
console.log(numOfEmployees, typeof numOfEmployees);
let progLang: string = "TypeScript";
console.log(progLang, typeof progLang);
let university: string[] = ["UT", "UGM", "ITB"];
console.log(university, typeof university);
let employee: [number, string, boolean, number, string];
employee = [1, "zaky", true, 3, "niam"];
console.log(employee, typeof employee);
enum Color {
  Black = 2,
  Blue,
  Yellow,
  Green = 3,
  Red = 3 * 3,
}