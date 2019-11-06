import readlineSync from "readline-sync";

export const sayHello = () => {
    const userName = readlineSync.question("May I have your name? ");
    console.log("Hello, " + userName + "!");
};

export const sayHelloWorld = () => {
    console.log("Hello world!");
};


// export default sayHello;
