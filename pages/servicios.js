// pages/servicios.js
import PreguntasFrecuentes from '../Components/PreguntasFrecuentes';
import { useState } from 'react';
import Link from 'next/link';
import SocialLinks from '../Components/SocialLinks';
import HeroHeader from '../Components/HeroHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import {
  faUser,
  faHeart,
  faChartLine,
  faUserTie,
  faLightbulb,
  faBullseye,
  faGlobe,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const servicios = [
  { titulo: 'Terapia Individual por ciclo Vital', link: '/servicios/terapia-individual', icon: faUser },
  { titulo: 'Terapia Para niños', link: '/servicios/terapia-ninos', icon: faHeart },
  { titulo: 'Terapia Para Jovenes', link: '/servicios/terapia-jovenes', icon: faChartLine },
  { titulo: 'Terapia Para Adultos', link: '/servicios/terapia-adultos', icon: faUserTie },
  { titulo: 'Terapia Psicoanalítica', link: '/servicios/terapia-psicoanalitica', icon: faLightbulb },
  { titulo: 'Terapia de Pareja', link: '/servicios/terapia-pareja', icon: faBullseye },
  { titulo: 'Terapia Familiar', link: '/servicios/terapia-familiar', icon: faGlobe },
  { titulo: 'Talleres Grupales y Acompañamiento Psicoeducativo', link: '/servicios/talleres-grupales', icon: faUsers }
];

export default function Servicios() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // ✅ NUEVO: Estado para el menú hamburguesa
  const [menuOpen, setMenuOpen] = useState(false);

  const typingPhrases = [
    'Reconecta contigo antes de seguir adelante',
    'Tu bienestar emocional merece prioridad',
    'Sanar también es avanzar',
    'Confía en tu proceso, no estás sola',
    'La mente también necesita cuidados',
    'Tu historia importa, tu salud también',
    'Escucha lo que tu cuerpo y mente intentan decirte',
    'Tu paz mental es una meta alcanzable',
    'Transforma el dolor en fortaleza con apoyo psicológico'
  ];

  const typingSequence = typingPhrases.flatMap((phrase) => [
    phrase,
    2000,
    () => {}
  ]);

  return (
    <div>
      {/* ✅ NUEVO: Estilos Responsive (Copiados del Código A) */}
         <style>{`
  /* ================= MOBILE ================= */
  @media (max-width: 900px) {

    /* Menu Mobile */
    .desktop-nav {
      display: none !important;
    }

    .mobile-menu-btn {
      display: block !important;
    }

    .mobile-menu-overlay {
      display: flex !important;
    }

    /* Header */
    .responsive-header {
      padding: 10px 20px !important;
    }

    /* Textos generales */
    h1, h2, h3 {
      font-size: 28px !important;
      line-height: 1.3 !important;
    }

    p, li, a {
      font-size: 16px !important;
    }

    /* 🔒 SOLO ocultar carrusel del HeroHeader */
    .hero-carousel {
      display: none !important;
    }

    /* Layout */
    .responsive-container {
      padding: 40px 20px !important;
    }
  }

  /* ================= DESKTOP ================= */
  @media (min-width: 901px) {
    .mobile-menu-btn {
      display: none !important;
    }

    .mobile-menu-overlay {
      display: none !important;
    }
  }
   @media (max-width: 900px) {

  /* 🔥 CONTENEDOR DE IMÁGENES */
  .nicole-images-column {
    justify-content: flex-start !important;
    height: auto !important;
    gap: 30px !important;
  }

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

      {/* Sección de Servicios */}
      <section
        style={{
          padding: '40px 40px',
          background: 'linear-gradient(135deg, #fdf6f8, #f0f7ff)',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              display: 'inline-block',
              position: 'relative',
              marginBottom: '60px'
            }}
          >
            <h2
              style={{
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
              }}
            >
              Cómo puedo ayudarte
            </h2>

            <div
              style={{
                position: 'absolute',
                bottom: '-12px',
                left: '-12px',
                width: '50px',
                height: '50px',
                background:
                  'linear-gradient(135deg, #ff69b4, #8b5f8d)',
                borderRadius: '0 0 0 25px',
                zIndex: -1,
                transition: 'all 0.4s ease',
                boxShadow:
                  '0 4px 15px rgba(255, 105, 180, 0.3)'
              }}
            ></div>
          </div>

          <div
            style={{
              display: 'flex',          // Cambiamos grid por flex
              flexWrap: 'wrap',         // Permite que bajen a la siguiente línea
              justifyContent: 'center', // Centra todos los elementos (incluidos los últimos 2)
              gap: '30px',
              marginBottom: '60px'
            }}
          >
            {servicios.map((servicio, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  // Propiedades de tamaño para que se comporten como tarjetas
                  flex: '1 1 280px',    // Crecen pero base 280px (igual que tu minmax anterior)
                  maxWidth: '350px',    // Evita que se estiren demasiado (puedes ajustar este valor)
                  
                  background: 'linear-gradient(135deg, #ffffff, #fdf6f8)',
                  padding: '32px 24px',
                  borderRadius: '20px 20px 20px 0px',
                  boxShadow: '0 8px 25px rgba(139, 95, 141, 0.1)',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(255, 105, 180, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(5px)',
                  transform: hoveredIndex === index ? 'translateY(-6px)' : 'translateY(0)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '35px',
                    height: '35px',
                    background:
                      'linear-gradient(135deg, #ff69b4, #8b5f8d)',
                    borderRadius: '0 20px 0 0',
                    transition: 'all 0.4s ease',
                    opacity: hoveredIndex === index ? '1' : '0.8',
                    boxShadow:
                      '0 2px 10px rgba(255, 105, 180, 0.3)'
                  }}
                ></div>

                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    background:
                      'linear-gradient(135deg, #ff69b4, #4a90e2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white',
                    boxShadow:
                      '0 4px 15px rgba(255, 105, 180, 0.3)',
                    transition: 'all 0.3s ease',
                    transform:
                      hoveredIndex === index
                        ? 'scale(1.1) rotate(5deg)'
                        : 'scale(1)'
                  }}
                >
                  <FontAwesomeIcon icon={servicio.icon} style={{ fontSize: '28px' }} />
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#8b5f8d',
                    marginBottom: '12px',
                    fontFamily: '"Playfair Display", serif',
                    textAlign: 'center'
                  }}
                >
                  {servicio.titulo}
                </h3>

                <p
                  style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '15px',
                    textAlign: 'center'
                  }}
                >
                  {index === 0
                    ? 'Sesiones personalizadas para tu crecimiento personal y bienestar emocional en un espacio seguro y confidencial.'
                    : index === 1
                    ? 'Acompañamiento especializado para el desarrollo emocional y psicológico de niños en todas sus etapas.'
                    : index === 2
                    ? 'Apoyo terapéutico enfocado en los desafíos únicos de la adolescencia y juventud.'
                    : index === 3
                    ? 'Terapia individual diseñada para adultos que buscan mejorar su bienestar emocional y calidad de vida.'
                    : index === 4
                    ? 'Enfoque profundo en el autoconocimiento y la comprensión de patrones inconscientes.'
                    : index === 5
                    ? 'Mejora la comunicación, resolución de conflictos y fortalece los vínculos en tu relación de pareja.'
                    : index === 6
                    ? 'Espacio terapéutico para fortalecer vínculos familiares y resolver conflictos en conjunto.'
                    : 'Espacios grupales de aprendizaje y crecimiento en temas de salud mental y bienestar emocional.'}
                </p>

                <Link href={servicio.link}>
                  <button
                    style={{
                      background:
                        'linear-gradient(135deg, #ff69b4, #4a90e2)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '10px 24px',
                      fontWeight: '600',
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow:
                        '0 4px 12px rgba(255, 105, 180, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow =
                        '0 6px 20px rgba(255, 105, 180, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow =
                        '0 4px 12px rgba(255, 105, 180, 0.3)';
                    }}
                  >
                    Conocer más
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div
            style={{
              background:
                'linear-gradient(135deg, #fdf6f8, #f0f7ff)',
              padding: '40px',
              borderRadius: '15px',
              border: '2px solid #ff69b4',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#8b5f8d',
                marginBottom: '15px'
              }}
            >
              ¿No estás seguro qué terapia necesitas?
            </h3>
            <p
              style={{
                color: '#666',
                marginBottom: '25px',
                fontSize: '16px'
              }}
            >
              Agenda una sesión de evaluación y juntos encontraremos el mejor enfoque para ti.
            </p>
            <Link href="/contacto">
              <button
                style={{
                  background:
                    'linear-gradient(135deg, #ff69b4, #4a90e2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '15px 35px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow:
                    '0 4px 12px rgba(255, 105, 180, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow =
                    '0 6px 15px rgba(255, 105, 180, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow =
                    '0 4px 12px rgba(255, 105, 180, 0.3)';
                }}
              >
                Agenda tu evaluación inicial
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ SECCIÓN MEJORADA DE POLÍTICAS DE ATENCIÓN */}
      <section style={{ padding: '20px 40px', display: 'flex', justifyContent: 'center', background: '#fdf6f8' }}>
        <Link 
          href="/politicas" 
          style={{ textDecoration: 'none', width: '100%', maxWidth: '800px' }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #4a90e2, #8b5f8d)",
              borderRadius: "20px", 
              padding: "30px 40px", 
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 15px 35px rgba(74,144,226,0.3)", 
              cursor: "pointer",
              transition: "all 0.3s ease",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.01)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(74,144,226,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(74,144,226,0.3)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "25px", flexWrap: 'wrap' }}>
              <div style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  borderRadius: '50%', 
                  width: '65px', 
                  height: '65px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: 'inset 0 0 10px rgba(255,255,255,0.1)'
              }}>
                  <FontAwesomeIcon icon={faGavel} style={{ fontSize: "30px" }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                  <span style={{ fontWeight: 700, fontSize: "24px", lineHeight: '1.2' }}>
                    Conoce nuestras políticas de atención
                  </span>
                  <span style={{ fontSize: "16px", opacity: 0.9, fontWeight: 400, marginTop: '4px' }}>
                    Derechos, deberes y consentimiento informado
                  </span>
              </div>
            </div>
            <div style={{ 
                background: 'white', 
                color: '#8b5f8d', 
                borderRadius: '50%', 
                width: '45px', 
                height: '45px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '22px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              →
            </div>
          </div>
        </Link>
      </section>

      {/* Sección Preguntas Frecuentes */}
      <section
        style={{
          padding: '10px 40px',
          background:
            'linear-gradient(135deg, #fdf6f8 0%, #f0f7ff 50%, #fdf6f8 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '200px',
            height: '200px',
            background:
              'linear-gradient(135deg, rgba(255, 105, 180, 0.08), rgba(74, 144, 226, 0.08))',
            borderRadius: '50%',
            filter: 'blur(20px)'
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '8%',
            width: '150px',
            height: '150px',
            background:
              'linear-gradient(135deg, rgba(139, 95, 141, 0.06), rgba(255, 105, 180, 0.06))',
            borderRadius: '50%',
            filter: 'blur(15px)'
          }}
        ></div>

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '20px',
                background:
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))',
                padding: '20px 40px',
                borderRadius: '50px',
                boxShadow:
                  '0 10px 30px rgba(139, 95, 141, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background:
                    'linear-gradient(135deg, #ff69b4, #4a90e2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  color: 'white',
                  boxShadow:
                    '0 4px 15px rgba(255, 105, 180, 0.3)'
                }}
              >
                ❓
              </div>
              <h2
                style={{
                  fontSize: '36px',
                  fontWeight: '300',
                  color: '#8b5f8d',
                  fontFamily: '"Playfair Display", serif',
                  margin: 0,
                  background:
                    'linear-gradient(135deg, #8b5f8d, #4a90e2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Preguntas Frecuentes
              </h2>
            </div>
            <p
              style={{
                fontSize: '18px',
                color: '#666',
                marginTop: '20px',
                fontStyle: 'italic'
              }}
            >
              Encuentra respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 249, 250, 0.95))',
              borderRadius: '25px',
              boxShadow:
                '0 20px 50px rgba(139, 95, 141, 0.15)',
              overflow: 'hidden',
              backdropFilter: 'blur(15px)',
              border:
                '1px solid rgba(255, 255, 255, 0.8)',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background:
                  'linear-gradient(90deg, #ff69b4, #4a90e2, #8b5f8d)'
              }}
            ></div>

            <div
              style={{
                padding: '50px 40px',
                fontFamily:
                  '"Inter", "Segoe UI", -apple-system, sans-serif',
                lineHeight: '1.7',
                letterSpacing: '0.3px'
              }}
            >
              <PreguntasFrecuentes categoria="preguntas-frecuentes" />
            </div>

            <div
              style={{
                background:
                  'linear-gradient(135deg, #fdf6f8, #f0f7ff)',
                padding: '25px',
                textAlign: 'center',
                borderTop:
                  '1px solid rgba(255, 255, 255, 0.5)'
              }}
            >
              <p
                style={{
                  color: '#8b5f8d',
                  fontSize: '16px',
                  margin: 0,
                  fontWeight: '500'
                }}
              >
                ¿No encuentras tu respuesta?{' '}
                <a
                  href="/contacto"
                  style={{
                    color: '#4a90e2',
                    textDecoration: 'none',
                    fontWeight: '600',
                    borderBottom: '2px solid #ff69b4'
                  }}
                >
                  Contáctanos directamente
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* FOOTER con SocialLinks */}
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
</a>    </div>
  );
}
