import React from 'react';
import { Link} from 'react-router-dom';
import "./ReactLogin.css";

const Signup=()=> {

    //let navigate=useNavigate()

    /*const [user,setUser]=useState({
        //sno:"",
        fname:"",
        gender:"",
        //dob:"",
        //age:"",
        phoneno:"",
        //dist:"",
        //disease:"",
        email:"",
        //pincode:""
    })

    const {fname,gender,phoneno,email,pincode}=user

    const onInputChange=(e)=>{

        setUser({...user, [e.target.name]:e.target.value})
    }

    const onSubmit=async (e) => {
        e.preventDefault();
        //post(add)
        
        //await axios.post("http://localhost:3/saveProject", user);
        //navigate("/home");
    }*/

  return (
    // <div className="signup-page">
    <div className='signup-container'>
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                
                
                <div className='mb-4'>
                    
                <div><h2>Sign Up</h2></div> 
                <br></br>
                </div>
                <div className='mb-4'>
                    <label htmlFor='fname' className='form-label'>
                        First Name
                    </label>
                    <input
                    type={"text"} 
                    className='form-control'
                    placeholder='Name'
                    name='name'
                    //value={name}
                    // onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <br></br>
                <div className='mb-4'>
                    <label htmlFor='Gender' className='form-label'>
                        Gender
                    </label>
                    <input
                    type={'text'} 
                    className='form-control'
                    placeholder='Gender'
                    name='gender'
                    //value={gender}
                    //onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <br></br>
                
                
                <div className='mb-4'>
                    <label htmlFor='Phoneno' className='form-label'>
                        Phone no
                    </label>
                    <input
                    type={'number'} 
                    className='form-control'
                    placeholder='Phone no'
                    name='phoneno'
                    //value={phoneno}
                    //onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <br></br>
               
                
                <div className='mb-4'>
                    <label htmlFor='Email' className='form-label'>
                        Email
                    </label>
                    <input
                    type={'email'} 
                    className='form-control'
                    placeholder='Email'
                    name='email'
                    //value={email}
                    //onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <br></br>
                
                
                <Link to='/'><button type='submit' className='btn btn-outline-primary'>Submit</button></Link>
                
                
                </div>
            </div>
        </div>
    // </div>
  )
}
export default Signup