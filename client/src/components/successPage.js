import { Link } from "react-router-dom";


const successPage = () => {
    return ( 
        
        <div className="flex flex-col items-center justify-items-center mt-12 text-gray-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 fill-blue-600 my-3">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <div className="flex flex-col mb-16 p-4 items-center">
                <h4 className=" text-blue-600 font-semibold">Successful</h4>
                <h4 className="text-center text-xs font-light">Your compliant has been succesfully recorded and an email has been sent to you, please follow the prompt to activate your account.</h4>
            </div>
            
            
            <Link to={`/`} className={`bg-blue-600 font-semibold p-2 rounded-full text-white mb-6`}>Back to Home</Link>
        </div>
     );
}
 
export default successPage