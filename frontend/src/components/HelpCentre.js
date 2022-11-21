import { Link } from "react-router-dom";


const HelpCenter = () => {
    return ( 
        <div className="grid grid-cols-1 overflow-scroll ">
            <h4 className="mx-3 mt-5 text-semibold text-sm">Hi, how can we help you ?</h4>
            <input type="search" className="text-xs mx-3 my-2 rounded-full bg-gray-100 border-gray-100" />
            <div className="grid grid-cols-2 m-3 gap-x-2 border-b border-silver-100 mb-2">
                <div className="flex flex-col shadow-md rounded-md p-2 justify-center items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" className="w-12 h-12"><path fill="#fff" d="M62.5,32c0,0.5-0.01,1-0.04,1.5c-0.78,16.14-14.12,29-30.46,29c-16.34,0-29.68-12.86-30.46-29
                C1.51,33,1.5,32.5,1.5,32s0.01-1,0.04-1.5C2.32,14.36,15.66,1.5,32,1.5c16.34,0,29.68,12.86,30.46,29C62.49,31,62.5,31.5,62.5,32z
                "/><path fill="#ffb612" d="M62.5,32c0,16.34-12.85,29.68-29,30.45c-0.14,0.02-0.29,0.02-0.44,0.03h-0.05c-0.17,0-0.34-0.01-0.51-0.02
                c-0.17-0.01-0.34-0.02-0.5-0.03c-0.17-0.01-0.34-0.03-0.5-0.04c-0.34-0.03-0.67-0.06-1-0.1C15.31,60.56,3.5,47.66,3.5,32
                c0-15.66,11.81-28.56,27-30.29c0.33-0.04,0.66-0.07,1-0.1c0.16-0.01,0.33-0.03,0.5-0.03c0.16-0.02,0.33-0.03,0.5-0.04
                c0.17-0.01,0.34-0.02,0.51-0.02h0.05c0.15,0.01,0.3,0.01,0.44,0.03C49.65,2.32,62.5,15.66,62.5,32z"/><ellipse cx="31.5" cy="32" fill="#fdcc32" rx="28" ry="30.39"/><path fill="#fa6e34" d="M56.5,32c0,8.96-4.81,16.8-12,21.07c-0.96,0.58-1.96,1.08-3,1.52c-2.92,1.23-6.13,1.91-9.5,1.91
                c-0.5,0-1.01-0.02-1.5-0.05c-4-0.24-7.74-1.44-11-3.38c-7.18-4.26-12-12.1-12-21.07c0-13.03,10.17-23.68,23-24.45
                c0.49-0.03,1-0.05,1.5-0.05C45.53,7.5,56.5,18.47,56.5,32z"/><ellipse cx="30.5" cy="32" fill="#fa8840" rx="23" ry="24.45"/><path fill="#2baefe" d="M39.5 25c0 4.14-3.36 7.5-7.5 7.5-.51 0-1.01-.05-1.49-.15-.01 0-.01 0-.02 0-3.42-.7-5.99-3.73-5.99-7.35s2.57-6.65 5.99-7.35c.01 0 .01 0 .02 0 .48-.1.98-.15 1.49-.15C36.14 17.5 39.5 20.86 39.5 25zM44.5 36.5v16.57c-.96.58-1.96 1.08-3 1.52-2.92 1.23-6.13 1.91-9.5 1.91-.5 0-1.01-.02-1.5-.05-4-.24-7.74-1.44-11-3.38V36.5l5-2h15l2 .8L44.5 36.5z"/><path fill="#3cf" d="M36.5 25c0 3.62-2.57 6.65-5.99 7.35-.01 0-.01 0-.02 0-3.42-.7-5.99-3.73-5.99-7.35s2.57-6.65 5.99-7.35c.01 0 .01 0 .02 0C33.93 18.35 36.5 21.38 36.5 25zM41.5 35.3v19.29c-2.92 1.23-6.13 1.91-9.5 1.91-.5 0-1.01-.02-1.5-.05-4-.24-7.74-1.44-11-3.38V36.5l5-2h15L41.5 35.3z"/><path fill="#1c225c" d="M32,57C18.215,57,7,45.785,7,32S18.215,7,32,7s25,11.215,25,25S45.785,57,32,57z M32,8
                    C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"/><path fill="#1c225c" d="M32,33c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S36.411,33,32,33z M32,18c-3.86,0-7,3.14-7,7
                    s3.14,7,7,7s7-3.14,7-7S35.86,18,32,18z"/><path fill="#1c225c" d="M7.938 51.244c-.149 0-.296-.066-.395-.192C3.263 45.564 1 38.976 1 32 1 14.907 14.907 1 32 1c6.669 0 13.023 2.085 18.375 6.031.222.164.27.477.105.699-.164.222-.477.269-.699.105C44.603 4.018 38.455 2 32 2 15.458 2 2 15.458 2 32c0 6.751 2.189 13.126 6.332 18.436.17.218.131.532-.086.702C8.154 51.209 8.045 51.244 7.938 51.244zM11.16 54.77c-.123 0-.245-.044-.342-.135-.506-.474-1.002-.971-1.475-1.477-.188-.202-.178-.519.024-.707.202-.189.519-.178.707.024.458.49.938.971 1.428 1.429.202.189.212.505.023.707C11.426 54.716 11.293 54.77 11.16 54.77zM32 63c-6.706 0-13.088-2.106-18.457-6.091-.222-.165-.268-.478-.104-.699.165-.221.478-.268.699-.104C19.334 59.962 25.511 62 32 62c16.542 0 30-13.458 30-30 0-6.771-2.201-13.16-6.365-18.479-.17-.217-.132-.532.085-.702.217-.171.531-.132.702.085C60.726 18.401 63 25.004 63 32 63 49.093 49.093 63 32 63zM54.299 11.691c-.134 0-.267-.053-.366-.159-.468-.502-.962-.996-1.469-1.469-.202-.188-.212-.505-.024-.707.188-.202.505-.213.707-.024.523.488 1.034.999 1.518 1.517.188.202.177.519-.024.707C54.543 11.646 54.421 11.691 54.299 11.691z"/><path fill="#1c225c" d="M44.5,53.576c-0.276,0-0.5-0.224-0.5-0.5V36.838L39.404,35H24.596L20,36.838v16.237
                    c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V36.5c0-0.205,0.125-0.388,0.314-0.464l5-2C24.374,34.012,24.437,34,24.5,34h15
                    c0.063,0,0.126,0.012,0.186,0.036l5,2C44.875,36.112,45,36.295,45,36.5v16.576C45,53.352,44.776,53.576,44.5,53.576z"/><path fill="#1c225c" d="M24.5 55.831c-.276 0-.5-.224-.5-.5V41.5c0-.276.224-.5.5-.5s.5.224.5.5v13.831C25 55.607 24.776 55.831 24.5 55.831zM39.5 55.831c-.276 0-.5-.224-.5-.5V41.5c0-.276.224-.5.5-.5s.5.224.5.5v13.831C40 55.607 39.776 55.831 39.5 55.831z"/>
                </svg>
                    <h4>Account Settings</h4>
                </div>
                <Link to={`/passwordrecovery`} className="flex flex-col shadow-md rounded-md p-2 items-center text-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="1" viewBox="0 0 128 128" className="w-12 h-12">
                        <path fill="#9e9e9e" d="M117 11a37.53 37.53 0 0 0-61.5 40.13L0 107v21h22l5.07-18.52 16.74-3.92 3.92-16.74 15-2.14L73 76.35l3.85-3.85A37.53 37.53 0 0 0 117 11Zm-11.92 41.13L75.87 22.92a20.65 20.65 0 1 1 29.21 29.21Z"/><path fill="#757575" d="M0 125.71v-8.48l60.8-60.8 4.24 4.24L0 125.71z"/>
                    </svg>
                    <h4>Login and password</h4>
                </Link>
                <div className="flex flex-col shadow-md rounded-md p-2 justify-center items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                        <path fill="#3C4959" d="M31.367 0c-9.104 0-16.513 7.396-16.513 16.499v8.153h5.509v-8.153c0-6.06 4.944-10.99 11.004-10.99s10.99 4.93 10.99 10.99v8.153h5.509v-8.153C47.866 7.396 40.47 0 31.367 0z"/><path fill="#3AADA1" d="M56.198 27.462v33.742A2.801 2.801 0 0 1 53.388 64H10.611a2.802 2.802 0 0 1-2.81-2.796V27.462a2.804 2.804 0 0 1 2.81-2.81h42.777a2.804 2.804 0 0 1 2.81 2.81z"/><circle cx="32.022" cy="41.887" r="4.562" fill="#3C4959"/><path fill="#3C4959" d="M35.544 51.95H28.5l1.754-7.954h3.535z"/><path fill="#455C6C" d="M44.76 28.276h2.813v33.012H44.76zM15.146 28.276h2.813v33.012h-2.813z"/>
                    </svg>
                    <h4>Privacy and security</h4>
                </div>
                <div className="flex flex-col shadow-md rounded-md p-2 items-center text-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" className="w-12 h-12"><polygon fill="#ef6183" points="52.21 13.08 62.36 13.08 59.12 5.88 52.21 5.88"/><rect width="10.73" height="7.19" x="39.42" y="5.88" fill="#ef6183"/><polygon fill="#ef6183" points="37.36 5.88 27.38 5.88 26.74 13.08 37.36 13.08"/><polygon fill="#ef6183" points="13.49 5.88 4.87 5.88 1.63 13.08 11.98 13.08"/><polygon fill="#ef6183" points="25.3 5.88 15.6 5.88 14.09 13.08 24.66 13.08"/><path fill="#ef6183" d="M19.21 19.93c2.64 0 4.83-2.07 5.26-4.79H13.95C14.39 17.86 16.58 19.93 19.21 19.93zM32 19.93c2.63 0 4.82-2.07 5.26-4.79H26.71C27.13 17.83 29.34 19.93 32 19.93zM44.78 19.93c2.64 0 4.83-2.07 5.27-4.79H39.51C39.96 17.86 42.15 19.93 44.78 19.93zM60.37 19.08c1.28-.86 2.2-2.27 2.47-3.93H52.3c.43 2.71 2.62 4.79 5.26 4.79 1 0 1.94-.3 2.75-.83C60.34 19.09 60.35 19.08 60.37 19.08zM4.3 19.47c.01-.01.02 0 .03.01.04.02.08.03.12.05.61.26 1.27.4 1.97.4 2.63 0 4.82-2.07 5.26-4.79H1.16C1.47 17.08 2.68 18.69 4.3 19.47z"/><rect width="63.32" height="3.82" x=".34" y="60.18" fill="#919192"/><rect width="53.51" height="3.82" x="5.24" fill="#919192"/><path fill="#d3d3d3" d="M59.88,58.12V21.61C59.16,21.86,58.37,22,57.57,22c-2.73,0-5.11-1.57-6.39-3.89C49.89,20.43,47.5,22,44.78,22
                        c-2.71,0-5.1-1.57-6.39-3.89C37.1,20.43,34.71,22,32,22c-2.73,0-5.11-1.57-6.4-3.89C24.32,20.43,21.94,22,19.21,22
                        c-2.71,0-5.1-1.57-6.39-3.89C11.53,20.43,9.15,22,6.43,22c-0.49,0-0.95-0.05-1.41-0.14v36.26h27.7V43.58
                        c0-6.02,4.89-10.91,10.91-10.91c2.91,0,5.65,1.14,7.72,3.19c2.05,2.06,3.19,4.8,3.19,7.72v14.53H59.88z M25.55,47.02
                        c0,0.58-0.46,1.03-1.03,1.03H10.49c-0.57,0-1.03-0.45-1.03-1.03V34.66c0-0.57,0.46-1.03,1.03-1.03h14.03
                        c0.57,0,1.03,0.46,1.03,1.03V47.02z"/>
                        <rect width="4.94" height="4.35" x="18.54" y="41.64" fill="#f7d8a5"/>
                        <rect width="4.94" height="3.88" x="18.54" y="35.7" fill="#f7d8a5"/><rect width="4.95" height="3.88" x="11.52" y="35.7" fill="#f7d8a5"/><rect width="4.95" height="4.35" x="11.52" y="41.64" fill="#f7d8a5"/><path fill="#f7d8a5" d="M43.62,34.74c-4.88,0-8.85,3.96-8.85,8.85v14.53h17.69V43.58c0-2.36-0.92-4.59-2.59-6.26
                        C48.21,35.65,45.98,34.74,43.62,34.74z"/>
                    </svg>
                    <h4>Marketplace</h4>
                </div>
                <div className="flex flex-col shadow-md rounded-md p-2 justify-center items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="1" viewBox="0 0 128 128" className="w-12 h-12">
                        <path fill="#90caf9" d="M128 92a26 26 0 0 0-52 0Z"/><circle cx="102" cy="53.02" r="12.98" fill="#ffe0b2"/><path fill="#90caf9" d="M52 92a26 26 0 0 0-52 0Z"/><circle cx="26" cy="53.02" r="12.98" fill="#ffe0b2"/><circle cx="64" cy="46.03" r="17.97" fill="#ffcc80"/><path fill="#64b5f6" d="M100 100a36 36 0 0 0-72 0Z"/>
                    </svg>
                    <h4>Groups</h4>
                </div>
                <div className="flex flex-col shadow-md rounded-md p-2 justify-center items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" className="w-12 h-12"><path fill="#fedb41" d="M357.52,396.6v50.27c0,16.569-13.431,30-30,30l0,0H94.48c-16.569,0-30-13.431-30-30
                    l0,0V135.4c0-16.569,13.431-30,30-30h70v261.2c0,16.569,13.431,30,30,30l0,0H357.52z"/><path fill="#00acea" d="M447.52,124.8v251.8c0,16.569-13.431,30-30,30H184.48c-16.569,0-30-13.431-30-30
                    V65.13c0-16.569,13.431-30,30-30h176l1,1.03l-1,0.97v71.37c0,9.002,7.298,16.3,16.3,16.3h68.74l1.03-1L447.52,124.8z"/><path fill="#fedb41" d="M446.55,123.8l-1.03,1h-68.74c-9.002,0-16.3-7.298-16.3-16.3V37.13l1-0.97
                    L446.55,123.8z"/><path fill="#00efd1" d="M392.3 248.31H204.68c-5.523 0-10-4.477-10-10s4.477-10 10-10H392.3c5.523 0 10 4.477 10 10S397.823 248.31 392.3 248.31zM317 192.37H204.68c-5.523 0-10-4.477-10-10s4.477-10 10-10H317c5.523 0 10 4.477 10 10S322.523 192.37 317 192.37zM392.3 308.31H204.68c-5.523 0-10-4.477-10-10s4.477-10 10-10H392.3c5.523 0 10 4.477 10 10S397.823 308.31 392.3 308.31z"/></svg>
                    <h4>Pages</h4>
                </div>
            </div>
            <h4 className="mx-3 my-1 fonr-semibold ">Looking for something else?</h4>
            <div className="flex m-3 p-3 items-center justify-between rounded-md bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-12 h-12">
                    <path fill="#2b3344" d="M21.5,21H20V7.5A.49.49,0,0,0,19.66,7L16,5.47V21H15V3.5a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5V21H3.5a.5.5,0,0,0,0,1h18a.5.5,0,0,0,0-1Zm-4-12h1a.5.5,0,0,1,.5.5.51.51,0,0,1-.5.5h-1a.51.51,0,0,1-.5-.5A.5.5,0,0,1,17.5,9Zm0,3h1a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm0,3h1a.51.51,0,0,1,.5.5.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5A.51.51,0,0,1,17.5,15Zm0,3h1a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1ZM11,6h1a.5.5,0,1,1,0,1H11a.5.5,0,0,1,0-1Zm0,3h1a.5.5,0,1,1,0,1H11a.5.5,0,0,1,0-1Zm0,3h1a.5.5,0,1,1,0,1H11a.5.5,0,0,1,0-1Zm0,3h1a.5.5,0,1,1,0,1H11a.5.5,0,0,1,0-1ZM7.94,6H9A.5.5,0,0,1,9,7h-1a.5.5,0,0,1,0-1Zm0,3H9a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm0,3H9a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm0,3H9a.5.5,0,0,1,0,1h-1a.5.5,0,0,1,0-1Zm2.56,6V19h-1v2h-1V18.47A.5.5,0,0,1,9,18h2a.5.5,0,0,1,.5.5V21Z"/>
                </svg>
                <div className="flex flex-col p-2 ">
                    <h4 className="font-semibold">Visit Business Help center</h4>
                    <h4 className="text-xs text-gray-600">Learn more about promoting your bussiness on facebook</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
     );
}
 
export default HelpCenter;