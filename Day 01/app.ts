let user: string = "haider";
user = "ali";

let num: number = 1;
num = 7;

let isOff: boolean = true;
isOff = false;

function greetUser(userName: string): void {
    console.log(`Hello ${userName}`);
}
greetUser(user);

function makeGreeting(userName: string, msg: string): string{
    return `${msg} ${userName}`;
}
makeGreeting(user, 'How are you');

console.log(user, num, isOff);