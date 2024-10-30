// import { Dispatch } from 'redux';
// import { loginRequest, loginSuccess, loginFailure } from '../slices/authSlice'; 
// import { auth } from '../../firebaseConfig';
// import { signInWithEmailAndPassword } from 'firebase/auth'; 

// export const loginUser = (email: string, password: string) => async (dispatch: Dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password); 
//     dispatch(loginSuccess({ email: userCredential.user?.email || '' })); 
//   } catch (error: unknown) { 
  
//     const errorMessage = error instanceof Error ? error.message : 'Login failed'; 
//     dispatch(loginFailure(errorMessage));
//   }
// };

