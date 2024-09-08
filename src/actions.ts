export function sayHello(name: string) {
  console.log(`Hello ${name}`);
}

export let person = "susan";

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: "peter",
  age: 25,
};

export default newStudent;
