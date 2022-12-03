import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'


const LoadingPage = () => {
    return ( 
        <div className="grid grid-col-1 h-screen bg-opacity-10 justify-center items-center">
            <FontAwesomeIcon 
             icon={faCircleNotch}
             className='animate-spin text-blue-600 h-8 w-8' 
            />
        </div>
     );
}
 
export default LoadingPage;