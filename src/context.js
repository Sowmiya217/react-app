import React, { useContext } from "react";

const ContextA = React.createContext()

export const CompA  = () =>{
    return (
        <ContextA.Provider value={"Test string"}>
            <CompB />
        </ContextA.Provider>
    )
}

export const CompB = () => {
    return <CompC />
}

export const CompC = () => {
    const { value: hookValue } = useContext(ContextA)
    return  (
        <ContextA.Consumer >
            {(value) => (
                <div>I'm Comp C - {value}, {hookValue}</div>
            )}
        </ContextA.Consumer>)
}

export const Comp = () => {
    return (
        <CompA />
    )
}
