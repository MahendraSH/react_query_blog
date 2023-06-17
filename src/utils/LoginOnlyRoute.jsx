
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Layout/Loading";
axios.defaults.withCredentials = true;

const LoginOnlyRoute = ({ checkIsAdmin }) => {
  const history = useNavigate();
  const api = import.meta.env.VITE_API_URL + "/user/me";
  const {  isLoading, data,status } = useQuery(["user"], () =>
    axios.get(api).then((res) => res.data)
  );
 
    
  
  if (isLoading) return <Loading />;
  if(data == undefined){
    history("/login");
    return <div>You are not logged in</div>;
  }
  if ((data.user.role = "admin" && checkIsAdmin)) return <Outlet />;
  else if (checkIsAdmin)
    return <div>You are not authorized to view this page</div>;
  else if (data.user) return <Outlet />;
  else return <div>You are not logged in</div>;

  //   const {isError, error,isLoading, data}
  //   return (
  //     <>

  //     <Outlet/>

  //     </>
  //   )
};

export default LoginOnlyRoute;
