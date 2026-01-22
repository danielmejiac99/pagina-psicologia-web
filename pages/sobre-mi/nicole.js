// pages/sobre-mi/nicole.js
import Link from 'next/link';
import { useState } from 'react';
import HeroHeader from '../../Components/HeroHeader';
import SocialLinks from '../../Components/SocialLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export default function NicolePage() {

    const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div>
      
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
      <div className="hero-desktop">
  <HeroHeader
    image="/Servicios.png"
    height="100vh"
    style={{ marginTop: '80px' }}
  />
</div>


            {/* BIOGRAFÍA DE NICOLE */}
      <section style={{
        padding: '80px 40px 80px',
        background: 'linear-gradient(135deg, #fdf6f8, #f0f7ff)',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
          alignItems: 'flex-start'
        }}>
          {/* Columna izquierda – Texto */}
          <div style={{ flex: '1 1 360px', minWidth: '280px' }}>
            <h3 style={{
  fontSize: '20px',
  fontWeight: '600',
  color: '#2b6cb0',
  fontFamily: '"Poppins", sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  marginBottom: '10px'
}}>
  Te contare sobre mi
</h3>

<h1
  style={{
    fontSize: '40px',
    fontWeight: '400',
    fontFamily: '"Playfair Display", serif',
    lineHeight: '1.3',
    marginBottom: '6px',
    background: 'linear-gradient(45deg, #3a28dbff, #c72ccfff)',
    backgroundSize: '200% 200%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: '#2c3e50',  /* ← FALTAVA ESTO: color de respaldo */
    backgroundPosition: '100% 0',
    transition: 'all 0.4s ease'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundPosition = '0 100%';
    e.currentTarget.style.transform = 'scale(1.03)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundPosition = '100% 0';
    e.currentTarget.style.transform = 'scale(1)';
  }}
>
  Nicole Valentina Amaya Anaya
</h1>

            <h2 style={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#8b5f8d',
              marginBottom: '4px'
            }}>
              Magíster en Clínica de la Infancia y la Juventud
            </h2>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#8b5f8d',
              marginBottom: '22px'
            }}>
               Maestría (C) en Psicología de la Salud
            </h2>

            <p style={{
              fontSize: '20px',
              color: '#555',
              lineHeight: '1.7',
              marginBottom: '14px'
            }}>
              Creo profundamente que todos merecemos un espacio donde podamos mirar lo que sentimos con
              honestidad y construir nuevas formas de habitar la vida. Desde esa convicción, mi práctica
              se sostiene en una mirada psicoanalítica que reconoce la importancia de la palabra, la historia
              y aquello que cada persona guarda en su mundo interno. Acompaño desde la escucha, el análisis
              y el respeto por el ritmo singular de cada sujeto, integrando también herramientas cognitivas
              y actualizaciones clínicas que enriquecen mi práctica.
            </p>

            <p style={{
              fontSize: '20px',
              color: '#555',
              lineHeight: '1.7',
              marginBottom: '14px'
            }}>
              Mi experiencia se ha formado en escenarios hospitalarios, educativos y en clínica independiente,
              acompañando procesos emocionales, de adaptación al tratamiento y situaciones que afectan
              el aprendizaje y la vida cotidiana. Estos lugares me han enseñado que el bienestar se construye
              en distintos contextos y que una presencia profesional y humana puede abrir caminos tanto en
              la consulta, como en la escuela y en los momentos más sensibles de la salud.
            </p>

            <p style={{
              fontSize: '20px',
              color: '#555',
              lineHeight: '1.7',
              marginBottom: '14px'
            }}>
              Acompaño a infancias, juventudes, adultos y familias en temas como dificultades en la salud mental,
              manejo emocional y desarrollo personal, así como en los ciclos esenciales de la vida y en las
              relaciones familiares e interpersonales que atraviesan nuestra historia. Me inspira crear un espacio
              cálido, cercano y empático donde cada persona pueda encontrar un lugar seguro para explorar lo que
              siente, comprender lo que le ocurre y transformar aquello que le duele.
            </p>

            <p style={{
              fontSize: '20px',
              color: '#555',
              lineHeight: '1.7',
              marginBottom: '22px'
            }}>
              Sostengo la importancia de integrar la escucha profunda con recursos creativos como la escritura,
              el dibujo y el arte, permitiendo que aquello difícil de nombrar encuentre formas amables de
              expresarse. Mi compromiso es brindar un acompañamiento sensible, ético y profesional que acompañe
              a cada consultante en su propio proceso.
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
                Agenda una sesion con Nicole
              </button>
            </Link>          </div>

          {/* Columna derecha – Imágenes repartidas verticalmente */}
{/* Columna imágenes */}
<div
  className="nicole-images-column"
  style={{
    flex: '1 1 250px',
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }}
>

  {/* Imagen superior */}
  <div
    className="nicole-photo nicole-photo-1"
    style={{
      width: '100%',
      height: '480px',  // más alta
      borderRadius: '22px',
      overflow: 'hidden',
      boxShadow: '0 16px 32px rgba(139,95,141,0.25)',
      background: 'linear-gradient(135deg, #e6f3ff, #fdf6f8)',
      transform: 'translateY(30px)',
      opacity: 0,
      transition: 'transform 0.7s ease, opacity 0.7s ease'
    }}
  >
    <img
      src="/IMG_2016.jpg"   // tu imagen real
      alt="Nicole en consulta"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
  </div>

  {/* Espaciador invisible para controlar distribución */}
  <div style={{ height: '40px', flexShrink: 0 }}></div>

  {/* Imagen inferior */}
  <div
    className="nicole-photo nicole-photo-2"
    style={{
      width: '100%',
      height: '520px',  // más baja para balancear
      borderRadius: '22px',
      overflow: 'hidden',
      boxShadow: '0 16px 32px rgba(139,95,141,0.25)',
      background: 'linear-gradient(135deg, #e6f3ff, #fdf6f8)',
      transform: 'translateY(30px)',
      opacity: 0,
      transition: 'transform 0.7s ease 0.2s, opacity 0.7s ease 0.2s'
    }}
  >
    <img
      src="/IMG_2021.JPG"   // tu imagen real
      alt="Nicole en espacio terapéutico"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
  </div>
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
                  <strong>Av 5c Nte # 23D-33, Barrio San Vicente, Cali.</strong>
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
          </div>
        </div>
      </section>

       {/* SECCIÓN CENTRADA COMPLETA */}
<section
  style={{
    padding: '50px 40px',
    background: 'linear-gradient(135deg, #fdf6f8 0%, #f0f7ff 50%, #fdf6f8 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  {/* Decoraciones de fondo */}
  <div
    style={{
      position: 'absolute',
      top: '10%',
      left: '5%',
      width: '200px',
      height: '200px',
      background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.08), rgba(74, 144, 226, 0.08))',
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
      background: 'linear-gradient(135deg, rgba(139, 95, 141, 0.06), rgba(255, 105, 180, 0.06))',
      borderRadius: '50%',
      filter: 'blur(15px)'
    }}
  ></div>

  <div
    style={{
      maxWidth: '700px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    {/* Título con icono - CENTRADO */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 249, 250, 0.95))',
        padding: '25px 45px',
        borderRadius: '50px',
        boxShadow: '0 12px 35px rgba(139, 95, 141, 0.12)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        marginBottom: '40px'
      }}
    >
      <div
        style={{
          width: '65px',
          height: '65px',
          background: 'linear-gradient(135deg, #ff69b4, #4a90e2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          color: 'white',
          boxShadow: '0 6px 20px rgba(255, 105, 180, 0.35)'
        }}
      >
        ❓
      </div>
      <h3
        style={{
          fontSize: '22px',
          fontWeight: '300',
          color: '#8b5f8d',
          fontFamily: '"Playfair Display", serif',
          margin: 0,
          background: 'linear-gradient(135deg, #8b5f8d, #4a90e2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center'
        }}
      >
        ¿No estás seguro qué terapia necesitas?
      </h3>
    </div>
    {/* Contenido */}
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(248, 249, 250, 0.97))',
        borderRadius: '25px',
        boxShadow: '0 25px 55px rgba(139, 95, 141, 0.18)',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.85)',
        position: 'relative'
      }}
    >
      {/* Borde superior decorativo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #ff69b4, #4a90e2, #8b5f8d)'
        }}
      />

      <div
        style={{
          padding: '55px 50px',
          textAlign: 'center',
          fontFamily: '"Inter", "Segoe UI", -apple-system, sans-serif',
          lineHeight: '1.7',
          letterSpacing: '0.4px'
        }}
      >
        <p
          style={{
            fontSize: '20px',
            color: '#555',
            marginBottom: '35px',
            fontWeight: '400'
          }}
        >
          Agenda una <strong> sesión de evaluación inicial</strong> y juntos encontraremos el mejor 
          enfoque para ti. Es el primer paso hacia el cambio que buscas.
        </p>

        <Link href="/contacto">
          <button
            style={{
              background: 'linear-gradient(135deg, #ff69b4, #4a90e2)',
              color: 'white',
              border: 'none',
              borderRadius: '35px',
              padding: '18px 45px',
              fontWeight: 'bold',
              fontSize: '17px',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(255, 105, 180, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              letterSpacing: '0.5px',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 12px 35px rgba(255, 105, 180, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 105, 180, 0.4)';
            }}
          >
            Comienza tu proceso hoy
          </button>
        </Link>
        
      </div>
      
    </div>
    <p style={{
  fontSize: '20px',
  color: '#555',
  marginBottom: '25px',  /* ← más espacio antes del botón */
  fontWeight: '400',
  fontStyle: 'italic'
}}>
  Tu primer paso hacia el bienestar comienza con una conversación
</p>
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
