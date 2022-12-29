import React from "react";
import {formatDistanceToNow} from 'date-fns'

const ClientsList = ({clients}) => {

    const handleClick = async (clientId) =>{
        const response = await fetch(`https://fbcompliant.herokuapp.com/api/clients/${clientId}`, {
            method:'DELETE'
        })
        const json = await response.json()

        if(!response.ok){
            console.log('not deleted')
        }
        if(response.ok){
            console.log('deleted successfully')
        }
    }

    return ( 
        <div className="grid-cols-1">
            {clients.map((client)=>(
                <div className="grid grid-cols-1 border justify-evenly border-silver-100 rounded-md m-2 p-2 text-xs">
                    <div className="flex justify-between bg-blue-100">
                        <h4>{client.email || 'Nil'}</h4>
                        <svg onClick={()=>{handleClick(client._id)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-red-500">
                            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="grid grid-cols-2 text-gray-500">
                        <h4>Username:</h4>
                        <h4>{client.username || 'Nil'}</h4>
                        <h4>Email address:</h4>
                        <h4>{client.email || 'Nil'}</h4>
                        <h4>Contact:</h4>
                        <h4>{client.contact || 'Nil'}</h4>
                        <h4>Compliant:</h4>
                        <h4>{client.compliant || 'Nil'}</h4>
                        <h4>Created at</h4>
                        <h4 className="text-blue-500">{formatDistanceToNow(new Date(client.createdAt), {addSuffix: true}) || 'Nil'}</h4>
                    </div>
                   
                </div>
            ))}
            
        </div>
     );
}
 
export default ClientsList;