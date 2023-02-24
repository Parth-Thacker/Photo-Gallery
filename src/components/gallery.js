import axios from 'axios'
import React, { useState } from 'react'
import Photos from './photos'
import "./gallery.css"
const Gallery = () => {
    const[inputData,setInputData] = useState('')
    let[pageNo,setPageNo] = useState(1)
    const[Data,setData] = useState([])
    const yourApiKey = 'baa89054cfa4c2fd6efc764a14b5880f';
const getFlickrImageURL = (photo) => {
    let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    return url;
  };
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${yourApiKey}&text=${inputData}&per_page=21&page=${pageNo}&format=json&nojsoncallback=1`
  //https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg

const fetchImage = (url)=>{
    //let url = fetchUrl
    axios.get(url)
    .then((res) =>{ 
    //console.log(res)
    const result = res.data.photos.photo
    let images = []
    for(let i=0;i<result.length;i++){
        images.push(getFlickrImageURL(result[i]))
    }
setData(images)
// console.log(Data)
// console.log(images)
})
}

const fetchMountainphoto = ()=>{
    setInputData("Mountain");
}
const fetchBeachphoto = ()=>{
    setInputData("Beaches");
}
const fetchBirdphoto = ()=>{
    setInputData("Birds");
}
const fetchFoodphoto = ()=>{
    setInputData("Food");
}
const NextPage = ()=>{
    console.log("clicked")
    setPageNo(pageNo+1)
    console.log(pageNo)
    fetchImage(url)
}
const PreviousPage = ()=>{
    console.log("clicked")
    if(pageNo>1){
        setPageNo(pageNo-1)
        console.log(pageNo)
        fetchImage(url)
    }
    else{
        window.alert("There is no any Previous Page")
    }
   
}
    function GetData() {
        fetchImage(url)
        setPageNo(1)
        // setInputData('')
    }
  return (
    <>
        <div className="container">
            <section className='heading-section'>
                <div className='heading'>SNAP SHOT</div>
                
            </section>
            <section className='content'>
                <input type="text" placeholder='Search' className='searchText'onChange={(e)=>{setInputData(e.target.value)}}value={inputData}/>
                <button className='searchBtn' onClick={GetData}>Search</button>
            </section>
            <section className='button-section'>
                <button className='searchBtn'onClick={fetchMountainphoto}>Mountain</button>
                <button className='searchBtn'onClick={fetchBeachphoto}>Beaches</button>
                <button className='searchBtn'onClick={fetchBirdphoto}>Birds</button>
                <button className='searchBtn'onClick={fetchFoodphoto}>Food</button>
            </section>
            <section className='sectionForChangePage'>
                <button className='searchBtn'onClick={PreviousPage}>Previous</button>
                <button className='searchBtn'onClick={NextPage}>Next</button>
            </section>
        </div>
        <div className='imageHeading'>{`${inputData} Pictures`}</div>
        <div className='imageContainer'>
        <section className='result' >
             {Data.length !==0 ?< Photos Data={Data}/>:null } 
            </section>
        </div>
    </>
    
  )
}

export default Gallery


// useEffect(()=>{
//     axios.get(`https://api.flickr.com/services/rest/?${parameters}`).then((res)=>{
//         const result = res.data
//         console.log(result)
//         console.log(result.photos.photo)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })