import React from "react";

const ClientsList = ({clients}) => {

    return ( 
        <div className="grid-cols-1">
            {clients.map((client)=>(
                <div className="flex flex-col border-silver-100 rounded-md bg-white m-2 text-xs">
                    <div className="flex justify-between p-2 bg-gray-50">
                        <h4 className="p-2 bg-silver-50">{client.email}</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-red-300">
                         <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h4 className="px-2 py-1">{client.username}</h4>
                    <h4 className="px-2 py-1 text-gray-400">{client.compliant}</h4>
                    <h4 className="px-2 py-2">{client.createdAt}</h4>
                </div>
            ))}
            
        </div>
     );
}
 
export default ClientsList;