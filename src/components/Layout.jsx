import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            {/* Header avec une mise en forme similaire à Netflix */}
            <header style={{ padding: '1rem', backgroundColor: '#111', color: 'red' }}>
                <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'red', fontSize: '1.5rem', fontWeight: 'bold', marginRight: '2rem' }}
                >
                    Netflix
                </Link>
                <Link
                    to="/Séries"
                    style={{ textDecoration: 'none', color: 'red', fontSize: '1.5rem', fontWeight: 'bold', marginRight: '2rem' }}
                >
                    Séries
                </Link>
                <Link
                    to="/Films"
                    style={{ textDecoration: 'none', color: 'red', fontSize: '1.5rem', fontWeight: 'bold', marginRight: '2rem' }}
                >
                    Films
                </Link>
            </header>

            {/* Espace principal où les pages sont rendues */}
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
