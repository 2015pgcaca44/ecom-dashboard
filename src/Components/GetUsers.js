import React,{useEffect,useState} from "react";
import { Table,Button,Row,Col } from "react-bootstrap";
function GetUsers (){
    const [res,setResult]=useState([]);
    useEffect(()=>{
        fetch('api/users')
        .then((res)=>{ res.json().then((resp)=>{
                setResult(resp) 
            })
        })
    },[])

    // console.log(res);

    return(
        <div>
            <Row style={{width:"100%"}}><Col sm={2}><h3 className="mb-3"></h3><h3>User List</h3></Col></Row>
            <center>
            <Table striped bordered hover variant="grey" responsive="sm" style={{width:"95%",margin:20}}>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th colSpan={2} style={{width:"10%"}}>Action</th>
                </thead>
                <tbody>
                    {
                        res.map((item,i)=>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><Button className="btn-sm btn-dark">edit</Button></td>
                            <td><Button className="btn-sm btn-dark">delete</Button></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
            </center>
        </div>
    )
}
export default GetUsers;