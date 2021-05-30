import React, { useEffect } from 'react';
import { useCustomDispatch } from 'redux/hooks';
import { setName } from 'redux/slice/userSlice';

function Auth() {
  //test dispatch hook
  useCustomDispatch(setName('test name'));

  return <div>auth</div>;
}

export default Auth;
