// Generics in interfaces

interface IGenericType<T> {
    (key: T, val: T): T;
}

export const concatValues = (val1: string, val2: string) => {
    console.log(`${val1}, ${val2}`);
    return `${val1}, ${val2}`;
}

const joinedStr: IGenericType<string> = concatValues;

joinedStr("str1", "str2")




// Generics in functions

function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400);


type AddFuncType = (a: number, b: number) => number

export const addNumbers: AddFuncType = (x: number, y: number): number => {
    return x + y as number
}