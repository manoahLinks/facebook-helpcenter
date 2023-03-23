import React, {useState, useEffect} from "react";
import ClientsList from "../components/ClientsList";
import ErrorPage from "../components/ErrorPage";
import LoadingPage from "../components/LoadingPage";
import { useDataContext } from "../hooks/useDataContext";

const ClientsPage = () => {

    const {data, dispatch} = useDataContext()

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`https://fbsupport-api.onrender.com/api/clients`, {
                method: 'GET'
            })

            const json = await response.json()

            if(!response.ok){
                console.log('couldnt find resource')
            }

            if(response.ok){
                dispatch({type: `SET_DATA`, payload: json})   
            }
        }

        fetchData()
    }, [data, dispatch])

    return ( 
        <div className="grid grid-cols-1">
            {data && <ClientsList clients = {data}></ClientsList>}
        </div>
     );
}
 
export default ClientsPage;