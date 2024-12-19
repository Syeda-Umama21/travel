import { Search } from "lucide-react"

export default function SearchForm(){
    return (
        <form className="grid md:grid-cols-4 gap-2">
            {/* Search Form */}
            <div className="flex flex-col gap-2">
                <label htmlFor="search">Search</label>
                <input
                id="search"
                 type="text"
                 placeholder="search"
                 className=" py-1 outline-none border-spacing-b border-b-slate-100"
                 />
            </div>
                 {/* Destination Section */}
            <div className="flex flex-col gap-1">
                <label htmlFor="destinations">Destinations</label>
                <select 
             id="destination"
             className=" py-1 outline-none border-b border-b-slate-100">
            <option value="Skardu">Skardu</option>
             <option value="Chitral">Chitral</option>
             <option value="Kalaam">Kalaam</option>
             <option value="Kumrat">Kumrat</option>
             <option value="Naran">Naran</option>
             <option value="Neelum Valley">Neelum Valley</option>
             <option value="Sawat">Sawat</option>
             <option value="Hunza">Hunza</option>
            <option value="Muree">Muree</option>
        </select>
            </div>
             {/* Duration Section */}
        <div className="flex flex-col gap-1">
        <label htmlFor="duration">Duration</label>
            <select 
            id="duration"
            className=" py-1 outline-none border-spacing-2">
            <option value="1 Day">1 Day</option>
            <option value="2 Day">2 Day</option>
            <option value="2-4 Day">2-4 Day</option>
            </select>
             </div>
             {/* Button */}
             <button className=" bg-pink-500 text-white rounded-md md:-mr-10  md:-my-10
             flex justify-center items-center md:flex-col gap-2 py-4 ">
            <Search size={20}/>
             search
             </button>
        </form>
    )  
        
    
}




// <form className="grid md:grid-cols-4 gap-2">
//         {/* Search Form */}
//             <div className="flex flex-cols gap-2">
//             <label htmlFor="search">Search</label>

//             <input 
//             id="search"
//             type="text"
//             placeholder="Search" 
//             className=" py-2 outline-none border-spacing-b border-b-slate-100"
//             />
//             </div>

//              {/* Destination Section */}
//             <div className="flex flex-col gap-2">
//             <label htmlFor="destination">Destination</label>
//             <select 
//             id="destination"
//             className=" py-2 outline-none border-b border-b-slate-100">
//             <option value="Skardu">Skardu</option>
//             <option value="Chitral">Chitral</option>
//             <option value="Kalaam">Kalaam</option>
//             <option value="Kumrat">Kumrat</option>
//             <option value="Naran">Naran</option>
//             <option value="Neelum Valley">Neelum Valley</option>
//             <option value="Sawaat">Sawaat</option>
//             <option value="Hunza">Hunza</option>
//             <option value="Muree">Muree</option>
//         </select>
//             </div>

//             {/* Duration Section */}
//             <div className="flex flex-col gap-1">
//             <label htmlFor="duration">Duration</label>
//             <select 
//             id="duration"
//             className=" py-2 outline-none border-b border-b-slate-100">
//             <option value="1 Day">1 Day</option>
//             <option value="2 Day">2 Day</option>
//             <option value="2-4 Day">2-4 Day</option>
//         </select>
//             </div>
                
//             {/* Button */}
//             <button className=" bg-pink-500 text-white rounded-md md:-mr-10  md:-my-10
//             flex justify-center items-center md:flex-col gap-2 py-4">
//             <Search size={20}/>
//             search
//             </button>
//         </form>