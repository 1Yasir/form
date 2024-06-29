import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CBreadcrumb, CBreadcrumbItem, CContainer } from '@coreui/react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const search = location.search;

    return (
        <CContainer className='mt-4'>
             <CBreadcrumb className="my-0">
                <CBreadcrumbItem>
                    <Link to={`/${search}`}>Home</Link>
                </CBreadcrumbItem>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}${search}`;
                    return (
                        <CBreadcrumbItem key={to} active={index === pathnames.length - 1}>
                            {index === pathnames.length - 1 ? (
                                value
                            ) : (
                                <Link to={to}>{value}</Link>
                            )}
                        </CBreadcrumbItem>
                    );
                })}
            </CBreadcrumb>
        </CContainer>

    );
};

export default Breadcrumbs;
