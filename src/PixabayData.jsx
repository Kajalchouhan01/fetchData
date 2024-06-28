import React, { useEffect, useState } from 'react'

const PixabayData = () => {
   const [apiData, setApiData ] = useState([]) ;
   const [inputData,setInputData] = useState("india");
    useEffect(() => {
        const fetchDataFromAPI=async() =>{
            const API_KEY ="44204660-829d0a849091c494865ee3c63";
            // let query ="shanghai";
        const api = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputData}&image_type=photo`);
        const data = await api.json();
        console.log("my pixabay api data =",data.hits);
        setApiData(data.hits);
    };
fetchDataFromAPI();
},[inputData]);
  return (
<>
<div style={{textAlign:'center',margin:'20px'}}>
    <input 
     type ="text" placeholder='search here' onChange={(e)=>setInputData}/>
</div>

    <div style ={{display:'flex',justifyContent:'center',alignItems:"center",flexWrap:'wrap'}}>

      {/* {apiData.map((data)=>(
        <div key={data.id}style={{ margin:'20px'}}>
            <img src ={data.largeImageURL}>
        </div>
      ))} */}

      {apiData.map((data)=> <div key={data.id}>
            <img src={data.largeImageURL} style ={{width:'350px',border:'2px solid blue'}}alt="" />
      </div>)}
    </div>
    </>
  );

}
export default PixabayData