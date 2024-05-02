import logo from "../assets/logo.png"

export default function Header(){
    return (
        <>
            <header>
                <div className="container">
                    <div>
                        <img src={logo} alt="" />
                        <h1>Meme Generator</h1>
                    </div>
                    <div>
                        <p>React Course - Project 3</p>
                    </div> 
                </div>    
            </header>
        </>
    )
}