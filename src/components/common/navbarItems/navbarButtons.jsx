import React  from 'react';
import { useNavigate } from 'react-router-dom';


const NavbarButtons = ({list, classStyle, classButtons}) => {
    const navigate = useNavigate();

    return (
        <ul
            className={`${classStyle}`}
        >
            {
                list.map((item) => (
                <li key={item.id}>
                    <button
                        className={`${classButtons}`}
                        onClick={() => navigate(`${item.path}`)}
                    >{item.name}</button>
                </li>
            ))
            }
        </ul>
    );
}

export default NavbarButtons;
