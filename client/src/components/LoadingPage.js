import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LoadingPage = () => {
    return ( 
        <div className="grid grid-cols-1 justify-center items-center">
            <FontAwesomeIcon 
             icon="fa-solid fa-loader"
             className='animate-spin text-8xl' 
            />
        </div>
     );
}
 
export default LoadingPage;