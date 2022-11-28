import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="grid grid-cols-1 shadow p-2">
            <div className="flex items-center m-2 justify-between">
                <h4 className="text-2xl font-semibold text-blue-600">facebook</h4>
                <div className="flex font-semibold">
                    <Link className="p-2 bg-gray-50 rounded-full mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Link>
                    <Link className="p-2 bg-gray-50 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </Link>
                    
                </div>
               
            </div>
        </div>
     );
}
 
export default Navbar;