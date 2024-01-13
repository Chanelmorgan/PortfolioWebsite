import React from 'react';
import NavLink from './navLink';


const MenuOverlay = ({links}) => { 
    return (
        <ul className="flex flex-col py-4 items-centre">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} /> 
                </li>
            ))}
            </ul>

    );
};

export default MenuOverlay; 