import memeIcon from "../assets/meme-icon.png";
import memeData  from "../meme.js";

export default function Main(){
    let url = "url here";
    function getImage(){
        const memeArray = memeData.data.memes;
        const getRandom = Number.parseInt(Math.random() * memeArray.length);
        ({url} = memeArray[getRandom]);
    };

    return (
        <>
            <main>
                <form action="">
                    <p>{url}</p>
                    <div className="form-label-block">
                        <div className="form-label">
                            <label htmlFor="topText">
                                Top Text
                                <input placeholder="Top Text" type="text" name="topText" id="topText" />
                            </label>
                        </div>
                        <div className="form-label">
                            <label htmlFor="bottomText">
                                Bottom Text
                                <input placeholder="Bottom Text" type="text" name="bottomText" id="bottomText" />
                            </label>
                        </div>
                    </div>
                    <button onClick={getImage} className="submitBtn" type="button">Get New Image <img src={memeIcon} alt="small picture frame" /></button>
                </form>
            </main>    
        </>
    )
}