import React,{useState} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
const Register = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate()

// form function
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout> 
        <div className="form-container">
            <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    
                    <input  type="text" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="form-control" 
                            id="exampleInputName"
                            placeholder='Enter your name'
                            required/>
                </div>
                <div className="mb-3">
                    <input  type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} 
                            className="form-control" 
                            id="exampleInputEmail1"
                            placeholder='Enter your Email'
                            required/>
                </div>
                <div className="mb-3">
                    <input type="password" 
                    className="form-control" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    id="exampleInputPassword1" 
                    placeholder='Enter your password'
                    required />
                </div>
                <div className="mb-3">
                    <input  type="text" 
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            className="form-control" 
                            id="exampleInputPhone"
                            placeholder='Enter your Phone'
                            required/>

                </div>
                <div className="mb-3">
                    <input  type="text" 
                            value={address}
                            onChange={(e)=>setAddress(e.target.value)}
                            className="form-control" 
                            id="exampleInputAddress"
                            placeholder='Enter your Address'
                            required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    </Layout>
  )
}

export default Register