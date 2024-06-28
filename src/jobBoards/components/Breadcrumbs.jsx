import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <CBreadcrumb>
            <CBreadcrumbItem>
                <Link to="/">Home</Link>
            </CBreadcrumbItem>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

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
    );
};

export default Breadcrumbs;
