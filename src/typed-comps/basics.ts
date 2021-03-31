import { IAddress } from "./typed-comp"

// type keyword
export type CustomType= number | string;


const optionalParam = (x: number, y?: number, z?: number) => {

}

interface ICodes {
    postalCode: number | null;
    stateCode: number;
}

// Combining types
type FullAddress = IAddress & ICodes

interface IFullAddress extends IAddress, ICodes{}

// utility types
type pickedTypes = Pick<IAddress, "district" | "postalCode">