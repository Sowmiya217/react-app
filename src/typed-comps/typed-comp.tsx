export interface ICompProps{
    name: string;
    lastName?: string;
    address?: IAddress;
    callback?: (value: string)=> void;
    callback2?: (value: number) => string
}

//extending types
interface ITypedCompProps extends ICompProps{
    date?: Date;
}

export interface IAddress {
    postalCode: number | null;
    streetName?: string;
    readonly district: string;
    state: string
}

// generics in components

interface ICompAResult {
    result: {
        name: string;
        fullName: string;
    };
    statusCode: number;
}

export const CompA = () => {
    return (
        <TypedComp<ICompAResult> name={"some name"}/>
    )
}

interface ICompBResult {
    data: {
        count: number;
    };
    statusCode: number;
}

const CompB = () => {
    return (
        <TypedComp<ICompBResult> name={"some name"}/>
    )
}

const getCompAData = async <T extends {}>() => {
    let value = {};
    // this is native fetch, which can be used to call any server. This is supported by many of the browsers.
    await fetch('http://localhost:3002/userInfo') // 3002 is the port that our express webserver is running on
        .then<T>(response => response.json()) // here we use the generic type to define the result of the api
        .then(data => {
            console.log(data);
            value = data;
        });
    return value as T;
}

export const TypedComp = <T extends {}>(props: ITypedCompProps) => {
    const { name, lastName, address, date } = props;
    const val: number = address?.postalCode! // ! - type assertion for null cases, ? - for undefined cases
    const num = Math.random()

    // address.district = "Chennai" // gives error bcz district is a readonl property

    const newAddress: IAddress = {
        postalCode: 90,
        // streetName: "", // not required to provide value, since it is defined as optional param 
        district: "",
        state: ""
    }

    console.log(typeof newAddress)

    const logCompAData = async () => {
        const compAResult = await getCompAData<T>();
        console.log(" Loggin comp a data : ", {compAResult}); // Open dev tools and check in console to see the printed result
    }

    logCompAData(); // Similarly we can do the same for CompB as well

    return (
        <div>
            Typed Component
        </div>
    )
}