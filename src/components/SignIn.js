import React from 'react';
import { Button } from 'semantic-ui-react';
import { auth, googleAuthProvider } from '../firebase';

const SignIn = () => (
  <Button onClick={() => auth.signInWithRedirect(googleAuthProvider)}>Prijava</Button>
);

export default SignIn;
