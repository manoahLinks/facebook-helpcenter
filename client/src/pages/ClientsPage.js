import React, {useState, useEffect} from "react";
import ClientsList from "../components/ClientsList";
import useFetch from "../useFetch";

const ClientsPage = () => {

    const {result, isPending, error} = useFetch(`http://localhost:4000/api/clients`)

    return ( 
        <div className="grid grid-cols-1">
            {!result && error && <div>information could not be fetched</div>}
            {isPending && <div className="text-sm text-gray-800">Loading...</div>}
            {result && <ClientsList clients = {result}></ClientsList>}
        </div>
     );
}
 
export default ClientsPage;