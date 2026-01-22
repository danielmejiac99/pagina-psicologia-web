import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const manejarResize = () => {
      if (window.innerWidth > 768 && menuAbierto) {
        setMenuAbierto(false);
      }
    };

    window.addEventListener('resize', manejarResize);
    return () => window.removeEventListener('resize', manejarResize);
  }, [menuAbierto]);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      backgroundColor: 'rgba(10, 50, 90, 0.8)',
      padding: '0px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: '90px',
              transition: 'transform 0.3s ease'
            }}
          />
        </Link>
      </div>

      {/* Botón hamburguesa */}
      <div
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="hamburguesa"
        style={{
          display: 'none',
          flexDirection: 'column',
          cursor: 'pointer'
        }}
      >
        <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }} />
        <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }} />
        <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }} />
      </div>

      {/* Menú */}
      <nav style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <ul className={`menu-navegacion ${menuAbierto ? 'activo' : ''}`} style={{
          listStyle: 'none',
          display: menuAbierto ? 'flex' : 'flex',
          flexDirection: 'row',
          gap: '80px',
          margin: 0,
          padding: 0,
          flexWrap: 'wrap',
          fontSize: '20px',
          fontWeight: '900'
        }}>
          <li>
            <Link href="/sobre-mi" style={{ color: '#F7C46C', textDecoration: 'none' }}>Sobre Nosotros</Link>
          </li>
          <li>
            <Link href="/servicios" style={{ color: '#F7C46C', textDecoration: 'none' }}>Servicios</Link>
          </li>
          <li>
            <Link href="/contacto" style={{ color: '#F7C46C', textDecoration: 'none' }}>Contacto</Link>
          </li>
        </ul>
      </nav>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hamburguesa {
            display: flex !important;
          }

          .menu-navegacion {
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background-color: rgba(10, 50, 90, 0.95);
            flex-direction: column !important;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            display: none;
            z-index: 999;
          }

          .menu-navegacion.activo {
            display: flex !important;
          }

          nav ul {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </nav>
  );
}
