import db from '../../config/fbConfig'

export const register = ({email, password}) => async dispatch => {
    const data = await db.auth().createUserWithEmailAndPassword(email, password);
    console.log(data)
   
};
export const login = ({email, password}) => async dispatch => { 
    const data = await db.auth().signInWithEmailAndPassword(email, password);
    console.log(data)
   };
export const logOut = () => async (dispatch, getState) => {};
