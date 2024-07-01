// AsideBar.js
import React from 'react';
import { CCol } from '@coreui/react';

function AsideBar({ links, activeLink }) {
    console.log(activeLink);
    return (
        <CCol sm={3} className='position-sticky  text-center d-flex flex-column gap-1 text-capitalize' style={{top:"50px"}} >
            {
                links.map((link, i) => (
                    <a 
                        key={i}
                        href={`#${link}`} 
                        className={`${activeLink === link ? 'active-link' : ''} text-decoration-none`}
                    >
                        {link}
                    </a>
                ))
            }
        </CCol>
    );
}

export default AsideBar;
