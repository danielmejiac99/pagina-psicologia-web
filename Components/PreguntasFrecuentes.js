import { useState } from 'react';

const preguntasTerapiaJovenes = [
  {
    titulo: '¿A quién está dirigida la terapia para jóvenes?',
    contenido: 'Dirigida a jóvenes que necesitan comprender lo que sienten, construir autonomía emocional o atravesar transiciones significativas.'
  },
  {
    titulo: '¿Qué situaciones se abordan en la terapia para jóvenes?',
    contenido: 'Aborda temas como ansiedad, tristeza, confusión vital, dificultades relacionales, autoconcepto, problemas escolares, impulsividad y conflictos familiares.'
  },
  {
    titulo: '¿Cuál es el objetivo de la terapia para jóvenes?',
    contenido: 'Acompañar la construcción de identidad, fortalecer recursos internos y ofrecer una escucha honesta donde puedan pensar su historia, sus emociones y sus decisiones.'
  },
  {
    titulo: '¿Cómo se trabaja con jóvenes en terapia?',
    contenido: 'Desde el vínculo terapéutico, el respeto y la confidencialidad, creando un lugar seguro para explorar la identidad, los vínculos y la emocionalidad propia de esta etapa vital.'
  },
  {
    titulo: '¿La terapia individual es diferente según la edad?',
    contenido: 'Sí. El acompañamiento se ajusta al ciclo vital, utilizando herramientas y formas de trabajo acordes a niños, adolescentes o adultos.'
  }
];

const preguntasTerapiaNiños = [
  {
    titulo: '¿Qué situaciones se atienden en la terapia para niños?',
    contenido: 'Dirigida a niñas y niños que atraviesan cambios, dificultades emocionales o comportamientos que expresan aquello que aún no logran poner en palabras. Acompaña situaciones como miedos, frustración, impulsividad, dificultades escolares, cambios familiares, baja autoestima y procesos de desarrollo emocional.'
  },
  {
    titulo: '¿Cómo se trabaja en la terapia infantil?',
    contenido: 'Se utilizan juego terapéutico, arteterapia y trabajo con cuidadores para crear un entorno que sostenga su crecimiento.'
  },
  {
    titulo: '¿Cuál es el objetivo de la terapia para niños?',
    contenido: 'Ayudarles a reconocer, expresar y regular sus emociones, comprender lo que viven y fortalecer su capacidad de adaptación.'
  },
  {
    titulo: '¿La terapia infantil se basa solo en la conversación?',
    contenido: 'No. Se utilizan herramientas como el juego, el dibujo, el arte y otros recursos expresivos acordes a la etapa del desarrollo.'
  },  
  {
    titulo: '¿Es necesario que los padres participen en la terapia infantil?',
    contenido: 'Sí. Se incluye trabajo con cuidadores para crear un entorno de apoyo que sostenga el crecimiento del niño.'
  },  
];
// ✅ NUEVA CATEGORÍA: terapia-individual
const preguntasTerapiaIndividual = [
  {
    titulo: '¿En qué me puede ayudar la terapia individual?',
    contenido: 'La terapia puede ayudarte a comprender tus emociones, resignificar experiencias, fortalecer tus recursos internos y acompañarte en procesos de cambio personal, relacional o vital, desde un espacio seguro y respetuoso.'
  },
  {
    titulo: '¿Necesito tener un problema específico para iniciar terapia?',
    contenido: 'No. Muchas personas inician un proceso terapéutico no solo por un malestar puntual, sino por el deseo de comprenderse mejor, fortalecer sus recursos emocionales o atravesar una etapa de cambio. La terapia también es un espacio de reflexión, crecimiento y cuidado personal.'
  },
  {
    titulo: '¿Qué pasa en la primera sesión de terapia individual?',
    contenido: 'La primera sesión es un espacio de evaluación y encuadre, donde se conversa sobre el motivo de consulta, se conocen las expectativas del proceso y se establecen acuerdos sobre modalidad, frecuencia y objetivos terapéuticos.'
  },
  {
    titulo: '¿Cuánto tiempo dura una sesión individual?',
    contenido: 'Las sesiones tienen una duración aproximada de 50 a 60 minutos, independientemente de la modalidad de atención.'
  },
  {
    titulo: '¿Cada cuánto tiempo debo asistir a terapia individual?',
    contenido: 'La frecuencia se define según la necesidad de cada proceso. De manera general, se recomienda una sesión cada ocho días, aunque esta puede ajustarse de acuerdo con el momento emocional de la persona.'
  },
  {
    titulo: '¿La terapia individual es confidencial?',
    contenido: 'Sí. La información compartida durante las sesiones es confidencial y se protege bajo el principio del secreto profesional. Esta confidencialidad solo tiene límites en situaciones contempladas por la ley, como riesgo para la persona consultante o terceros, o requerimientos legales.'
  },
  {
    titulo: '¿La terapia individual es diferente según la edad?',
    contenido: 'Sí. El acompañamiento se ajusta al ciclo vital, utilizando herramientas y formas de trabajo acordes a niños, adolescentes o adultos.'
  },
  {
    titulo: '¿Cuántas sesiones necesito para terapia individual?',
    contenido: 'No existe un número fijo de sesiones. La duración del proceso depende del motivo de consulta, los objetivos terapéuticos y el ritmo de cada persona. Esto se conversa y revisa a lo largo del proceso.'
  }
];

const preguntasTerapiaAdultos = [
  {
    titulo: '¿A quién está dirigida la terapia para adultos?',
    contenido: 'Dirigida a personas que buscan entender su malestar, afrontar cambios vitales, mejorar sus vínculos o profundizar en su mundo interno.'
  },
  {
    titulo: '¿Qué situaciones se abordan en la terapia para adultos?',
    contenido: 'Aborda ansiedad, depresión, duelos, rupturas, estrés, crisis existenciales, patrones repetitivos, autocuidado, agotamiento, autoestima y dificultades en la vida afectiva.'
  },
  {
    titulo: '¿Cuál es el propósito de la terapia para adultos?',
    contenido: 'Acompañar procesos de autoconocimiento, regulación emocional, elaboración de experiencias y resignificación de la historia personal. Se ofrece una escucha profunda, ética y respetuosa del ritmo de cada consultante.'
  },
  {
    titulo: '¿Cómo se trabaja en la terapia para adultos?',
    contenido: 'Se ofrece una escucha profunda, ética y respetuosa del ritmo de cada consultante, creando un refugio íntimo para comprenderte, transformarte y encontrar maneras más amables de habitar tu vida.'
  }
];
const preguntasTerapiaPsicoanalitica = [
  {
    titulo: '¿Qué es la terapia psicoanalítica?',
    contenido: 'Es un espacio terapéutico profundo donde, a través de la palabra, se exploran emociones, pensamientos y experiencias personales. Permite comprender el origen de los propios conflictos y transformar patrones internos que generan malestar.'
  },
  {
    titulo: '¿A quién está dirigida la terapia psicoanalítica?',
    contenido: 'Está dirigida a personas que desean comprenderse más a fondo, explorar su historia emocional y mejorar su manera de relacionarse consigo mismas y con los demás. Es ideal tanto para quienes atraviesan momentos de dificultad como para quienes buscan un proceso de autoconocimiento.'
  },
  {
    titulo: '¿Qué tipo de situaciones se pueden trabajar en esta terapia?',
    contenido: 'Se abordan temas como ansiedad, tristeza, baja autoestima, conflictos de pareja o familiares, crisis vitales, malestar emocional y repetición de patrones relacionales.'
  },
  {
    titulo: '¿Cómo se desarrolla una sesión psicoanalítica?',
    contenido: 'Durante las sesiones, la persona habla con libertad sobre lo que piensa y siente, mientras el terapeuta escucha e interpreta para facilitar una comprensión más profunda del mundo interno y de los significados detrás de lo que se vive.'
  },
  {
    titulo: '¿Cuánto tiempo dura un proceso psicoanalítico?',
    contenido: 'No hay una duración fija. El proceso se ajusta al ritmo, las necesidades y los objetivos de cada persona. Puede ser un acompañamiento breve o un recorrido prolongado de autoconocimiento y transformación.'
  }
  ];
const preguntasTerapiaPareja = [
  {
    titulo: '¿A quién está dirigida la terapia de pareja?',
    contenido: 'Está dirigida a parejas que desean fortalecer su comunicación, resolver tensiones, atravesar crisis o comprender dinámicas que están generando malestar en la relación.'
  },
  {
    titulo: '¿Qué tipo de situaciones se pueden trabajar en la terapia de pareja?',
    contenido: 'Se abordan conflictos recurrentes, celos, distanciamiento emocional, dificultades sexuales, acuerdos de convivencia, duelo compartido, temas de crianza y procesos de reparación del vínculo.'
  },
  {
    titulo: '¿La terapia de pareja es solo para crisis graves?',
    contenido: 'No. También es un espacio para revisar patrones que se repiten, prevenir mayores conflictos, mejorar el entendimiento mutuo y cuidar el vínculo antes de que el malestar se intensifique.'
  },
  {
    titulo: '¿Cuál es el objetivo de la terapia de pareja?',
    contenido: 'El objetivo es comprender qué le ocurre a la relación, reconocer la historia compartida y los patrones que se repiten, y construir nuevas formas de escucharse, cuidarse y habitar el vínculo.'
  },
  {
    titulo: '¿Qué se puede esperar de las sesiones de pareja?',
    contenido: 'Se ofrece un espacio seguro y equilibrado, donde ambas partes pueden expresarse, ser escuchadas y trabajar en conjunto para transformar patrones y reconstruir, cuando es posible, el vínculo que las une.'
  }
];
const preguntasTerapiaFamiliar = [
  {
    titulo: '¿A quién está dirigida la terapia familiar?',
    contenido: 'Está dirigida a familias que atraviesan tensiones, cambios importantes o dificultades para comprenderse y comunicarse entre sus integrantes.'
  },
  {
    titulo: '¿Qué tipo de situaciones se trabajan en la terapia familiar?',
    contenido: 'Se abordan conflictos parentales, desafíos en la crianza, límites, roles, comunicación, relación entre hermanos, duelos, mudanzas y otros cambios vitales que generan malestar.'
  },
  {
    titulo: '¿Cuál es el objetivo principal de este acompañamiento?',
    contenido: 'Busca reconstruir la comunicación, comprender la dinámica familiar, resignificar la historia compartida y fortalecer los vínculos afectivos entre los miembros de la familia.'
  },
  {
    titulo: '¿Cómo puede ayudar la terapia familiar en los comportamientos de un miembro de la familia?',
    contenido: 'Permite comprender los comportamientos que expresan malestar en algún integrante como parte de una dinámica más amplia, generando espacios de conversación y nuevas formas de relación más sanas.'
  },
  {
    titulo: '¿Qué se puede esperar de las sesiones de terapia familiar?',
    contenido: 'Se ofrece un espacio seguro y respetuoso, donde la familia recibe una guía para organizar su mundo emocional, escucharse mutuamente y construir acuerdos que favorezcan el bienestar de todos.'
  }
];
const preguntasTerapiaGrupal = [
  {
    titulo: '¿A quiénes están dirigidos los talleres grupales y el acompañamiento psicoeducativo?',
    contenido: 'Están dirigidos a grupos, instituciones educativas, empresas, equipos de trabajo y comunidades que buscan fortalecer el bienestar emocional, la convivencia y sus recursos psicosociales.'
  },
  {
    titulo: '¿Qué temas se trabajan en estos procesos grupales?',
    contenido: 'Se abordan temas como manejo emocional, comunicación asertiva, liderazgo, trabajo en equipo, prevención del estrés, autocuidado, vínculos sanos, crianza, acompañamiento escolar y redes de apoyo.'
  },
  {
    titulo: '¿Cuál es el propósito de estos talleres y espacios psicoeducativos?',
    contenido: 'Su propósito es ofrecer herramientas prácticas y comprensión emocional, creando espacios seguros donde el aprendizaje surja de la experiencia compartida entre los participantes.'
  },
  {
    titulo: '¿Qué tipo de metodología se utiliza en los talleres?',
    contenido: 'Se integran metodologías reflexivas, creativas, arteterapéuticas y psicoeducativas, adaptadas a las características y necesidades de cada grupo o institución.'
  },
  {
    titulo: '¿Los talleres se adaptan a las necesidades de cada institución o grupo?',
    contenido: 'Sí, los contenidos, la forma de trabajo y las dinámicas se diseñan según los objetivos y contextos específicos de cada organización o comunidad.'
  }
];
const preguntasIndex  = [
  {
    titulo: '¿Cómo puedo agendar una cita?',
    contenido: 'Para agendar una cita, puedes comunicarte directamente a través de WhatsApp, donde recibirás información sobre disponibilidad, modalidad de atención y orientación inicial para iniciar el proceso terapéutico.'
  },
  {
    titulo: '¿Por qué acudir a un psicólogo?',
    contenido: 'Acudir a un psicólogo no implica estar “mal” o tener un problema grave. Muchas personas buscan terapia para comprender lo que sienten, atravesar cambios, fortalecer su bienestar emocional o encontrar nuevas formas de relacionarse consigo mismas y con los demás.'
  },
  {
    titulo: '¿En qué me puede ayudar la terapia?',
    contenido: 'La terapia puede ayudarte a comprender tus emociones, resignificar experiencias, fortalecer tus recursos internos y acompañarte en procesos de cambio personal, relacional o vital, desde un espacio seguro y respetuoso.'
  },
  {
    titulo: '¿Necesito tener un problema específico para iniciar terapia?',
    contenido: 'No. Muchas personas inician un proceso terapéutico no solo por un malestar puntual, sino por el deseo de comprenderse mejor, fortalecer sus recursos emocionales o atravesar una etapa de cambio. La terapia también es un espacio de reflexión, crecimiento y cuidado personal.'
  },
  
  {
    titulo: '¿Cuántas sesiones necesito?',
    contenido: 'No existe un número fijo de sesiones. La duración del proceso depende del motivo de consulta, los objetivos terapéuticos y el ritmo de cada persona. Esto se conversa y revisa a lo largo del proceso.'
  },
  {
    titulo: '¿La terapia es confidencial?',
    contenido: 'Sí. La información compartida durante las sesiones es confidencial y se protege bajo el principio del secreto profesional. Esta confidencialidad solo tiene límites en situaciones contempladas por la ley, como riesgo para la persona consultante o terceros, o requerimientos legales.'
  },
];
  const preguntasFrecuentes = [
  {
    titulo: '¿Qué sucede si no puedo asistir a una sesión programada?',
    contenido: 'En caso de no poder asistir, se solicita avisar con al menos 24 horas de anticipación para poder reprogramar la sesión. La no asistencia sin previo aviso podrá generar el cobro correspondiente, según la política de atención.'
  },
  {
    titulo: '¿Ofrecen servicios para empresas, grupos o instituciones?',
    contenido: 'Sí. Ofrecemos acompañamiento psicoeducativo y espacios grupales dirigidos a empresas, instituciones educativas, comunidades y equipos de trabajo. Estos servicios se diseñan según las necesidades de cada organización y pueden incluir charlas, talleres, capacitaciones e intervenciones grupales orientadas al bienestar emocional, la comunicación, el manejo del estrés, el trabajo en equipo y la construcción de una cultura de cuidado y bienestar laboral.El objetivo es fortalecer los recursos emocionales individuales y colectivos, promover entornos saludables y aportar al desarrollo humano dentro de los espacios institucionales'
  },
  {
    titulo: '¿Cuánto tiempo dura una sesión?',
    contenido: 'Las sesiones tienen una duración aproximada de 50 a 60 minutos, independientemente de la modalidad de atención.'
  },
  {
    titulo: '¿Los talleres se adaptan a cada institución?',
    contenido: 'Sí. Los contenidos y formatos se diseñan según las necesidades específicas de cada grupo u organización.'
  },
  {
    titulo: '¿Qué sucede si decido finalizar el proceso?',
    contenido: 'El proceso terapéutico es voluntario. La finalización puede conversarse dentro del espacio terapéutico para cerrar el proceso de manera consciente y cuidadosa, respetando la experiencia vivida.'
  },
  {
    titulo: '¿Atienden casos de urgencia o crisis?',
    contenido: 'El servicio no reemplaza la atención de urgencias médicas o psiquiátricas. En situaciones de crisis grave, se orienta a la persona hacia los servicios de emergencia o redes de apoyo correspondientes.'
  }
];

export default function PreguntasFrecuentes({ categoria }) {
  const [activo, setActivo] = useState(null);

  const togglePregunta = (index) => {
    setActivo(activo === index ? null : index);
  };

  // ✅ AGREGADA LA NUEVA CATEGORÍA
  const preguntas = 
  categoria === 'preguntas-frecuentes' ? preguntasFrecuentes : 
  categoria === 'preguntas-index' ? preguntasIndex : 
    categoria === 'terapia-adultos' ? preguntasTerapiaAdultos : 
    categoria === 'terapia-jovenes' ? preguntasTerapiaJovenes : 
    categoria === 'terapia-niños' ? preguntasTerapiaNiños :
    categoria === 'terapia-individual' ? preguntasTerapiaIndividual : 
    categoria === 'terapia-psicoanalitica' ? preguntasTerapiaPsicoanalitica :
    categoria === 'terapia-pareja' ? preguntasTerapiaPareja :
    categoria === 'terapia-familiar' ? preguntasTerapiaFamiliar :
    categoria === 'terapia-grupales' ? preguntasTerapiaGrupal :
     [];

    return (
    <section style={{
      maxWidth: '1200px', 
      width: '100%',
      margin: '0 auto',
      padding: '0 20px',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {preguntas.map((pregunta, index) => (
          <div
            key={index}
            style={{
              background: activo === index ? 'rgba(74, 144, 226, 0.08)' : 'rgba(255, 255, 255, 0.6)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: activo === index ? '0 8px 25px rgba(74, 144, 226, 0.15)' : '0 2px 10px rgba(0,0,0,0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              maxWidth: '100%',
              width: '100%'
            }}
            onClick={() => togglePregunta(index)}
          >
            {/* Header responsive */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px 28px',
              fontWeight: '600',
              fontSize: 'clamp(16px, 2.5vw, 20px)', 
              color: '#2c3e50',
              lineHeight: '1.4',
              cursor: 'pointer'
            }}>
              <span style={{ flex: 1 }}>{pregunta.titulo}</span>
              <span style={{ 
                fontSize: 'clamp(20px, 3vw, 26px)', 
                color: '#4a90e2',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
                minWidth: '32px',
                textAlign: 'center'
              }}
              stylee={{ 
                transform: activo === index ? 'rotate(180deg)' : 'rotate(0deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              >
                ▼
              </span>
            </div>
            
            {/* Contenido responsive */}
            {activo === index && (
              <div style={{
                padding: '24px 28px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderTop: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: 'clamp(16px, 2.2vw, 18px)',
                  color: '#4a5568',
                  lineHeight: '1.7',
                  fontFamily: '"Inter", sans-serif'
                }}>
                  {pregunta.contenido}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}