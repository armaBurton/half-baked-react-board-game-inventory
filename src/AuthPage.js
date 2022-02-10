import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage({ setCurrentUser }) {
  // you'll need to track the form state of the email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSignIn(e) {
    e.preventDefault();
    // sign the user in using the form state
    const user = await signIn(email, password);
    setCurrentUser(user);
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
  }
    
  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUp(email, password);
    setCurrentUser(user);
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
  }

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      {/* on submit, sign the user in using the function defined above */}
 
      <form>
        <label onSubmit={handleSignIn}>
            Email
          {/* on change, update the form state for email */}
          <input required value={email} type="email" name="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input required value={password} type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        {/* on clicking sign up, sign the user up using the function defined above */}
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
