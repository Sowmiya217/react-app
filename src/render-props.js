export const RenderingComp = () => {
    return (
        <Calculate render={data => {
            return (<Addtion values={data} />)
        }}/>
    )
}

const Calculate = (props) => {
    const {render} = props
    const data = {
        x: 2,
        y: 3
    }
    return (<div>Calculated Value :  { render(data) } </div>)
}

const Addtion =(props) => {
    const {values: {x, y}} = props
    console.log(props)
    return <p>value : {x + y}</p>
}