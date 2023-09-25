import React,{useEffect,useState} from "react";
function GetUsers (){
    const [res,setResult]=useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/users')
        .then((res)=>{ res.json().then((resp)=>{
                setResult(res) 
            })
        })
    },[])

    console.log(res);

    return(
        <div>
            <h3>GetUsers page</h3>
        </div>
    )
}
export default GetUsers;