
import { useState,useEffect ,useCallback} from 'react';
import { addPhoto, getAllPhotos, getSinglePhoto } from '../../DataServices';
import Modal from './Modal';
import Image from 'next/image';

const GalleryAdmin = () => {

    const [photo,SetPhoto] = useState({});
    const [allPhotos, SetAllPhotos] = useState("");
    const [deletedPhoto, setDeletedPhoto] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState({})

    const sendPhoto = useCallback(async () => {
        console.log(photo)
    try{
        const photoPostData = await addPhoto({file:photo.file})
        console.log(photoPostData)
    }
    catch{

    }
    
    },[photo]);

useEffect(()=>{
    photoGetter
    // console.log(photo)
  
},[])


const photoGetter = useCallback(async ()=>{
    try{
        const returnetPhoto =  await getSinglePhoto("e9b867b3f660bce1731dc1bc8c39dff0")
        console.log(returnetPhoto,"ekav nkary")
    }catch(err){
        console.log(err,"chekav nkary")
    }
    
},[])



    // const fetchData = async () => {
    //     const {
    //       data: { data },
    //     } = await getAllPhotos();
    //     SetAllPhotos(data);
    //   };
   
    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
      

        <div className='gallery-admin-panel'>
            <div className='gallery-admin-panel-functional'>
            <Image
                className="img-fluid"
                src="/bufer/f8f866dd763b717a57f1e919754fc511"
                alt="gallery"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"100%"}
                style = {{width:"100px",height:"100px"}}
              />
            <input 
            type = "file"
            // onChange={(e)=>SetPhoto(e.target.value)}
            onChange={(e)=>SetPhoto(e.target.files[0])}
            />
           <button
           type = "submit"
           onClick={ sendPhoto}
           className="add-photo"
           >
            Ավելացնել
           </button>
           </div>
           <section className="gallery-admin-panel-table">

            <div className='gallery-table'>
                <div className='thead'>
                    <h3>Տեսադարան</h3>
                </div>
                <div className='tbody'>
                {/* {fakePhotoData && fakePhotoData.map((item)=>
                    <div key = {item.name} className = "item-tr">
                        <div className='img-td'><img src = {item.src} alt ="gallery"/></div>
                        <div className='image-title'><h6>{item.name}</h6></div>
                        <div className='del-btn'>
                            <button className="rounded bg-danger button"
                            onClick={ ()=>{setDeletedPhoto((prev) => !prev);setSelectedPhoto(item)}}
                            >Ջնջել</button>
                            </div>
                    </div>
                    )} */}
                    tesadaran
                </div>
            </div>
      </section>
      {deletedPhoto && (
        <Modal
          text={`Դուք վստա՞հ եք, որ ցանկանում եք ջնջել ${selectedPhoto.name} նկարը տեսադարանից`}
        />
      )}
        </div>
        
    )
}

export default GalleryAdmin