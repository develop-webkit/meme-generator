import {useEffect, useState}  from 'react';
import memeIcon from "../assets/meme-icon.png";

export default function Main(){

    const [meme, setMeme] = useState({topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg"});
    const [allMemeImages, setAllMemeImages] = useState([]);

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => console.log(data))
    },[])
    
    function getImage(){
        const memeArray = allMemeImages.data.memes;
        const getRandom = Number.parseInt(Math.random() * memeArray.length);
        const memeUrl = memeArray[getRandom].url
        setMeme(
            (preMeme) => ({ ...preMeme, randomImage: memeUrl})
        );
    }

    function onChange(event){
        const {name,value} = event.target
        setMeme(
            preMeme =>{
                return {
                    ...preMeme,
                    [name]:value
                }
            }
        )
    }

/**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

    return (
        <>
            <main>
                <form action="">
                    <div className="form-label-block">
                        <div className="form-label">
                            <label htmlFor="topText">
                                Top Text
                                <input onChange={onChange} placeholder="Top Text" value={meme.topText} type="text" name="topText" id="topText" />
                            </label>
                        </div>
                        <div className="form-label">
                            <label htmlFor="bottomText">
                                Bottom Text
                                <input onChange={onChange} placeholder="Bottom Text" value={meme.bottomText} type="text" name="bottomText" id="bottomText" />
                            </label>
                        </div>
                    </div>
                    <button onClick={getImage} className="submitBtn" type="button">
                        Get New Image <img src={memeIcon} alt="small frame" />
                    </button>
                </form>
                <div className="meme-image-div">
                    <h2 className='meme-Text top-Meme-Text'>{meme.topText}</h2>
                    <img src={meme.randomImage} alt="meme" />
                    <h2 className='meme-Text bottom-Meme-Text'>{meme.bottomText}</h2>
                </div>
            </main>    
        </>
    )
}