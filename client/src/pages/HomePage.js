import React from 'react'
import { useSelector } from "react-redux";
import Spinner from '../components/shared/Spinner';
import { toast } from 'react-toastify';
import Layout from '../components/shared/Layout/Layout';

const HomePage = () => {
   const { loading, error, user } = useSelector((state) => state.auth);
  return (
    <Layout>
     {error && <span>{toast(error)}</span>}
      {loading?<Spinner/>:(
        <>
           <h1>HomePage</h1>
        </>
      )}
       
    </Layout>
  )
}

export default HomePage