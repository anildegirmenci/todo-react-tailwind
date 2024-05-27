import React from 'react';
import { MdAssignment } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white p-4 shadow-md flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center">
          <MdAssignment />
          <h1 className="text-2xl ml-2"><a target='_blank' href="https://www.soostone.com/" className="hover:underline">Soostone</a> To Do Application</h1>
        </div>
        <nav>
          <div className='font-handlee'><a target='_blank' href="https://anildegirmenci.com" className="hover:underline">Who did this?</a></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;