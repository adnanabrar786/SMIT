import {
    ADMIN_SIGNIN_REQUEST,
    ADMIN_SIGNIN_SUCCESS,
    ADMIN_SIGNIN_FAIL
} from '../constant/admin/adminConstant'


function adminSigninReducer(state = {}, action) {
    switch (action.type) {
      case ADMIN_SIGNIN_REQUEST:
        return { loading: true };
      case ADMIN_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload, success: true  };
      case ADMIN_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      // case USER_LOGOUT:
      //   return {};
      default:
        return state;
    }
  }

  export {adminSigninReducer} ;





// import { createSlice } from "@reduxjs/toolkit";

 
// const adminReducer = createSlice({
//     name : "users",
//     initialState: {
//         email : []  ,
//         password: []
//     },
//     reducers: {

//         addUsers :(state, action) => {
//             console.log(action);
//             state.email = [...state.email , action.payload],
//             state.password = [...state.password , action.payload]
//         }
        
//     }
// })

// export const {addUsers} = adminReducer.actions

// export default adminReducer.reducer;