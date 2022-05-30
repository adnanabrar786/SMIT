import {
    ADMIN_SIGNIN_REQUEST,
    ADMIN_SIGNIN_SUCCESS,
    ADMIN_SIGNIN_FAIL
} from '../constant/admin/adminConstant'


const signin = (email, password) => async (dispatch) => {
    dispatch({ type: ADMIN_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post('/admin', { email : "email", password:"password" });
        dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data });
        //   Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_SIGNIN_FAIL, payload: error.message });
    }
};


export { signin };