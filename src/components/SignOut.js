import React from 'react';
import { Button } from 'semantic-ui-react';
import { auth } from '../firebase';

const SignOut = () => <Button onClick={() => auth.signOut()}>Odjava</Button>;

export default SignOut;
