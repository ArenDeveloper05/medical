
import { useState,useEffect ,useCallback} from 'react';
import { addPhoto } from '../../DataServices';

const GalleryAdmin = () => {
    const [photo,SetPhoto] = useState("");

  
    const sendPhoto = useCallback(async () => {
    try{
        const photoPostData = await addPhoto({photo})
    }
    catch{

    }
    
    },[photo]);
   
    return (
        <div className='gallery-admin-panel'>
            <div className='gallery-admin-panel-functional'>
            <input 
            type = "file"
            onChange={(e)=>SetPhoto(e.target.value)}
            />
           <button
           type = "submit"
           onClick={sendPhoto}
           >
            Add Photo
           </button>
           </div>
           <div className='already-in-gallery'>
            {/* {GalleryData && GalleryData.map((item)=>
             <img 
             key ={item.id}
             src={item.src} 
             alt ="image"/>
             )} */}
           </div>
        </div>
        
    )
}

export default GalleryAdmin