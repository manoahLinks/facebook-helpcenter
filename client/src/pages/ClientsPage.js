import React, {useState, useEffect} from "react";
import ClientsList from "../components/ClientsList";
import ErrorPage from "../components/ErrorPage";
import LoadingPage from "../components/LoadingPage";
import useFetch from "../useFetch";

const ClientsPage = () => {

    const {result, isPending, error} = useFetch(`http://localhost:4000/api/clients`)

    return ( 
        <div className="grid grid-cols-1">
            {!result && error && <ErrorPage/>}
            {isPending && <LoadingPage />}
            {result && <ClientsList clients = {result}></ClientsList>}
        </div>
     );
}
 
export default ClientsPage;