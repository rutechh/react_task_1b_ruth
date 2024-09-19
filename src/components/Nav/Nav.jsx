import { UserIcon } from "Assets/svgs";
import { AuthContext } from "Context/Auth";
import { Link, useNavigate } from "react-router-dom";
import React from 'react';

const Nav = () => {
  const { dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();

//   logout function
  const handleLogout = () => {
    console.log('User is logging out');
    dispatch({ type: 'LOGOUT' });
    navigate('/admin/login');
  };

  return (
    <div className="flex flex-row justify-between w-full h-[6rem] mt-[1.5rem]">
      <h1 className="text-white font-extrabold text-5xl">APP</h1>
      <Link to={"/admin/receipt"} className="bg-[#9BFF00] text-[1rem] font-[100] leading-[1.25rem]  flex h-[3rem] w-[8rem] px-[1.5rem] py-[0.75rem] rounded-[2.5rem]">
        
        Receipt
      </Link>
      <button onClick={handleLogout} className="bg-[#9BFF00] text-[1rem] font-[100] leading-[1.25rem]  flex h-[3rem] w-[8rem] px-[1.5rem] py-[0.75rem] rounded-[2.5rem]">
        <span className="text-[#696969]">
          <UserIcon />
        </span>
        Logout
      </button>
    </div>

    
  );
};

export default Nav;
