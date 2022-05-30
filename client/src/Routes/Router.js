import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from '../pages/Home';

import Admin from '../pages/admin/Admin';
import ResetPassword from '../pages/admin/ResetPassword';
import Addadmin from '../pages/admin/Addadmin';
import AddStudent from '../pages/admin/AddStudent';
import Courses from '../pages/admin/Courses';
import Leaves from '../pages/admin/Leaves';

import StudentSignUp from '../pages/students/StudentSignUp';
import StudentLogin from '../pages/students/StudentLogin';
import StuddentAddLeaves from '../pages/students/StuddentAddLeaves';
import StudentViewLeaves from '../pages/students/StudentViewLeaves';


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact={true} element={<Home />} />

                    <Route path="/admin" element={<Admin />} />
                    <Route path="/admin/resetpassword" element={<ResetPassword />} />
                    <Route path="/admin/addadmin" element={<Addadmin />} />
                    <Route path="/admin/addstudent" element={<AddStudent />} />
                    <Route path="/admin/courses" element={<Courses />} />
                    <Route path="/admin/leavespage" element={<Leaves />} />

                    <Route path="/studentsignup" element={<StudentSignUp />} />
                    <Route path="/studentLogin" element={<StudentLogin />} />
                    <Route path="/studentaddleaves" element={<StuddentAddLeaves />} />
                    <Route path="/studentviewleaves" element={<StudentViewLeaves />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
