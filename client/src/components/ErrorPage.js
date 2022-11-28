const ErrorPage = () => {
    return ( 
        <div className="grid grid-cols-1 text-xs text-gray-500">
            <div className="flex flex-col items-center p-3 m-2 rounded-md border border-silver-100">
                <h4>Resource couldnt be reached, please check your network connection and try again !</h4>
            </div>
        </div>
     );
}
 
export default ErrorPage;