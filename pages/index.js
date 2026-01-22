import PreguntasFrecuentes from "../Components/PreguntasFrecuentes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel, faBuilding, faGlobe } from "@fortawesome/free-solid-svg-icons";
import HeroHeader from '../Components/HeroHeader';
import { faInstagram, faFacebookF, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // ✅ ESTADO UNIFICADO: Usaremos este nombre para evitar el error "menuOpen is not defined"
    const [menuOpen, setMenuOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Estado para el hover del mapa (Dinámico)
  const [mapHover, setMapHover] = useState(false);


  const typingPhrases = [
    "Reconecta contigo antes de seguir adelante",
    "Tu bienestar emocional merece prioridad",
    "Sanar también es avanzar",
    "Confía en tu proceso, no estás sola",
    "La mente también necesita cuidados",
    "Tu historia importa, tu salud también",
    "Escucha lo que tu cuerpo y mente intentan decirte",
    "Tu paz mental es una meta alcanzable",
    "Transforma el dolor en fortaleza con apoyo psicológico",
  ];

  // Crear la secuencia dinámicamente desde el array
  const typingSequence = typingPhrases.flatMap((phrase) => [phrase, 2000]);

  return (
   <div className="page-home">
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

/* ================= CONTACT GRID – MOBILE ================= */
@media (max-width: 900px) {

  /* Contenedor principal */
  .contact-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 25px !important;
  }

  /* Columnas internas */
  .contact-grid > div {
    width: 100% !important;
  }

  /* Tarjetas */
  .contact-grid > div > div {
    min-height: auto !important;
  }

  /* Mapa */
  .contact-grid iframe {
    width: 100% !important;
    height: 300px !important;
    min-height: 300px !important;
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


      {/* SECCIÓN 1: FONDO BOLITAS BLANCO */}
      <section
        style={{
          padding: "10px 40px",
          backgroundColor: "#ffffff",
          // Efecto de bolitas sutiles azules sobre fondo blanco
          backgroundImage: "radial-gradient(#dbeafe 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <div
          className="responsive-flex-container"
          style={{
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {/* Lado izquierdo - Texto */}
          <div
            className="responsive-col"
            style={{ flex: 1, minWidth: "300px" }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 400,
                color: "#1a202c",
                lineHeight: 1.2,
                marginBottom: "30px",
                fontFamily: "Playfair Display, serif",
              }}
            >
              Tu proceso tiene su{" "}
              <span style={{ fontStyle: "italic", color: "#4a90e2" }}>
                propio ritmo
              </span>
              <br />
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                  color: "#718096",
                  display: "block",
                  marginTop: "10px",
                }}
              >
                con un enfoque en la escucha y la transformación
              </span>
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontSize: "17px",
                color: "#4a5568",
                lineHeight: 1.8,
              }}
            >
              <p>
                A lo largo de nuestra práctica clínica, hemos aprendido que el
                proceso terapéutico no se trata de ofrecer respuestas rápidas,
                sino de crear un espacio donde las preguntas puedan ser habitadas
                con cuidado y honestidad. El cambio emocional ocurre cuando la
                persona se permite mirar su historia sin juicio y con mayor
                conciencia.
              </p>
              <p>
                Otra enseñanza fundamental es que la escucha tiene un poder
                transformador. Ser escuchado de manera genuina, sin prisa ni
                interpretaciones apresuradas, permite que el malestar encuentre
                palabras y que aquello que parecía confuso comience a ordenarse.
                La palabra, cuando es acogida, puede aliviar, resignificar y
                abrir nuevos caminos.
              </p>
              <p>
                Hemos comprendido también que cada proceso tiene su propio ritmo.
                No todas las transformaciones son inmediatas ni lineales, y
                respetar los tiempos de cada persona es parte esencial del cuidado
                terapéutico. Forzar el cambio suele generar resistencia;
                acompañarlo con paciencia y presencia permite que sea más
                profundo y duradero.
              </p>
              <p>
                Finalmente, reconocemos que la conciencia personal es una de las
                herramientas más potentes para el bienestar emocional. Comprender
                lo que sentimos, por qué lo sentimos y cómo nos vinculamos con los
                demás nos brinda mayor libertad para elegir cómo queremos habitar
                nuestra vida.
              </p>
            </div>           
          </div>

          {/* Lado derecho - Imagen (Con diseño mejorado) */}
          <div
            className="responsive-col"
            style={{
              flex: 1,
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              {/* Marco Decorativo */}
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-15px",
                  width: "100%",
                  height: "100%",
                  border: "2px solid #e2e8f0",
                  borderRadius: "25px",
                  zIndex: 0,
                  backgroundColor: "white", // Fondo blanco tras la imagen
                }}
              />
              <img
                src="\IMG_6202.jpg"
                alt="Espacio seguro de psicología"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  borderRadius: "25px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  position: "relative",
                  zIndex: 1,
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: EXPERIENCIAS (FONDO BOLITAS AZUL CLARO) */}
      <section
        style={{
          padding: "50px 40px",
          backgroundColor: "#f0f7ff",
          // Efecto de bolitas un tono más oscuro sobre fondo azul claro
          backgroundImage: "radial-gradient(#bfdbfe 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        {/* Usamos reverse-on-desktop para invertir el orden visual en PC */}
        <div
          className="responsive-flex-container reverse-on-desktop"
          style={{
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {/* Lado Texto (Aparecerá a la DERECHA en PC) */}
          <div
            className="responsive-col"
            style={{ flex: 1, minWidth: "300px", padding: "10px" }}
          >
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 400,
                color: "#1a202c",
                marginBottom: "25px",
                fontFamily: "Playfair Display, serif",
              }}
            >
              Experiencias
            </h2>
            <div
              style={{
                borderLeft: "3px solid #4a90e2",
                paddingLeft: "30px",
                marginBottom: "30px",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  color: "#4a5568",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Hay momentos en los que la vida nos invita a detenernos y mirar
                hacia dentro con más honestidad y cuidado. Desde esa necesidad
                humana de comprender lo que sentimos y encontrar nuevas maneras de
                habitarnos, surge el sentido de nuestro trabajo clínico. No
                entendemos la terapia solo como un alivio del sufrimiento, sino
                como un camino que permite sostener, cuidar y expandir los
                recursos que ya viven en cada persona.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  color: "#4a5568",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Buscamos que la salud mental pueda mirarse también desde la
                capacidad, la resiliencia y la posibilidad de florecer. A través
                de los procesos terapéuticos, acompañamos un ejercicio de
                comprensión y transformación, reconociendo que cada historia está
                hecha de experiencias, vínculos y memorias que dejan huella.
                Acercarse a estas vivencias desde la reflexión y el
                autoconocimiento abre la puerta a nuevos significados, permitiendo
                reescribir el pasado y construir formas más auténticas y
                coherentes de ser.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  color: "#4a5568",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Nuestro trabajo se orienta a acompañar procesos emocionales y
                relacionales donde cada persona pueda encontrarse con su historia,
                fortalecer sus vínculos y recuperar los aspectos vitales que le
                permiten habitar su presente de manera más consciente y libre.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  color: "#4a5568",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Así, más que aliviar el malestar, buscamos cultivar conciencia,
                integrar lo vivido y acompañar la evolución humana en su totalidad
                (cuerpo, mente, historia y vínculo).
              </p>
            </div>
            <p
              style={{
                fontSize: "18px",
                color: "#2d3748",
                fontStyle: "italic",
                fontWeight: 500,
                marginTop: "20px",
              }}
            >
              "A veces, el mayor acto de valentía no es cambiar, sino atreverse a
              mirar lo que duele con honestidad. Cuando una emoción es
              reconocida, deja de gobernar en silencio y se convierte en una
              posibilidad de comprensión."
            </p>
            <Link href="/servicios">
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
                Comienza tu camino
              </button>
            </Link>
          </div>

          {/* Lado Imagen (Aparecerá a la IZQUIERDA en PC) */}
          <div
            className="responsive-col"
            style={{
              flex: 1,
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "rgba(66, 153, 225, 0.1)",
                  zIndex: 0,
                }}
              />
              <img
                src="\IMG_3382.jpg"
                alt="Espacio terapéutico"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  borderRadius: "25px 0 25px 0", // Forma moderna
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  position: "relative",
                  zIndex: 1,
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PREGUNTAS FRECUENTES (INTACTO PERO LIMPIO) */}
      <section
        style={{
          padding: "50px 40px",
          background: "linear-gradient(135deg, #fdf6f8 0%, #f0f7ff 50%, #fdf6f8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decoración de fondo */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "200px",
            height: "200px",
            background: "rgba(255, 105, 180, 0.05)",
            borderRadius: "50%",
            filter: "blur(20px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "8%",
            width: "150px",
            height: "150px",
            background: "rgba(74, 144, 226, 0.05)",
            borderRadius: "50%",
            filter: "blur(15px)",
          }}
        />

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "15px",
                background: "rgba(255,255,255,0.8)",
                padding: "15px 30px",
                borderRadius: "50px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                backdropFilter: "blur(5px)",
              }}
            >
              <span style={{ fontSize: "24px" }}>💡</span>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 400,
                  color: "#2d3748",
                  fontFamily: "Playfair Display, serif",
                  margin: 0,
                }}
              >
                Preguntas Frecuentes
              </h2>
            </div>
            <p
              style={{
                fontSize: "16px",
                color: "#718096",
                marginTop: "20px",
                fontStyle: "italic",
              }}
            >
              Encuentra respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "25px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.8)",
            }}
          >
            <div style={{ padding: "40px" }}>
              <PreguntasFrecuentes categoria="preguntas-index" />
            </div>
            <div
              style={{
                padding: "20px",
                background: "#f7fafc",
                textAlign: "center",
                borderTop: "1px solid #edf2f7",
              }}
            >
              <p style={{ margin: 0, color: "#4a5568" }}>
                ¿No encuentras tu respuesta?{" "}
                <a href="/contacto" style={{ color: "#4a90e2", fontWeight: 600 }}>
                  Contáctanos
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN MAPA Y DIRECCIÓN DINÁMICO Y MODERNO */}
      <div style={{ padding: "60px 40px", backgroundColor: "#fff" }}>
        <div
          className="contact-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "30px",
            alignItems: "stretch",
          }}
        >
         {/* Columna Izquierda: Tarjetas de Información (DISEÑO MEJORADO) */}
<div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
  
  {/* Tarjeta Dirección */}
  <div
    style={{
      flex: 1,
      background: "linear-gradient(135deg, #09078a56, #449ef13a)",
      borderRadius: "20px",
      padding: "30px",
      boxShadow: "0 10px 25px rgba(148, 163, 184, 0.1)",
      border: "1px solid rgba(226, 232, 240, 0.8)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      minHeight: "200px"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 15px 35px rgba(148, 163, 184, 0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 10px 25px rgba(148, 163, 184, 0.1)";
    }}
  >
    {/* Icono en círculo */}
    <div
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#87a0f169",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
        color: "#4a90e2",
        fontSize: "24px",
        boxShadow: "0 4px 10px rgba(74, 144, 226, 0.15)"
      }}
    >
      <FontAwesomeIcon icon={faBuilding} />
    </div>

    <h3
      style={{
        color: "#2c3e50",
        fontSize: "20px",
        margin: "0 0 10px 0",
        fontWeight: 600,
        fontFamily: '"Playfair Display", serif' // Tipografía elegante
      }}
    >
      Visítanos
    </h3>

    <p
      style={{
        color: "#64748b",
        margin: 0,
        fontSize: "15px",
        lineHeight: 1.6,
        fontFamily: '"Poppins", sans-serif'
      }}
    >
      📍Horizonte Psicológico , Av 5c Nte # 23D-33
      <br />
      <span style={{ color: "#4a90e2", fontWeight: 500 }}></span> San Vicente, Cali
    </p>
  </div>

  {/* Tarjeta Teléfono */}
  <div
    style={{
      flex: 1,
      background: "linear-gradient(135deg, #8f0d8f44, #d631ad6e)",
      borderRadius: "20px",
      padding: "30px",
      boxShadow: "0 10px 25px rgba(148, 163, 184, 0.1)",
      border: "1px solid rgba(226, 232, 240, 0.8)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      minHeight: "200px"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 15px 35px rgba(148, 163, 184, 0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 10px 25px rgba(148, 163, 184, 0.1)";
    }}
  >
    {/* Icono en círculo */}
    <div
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#8b346036",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
        color: "#ff69b4", // Rosado para diferenciar
        fontSize: "24px",
        boxShadow: "0 4px 10px rgba(255, 105, 180, 0.15)"
      }}
    >
      {/* Usamos un ícono de FontAwesome en lugar del emoji si quieres, o el emoji limpio */}
       <span style={{ fontSize: "28px" }}>📞</span>
    </div>

    <h3
      style={{
        color: "#2c3e50",
        fontSize: "20px",
        margin: "0 0 10px 0",
        fontWeight: 600,
        fontFamily: '"Playfair Display", serif'
      }}
    >
      Hablemos
    </h3>

    <p
      style={{
        color: "#64748b",
        margin: 0,
        fontSize: "15px",
        lineHeight: 1.6,
        fontFamily: '"Poppins", sans-serif'
      }}
    >
      Estamos disponibles para escucharte
    </p>
    
    <a 
      href="https://wa.me/message/JK6755O724B4K1" 
      target="_blank"
      rel="noopener noreferrer"
      style={{
        marginTop: "10px",
        color: "#2c3e50",
        fontSize: "18px",
        fontWeight: "700",
        textDecoration: "none",
        borderBottom: "2px solid #ff69b4",
        paddingBottom: "2px",
        transition: "color 0.3s ease"
      }}
      onMouseEnter={(e) => e.target.style.color = "#ff69b4"}
      onMouseLeave={(e) => e.target.style.color = "#2c3e50"}
    >
      (+57) 315 652 4077
    </a>
  </div>
</div>


          {/* Columna Derecha: Mapa + Apartado Políticas */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* NUEVO APARTADO: Conoce nuestras políticas */}
            <Link 
              href="/politicas" 
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #4a90e2, #8b5f8d)",
                  borderRadius: "15px",
                  padding: "15px 25px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 5px 15px rgba(74,144,226,0.3)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <FontAwesomeIcon icon={faGavel} style={{ fontSize: "20px" }} />
                  <span style={{ fontWeight: 600, fontSize: "16px" }}>
                    Conoce nuestras políticas de atención
                  </span>
                </div>
                <span style={{ fontSize: "20px" }}>→</span>
              </div>
            </Link>

            {/* Mapa Interactivo */}
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                position: "relative",
                flex: 1, // Ocupa el resto del espacio vertical
                minHeight: "400px",
              }}
              onMouseEnter={() => setMapHover(true)}
              onMouseLeave={() => setMapHover(false)}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.522808563775!2d-76.52938550000002!3d3.4654142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a71eaaf3b5d5%3A0xb7a7933df8627651!2sHorizonte%20Psicol%C3%B3gico!5e0!3m2!1sen!2sco!4v1768693621591!5m2!1sen!2sco"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{
                  border: "none",
                  height: "100%",
                  minHeight: "470px",
                  filter: mapHover ? "grayscale(0%)" : "grayscale(100%)", // Efecto Dinámico Gris a Color
                  transition: "filter 0.5s ease",
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              {/* Overlay de instrucción */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  background: "white",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  opacity: mapHover ? 0 : 1,
                  transition: "opacity 0.3s",
                  pointerEvents: "none",
                }}
              >
                Interactúa con el mapa
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{
          background: "linear-gradient(135deg, #fdf6f8, #f0f7ff)",
          color: "#2c3e50",
          padding: "50px 20px 30px",
          marginTop: "0px",
          borderTop: "3px solid #ff69b4",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
           {/* Columna 1 */}
          <div
            style={{
              flex: '1',
              minWidth: '250px'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px'
              }}
            >
              
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
              <p
                style={{
                  fontSize: '14px',
                  color: '#666',
                  marginTop: '10px',
                  fontStyle: 'italic'
                }}
              >
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
