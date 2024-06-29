import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    CContainer,
    CNavbar,
    CNavbarBrand,
    CNavbarToggler,
    CCollapse,
    CNavbarNav,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CDropdownDivider
} from '@coreui/react';

function Header() {
    const [visible, setVisible] = useState(false);

    return (
        <CNavbar expand="lg" className="bg-body-tertiary">
            <CContainer>
                <CNavbarBrand>
                <NavLink to="/" className= "link">Navbar</NavLink>
                </CNavbarBrand>
                <CNavbarToggler
                    aria-label="Toggle navigation"
                    aria-expanded={visible}
                    onClick={() => setVisible(!visible)}
                />
                <CCollapse className="navbar-collapse" visible={visible}>
                    <CNavbarNav>
                        <CDropdown variant="nav-item" popper={false}>
                            <CDropdownToggle>Dropdown link</CDropdownToggle>
                            <CDropdownMenu>
                                {/* <CDropdownItem> */}
                                    <NavLink to="/active-jobs" className="link">active-jobs</NavLink>
                                    <NavLink to="/close-jobs" className="link">close-jobs</NavLink>
                                {/* </CDropdownItem> */}
                        
                               
                            </CDropdownMenu>
                        </CDropdown>
                    </CNavbarNav>
                </CCollapse>
            </CContainer>
        </CNavbar>
    );
}

export default Header;
