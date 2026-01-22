// components/TeamSection.js
export default function TeamSection() {
  const items = [
    {
      text: "Nuestro equipo surge del propósito común de acompañar la salud mental desde el encuentro humano, el respeto y una mirada ética. Nos une una visión compartida sobre la importancia del apoyo social, el desarrollo humano y el bienestar integral como pilares para construir una vida más habitable. Desde esa comprensión, trabajamos para ofrecer un espacio terapéutico donde la escucha sea un lugar de encuentro y el cuidado una forma de presencia.",
      image: "/IMG_2021.JPG",
      alt: "Equipo terapéutico en consulta",
      align: "left",
    },
    {
      text: "Somos psicólogas con trayectorias construidas en contextos clínicos, educativos y hospitalarios, lo que nos permite comprender la salud mental desde múltiples dimensiones. Esta diversidad de experiencias sostiene diálogos interdisciplinares y enriquece nuestras intervenciones, haciéndolas más amplias, coherentes y ajustadas a las realidades de quienes confían en nosotras.",
      image: "/IMG_6202.jpg",
      alt: "Reunión del equipo de psicología",
      align: "right",
    },
    {
      text: "Cada una aporta una sensibilidad propia y una forma única de comprender la historia de quienes acompañamos. Juntas buscamos que este espacio sea un lugar donde la palabra encuentre sentido, donde el malestar pueda transformarse y donde cada persona descubra maneras más amables de habitar su vida.",
      image: "/IMG_2017.JPG",
      alt: "Espacio terapéutico",
      align: "left",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 40px",
        background: "linear-gradient(135deg, #e71e5723, #1d7ce927)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            color: "#2c3e50",
            fontFamily: '"Playfair Display", serif',
            marginBottom: "2rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          Nuestro equipo
          <span
            style={{
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "#8b5f8d",
              borderRadius: "2px",
            }}
          />
        </h2>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: item.align === "right" ? "row-reverse" : "row",
                gap: "40px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: "1 1 320px",
                  minWidth: "260px",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    color: "#555",
                    lineHeight: "1.8",
                    textAlign: "left",
                  }}
                >
                  {item.text}
                </p>
              </div>

              <div
                style={{
                  flex: "1 1 260px",
                  minWidth: "240px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "360px",
                    height: "240px",
                    borderRadius: "24px",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #255adfff 0%)",
                    boxShadow: "0 16px 32px rgba(139, 95, 141, 0.2)",
                    border: "1px solid rgba(139, 95, 141, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-4px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
