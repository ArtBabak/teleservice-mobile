import React, {FC} from 'react';
import logo from './MainLogo.svg'

interface MainLogoProps {
    className: string;
}


const MainLogo:FC<MainLogoProps> = ({className}) => {
    return (
        <img className={className} src={logo} alt="main logo of the app" />
    );
};

export default MainLogo;