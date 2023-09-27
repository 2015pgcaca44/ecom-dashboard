import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
function Login (){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate("/products")
        }
    },[])
     async function signIn(){
        let item = {email,pass}
        const headers = {
            'mode':'cors',
            'Accept':'*/*',
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
            'Access-Control-Allow-Credentials': 'true'
        }
        let result = await fetch("api/login",{
            method:'POST',
            headers:headers,
            body:JSON.stringify(item)
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/products")
    }
    return(
        <div>
            <section className="vh-100" style={{backgroundColor:"#eee"}}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{border:"25px"}}>
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">User SignIn</p>

                                <form className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="email" value={email} id="form3Example3c" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                    <label className="form-label" for="form3Example3c">Your Email</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="password" value={pass} id="form3Example4c" className="form-control" onChange={(e) => setPass(e.target.value)} />
                                    <label className="form-label" for="form3Example4c">Password</label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" onClick={signIn} className="btn btn-primary btn-lg">Login</button>
                                </div>

                                </form>

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                className="img-fluid" alt="Sample image" />

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login;