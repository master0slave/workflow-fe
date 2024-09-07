type GreetingFormat = "Default" | "Table";

interface GreetingInput {
  name: string;
  age: number;
  format?: GreetingFormat;
}

const greeting = (input: GreetingInput): void => {
  const { name, age, format = "Default" } = input;
  
  if (format === "Table") {
    console.table([{ Name: name, Age: age }]);
  } else {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
};

