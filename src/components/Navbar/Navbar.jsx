import Navitem from './Navitem/Navitem.jsx'

const Navbar=(props)=>{
    const{categories,title}=props

    console.log(props)
    return(
        <>
            <div>
                <h1>{newTitle}</h1>
            </div>
            <div>
                <a href="#">{categories[0]}</a>
                <a href="#">{categories[1]}</a>
                <a href="#">{categories[2]}</a>
                <a href="#">{categories[3]}</a>
                <a href="#">{categories[4]}</a>

                {/* <Navitem name={categories[0]}/>
                <Navitem name={categories[1]}/>
                <Navitem name={categories[2]}/>
                <Navitem name={categories[3]}/>
                <Navitem name={categories[4]}/> */}
            </div>
        </>
    )
}

export default Navbar
