function Card({fName="First Name", lName="Last Name", details}) {
    
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
            <img
            src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                    Details
                </span>
                <h2 className="text-xl font-semibold tracking-wide">{fName} {lName}</h2>
            </div>
            {details.username && <p className="text-gray-300">username: {details.username}</p>}
            {details.age && <p className="text-gray-300">age: {details.age}</p>}
        </div>
    )
}

export default Card