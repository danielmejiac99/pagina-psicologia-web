// components/SocialLinks.js
import Link from 'next/link';

export default function SocialLinks() {
  return (
    <div style={{
      flex: '1',
      minWidth: '200px'
    }}>
      <h4 style={{
        fontSize: '18px',
        fontWeight: '600',
        color: '#8b5f8d',
        marginBottom: '20px',
        fontFamily: '"Playfair Display", serif'
      }}>
        Síguenos
      </h4>
      <div style={{
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        {/* Instagram */}
        <a href="https://www.instagram.com/tu_cuenta" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '45px',
          height: '45px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          color: '#E4405F',
          fontSize: '20px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 5px 15px rgba(228, 64, 95, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        }}>
          📷
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/tu_cuenta" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '45px',
          height: '45px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          color: '#1877F2',
          fontSize: '20px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 5px 15px rgba(24, 119, 242, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        }}>
          👍
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/tu_cuenta" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '45px',
          height: '45px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          color: '#0A66C2',
          fontSize: '20px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 5px 15px rgba(10, 102, 194, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        }}>
          💼
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/573239764821" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '45px',
          height: '45px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          color: '#25D366',
          fontSize: '20px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        }}>
          💬
        </a>
      </div>
    </div>
  );
}
