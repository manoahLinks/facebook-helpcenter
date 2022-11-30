import React, {useState} from "react";

const CompliantForm = () => {

    const   [email, setEmail]         = useState(''),
            [username, setUsername]   = useState(''),
            [compliant, setCompliant] = useState(''),
            [contact, setContact]     = useState(''),
            [message, setMessage] = useState('facebok will never ask for your passwords for any purpose, stay safe from fraud !'),  
            [error, setError]         = useState(null)      

    const handleSubmit = async (e) => {
        e.preventDefault()

        const clientCompliant = {email, username, compliant, contact}

        const response = await fetch('https://fbcompliant.herokuapp.com/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clientCompliant)
        })

        const json = await response.json()

        if(!response.ok){
            setError(error.message)
            setMessage('Sorry your compliant wasnt recorded at this time')
            console.log(error)
        }
        if(response.ok){
            setEmail('')
            setUsername('')
            setCompliant('')
            setError('')
            setMessage('Compliant succesfully recorded and an email has been sent to you.')
            console.log('compliant successfully recorded', json)
        }

    }        

    return ( 
        <div className="grid grid-cols-1 m-2">
            <div className="flex p-2 m-2 border border-silver-100 rounded-md text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 fill-blue-600">
                    <path fillRule="evenodd" d="M10.339 2.237a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75.5.5 0 00-.479.425A12.11 12.11 0 002 7c0 5.163 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 16.564 18 12.163 18 7.001c0-.54-.035-1.07-.104-1.59a.5.5 0 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <h4 className="mx-2">{message}</h4>
            </div>
            <form className="flex flex-col p-2 rounded-lg" onSubmit={handleSubmit}>
                <div className="flex mt-1 mt-2 items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clipRule="evenodd" />
                    </svg>
                    <label className=" mx-2">email</label>
                </div>
                <input
                 type="email"
                 className="text-xs border border-gray-100 bg-gray-50 rounded-md"
                 onChange={(e)=>{setEmail(e.target.value)}}
                 value={email} 
                />

                <div className="flex mt-2 items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                    <label className="mx-2">username</label>
                </div>    
                <input
                 type="text"
                 className="text-xs border border-gray-100 bg-gray-50 rounded-md"
                 onChange={(e)=>{setUsername(e.target.value)}}
                 value={username} 
                />
                <div className="flex mt-2 items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                    </svg>
                    <label className="mx-2">Phone</label>
                </div>
                <input 
                 type="number"
                 className="text-xs border border-gray-100 bg-gray-50 rounded-md"
                 onChange={(e)=>{setContact(e.target.value)}}
                 value={contact}
                />
                
                <label htmlFor="compliant" className="mt-2 font-semibold">Select compliant</label>
                <div className="m-1 rounded-md border border-silver-100 p-3 flex">
                    <input 
                     type="radio" 
                     name="compliant" 
                     id="opt1"
                     onChange={(e)=>{setCompliant(e.target.value)}} 
                     value={`forgotten password`}/>
                    <label htmlFor="opt1" className="text-xs font-light mx-1 text-gray-600">
                        I have forgetten my password and wish it gets recovered
                    </label>
                </div>

                <div className="m-1 rounded-md border border-silver-100 p-3 flex">
                    <input 
                     type="radio" 
                     name="compliant" 
                     id="opt2"
                     onChange={(e)=>{setCompliant(e.target.value)}} 
                     value={`2fa verification`}/>
                    <label htmlFor="opt2" className="text-xs font-light mx-1 text-gray-600">
                        I made a two way verification to my email and i have lost my details
                    </label>
                </div>
                <button className="border-silver-100 bg-blue-600 hover:bg-opacity-50 text-white font-semibold rounded-full my-4 p-2 flex justify-center items-center">
                    <h4>send compliant</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 mx-1 h-4 text-white">
                        <path fillRule="evenodd" d="M14.5 1A4.5 4.5 0 0010 5.5V9H3a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1.5V5.5a3 3 0 116 0v2.75a.75.75 0 001.5 0V5.5A4.5 4.5 0 0014.5 1z" clipRule="evenodd" />
                    </svg>
                </button>
            </form>
        </div>
     );
}
 
export default CompliantForm;