import PreguntasFrecuentes from '../Components/PreguntasFrecuentes';
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSearch,
  faChartLine,
  faGlobe,
  faEye,
  faUserTie,
  faLightbulb,
  faTrophy,
  faBullseye,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import HeroHeader from '../Components/HeroHeader';
import TeamSection from '../Components/TeamSection';

const cualidades = [
  {
    titulo: 'Empatía y comprensión',
    link: '/servicios/terapia-individual',
    icon: faHeart
  },
  {
    titulo: 'Escucha activa',
    link: '/servicios/terapia-individual',
    icon: faSearch
  },
  {
    titulo: 'Crecimiento personal',
    link: '/servicios/terapia-individual',
    icon: faChartLine
  },
  {
    titulo: 'Visión integral',
    link: '/servicios/terapia-individual',
    icon: faGlobe
  },
  {
    titulo: 'Profesionalismo ético',
    link: '/servicios/terapia-individual',
    icon: faUserTie
  },
  {
    titulo: 'Enfoque innovador',
    link: '/servicios/terapia-individual',
    icon: faLightbulb
  },
  {
    titulo: 'Compromiso con tu bienestar',
    link: '/servicios/terapia-individual',
    icon: faTrophy
  },
  {
    titulo: 'Objetivos claros',
    link: '/servicios/terapia-individual',
    icon: faBullseye
  },
  {
    titulo: 'Atención personalizada',
    link: '/servicios/terapia-individual',
    icon: faEye
  }
];


export default function SobreMi() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // ✅ NUEVO: hover controlado para "Nuestro Origen"
  const [origenHovered, setOrigenHovered] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  return (
   <div>
      {/* ✅ NUEVO: Estilos Responsive (Copiados del Código A) */}
     <style>{`
        @media (max-width: 900px) {
          /* Menu Mobile */
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-menu-overlay { display: flex !important; }


          /* Header */
          .responsive-header {
            padding: 10px 20px !important;
          }

          /* General Text Adjustments */
          h1, h2, h3 {
             font-size: 28px !important;
             line-height: 1.3 !important;
          }
          p, li, a {
             font-size: 16px !important;
          }

          @media (max-width: 900px) {
    .hero-carousel-image {
      display: none !important;
    }
  }
          /* Ajustes de Layout */
          .responsive-container {
             padding: 40px 20px !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
        }
      `}</style>

      
      {/* HEADER IGUAL AL DE SOBRE-MI */}
      <header className="responsive-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: 'rgba(240, 232, 233, 0.15)',
          padding: '10px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}
        >
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '15px'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                lineHeight: '1.1'
              }}
            >
              {/* Logo de texto opción 3 */}
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  lineHeight: 1.1
                }}
              >
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#2c3e50',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontFamily: '"Poppins", sans-serif'
                  }}
                >
                  Horizonte
                </span>
                <span
                  style={{
                    fontSize: '40px',
                    fontWeight: '400',
                    color: '#8b5f8d',
                    fontFamily: '"Great Vibes", cursive'
                  }}
                >
                  Psicológico
                </span>
              </span>

              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Great+Vibes&display=swap"
                rel="stylesheet"
              />
            </div>
          </Link>
        </div>

        {/* ✅ NUEVO: Botón Hamburguesa */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            zIndex: 20
          }}
        >
          <div style={{ width: '30px', height: '3px', backgroundColor: '#2c3e50', margin: '6px 0', transition: '0.4s', transform: menuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: '#2c3e50', margin: '6px 0', opacity: menuOpen ? 0 : 1, transition: '0.4s' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: '#2c3e50', margin: '6px 0', transition: '0.4s', transform: menuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none' }}></div>
        </button>

        {/* ✅ MODIFICADO: className desktop-nav agregado */}
        <nav className="desktop-nav"
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '30px',
              margin: 0,
              padding: 0,
              flexWrap: 'wrap',
              alignItems: 'center'
            }}
          >
            <li
              style={{
                fontSize: '18px',
                fontWeight: '400'
              }}
            >
              <Link
                href="/sobre-mi"
                style={{
                  color: '#2c3e50',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li
              style={{
                fontSize: '18px',
                fontWeight: '400'
              }}
            >
              <Link
                href="/servicios"
                style={{
                  color: '#2c3e50',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                Servicios
              </Link>
            </li>
            <li
              style={{
                fontSize: '18px',
                fontWeight: '400'
              }}
            >
              <Link
                href="/contacto"
                style={{
                  color: '#2c3e50',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                Contacto
              </Link>
            </li>
            
          </ul>
        </nav>

        {/* ✅ NUEVO: Menú Desplegable Móvil */}
        <div className="mobile-menu-overlay" style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            zIndex: 9,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '40px',
            gap: '30px',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            display: 'none'
        }}>
            <Link href="/sobre-mi" onClick={() => setMenuOpen(false)} style={{ fontSize: '24px', color: '#2c3e50', textDecoration: 'none', fontWeight: '500' }}>Sobre Nosotros</Link>
            <Link href="/servicios" onClick={() => setMenuOpen(false)} style={{ fontSize: '24px', color: '#2c3e50', textDecoration: 'none', fontWeight: '500' }}>Servicios</Link>      
            <Link href="/contacto" onClick={() => setMenuOpen(false)} style={{ fontSize: '24px', color: '#2c3e50', textDecoration: 'none', fontWeight: '500' }}>Contacto</Link>
            
            
        </div>
      </header>

      {/* HERO COMPARTIDO CON LA MISMA IMAGEN */}
      <HeroHeader image="/Servicios.png" height="100vh" style={{ marginTop: '80px' }} />

      {/* Sección de equipo (viene de Components/TeamSection.js) */}
      <TeamSection />

      {/* Sección Mi Historia - FULL WIDTH (fondo a toda la pantalla) */}
      <section
        style={{
          /* ✅ rompe el max-width del contenedor padre */
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          maxWidth: '100vw',

          /* tu diseño */
          padding: '60px 40px',
          background: 'linear-gradient(135deg, #f0f7ff, #e6f3ff, #d4edff)',
          overflow: 'hidden'
        }}
      >
        {/* 12 Bolitas ajustadas (menos blur, posiciones optimizadas) */}
        <div style={{
          position: 'absolute', top: '8%', left: '8%', width: '110px', height: '110px',
          background: 'radial-gradient(circle, rgba(255, 105, 180, 0.28), rgba(255, 105, 180, 0.1))',
          borderRadius: '50%', filter: 'blur(10px)', animation: 'float 6s ease-in-out infinite', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', top: '55%', right: '12%', width: '160px', height: '160px',
          background: 'radial-gradient(circle, rgba(139, 95, 141, 0.25), rgba(139, 95, 141, 0.08))',
          borderRadius: '50%', filter: 'blur(12px)', animation: 'float 8s ease-in-out infinite reverse', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '18%', left: '6%', width: '85px', height: '85px',
          background: 'radial-gradient(circle, rgba(74, 144, 226, 0.26), rgba(74, 144, 226, 0.09))',
          borderRadius: '50%', filter: 'blur(9px)', animation: 'float 10s ease-in-out infinite', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', top: '4%', right: '28%', width: '55px', height: '55px',
          background: 'radial-gradient(circle, rgba(255, 105, 180, 0.3), transparent)',
          borderRadius: '50%', filter: 'blur(7px)', animation: 'float 7s ease-in-out infinite reverse', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', top: '12%', left: '42%', width: '95px', height: '95px',
          background: 'radial-gradient(circle, rgba(255, 105, 180, 0.3), rgba(255, 105, 180, 0.12))',
          borderRadius: '50%', filter: 'blur(8px)', animation: 'float 5s ease-in-out infinite', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', top: '48%', left: '18%', width: '140px', height: '140px',
          background: 'radial-gradient(circle, rgba(74, 144, 226, 0.28), rgba(74, 144, 226, 0.1))',
          borderRadius: '50%', filter: 'blur(10px)', animation: 'float 7s ease-in-out infinite reverse', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', top: '52%', right: '22%', width: '120px', height: '120px',
          background: 'radial-gradient(circle, rgba(139, 95, 141, 0.25), rgba(139, 95, 141, 0.08))',
          borderRadius: '50%', filter: 'blur(9px)', animation: 'float 9s ease-in-out infinite', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', top: '32%', right: '32%', width: '75px', height: '75px',
          background: 'radial-gradient(circle, rgba(255, 105, 180, 0.24), rgba(74, 144, 226, 0.14))',
          borderRadius: '50%', filter: 'blur(7px)', animation: 'float 6s ease-in-out infinite reverse', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '28%', left: '22%', width: '155px', height: '155px',
          background: 'radial-gradient(circle, rgba(74, 144, 226, 0.3), rgba(74, 144, 226, 0.11))',
          borderRadius: '50%', filter: 'blur(11px)', animation: 'float 11s ease-in-out infinite', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '32%', right: '12%', width: '105px', height: '105px',
          background: 'radial-gradient(circle, rgba(139, 95, 141, 0.27), rgba(255, 105, 180, 0.16))',
          borderRadius: '50%', filter: 'blur(8px)', animation: 'float 4s ease-in-out infinite reverse', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '12%', right: '38%', width: '65px', height: '65px',
          background: 'radial-gradient(circle, rgba(255, 105, 180, 0.34), transparent)',
          borderRadius: '50%', filter: 'blur(6px)', animation: 'float 13s ease-in-out infinite', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '8%', left: '48%', width: '190px', height: '190px',
          background: 'radial-gradient(circle, rgba(74, 144, 226, 0.2), rgba(74, 144, 226, 0.05))',
          borderRadius: '50%', filter: 'blur(14px)', animation: 'float 14s ease-in-out infinite reverse', zIndex: 0
        }} />

        {/* Contenido compacto */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Título más cerca */}
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <h2
              style={{
                fontSize: '44px',
                fontWeight: '400',
                display: 'inline-block',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                backgroundImage: origenHovered
                  ? 'linear-gradient(135deg, #ff69b4, #8b5f8d, #4a90e2)'
                  : 'linear-gradient(135deg, #4a90e2, #357abd, #8b5f8d)',
                margin: 0,
                lineHeight: '1.1',
                fontFamily: '"Playfair Display", serif',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transform: origenHovered ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
                textShadow: origenHovered
                  ? '0 4px 16px rgba(74, 144, 226, 0.5)'
                  : '0 2px 8px rgba(74, 144, 226, 0.3)',
              }}
              onMouseEnter={() => setOrigenHovered(true)}
              onMouseLeave={() => setOrigenHovered(false)}
            >
              Nuestro Origen
            </h2>
          </div>

          {/* Bloque 1: Más equilibrado */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, minWidth: '320px', paddingRight: '15px' }}>
              <div style={{ borderLeft: '4px solid #4a90e2', paddingLeft: '20px', marginBottom: '20px' }}>
                <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"Poppins", sans-serif' }}>
                  Horizonte Psicológico nació de una convicción profunda: toda persona merece un lugar donde su dolor pueda ser mirado con calidez, respeto y propósito. Desde esa semilla, este espacio comenzó como un sueño genuino que unía la vocación de acompañar con el compromiso profundo de ofrecer una terapia humana, ética y en constante evolución.
                </p>
                <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"Poppins", sans-serif' }}>
                  Con el tiempo comprendimos que acompañar no es solo cuidar lo que duele, sino también cuidar lo que florece en cada persona. Por eso, nuestro enfoque integra la historia, el cuerpo, los vínculos y el entorno, reconociendo que cada ser humano es un universo tejido de experiencias únicas.
                </p>
              </div>
              <p style={{ fontSize: '18px', color: '#4a90e2', lineHeight: '1.6', marginBottom: '30px', fontStyle: 'italic', fontFamily: '"Playfair Display", serif' }}>
                Porque cuidar la mente también es cuidar la vida.
              </p>
            </div>

            {/* Imágenes acorde al texto */}
            <div style={{ flex: 1, minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '220px', height: '280px', background: 'linear-gradient(135deg, #e6f3ff, #d4edff)', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(43, 108, 176, 0.2)', position: 'relative' }}>
                <img src="/IMG_6202.jpg" alt="Nicole Amaya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div style={{ width: '220px', height: '180px', background: 'linear-gradient(135deg, #e6f3ff, #d4edff)', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(43, 108, 176, 0.2)' }}>
                <img src="/IMG_2017.JPG" alt="Equipo Horizonte Psicológico" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            </div>
          </div>

          {/* Bloque 2: Más compacto */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            flexDirection: 'row-reverse',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '360px', height: '420px', background: 'linear-gradient(135deg, #d4edff, #b8daff)', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 20px 45px rgba(43, 108, 176, 0.25)', position: 'relative' }}>
                <img src="/IMG_3382.jpg" alt="Espacio terapéutico" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            </div>

            <div style={{ flex: 1, minWidth: '320px', paddingLeft: '15px' }}>
              <div style={{ borderRight: '4px solid #4a90e2', paddingRight: '20px', marginBottom: '20px' }}>
                <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"Poppins", sans-serif' }}>
                  El camino tuvo desafíos; identificar las necesidades reales de las personas, desmontar mitos sobre la terapia, reconstruir la confianza en los procesos psicológicos y asumir el reto de emprender con autenticidad en un campo exigente. Pero cada paso estuvo sostenido por la vocación, el amor por este oficio y la formación continua.
                </p>
                <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.7', marginBottom: '16px', fontFamily: '"Poppins", sans-serif' }}>
                  Hoy, Horizonte Psicológico es un espacio vivo, sostenido por el cariño de quienes lo han visto crecer y por quienes han confiado en abrir su mundo interior aquí. Cada encuentro terapéutico es una invitación a transformar, a reconstruirse y a reconocerse desde un lugar más amable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-18px) scale(1.04); }
          }
        `}</style>
      </section>

      {/* Sección: Conoce a las fundadoras */}
      <section style={{
        padding: '60px 40px',
        background: 'linear-gradient(135deg, #fdf6f8, #f0f7ff)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Título centrado */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <h2
                style={{
                  fontSize: '36px',
                  fontWeight: '300',
                  color: '#8b5f8d',
                  fontFamily: '"Playfair Display", serif',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  padding: '22px 45px',
                  background: 'linear-gradient(135deg, #ffffff, #fdf6f8)',
                  borderRadius: '15px 15px 15px 0px',
                  boxShadow: '0 8px 25px rgba(139, 95, 141, 0.15)',
                  border: '2px solid #ff69b4',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  display: 'inline-block',
                  transform: 'translateY(0) scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(139, 95, 141, 0.25)';
                  e.currentTarget.style.background =
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(253, 246, 248, 0.95))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 95, 141, 0.15)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff, #fdf6f8)';
                }}
              >
                Conoce a nuestras fundadoras
              </h2>

              {/* Esquinita */}
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                left: '-12px',
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #ff69b4, #8b5f8d)',
                borderRadius: '0 0 0 25px',
                zIndex: -1,
                boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
              }} />
            </div>
          </div>

          {/* Grid fundadoras */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            justifyItems: 'center'
          }}>
            {/* Nicole */}
            <Link href="/sobre-mi/nicole" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <div
                style={{
                  width: '100%',
                  maxWidth: '430px',
                  background: 'linear-gradient(135deg, #ffffff, #fdf6f8)',
                  padding: '30px 25px',
                  borderRadius: '20px 20px 20px 0px',
                  boxShadow: '0 8px 25px rgba(139, 95, 141, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  border: '1px solid rgba(255, 105, 180, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(5px)',
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(139, 95, 141, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 95, 141, 0.1)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '35px',
                  height: '35px',
                  background: 'linear-gradient(135deg, #ff69b4, #8b5f8d)',
                  borderRadius: '0 20px 0 0',
                  boxShadow: '0 2px 10px rgba(255, 105, 180, 0.3)'
                }} />

                <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 24px',
                  boxShadow: '0 6px 18px rgba(255, 105, 180, 0.35)',
                  border: '4px solid #ff69b4'
                }}>
                  <img
                    src="/IMG_2016-1.JPG"
                    alt="Nicole Amaya"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#8b5f8d',
                  marginBottom: '10px',
                  fontFamily: '"Playfair Display", serif',
                  textAlign: 'center'
                }}>
                  Nicole Amaya
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#555',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  margin: 0
                }}>
                  Psicóloga – Magister en Clínica de la Infancia y de la Juventud – Maestría (C) en Psicología de la Salud. Haz clic para conocer su historia.
                </p>
              </div>
            </Link>

            {/* Leidy */}
            <Link href="/sobre-mi/leidy" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <div
                style={{
                  width: '100%',
                  maxWidth: '430px',
                  background: 'linear-gradient(135deg, #ffffff, #fdf6f8)',
                  padding: '30px 25px',
                  borderRadius: '20px 20px 20px 0px',
                  boxShadow: '0 8px 25px rgba(139, 95, 141, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  border: '1px solid rgba(255, 105, 180, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(5px)',
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(139, 95, 141, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 95, 141, 0.1)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '35px',
                  height: '35px',
                  background: 'linear-gradient(135deg, #ff69b4, #8b5f8d)',
                  borderRadius: '0 20px 0 0',
                  boxShadow: '0 2px 10px rgba(255, 105, 180, 0.3)'
                }} />

                <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 24px',
                  boxShadow: '0 6px 18px rgba(255, 105, 180, 0.35)',
                  border: '4px solid #ff69b4'
                }}>
                  <img
                    src="/IMG_6203.JPG"
                    alt="Leidy Carolina Rodríguez"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#8b5f8d',
                  marginBottom: '10px',
                  fontFamily: '"Playfair Display", serif',
                  textAlign: 'center'
                }}>
                  Leidy Carolina Rodríguez
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#555',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  margin: 0
                }}>
                  Psicóloga - Especialista en Clínica Psicoanalítica - Magíster en Educación: Desarrollo Humano. Haz clic para conocer su historia.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección: Nuestro enfoque terapéutico */}
      <section style={{
        padding: '60px 40px',
        background: 'linear-gradient(135deg, #fdf6f8, #f0f7ff)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            position: 'relative',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '300',
              color: '#8b5f8d',
              fontFamily: '"Playfair Display", serif',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              padding: '25px 50px',
              background: 'linear-gradient(135deg, #ffffff, #fdf6f8)',
              borderRadius: '15px 15px 15px 0px',
              boxShadow: '0 8px 25px rgba(139, 95, 141, 0.15)',
              border: '2px solid #ff69b4',
              position: 'relative',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.4';
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.background =
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(253, 246, 248, 0.7))';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
                e.target.style.background =
                  'linear-gradient(135deg, #ffffff, #fdf6f8)';
              }}>
              Nuestro enfoque terapéutico
            </h2>

            <div style={{
              position: 'absolute',
              bottom: '-12px',
              left: '-12px',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #ff69b4, #8b5f8d)',
              borderRadius: '0 0 0 25px',
              zIndex: -1,
              transition: 'all 0.4s ease',
              boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {cualidades.map((cualidad, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: 'linear-gradient(135deg, #ffffff, #fdf6f8)',
                  padding: '10px 25px',
                  borderRadius: '20px 20px 20px 0px',
                  boxShadow: '0 8px 25px rgba(139, 95, 141, 0.1)',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(255, 105, 180, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(5px)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '35px',
                  height: '35px',
                  background: 'linear-gradient(135deg, #ff69b4, #8b5f8d)',
                  borderRadius: '0 20px 0 0',
                  transition: 'all 0.4s ease',
                  opacity: hoveredIndex === index ? '1' : '0.8',
                  boxShadow: '0 2px 10px rgba(255, 105, 180, 0.3)'
                }}></div>

                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #ff69b4, #4a90e2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)',
                  transition: 'all 0.3s ease',
                  transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                }}>
                  <FontAwesomeIcon icon={cualidad.icon} style={{ fontSize: '24px' }} />
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#8b5f8d',
                  marginBottom: '15px',
                  fontFamily: '"Playfair Display", serif',
                  textAlign: 'center'
                }}>
                  {cualidad.titulo}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: ¿Cómo te puedo acompañar? */}
      <section style={{
        padding: '80px 40px',
        background: 'linear-gradient(135deg, #fdf6f8, #f0f7ff)',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          alignItems: 'flex-start'
        }}>
          {/* Columna izquierda – Texto principal */}
          <div style={{ flex: '1 1 340px', minWidth: '280px' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#2b6cb0',
              fontFamily: '"Poppins", sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '14px'
            }}>
              Modalidad de atención, duración y horarios
            </h3>

            <h2 style={{
              fontSize: '32px',
              fontWeight: '300',
              color: '#2c3e50',
              fontFamily: '"Playfair Display", serif',
              lineHeight: '1.3',
              marginBottom: '20px'
            }}>
              Un espacio terapéutico que se adapta a tu vida,{' '}
              <span style={{ color: '#ff7f9f', fontWeight: '600' }}>
                sin prisa, pero contigo.
              </span>
            </h2>

            <p style={{
              fontSize: '20px',
              color: '#555',
              lineHeight: '1.7',
              marginBottom: '14px'
            }}>
              La atención psicológica se ofrece en modalidad presencial, virtual o híbrida,
              de acuerdo con las necesidades, posibilidades y momento vital de cada persona.
              El proceso terapéutico se adapta a tu realidad, cuidando siempre un espacio
              seguro, ético y confidencial, tanto en la consulta física como en la virtualidad.
            </p>

            <p style={{
              fontSize: '20px',
              color: '#555',
              lineHeight: '1.7',
              marginBottom: '14px'
            }}>
              La duración de las sesiones es aproximada de cuarenta (40) minutos a una (1) hora.
              La frecuencia se define según tu necesidad emocional y los objetivos del
              acompañamiento; en general se recomienda una sesión cada ocho días para sostener
              el trabajo terapéutico, pero puede ajustarse de forma conjunta cuando el proceso
              lo requiere.
            </p>

            <p style={{
              fontSize: '20px',
              color: '#555',
              lineHeight: '1.7'
            }}>
              Los horarios de atención están disponibles de lunes a viernes, de 8:00 a.m. a
              6:00 p.m., y los sábados, de 8:00 a.m. a 4:00 p.m., ofreciendo franjas amplias
              que facilitan el acceso al cuidado de tu bienestar emocional.
            </p>
          </div>

          {/* Columna derecha – Tarjeta + mapa */}
          <div style={{ flex: '1 1 320px', minWidth: '280px' }}>
            {/* Tarjeta de datos rápidos */}
            <div style={{
              background: 'linear-gradient(135deg, #ffffff, #fdf6f8)',
              borderRadius: '20px',
              padding: '24px 22px',
              boxShadow: '0 10px 25px rgba(139,95,141,0.18)',
              border: '1px solid rgba(255,105,180,0.25)',
              marginBottom: '20px'
            }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#8b5f8d',
                fontFamily: '"Playfair Display", serif',
                marginBottom: '14px'
              }}>
                ¿Cómo será tu proceso?
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '15px',
                color: '#4a5568',
                lineHeight: '1.7'
              }}>
                <li style={{ marginBottom: '8px' }}>
                  • Modalidad: <strong>presencial, virtual o híbrida</strong>, según tus necesidades.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  • Duración por sesión: <strong>40 a 60 minutos</strong>.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  • Frecuencia sugerida: <strong>una sesión cada 8 días</strong>, con posibilidad de ajuste.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  • Horario: <strong>lunes a viernes 8:00 a.m. – 6:00 p.m.</strong> y
                  <strong> sábados 8:00 a.m. – 4:00 p.m.</strong>
                </li>
                <li>
                  • Dirección consulta presencial:
                  <br />
                  <strong>📍 Av 5c Nte # 23D-33 Barrio San Vicente, Cali.</strong>
                </li>
              </ul>
            </div>

            {/* Mapa */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(43,108,176,0.25)',
              border: '1px solid rgba(255,255,255,0.9)',
              background: '#fff'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.522808563775!2d-76.52938550000002!3d3.4654142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a71eaaf3b5d5%3A0xb7a7933df8627651!2sHorizonte%20Psicol%C3%B3gico!5e0!3m2!1sen!2sco!4v1768693621591!5m2!1sen!2sco"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <Link href="/contacto" style={{ textDecoration: 'none' }}>
              <button
                type="button"
                style={{
                  marginTop: '18px',
                  width: '100%',
                  maxWidth: '520px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #ff69b4, #4a90e2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '18px',
                  padding: '16px 18px',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(74, 144, 226, 0.25)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease',
                  letterSpacing: '0.4px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 16px 38px rgba(255, 105, 180, 0.35)';
                  e.currentTarget.style.filter = 'saturate(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(74, 144, 226, 0.25)';
                  e.currentTarget.style.filter = 'none';
                }}
              >
                <span style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.18)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)'
                }}>
                  📅
                </span>

                <span style={{ lineHeight: 1.1 }}>
                  Comienza tu proceso hoy
                  <span style={{
                    display: 'block',
                    fontSize: '12px',
                    opacity: 0.9,
                    fontWeight: '600',
                    marginTop: '2px'
                  }}>
                    Agenda tu cita en minutos
                  </span>
                </span>

                <span style={{ marginLeft: 'auto', fontSize: '18px', opacity: 0.95 }}>
                  →
                </span>

                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-40%',
                    width: '40%',
                    height: '100%',
                    background: 'linear-gradient(120deg, rgba(255,255,255,0), rgba(255,255,255,0.55), rgba(255,255,255,0))',
                    transform: 'skewX(-18deg)',
                    transition: 'left 0.6s ease',
                    pointerEvents: 'none'
                  }}
                  className="cta-shine"
                />
              </button>

              <style jsx>{`
                button:hover .cta-shine {
                  left: 110%;
                }
              `}</style>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: 'linear-gradient(135deg, #fdf6f8, #f0f7ff)',
        color: '#2c3e50',
        padding: '50px 20px 30px',
        marginTop: '0px',
        borderTop: '3px solid #ff69b4'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '40px'
        }}>
          {/* Columna 1 */}
          <div style={{ flex: '1', minWidth: '250px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            
              <span
                  style={{
                    fontSize: '40px',
                    fontWeight: '400',
                    color: '#8b5f8d',
                    fontFamily: '"Great Vibes", cursive'
                  }}
                >
                  Horizonte Psicológico
                </span>
            
              <p style={{
                fontSize: '14px',
                color: '#666',
                marginTop: '10px',
                fontStyle: 'italic'
              }}>
                Especialista en salud mental y bienestar emocional
              </p>
            </div>
          </div>

       {/* Columna 2 Navegación */}
          <div style={{ flex: 1, minWidth: "200px" }}>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#8b5f8d",
                marginBottom: "20px",
                fontFamily: "Playfair Display, serif",
              }}
            >
              Navegación
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <li>
                <Link
                  href="/sobre-mi"
                  style={{
                    color: "#2c3e50",
                    textDecoration: "none",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ff69b4";
                    e.target.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#2c3e50";
                    e.target.style.transform = "translateX(0)";
                  }}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  style={{
                    color: "#2c3e50",
                    textDecoration: "none",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#4a90e2";
                    e.target.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#2c3e50";
                    e.target.style.transform = "translateX(0)";
                  }}
                >
                  Servicios
                </Link>
              </li>
              
              <li>
                <Link
                  href="/contacto"
                  style={{
                    color: "#2c3e50",
                    textDecoration: "none",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ff69b4";
                    e.target.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#2c3e50";
                    e.target.style.transform = "translateX(0)";
                  }}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 Redes Sociales */}
          <div style={{ flex: 1, minWidth: "200px" }}>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#8b5f8d",
                marginBottom: "20px",
                fontFamily: "Playfair Display, serif",
              }}
            >
              Síguenos
            </h4>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
  
  {/* Instagram */}
  <a
    href="https://www.instagram.com/hori.psicologico"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "45px",
      height: "45px",
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      textDecoration: "none",
      color: "#E4405F", // Color oficial Instagram
      fontSize: "22px",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 5px 15px rgba(228, 64, 95, 0.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    }}
  >
    <FontAwesomeIcon icon={faInstagram} />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1D5aYy9YVf/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "45px",
      height: "45px",
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      textDecoration: "none",
      color: "#1877F2", // Color oficial Facebook
      fontSize: "22px",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 5px 15px rgba(24, 119, 242, 0.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    }}
  >
    <FontAwesomeIcon icon={faFacebookF} />
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@hori.psicologico"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "45px",
      height: "45px",
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      textDecoration: "none",
      color: "#000000", // TikTok suele ser negro
      fontSize: "22px",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    }}
  >
    <FontAwesomeIcon icon={faTiktok} />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/message/JK6755O724B4K1"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "45px",
      height: "45px",
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      textDecoration: "none",
      color: "#25D366", // Color oficial WhatsApp
      fontSize: "22px",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 5px 15px rgba(37, 211, 102, 0.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
    }}
  >
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
</div>

          </div>
        </div>

        {/* Línea separadora y copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(139, 95, 141, 0.2)",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
            © 2026 Horizonte Psicológico - Psicologia. Todos los derechos reservados.
          </p>
        </div>
      </footer>

{/* Botón flotante WhatsApp - CON ÍCONO FONTAWESOME */}
<a
  href="https://wa.me/message/JK6755O724B4K1"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    zIndex: 1000,
    backgroundColor: "#25D366",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    transition: "transform 0.3s ease-in-out",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.1)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  <FontAwesomeIcon 
    icon={faWhatsapp} 
    style={{ 
      fontSize: "28px", 
      color: "white",
      width: "100%",
      height: "100%" 
    }} 
  />
</a>

    </div>
  );
}
