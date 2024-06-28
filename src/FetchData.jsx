import React, { useEffect, useState } from 'react'


const FetchData = () => {
    const [apiData,setApiData] =useState([]);
    useEffect(() =>{
        const fetchDataFromAPI =async () =>{

            const api = await fetch ("https://jsonplaceholder.typicode.com/posts");
            const data = await api.json();

            console.log(data);
            setApiData(data);
        };
        fetchDataFromAPI();
    },[])
  return (
    <div>{apiData.map((data)=>(<div key={data.id}
    style={{
        
    }}>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
    </div>) 
  )
}
</div>
  );
}

export default FetchData