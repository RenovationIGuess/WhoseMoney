import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosClient from '~/axios';
import { userStateContext } from '~/contexts/ContextProvider';

const GoogleAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = location.search;

  const { setUserToken } = userStateContext();

  useEffect(() => {
    axiosClient
      .get(`/auth/google/callback${searchParams}`)
      .then(({ data }) => {
        console.log(data);
        setUserToken(data.token);
        navigate('/');
      })
      .catch((err) => console.error(err));
  }, []);

  return <></>;
};

export default GoogleAuth;
