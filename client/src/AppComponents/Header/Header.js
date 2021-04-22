import React from 'react';
import s from './Header.module.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
const { logout } = useContext(AuthContext);

    return (
        <div className={s.Header}>
            <button className={s.LogoutButton}
            onClick={logout}>
                Log Out!
            </button>

        </div>
    )
}

export default Header;