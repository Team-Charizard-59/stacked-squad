import React, { useEffect, useRef, useState } from 'react';
import profileLogo from './assets/stackedsquad-logos/profilePic.jpeg';
import sLogo from './assets/stackedsquad-logos/ss-logo.png';

const NavBar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [userName, setUserName] = useState('');

  const logout = async () => {
    try {
      const response = await fetch('/api/user/logout', {
        method: 'POST', // or 'GET' depending on the server implementation
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: 'your_token_here' }),
      });

      if (response.ok) {
        window.localStorage.clear();
        setUserName(''); // Clear the username
        setActiveMenuItem(null); // Reset the active menu item
        window.location.href = 'http://localhost:5173/login';
      } else {
        console.log('Error: login out');
      }
    } catch (error) {
      console.error('Error loging out:', error.message);
    }
  };

  useEffect(() => {
    setUserName('exampleUser');
  }, []);

  let content;
  if (activeMenuItem === null) {
    content = <a>Username</a>;
  } else if (activeMenuItem === 'username') {
    content = <a>Username: {userName}</a>;
  } else if (activeMenuItem === 'logout') {
    logout();
  } else {
    content = null;
  }

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <img src={sLogo} />
        <a className='btn btn-ghost normal-case text-xl'>STACKED SQUAD</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src={profileLogo} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a
                className={activeMenuItem === 'username' ? 'active' : ''}
                onClick={() => setActiveMenuItem('username')}
              >
                {content}
              </a>
            </li>
            <li>
              <a
                className={activeMenuItem === 'logout' ? 'active' : ''}
                onClick={() => setActiveMenuItem('logout')}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
