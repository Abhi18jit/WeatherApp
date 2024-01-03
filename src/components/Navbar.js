import React from 'react'
import '../index.css';



const Navbar = ({getSearchValue,searchedValue,setSearchedValue}) => {
    

    
    
    return (
        <>
            <nav className=' flex justify-around bg-cyan-300 min-vw-100 p-3'>

                <div className='logo grid place-content-center sm:text-2xl font-semibold md:text-[1.7rem]'>
                    <span>Live Weather</span>
                </div>
                <div className='search grid place-content-center'>
                    <div><input className='py-1 px-3 rounded-md outline-none' type="text" placeholder='Search by place...' value={searchedValue} onChange={(e)=>{setSearchedValue(e.target.value)}}/>
                    <button className='relative right-6' onClick={()=>{getSearchValue()}}>🔍</button></div>

                </div>
            </nav>

        </>
    )
}

export default Navbar;
