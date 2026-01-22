import Link from 'next/link';
import HeroHeader from '../Components/HeroHeader';
import { faInstagram, faFacebookF, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart, faSearch, faChartLine, faGlobe, faEye, faUserTie, 
  faLightbulb, faTrophy, faBullseye
} from '@fortawesome/free-solid-svg-icons';

export default function SobreMi() {
  return (
    <div>

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
      
      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: "rgba(240, 232, 233, 0.15)",
          padding: "10px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              gap: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.1,
              }}
            >
              {/* Logo de texto */}
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.1,
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#2c3e50",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Horizonte
                </span>
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: 400,
                    color: "#8b5f8d",
                    fontFamily: "Great Vibes, cursive",
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

        <nav style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "30px",
              margin: 0,
              padding: 0,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <li style={{ fontSize: "18px", fontWeight: 400 }}>
              <Link
                href="/sobre-mi"
                style={{
                  color: "#2c3e50",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li style={{ fontSize: "18px", fontWeight: 400 }}>
              <Link
                href="/servicios"
                style={{
                  color: "#2c3e50",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Servicios
              </Link>
            </li>
  
            <li style={{ fontSize: "18px", fontWeight: 400 }}>
              <Link
                href="/contacto"
                style={{
                  color: "#2c3e50",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Contacto
              </Link>
            </li>

          </ul>
        </nav>
      </header>

      {/* HERO compartido con la misma imagen */}
      <HeroHeader image="imagen3.png" height="100vh" />

      {/* SECCIÓN 1: Política de Atención - CORREGIDO GRID */}
      <section
        style={{
          padding: "80px 40px",
          background: "linear-gradient(135deg, #f0f7ff, #fdf6f8)",
        }}
      >
        <div
          style={{
            maxWidth: "1300px", // Aumenté un poco el ancho para que quepan mejor las tarjetas
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Columna izquierda: texto principal política */}
          <div style={{ flex: "2 1 460px", minWidth: "300px" }}>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: 400,
                color: "#2c3e50",
                fontFamily: "Playfair Display, serif",
                marginBottom: "10px",
              }}
            >
              Política de Atención, Consentimiento Informado y Condiciones del Servicio
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "30px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              En Horizonte Psicológico brindamos un acompañamiento terapéutico
              basado en la ética, el respeto por la singularidad de cada persona
              y el cuidado del vínculo terapéutico.
            </p>

            {/* AQUI ESTÁ EL CAMBIO: GRID PARA LAS TARJETAS */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Se acomodan solas
              gap: "20px",
              marginBottom: "30px"
            }}>
              
              {/* 1. Consentimiento informado */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  boxShadow: "0 8px 22px rgba(44,62,80,0.08)",
                  border: "1px solid rgba(74,144,226,0.18)",
                  height: "100%", // Para que todas tengan la misma altura visual
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#2b6cb0",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  1. Consentimiento informado
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#4a4a4a",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  El acompañamiento psicológico es voluntario. Antes de iniciar, se brinda información clara sobre el enfoque, objetivos y condiciones. La información es confidencial y se protege bajo el secreto profesional, salvo excepciones legales.
                </p>
              </div>

              {/* 2. Derechos */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  boxShadow: "0 8px 22px rgba(44,62,80,0.08)",
                  border: "1px solid rgba(139,95,141,0.15)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#8b5f8d",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  2. Derechos del consultante
                </h3>
                <ul
                  style={{
                    paddingLeft: "18px",
                    margin: 0,
                    fontSize: "14px",
                    color: "#4a4a4a",
                    lineHeight: 1.6,
                  }}
                >
                  <li>Recibir atención respetuosa y confidencial.</li>
                  <li>Conocer objetivos y alcances.</li>
                  <li>Formular preguntas sobre su proceso.</li>
                  <li>Retirarse voluntariamente cuando desee.</li>
                  <li>Solicitar información de su historia clínica.</li>
                </ul>
              </div>

              {/* 3. Deberes */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  boxShadow: "0 8px 22px rgba(44,62,80,0.08)",
                  border: "1px solid rgba(255,105,180,0.18)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#c05674",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  3. Deberes del consultante
                </h3>
                <ul
                  style={{
                    paddingLeft: "18px",
                    margin: 0,
                    fontSize: "14px",
                    color: "#4a4a4a",
                    lineHeight: 1.6,
                  }}
                >
                  <li>Asistir puntualmente.</li>
                  <li>Avisar con 24h de anticipación para cancelar.</li>
                  <li>Cumplir los compromisos económicos.</li>
                  <li>Participar activamente en el proceso.</li>
                </ul>
              </div>

              {/* 4. Asistencia */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  boxShadow: "0 8px 22px rgba(44,62,80,0.08)",
                  border: "1px solid rgba(74,144,226,0.18)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#2b6cb0",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  4. Asistencia
                </h3>
                <ul
                  style={{
                    paddingLeft: "18px",
                    margin: 0,
                    fontSize: "14px",
                    color: "#4a4a4a",
                    lineHeight: 1.6,
                  }}
                >
                  <li><strong>Individual:</strong> Solo el consultante.</li>
                  <li><strong>Pareja:</strong> Participación conjunta.</li>
                  <li><strong>Niños/Adolescentes:</strong> Requiere acompañante responsable (padres/cuidadores) para intervenciones según necesidad.</li>
                </ul>
              </div>

              {/* 5. Económicas */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  boxShadow: "0 8px 22px rgba(44,62,80,0.08)",
                  border: "1px solid rgba(139,95,141,0.15)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#8b5f8d",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  5. Condiciones económicas
                </h3>
                <p style={{ fontSize: "14px", color: "#4a4a4a", lineHeight: 1.6, margin: 0 }}>
                   El valor de las sesiones se informa antes de iniciar. Las sesiones o planes deben ser pagados de forma anticipada. Las tarifas son las vigentes al momento de contratar.
                </p>
              </div>

              {/* 6. Cancelaciones */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  boxShadow: "0 8px 22px rgba(44,62,80,0.08)",
                  border: "1px solid rgba(255,105,180,0.18)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#c05674",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  6. Cancelaciones
                </h3>
                <p style={{ fontSize: "14px", color: "#4a4a4a", lineHeight: 1.6, margin: 0 }}>
                  Cancelar o reprogramar requiere <strong>mínimo 24 horas</strong> de aviso. Sin este aviso, la sesión podrá ser cobrada. Casos excepcionales se revisan puntualmente.
                </p>
              </div>

              {/* 7. Principios */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "20px 22px",
                  boxShadow: "0 8px 22px rgba(44,62,80,0.08)",
                  border: "1px solid rgba(74,144,226,0.18)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#2b6cb0",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  7. Principios
                </h3>
                <p style={{ fontSize: "14px", color: "#4a4a4a", lineHeight: 1.6, margin: 0 }}>
                  Cada proceso es singular. Nos comprometemos a ofrecer un espacio seguro, ético y humano, orientado al bienestar y la transformación personal.
                </p>
              </div>

            </div>
   
            
          </div>
          

          {/* Columna derecha: resumen visual / tarjetas */}
          <div style={{ flex: "1 1 320px", minWidth: "280px" }}>
            <div
              style={{
                position: "sticky", // Hace que esta columna te siga al bajar
                top: "100px"
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #ffffff, #e6f3ff)",
                  borderRadius: "22px",
                  padding: "24px 22px",
                  boxShadow: "0 12px 30px rgba(74,144,226,0.25)",
                  border: "1px solid rgba(74,144,226,0.3)",
                  marginBottom: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#2b6cb0",
                    marginBottom: "12px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  En palabras sencillas
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    fontSize: "14px",
                    color: "#2c3e50",
                    lineHeight: 1.8,
                  }}
                >
                  <li style={{marginBottom: '8px'}}>✨ Tu proceso es voluntario.</li>
                  <li style={{marginBottom: '8px'}}>🔒 Tu información es confidencial.</li>
                  <li style={{marginBottom: '8px'}}>📅 Reglas claras desde el inicio.</li>
                  <li>❤️ Espacio humano y respetuoso.</li>
                </ul>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg, #fff7fb, #fde9f2)",
                  borderRadius: "22px",
                  padding: "20px 20px",
                  boxShadow: "0 10px 24px rgba(192,86,116,0.18)",
                  border: "1px solid rgba(255,105,180,0.3)",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#c05674",
                    marginBottom: "6px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  ¿Tienes dudas?
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4a4a4a",
                    lineHeight: 1.7,
                    marginBottom: "10px",
                  }}
                >
                  Si deseas conversar sobre las condiciones, escríbenos.
                </p>
                <Link href="/contacto" style={{ textDecoration: "none" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#c05674",
                      cursor: "pointer",
                    }}
                  >
                    Ir a contacto
                    <span>→</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Servicios para empresas, instituciones y grupos */}
      <section
        style={{
          padding: "80px 40px",
          background: "linear-gradient(135deg, #fdf6f8, #f0f7ff)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 400,
                color: "#8b5f8d",
                fontFamily: "Playfair Display, serif",
                marginBottom: "8px",
              }}
            >
              Servicios para empresas, instituciones y grupos
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              Ofrecemos acompañamiento psicológico y psicoeducativo dirigido a
              empresas, instituciones educativas, organizaciones y grupos que
              buscan fortalecer el bienestar emocional, la comunicación y la
              salud mental en sus entornos de trabajo o comunidad.
            </p>
          </div>

          {/* Layout en dos columnas */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Columna 1 */}
            <div>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "22px 22px 18px",
                  boxShadow: "0 10px 26px rgba(139,95,141,0.14)",
                  border: "1px solid rgba(139,95,141,0.18)",
                  marginBottom: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#8b5f8d",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Diseñamos cada experiencia
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#4a4a4a",
                    lineHeight: 1.8,
                    marginBottom: "10px",
                  }}
                >
                  Contamos con una variedad de talleres, charlas e
                  intervenciones grupales, cuyo diseño se construye de manera
                  conjunta con cada organización.
                </p>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg, #ffffff, #e6f3ff)",
                  borderRadius: "20px",
                  padding: "20px 22px",
                  boxShadow: "0 8px 22px rgba(74,144,226,0.18)",
                  border: "1px solid rgba(74,144,226,0.3)",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#2b6cb0",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Temáticas que podemos trabajar
                </h3>
                <ul style={{ paddingLeft: "18px", margin: 0, lineHeight: 1.8, fontSize: "14px", color: "#2c3e50" }}>
                  <li>Educación emocional y autocuidado.</li>
                  <li>Manejo del estrés y regulación emocional.</li>
                  <li>Prevención del burnout.</li>
                  <li>Comunicación asertiva y gestión de conflictos.</li>
                  <li>Trabajo en equipo y liderazgo consciente.</li>
                </ul>
              </div>
            </div>

            {/* Columna 2 */}
            <div>
              <div
                style={{
                  background: "linear-gradient(135deg, #fff7fb, #fde9f2)",
                  borderRadius: "20px",
                  padding: "20px 22px",
                  boxShadow: "0 10px 24px rgba(192,86,116,0.2)",
                  border: "1px solid rgba(255,105,180,0.32)",
                  marginBottom: "18px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#c05674",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Convenios institucionales
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4a4a4a",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  Ofrecemos convenios para que colaboradores o miembros accedan a terapia individual o familiar en condiciones acordadas.
                </p>
              </div>

              <Link href="/contacto" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    marginTop: "4px",
                    padding: "14px 18px",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, #4a90e2, #8b5f8d)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    boxShadow: "0 10px 25px rgba(74,144,226,0.3)",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  <span>
                    ¿Quieres llevar estos procesos a tu organización?
                  </span>
                  <span style={{ fontSize: "18px" }}>→</span>
                </div>
              </Link>
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
                  <strong>📍 Av 5C Norte # 23 DN 33, Barrio San Vicente, Cali.</strong>
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
