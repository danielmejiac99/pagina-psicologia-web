import PreguntasFrecuentes from '../../Components/PreguntasFrecuentes';
import { useState } from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import SocialLinks from '../../Components/SocialLinks';
import HeroHeader from '../../Components/HeroHeader';
import TeamSection from '../../Components/TeamSection';
import { faInstagram, faFacebookF, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function SobreMi() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // ✅ NUEVO: hover controlado para "Nuestro Origen"
  const [origenHovered, setOrigenHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
    <style>{`
/*
   =================== MOBILE ==========================
    */
@media (max-width: 900px) {

  /* ===== MENU ===== */
  .desktop-nav { display: none !important; }
  .mobile-menu-btn { display: block !important; }
  .mobile-menu-overlay { display: flex !important; }

  /* ===== HEADER ===== */
  .responsive-header {
    padding: 10px 20px !important;
  }

  /* ===== HERO ===== */
  .hero-carousel-image {
    display: none !important;
  }

  /* ===== SECCIONES ===== */
  .responsive-section,
  .responsive-section-simple {
    padding: 50px 18px !important;
  }

  /* ===== TITULOS ===== */
  h1 {
    font-size: 30px !important;
    line-height: 1.25 !important;
  }

  h2 {
    font-size: 26px !important;
    line-height: 1.3 !important;
  }

  h3 {
    font-size: 20px !important;
    line-height: 1.35 !important;
  }

  /* ===== TEXTO NORMAL (EL PROBLEMA PRINCIPAL) ===== */
  p,
  li {
    font-size: 15.5px !important;
    line-height: 1.7 !important;
  }

  /* 🔥 FORZAR textos que vienen con inline grandes */
  p[style*="18px"],
  p[style*="20px"],
  p[style*="22px"] {
    font-size: 15.5px !important;
    line-height: 1.7 !important;
  }

  /* ===== STRONG & SPAN DENTRO DE TEXTO ===== */
  p strong,
  p span {
    font-size: 15.5px !important;
  }

  /* ===== CITAS / FRASES DESTACADAS ===== */
  p[style*="italic"],
  blockquote {
    font-size: 15px !important;
    line-height: 1.6 !important;
  }

  /* ===== TARJETAS Y BLOQUES ===== */
  div[style*="padding"] p {
    font-size: 15.5px !important;
  }

  /* ===== BOTONES ===== */
  button {
    font-size: 15px !important;
    padding: 14px 20px !important;
  }

  /* ===== COLUMNAS ===== */
  .responsive-col {
    min-width: 100% !important;
  }

  /* ===== IMÁGENES ===== */
  img {
    max-width: 100% !important;
    height: auto !important;
  }

  /* ===== MAPA ===== */
  iframe {
    min-height: 240px !important;
  }
}

/* 
   =================== DESKTOP =========================
 */
@media (min-width: 901px) {
  .mobile-menu-btn { display: none !important; }
  .mobile-menu-overlay { display: none !important; }
}
`}</style>

      {/* HEADER */}
      <header className="responsive-header" style={{
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
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '15px' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: '1.1'
            }}>

              {/* Logo de texto opción 3 */}
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#2c3e50',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontFamily: '"Poppins", sans-serif'
                }}>
                  Horizonte
                </span>
                <span style={{
                  fontSize: '40px',
                  fontWeight: '400',
                  color: '#8b5f8d',
                  fontFamily: '"Great Vibes", cursive'
                }}>
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

        
        {/* Botón Hamburguesa (Móvil) */}
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

        <nav className="desktop-nav" style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '30px',
            margin: 0,
            padding: 0,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <li style={{ fontSize: '18px', fontWeight: '400' }}>
              <Link href="/sobre-mi" style={{ color: '#2c3e50', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                Sobre Nosotros
              </Link>
            </li>
            <li style={{ fontSize: '18px', fontWeight: '400' }}>
              <Link href="/servicios" style={{ color: '#2c3e50', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                Servicios
              </Link>
            </li>
            <li style={{ fontSize: '18px', fontWeight: '400' }}>
              <Link href="/contacto" style={{ color: '#2c3e50', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                Contacto
              </Link>
            </li>
            
          </ul>
        </nav>
      
      {/* Menú Desplegable Móvil */}
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

      {/* HERO compartido con la misma imagen y letras automáticas */}
      <HeroHeader image="/imagen3.png" height="100vh" />

            {/* Sección Terapia Para Niños - REDISEÑO */}
      <section className="responsive-section"
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          maxWidth: '100vw',
          padding: '80px 40px',
          background: '#fff', // Fondo base blanco para contraste
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Fondo decorativo sutil (mancha orgánica grande) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60vw',
            height: '60vw',
            background: 'radial-gradient(circle, rgba(230, 243, 255, 0.8), rgba(255, 255, 255, 0))',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
         <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '50vw',
            height: '50vw',
            background: 'radial-gradient(circle, rgba(253, 246, 248, 0.9), rgba(255, 255, 255, 0))',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            zIndex: 1,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center', // Centrado verticalmente con la imagen
            gap: '60px', // Más espacio entre texto e imagen
            justifyContent: 'space-between'
          }}
        >
          
          {/* Columna Texto (Izquierda) */}
          <div className="responsive-col" style={{ flex: '1 1 500px' }}>
            <h2 className="responsive-title"
                style={{
                  fontSize: '48px', // Título más grande
                  fontWeight: '400',
                  color: '#8b5f8d',
                  marginBottom: '30px',
                  fontFamily: '"Playfair Display", serif',
                  lineHeight: '1.2',
                  position: 'relative'
                }}
              >
                Terapia de <span style={{ color: '#4a90e2', fontStyle: 'italic' }}>Parejas</span>  <br/>
                
                
                {/* Pequeña línea decorativa bajo el título */}
                <span style={{
                    display: 'block',
                    width: '370px',
                    height: '4px',
                    background: 'linear-gradient(to right, #ff69b4, #4a90e2)',
                    marginTop: '15px',
                    borderRadius: '2px'
                }}></span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.8', fontFamily: '"Poppins", sans-serif' }}>                
                Dirigida a parejas que desean fortalecer su comunicación, resolver tensiones, atravesar crisis o comprender dinámicas que generan malestar.
                Aborda conflictos recurrentes, celos, distanciamiento emocional, dificultades sexuales, rupturas, acuerdos de convivencia, duelo compartido, crianza y procesos de reparación del vínculo.            
                </p>
                <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.8', fontFamily: '"Poppins", sans-serif' }}>
                 El objetivo es comprender lo que le ocurre a la relación, reconocer la historia común y los patrones que se repiten, y construir nuevas formas de escucharse, cuidarse y habitar el vínculo. Se ofrece un acompañamiento seguro, equilibrado y orientado al encuentro.                </p>
            
                <div style={{
                    background: 'rgba(74, 144, 226, 0.08)',
                    padding: '20px 25px',
                    borderRadius: '15px',
                    borderLeft: '5px solid #4a90e2',
                    marginTop: '10px'
                }}>
                    <p style={{ fontSize: '18px', color: '#2c3e50', lineHeight: '1.6', margin: 0, fontStyle: 'italic', fontWeight: '500' }}>
                      "Un punto de encuento para comprender la relación, transformar patrones y reconstruir el vínculo."
                    </p>
                </div>
            </div>
          </div>

          {/* Columna Imagen (Derecha) - MUCHO MÁS GRANDE */}
          <div className="responsive-col" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px', // Ancho máximo aumentado considerablemente
                aspectRatio: '3/4', // Proporción vertical elegante
              }}
            >
                {/* Elemento decorativo detrás de la imagen (marco desplazado) */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '-20px',
                    width: '100%',
                    height: '100%',
                    border: '3px solid #ff69b4',
                    borderRadius: '30px',
                    zIndex: 0,
                    opacity: 0.3
                }}></div>

                 <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '-20px',
                    width: '100%',
                    height: '100%',
                    background: '#e6f3ff',
                    borderRadius: '30px',
                    zIndex: 0,
                    opacity: 0.6
                }}></div>

                {/* Imagen Principal */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                }}>
                     <img 
                        src="/img_2030.PNG" 
                        alt="Terapia Niños" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                        }} 
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                </div>
            </div>
          </div>

        </div>
      </section>

            {/* Sección Salud y Bienestar - SIN IMAGEN (diseño full texto) */}
      <section className="responsive-section"
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          maxWidth: '100vw',
          padding: '50px 40px',
          background: 'linear-gradient(135deg, #fdf6f8 0%, #f8f9ff 50%, #f0f7ff 100%)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Fondo decorativo sutil */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            right: '-5%',
            width: '55vw',
            height: '55vw',
            background: 'radial-gradient(circle, rgba(255, 105, 180, 0.12), transparent)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '10%',
            width: '45vw',
            height: '45vw',
            background: 'radial-gradient(circle, rgba(74, 144, 226, 0.1), transparent)',
            borderRadius: '50%',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            zIndex: 1,
            textAlign: 'center',
            position: 'relative'
          }}
        >
          
          {/* Título principal */}
          <h2 className="responsive-title"
            style={{
              fontSize: '52px',
              fontWeight: '300',
              color: '#8b5f8d',
              marginBottom: '35px',
              fontFamily: '"Playfair Display", serif',
              lineHeight: '1.15',
              position: 'relative',
              letterSpacing: '-0.02em'
            }}
          >
            Familia y Crianza <br/>
            <span style={{ 
              color: '#4a90e2', 
              fontStyle: 'italic', 
              fontWeight: '500',
              fontSize: '56px'
            }}>
              
            </span>
            
            <div style={{
                display: 'inline-block',
                width: '450px',
                height: '5px',
                background: 'linear-gradient(to right, #ff69b4 0%, transparent 70%)',
                marginTop: '25px',
                borderRadius: '3px',
                boxShadow: '0 2px 10px rgba(255, 105, 180, 0.3)'
            }}></div>
          </h2>

          {/* Texto principal - tres columnas visuales */}
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              maxWidth: '750px',
              margin: '0 auto'
            }}
          >
            
            {/* Párrafo 1 */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '28px 32px',
                borderRadius: '24px',
                border: '1px solid rgba(74, 144, 226, 0.15)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)'
              }}
            >
              <p style={{ 
                  fontSize: '20px', 
                  color: '#4a5568', 
                  lineHeight: '1.8', 
                  margin: 0,
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '400'
                }}>
                Este servicio está dirigido a <strong> familias </strong> que desean mejorar la comunicación, acompañar procesos de crianza, resolver tensiones o comprender las necesidades emocionales dentro del hogar.
              </p>
            </div>

            {/* Párrafo 2 */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '28px 32px',
                borderRadius: '24px',
                border: '1px solid rgba(74, 144, 226, 0.15)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)'
              }}
            >
              <p style={{ 
                  fontSize: '20px', 
                  color: '#4a5568', 
                  lineHeight: '1.8', 
                  margin: 0,
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '400'
                }}>
               Aborda dificultades en las relaciones familiares, desafíos de la crianza, límites, pautas de convivencia, acompañamiento a hijos con dificultades emocionales, conflictos entre cuidadores y procesos de transición como separaciones, mudanzas o cambios escolares.
              </p>
            </div>

                {/* Párrafo 3 */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '28px 32px',
                borderRadius: '24px',
                border: '1px solid rgba(74, 144, 226, 0.15)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)'
              }}
            >
              <p style={{ 
                  fontSize: '20px', 
                  color: '#4a5568', 
                  lineHeight: '1.8', 
                  margin: 0,
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '400'
                }}>
               Busca generar conversaciones que permitan comprender lo que ocurre en el sistema familiar, resignificar roles y fortalecer los lazos afectivos. El acompañamiento ofrece un espacio seguro para escucharse, crear acuerdos y construir formas más conscientes y respetuosas de relacionarse como familia.
              </p>
            </div>
            
          </div>

          {/* Botón CTA final */}
          <div style={{ marginTop: '50px' }}>
            <Link href="/contacto" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  background: 'linear-gradient(135deg, #ff69b4, #4a90e2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '18px 45px',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(255, 105, 180, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  position: 'relative',
                  overflow: 'hidden',
                  fontFamily: '"Poppins", sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.02)';
                  e.target.style.boxShadow = '0 20px 45px rgba(255, 105, 180, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 12px 30px rgba(255, 105, 180, 0.3)';
                }}
              >
                Comienza tu proceso de bienestar
                <span style={{ marginLeft: '15px', fontSize: '20px' }}>→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes - Diseño Elegante */}
      <section className="responsive-section-simple" style={{
        padding: '100px 40px',
        background: 'linear-gradient(135deg, #fdf6f8 0%, #f0f7ff 50%, #fdf6f8 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Elementos decorativos de fondo */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.08), rgba(74, 144, 226, 0.08))',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(139, 95, 141, 0.06), rgba(255, 105, 180, 0.06))',
          borderRadius: '50%',
          filter: 'blur(15px)'
        }}></div>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>

          {/* Encabezado con icono */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))',
              padding: '20px 40px',
              borderRadius: '50px',
              boxShadow: '0 10px 30px rgba(139, 95, 141, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #ff69b4, #4a90e2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: 'white',
                boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
              }}>
                ❓
              </div>
              <h2 className="responsive-title-small" style={{
                fontSize: '36px',
                fontWeight: '300',
                color: '#8b5f8d',
                fontFamily: '"Playfair Display", serif',
                margin: 0,
                background: 'linear-gradient(135deg, #8b5f8d, #4a90e2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Preguntas Frecuentes
              </h2>
            </div>
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginTop: '20px',
              fontStyle: 'italic'
            }}>
              Encuentra respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          {/* Contenedor principal de preguntas */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 249, 250, 0.95))',
            borderRadius: '25px',
            boxShadow: '0 20px 50px rgba(139, 95, 141, 0.15)',
            overflow: 'hidden',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            position: 'relative'
          }}>
            
            {/* Efecto de borde sutil */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #ff69b4, #4a90e2, #8b5f8d)'
            }}></div>

                         {/* Contenido de preguntas */}
            <div style={{
              padding: '50px 40px',
              fontFamily: '"Inter", "Segoe UI", -apple-system, sans-serif',
              lineHeight: '1.7',
              letterSpacing: '0.3px' // Un poco más de espacio entre letras
            }}>
              <PreguntasFrecuentes categoria="terapia-pareja" />
            </div>
            
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Merriweather:wght@300;400&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap" rel="stylesheet"></link>

            {/* Pie decorativo */}
            <div style={{
              background: 'linear-gradient(135deg, #fdf6f8, #f0f7ff)',
              padding: '25px',
              textAlign: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)'
            }}>
              <p style={{
                color: '#8b5f8d',
                fontSize: '16px',
                margin: 0,
                fontWeight: '500'
              }}>
                ¿No encuentras tu respuesta?{' '}
                <a href="/contacto" style={{
                  color: '#4a90e2',
                  textDecoration: 'none',
                  fontWeight: '600',
                  borderBottom: '2px solid #ff69b4'
                }}>
                  Contáctanos directamente
                </a>
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Sección: ¿Cómo te puedo acompañar? */}
      <section className="responsive-section-simple" style={{
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
          <div className="responsive-col" style={{ flex: '1 1 340px', minWidth: '280px' }}>
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

            <h2 className="responsive-title-small" style={{
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
          <div className="responsive-col" style={{ flex: '1 1 320px', minWidth: '280px' }}>
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
                  <strong>Av 5C Norte # 23 DN 33, Barrio San Vicente, Cali.</strong>
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
