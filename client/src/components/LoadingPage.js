import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'


const LoadingPage = () => {
    return ( 
        <div className="flex flex-col h-screen justify-center items-center">
            <FontAwesomeIcon 
             icon={faCircleNotch}
             className='animate-spin text-8xl' 
            />
        </div>
     );
}
 
export default LoadingPage;