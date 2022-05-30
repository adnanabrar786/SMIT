import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../../css/style.css'
// import logo from '../logo.JPG'
import { FormControl, InputLabel, Input, FormHelperText , Button } from '@mui/material';

import axios from 'axios'
import { useNavigate } from  "react-router-dom"


const AdminLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleClick = async () => {
        console.log(email, password);
        await axios.post("http://localhost:5000/admin" , {
            email : email , 
            password : password
        })
        .then((res) => {
            if (res.data.email !== undefined) {
              console.log(res.data.email);
            //   {
            //     <AdminPage user={"res.data.email"} />;
            //   }
              navigate("/dashboard");
            } else {
              alert("invalid email");
            }
          });
      };

  

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">

                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} className='loginForm'>
                    {/* <img src={logo} alt='Logo' width='192px' height='192px' /> */}
                    <h1>Login</h1>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" type='text'
                            onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>


                    <FormControl>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" type="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>

                    <Box className="loginBtnBox" >
                        <Button variant="contained" color="secondary" onClick={handleClick}>Login</Button>
                    </Box>

            
            </Box>



        </Container>


        </React.Fragment >
    );
}




export default AdminLogin










// import React from 'react'
// import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

// const Addadmin = () => {
//   return (
//     <div>
     

//       <form>
//         <h2>Add Admin</h2>
//         <label>FirstName</label>
//         <input type="text" name='FirstName' /> <br />
//         <label>LastName</label>
//         <input type="text" name='LastName' /> <br />
//         <label>email</label>
//         <input type="text" name='email' /> <br />
//         <label>password</label>
//         <input type="text" name='password' /> <br />
//         <label>ConfirmPassword</label>
//         <input type="text" name='ConfirmPassword' />
//       </form>
//     </div>
//   )
// }

// export default Addadmin
