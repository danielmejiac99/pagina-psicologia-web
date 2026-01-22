// components/HeroHeader.js
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

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

const carouselImages = [
  '/IMG_2035.png',
  '/IMG_2033.png',
  '/IMG_2034.png'
];

export default function HeroHeader({ height = '70vh' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-header"
      style={{
        position: 'relative',
        height,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#f0f7ff'
      }}
    >
      {/* ================= CARRUSEL ================= */}
      <div className="hero-carousel">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className="hero-carousel-image"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentIndex === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: 0
            }}
          />
        ))}
      </div>

      {/* ================= OVERLAY ================= */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, rgba(74, 144, 226, 0.40), rgba(139, 95, 141, 0.30))',
          zIndex: 1
        }}
      />

      {/* ================= CONTENIDO ================= */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          paddingLeft: '60px',
          maxWidth: '700px',
          textAlign: 'left'
        }}
      >
        <h1
          style={{
            fontSize: '38px',
            fontWeight: '600',
            fontFamily: '"Playfair Display", serif',
            lineHeight: '1.2',
            marginBottom: '8px',
            background: 'linear-gradient(45deg, #b515e6ff, #0e0ef0ff)',
            backgroundSize: '200% 200%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
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
          Horizonte Psicológico
        </h1>

        <TypeAnimation
          sequence={typingSequence}
          wrapper="div"
          cursor
          repeat={Infinity}
          style={{
            color: '#2c3e50',
            fontSize: '24px',
            fontWeight: '500',
            fontFamily: '"Roboto Slab", serif',
            lineHeight: '1.4',
            marginBottom: '30px',
            textShadow: '0 2px 4px rgba(255, 255, 255, 0.5)'
          }}
        />

        <Link
          href="/servicios"
          style={{
            display: 'inline-block',
            backgroundColor: '#4a90e2',
            color: 'white',
            borderRadius: '30px',
            padding: '14px 32px',
            fontWeight: 'bold',
            fontSize: '16px',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#357abd';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4a90e2';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Conoce mis terapias
        </Link>
      </div>
    </section>
  );
}
