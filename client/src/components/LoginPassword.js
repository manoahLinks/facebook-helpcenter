import { Link } from "react-router-dom";

const LoginPassword = () => {
    return ( 
        <div className="grid grid-cols-1 text-xs text-gray-700">
            <div className="bg-blue-600 text-white p-3 font-semibold flex justify-between text-sm">
                <h4>Login and Password</h4>
                <div className="bg-white p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-blue-600">
                        <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                        <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                    </svg> 
                </div>
            </div>
            <div className="p-3">
                <h4 className="my-1">if you know your current password you can change it.</h4>
                <h4 className="font-semibold mb-2">When you create a new password, keep in mind:</h4>
                <ul className="grid grid-cols-1 gap-y-2 text-xs">
                    <li>Your password should be atleast 8 characters long.</li>
                    <li>The password should be easy for you to remember but difficult for others to guess</li>
                    <li>Your Facebook password should be different than the passwords you use to log into other accounts, like your email or bank account</li>
                    <li>Your pasword should not be your email, phonenumber or birthday</li>
                </ul>
                <h4>if you're having trouble changing your password, learn how to get login and password help.</h4>
            </div>
            <div className="flex flex-col p-2">
                <Link to={`/compliant`} className="flex justify-between items-center p-2 rounded-md bg-gray-100 font-semibold m-1">
                    <h4>Log into your Account</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </Link>
                <Link to={`/compliant`} className="flex justify-between items-center p-2 rounded-md bg-gray-100 font-semibold m-1">
                    <h4>change your password</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </Link>
                <Link to={`/compliant`} className="flex justify-between items-center p-2 rounded-md bg-gray-100 font-semibold m-1">
                    <h4>Fix a Login problem</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </Link>
                <Link to={`/clients`} className="flex justify-between items-center p-2 rounded-md bg-gray-100 font-semibold m-1">
                    <h4>Uploading your ID</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
            <div className="flex flex-col w-6/12 m-3 p-5 items-center border border-silver-100">
                <h4 className="text-semibold">Did you find this helpful?</h4>
                <div className="flex justify-evenly">
                    <button className="p-2 border border-silver-100 rounded-lg">Yes</button>
                    <button className="p-2  border border-silver-100 rounded-lg mx-1">No</button>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPassword;