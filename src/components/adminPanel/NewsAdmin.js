import React, { useCallback, useState } from 'react'

const NewsAdmin = () => {
    const [title ,SetTitle] = useState("");
    const [photo ,SetPhoto] = useState("");
    const [text ,SetText] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const sendNews = useCallback(async ()=>{
        if(title && photo && text){
        const data = {
            title: title,
            picture:photo,
            text:text,
            checked:isChecked
        }
        console.log(data)
    }
        
    },[title,photo,text,isChecked])


    return (
        <div className='news-admin-panel'>
            <input
            type = "text"
            className='news-title'
            placeholder='Գրեք Վերնագիրը '
            onChange={(e)=>SetTitle(e.target.value)}
            />
             <input 
            type = "file"
            className='file-input'
            onChange={(e)=>SetPhoto(e.target.value)}
            />
            <textarea
            onChange={(e)=>SetText(e.target.value)}
            ></textarea>
            <label>
                Տոպ Հայտարարություն
            <input
            type = "checkbox"
            className='checkbox'
            id="topping"
            name="popular"
            value="popular"
            // checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            />
            </label>
            <button
            onClick={sendNews}
            >
                Ավելացնել
            </button>
        </div>
        
    )
}

export default NewsAdmin