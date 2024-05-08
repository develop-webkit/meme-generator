import React from 'react'
import memeIcon from "../assets/meme-icon.png";
import memeData  from "../meme.js";

export default function Main(){
    const [meme, setMeme] = React.useState({topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg"});
    const [allMemeImages, setAllMemeImages] = React.useState(memeData);

    function getImage(){
        const memeArray = allMemeImages.data.memes;
        const getRandom = Number.parseInt(Math.random() * memeArray.length);
        const memeUrl = memeArray[getRandom].url
        setMeme(
            (preMeme) => ({ ...preMeme, randomImage: memeUrl})
        );
    }

    return (
        <>
            <main>
                <form action="">
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
                    <button onClick={getImage} className="submitBtn" type="button">
                        Get New Image <img src={memeIcon} alt="small frame" />
                    </button>
                </form>
                <div className="meme-image-div">
                    <img src={meme.randomImage} alt="meme" />
                </div>
            </main>    
        </>
    )
}