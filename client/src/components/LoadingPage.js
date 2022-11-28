import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'


const LoadingPage = () => {
    return ( 
        <div className="grid grid-col-1 h-screen bg-opacity-30 justify-center items-center">
            <FontAwesomeIcon 
             icon={faCircleNotch}
             className='animate-spin text-blue-600 h-12 w-12' 
            />
        </div>
     );
}
 
export default LoadingPage;