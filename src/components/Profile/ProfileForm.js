import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/authcontext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const ProfileForm = () => {
 const history= useHistory()
 const passinput= useRef()
 const authctx=useContext(AuthContext)
 const submitt=(event)=>{
  event.preventDefault()
  const enterednewpass=passinput.current.value;
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAy1WbeqvT3dm6sOI0FkYOACXwCPUjB0lE',{
    method:'POST',
    body:JSON.stringify({
      idToken:authctx.token,
      password:enterednewpass,
      returnSecureToken:false,
    }),
    headers:{
      'content-Type':'application/json'
    }
  }).then(res=>{
    //assumes always succeed
    history.replace('/')
  })

 }
  return (
    <form className={classes.form} onSubmit={submitt}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' minLength="7" id='new-password' ref={passinput  } />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
