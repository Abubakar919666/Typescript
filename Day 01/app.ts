let user: string = "haider";
user = "ali";

let num: number = 1;
num = 7;

let isOff: boolean = true;
isOff = false;

function greetUser(user: string): void {
    console.log(`Hello ${user}`);
}
greetUser(user);

let msg: string = "how are you ?";
function makeGreeting(user: string, msg: string): string{
    return `${msg} ${user}`;
}
makeGreeting(user , msg);

console.log(user, num, isOff);