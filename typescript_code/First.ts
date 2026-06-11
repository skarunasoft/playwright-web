let a:number = 10;
let city:string="Chennai";
let isMarried:boolean = false;


console.log(a);
console.log(city);
console.log(isMarried);


let  names:string[] = ["Ram","Sham","Ram","Ram"];
console.log(names);

let  numbers:number[] = [1,2,3,4,5];
console.log(numbers);


let  mixed:(string|number)[] = ["Ram",1,"Sham",2,"Ram",3,"Ram",4,5];
console.log(mixed);
let  o:any = "10";
console.log(o);

function calculation(a:number, b:number):number{
  let c:number = a+b;
    return c;
}

console.log(calculation(10, 20));