import { Link, Outlet } from 'react-router-dom';

function Layout({ searchQuery, handleSearch }) {
    return (
        <>
            <header style={{
                padding: '1rem 2rem',
                backgroundColor: '#111',
                color: 'red',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                position: 'sticky',
                top: 0,
                zIndex: 1000
            }}>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link
                        to="/"
                        style={{ textDecoration: 'none', color: 'red', fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                        Netflix
                    </Link>
                    <Link
                        to="/Séries"
                        style={{ textDecoration: 'none', color: 'red', fontSize: '1.2rem' }}
                    >
                        Séries
                    </Link>
                    <Link
                        to="/Films"
                        style={{ textDecoration: 'none', color: 'red', fontSize: '1.2rem' }}
                    >
                        Films
                    </Link>
                </div>

                {/* Barre de recherche globale */}
                <div style={{ marginTop: '0.5rem' }}>
                    <input
                        type="text"
                        placeholder="Rechercher films et séries..."
                        value={searchQuery}
                        onChange={handleSearch}
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: '#333',
                            color: 'white',
                            width: '250px',
                            outline: 'none'
                        }}
                    />
                </div>
            </header>

            <main style={{ backgroundColor: '#000', minHeight: '100vh', padding: '1rem' }}>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
