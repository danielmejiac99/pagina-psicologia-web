import { useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  faInstagram, 
  faFacebookF, 
  faTiktok, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';

export default function Contacto() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsAppClick = (e) => {
    if (e?.preventDefault) e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !message.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Faltan datos',
        text: 'Por favor escribe tu nombre y el mensaje.',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#8b5f8d',
        background: '#ffffff',
      });
      return;
    }

    const mensaje = `Hola, mi nombre es ${name}.${email ? ` Mi correo es ${email}.` : ''}\n\n${message}`;
    const url = `https://wa.me/message/JK6755O724B4K1?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');

    Swal.fire({
      icon: 'success',
      title: 'Listo',
      text: 'Se abrió WhatsApp para enviar tu mensaje.',
      confirmButtonText: 'Perfecto',
      background: '#ffffff',
      iconColor: '#25D366',
      confirmButtonColor: '#25D366',
      timer: 8000,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Estilos responsive + estilos nuevos (solo body) */}
      <style>{`
        @media (max-width: 900px) {
          /* Menu Mobile */
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-menu-overlay { display: flex !important; }

          /* Header */
          .responsive-header { padding: 10px 20px !important; }

          /* Layout */
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-shell { padding: 44px 18px 70px !important; }
          .hero-wrap { padding: 140px 18px 42px !important; }
          .hero-title { font-size: 34px !important; }
          .hero-sub { font-size: 16px !important; }
          .card { padding: 18px !important; }
          .form-card { padding: 20px !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
        }

        /* Nuevos estilos */
        .page-bg {
          background:
            radial-gradient(900px 500px at 12% 12%, rgba(255,105,180,0.16), transparent 60%),
            radial-gradient(900px 500px at 90% 16%, rgba(74,144,226,0.18), transparent 60%),
            radial-gradient(900px 500px at 50% 90%, rgba(139,95,141,0.14), transparent 60%),
            linear-gradient(180deg, #fbf7ff 0%, #f7fbff 45%, #ffffff 100%);
          min-height: 100vh;
        }

        .pill {
          display: inline-flex;
          gap: 10px;
          align-items: center;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(139,95,141,0.18);
          box-shadow: 0 10px 28px rgba(44,62,80,0.06);
          backdrop-filter: blur(8px);
        }

       .field {
  width: 100%;
  padding: 14px 14px;
  border-radius: 14px;
  border: 1.5px solid rgba(44,62,80,0.14);
  background: rgba(255,255,255,0.95);
  outline: none;
  font-size: 15px;
  color: #2c3e50;
  box-sizing: border-box;      /* <-- AÑADIR ESTO */
}

        .field:focus {
          border-color: rgba(74,144,226,0.65);
          box-shadow: 0 0 0 4px rgba(74,144,226,0.12);
          transform: translateY(-1px);
        }

        .btn-primary {
          width: 100%;
          border: none;
          cursor: pointer;
          border-radius: 18px;
          padding: 16px 18px;
          font-weight: 800;
          letter-spacing: 0.3px;
          color: white;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 14px 32px rgba(18,140,126,0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(18,140,126,0.30);
          filter: saturate(1.05);
        }

        .btn-secondary {
          width: 100%;
          border: 1px solid rgba(139,95,141,0.25);
          cursor: pointer;
          border-radius: 16px;
          padding: 14px 16px;
          font-weight: 700;
          color: #2c3e50;
          background: rgba(255,255,255,0.7);
          box-shadow: 0 10px 26px rgba(44,62,80,0.06);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
          
        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(74,144,226,0.35);
        }
      `}</style>

      <div className="page-bg">
        {/* HEADER (NO TOCAR) */}
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

        {/* HERO NUEVO (más editorial) */}
        <section className="hero-wrap" style={{
          padding: '170px 40px 60px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '26px',
            alignItems: 'center'
          }}>
            <div>
              <div className="pill" style={{ marginBottom: '16px' }}>
                <span style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg,#ff69b4,#4a90e2)'
                }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#2c3e50', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Contacto y agenda
                </span>
              </div>

              <h1 className="hero-title" style={{
                fontSize: '52px',
                lineHeight: 1.05,
                margin: 0,
                color: '#1f2d3d',
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600
              }}>
                Un paso pequeño puede cambiar tu semana.
              </h1>

              <p className="hero-sub" style={{
                marginTop: '14px',
                marginBottom: '0px',
                fontSize: '18px',
                lineHeight: 1.7,
                color: '#556270',
                maxWidth: '620px',
                fontFamily: '"Poppins", sans-serif'
              }}>
                Escribe tu mensaje y se enviará directo a WhatsApp para continuar la conversación y agendar tu cita.
              </p>
            </div>

            
          </div>
        </section>

        {/* CUERPO CONTACTO (dos columnas) */}
        <section className="contact-shell" style={{
          padding: '10px 40px 80px'
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="contact-grid" style={{
              display: 'grid',
              gridTemplateColumns: '0.9fr 1.1fr',
              gap: '26px',
              alignItems: 'start'
            }}>
              {/* Columna izquierda: tarjetas */}
              <div style={{ display: 'grid', gap: '16px' }}>
                <div className="card" style={{
                  background: 'rgba(255,255,255,0.78)',
                  border: '1px solid rgba(44,62,80,0.10)',
                  borderRadius: '22px',
                  padding: '22px',
                  boxShadow: '0 16px 40px rgba(44,62,80,0.08)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 style={{
                    margin: 0,
                    fontSize: '18px',
                    color: '#2c3e50',
                    fontFamily: '"Poppins", sans-serif'
                  }}>
                    ¿Qué pasa después de enviar?
                  </h3>

                  <ul style={{
                    margin: '12px 0 0',
                    paddingLeft: '18px',
                    color: '#556270',
                    lineHeight: 1.8,
                    fontSize: '14px'
                  }}>
                    <li>Se abre WhatsApp con tu mensaje listo.</li>
                    <li>Se confirma disponibilidad y horario.</li>
                    <li>Se define modalidad: presencial, virtual o híbrida.</li>
                  </ul>

                  <div style={{ marginTop: '14px' }}>
                    <a
                      href="#formulario"
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMenuOpen(false)}
                    >
                      <button type="button" className="btn-secondary">
                        Ir al formulario
                      </button>
                    </a>
                  </div>
                </div>

                <div className="card" style={{
                  background: 'linear-gradient(135deg, rgba(255,105,180,0.14), rgba(139,95,141,0.10), rgba(74,144,226,0.12))',
                  border: '1px solid rgba(44,62,80,0.10)',
                  borderRadius: '22px',
                  padding: '22px',
                  boxShadow: '0 16px 40px rgba(44,62,80,0.08)',
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.82)',
                    borderRadius: '18px',
                    padding: '16px',
                    border: '1px solid rgba(255,255,255,0.7)'
                  }}>
                    <p style={{ margin: 0, fontSize: '13px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8b5f8d' }}>
                      Contacto directo
                    </p>

                    <p style={{ margin: '10px 0 0', color: '#2c3e50', fontWeight: 700, fontSize: '15px' }}>
                      WhatsApp / Teléfono
                    </p>
                    <p style={{ margin: '6px 0 0', color: '#556270', fontSize: '14px' }}>
                      (+57) 315 652 4077
                    </p>

                    <div style={{ marginTop: '10px', height: '1px', background: 'rgba(44,62,80,0.10)' }} />

                    <p style={{ margin: '10px 0 0', color: '#2c3e50', fontWeight: 700, fontSize: '15px' }}>
                      Correo (opcional)
                    </p>
                    <p style={{ margin: '6px 0 0', color: '#556270', fontSize: '14px' }}>
                      horizonte.psicologico07@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna derecha: formulario (borde degradado) */}
              <div id="formulario" style={{
                borderRadius: '26px',
                padding: '2px',
                background: 'linear-gradient(135deg, rgba(255,105,180,0.9), rgba(74,144,226,0.85), rgba(139,95,141,0.85))',
                boxShadow: '0 22px 55px rgba(44,62,80,0.10)'
              }}>
                <div className="form-card" style={{
                  background: 'rgba(255,255,255,0.92)',
                  borderRadius: '24px',
                  padding: '26px',
                  border: '1px solid rgba(44,62,80,0.08)'
                }}>
                  <h2 style={{
                    margin: 0,
                    fontSize: '24px',
                    color: '#2c3e50',
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600
                  }}>
                    Enviar mensaje
                  </h2>
                  <p style={{
                    margin: '8px 0 0',
                    color: '#556270',
                    lineHeight: 1.7,
                    fontSize: '14px'
                  }}>
                    Completa los campos y se preparará un mensaje para WhatsApp.
                  </p>

                  <form onSubmit={handleWhatsAppClick} style={{ marginTop: '18px' }}>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#2c3e50', marginBottom: '8px' }}>
                          Nombre
                        </label>
                        <input
                          className="field"
                          type="text"
                          name="name"
                          placeholder="Tu nombre completo"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#2c3e50', marginBottom: '8px' }}>
                          Correo (opcional)
                        </label>
                        <input
                          className="field"
                          type="email"
                          name="email"
                          placeholder="tucorreo@ejemplo.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#2c3e50', marginBottom: '8px' }}>
                          Mensaje
                        </label>
                        <textarea
                          className="field"
                          name="message"
                          placeholder="Cuéntame brevemente qué necesitas…"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          style={{ minHeight: '140px', resize: 'vertical' }}
                        />
                      </div>

                      <button type="submit" className="btn-primary">
                        Enviar por WhatsApp
                      </button>

                      <p style={{ margin: 0, fontSize: '12px', color: '#6b7c8f', lineHeight: 1.6 }}>
                        Al enviar, se abrirá WhatsApp en una nueva pestaña con el mensaje listo.
                      </p>
                    </div>
                  </form>
                </div>
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
          }}
        />
      </a>

    </div> 
  </div>   
  );
}
