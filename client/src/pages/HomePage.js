import React from 'react'
import { useSelector } from "react-redux";
import Spinner from '../components/shared/Spinner';
import { toast } from 'react-toastify';

const HomePage = () => {
   const { loading, error, user } = useSelector((state) => state.auth);
  return (
    <>
     {error && <span>{toast(error)}</span>}
      {loading?<Spinner/>:(
        <>
           <h1>HomePage</h1>
        </>
      )}
       
    </>
  )
}

export default HomePage