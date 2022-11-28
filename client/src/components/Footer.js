import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="grid grid-cols-1 bg-gray-100 text-gray-500">
            <div className="flex flex-col font-light gray-y-2 p-3">
                <h4 className="px-2 text-xs">2022 Meta</h4>
                <h4 className="m-1">About</h4>
                <h4 className="m-1">Privacy</h4>
                <h4 className="m-1">Terms and policies</h4>
                <h4 className="m-1">Ad choices</h4>
                <h4 className="m-1">Careers</h4>
                <Link to={`/clients`} className="m-1">Cookies</Link>
                <h4 className="m-1">Create Ad</h4>
                <h4 className="m-1">Create Page</h4>
            </div>
        </div>
     );
}
 
export default Footer;