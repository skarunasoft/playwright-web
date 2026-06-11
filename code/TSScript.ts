

let b: number = 10;
console.log(b);

let name1: string = "Sachin";
console.log(name1);


let state: boolean = true;
console.log(state);


let names: string[] = ["Sachin", "Saurav", "Rahul"];
console.log(names);

let person: { name: string, age: number } = { name: "Sachin", age: 50 };
console.log(person);
console.log(person.name);
console.log(person.age);


function add(a: number, b: number): void {
    let c = a + b;
    console.log(c);
}

function calculation(a: number, b: number): number {
    return a + b;
}



console.log(calculation(10, 20));
add(10, 20);



