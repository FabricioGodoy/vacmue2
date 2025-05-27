import React from 'react';
import { SobreNosotros } from '../components/sobreNosotros'
import { useEffect, useState } from 'react';

// Componente individual para cada servicio
const ServiceCard = ({ title, services, image }) => (
  <div className="divArticle">
    <img width="80" height="80" src={image} alt={title} />
    <h3>{title}</h3>
    <ul>
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

const ServiceCard2 = ({ title, services, image }) => (
  <div className="divArticle2">
    <img width="24" height="24" src={image} alt={title} />
    <h3>{title}</h3>
    <ul>
      {services.map((service, index) => {
        // Definir enlaces condicionales según el título
        let link;
        if (title === 'Correo electrónico') {
          link = `mailto:${service}`;
        } else if (title === 'Teléfono') {
          link = `tel:${service}`;
        } else if (title === 'Domicilio') {
          link = 'https://www.google.com/maps?q=Av.+Cabildo+2847,+Ciudad+Autónoma+de+Buenos+Aires';
        }
        return (
          <li key={index}>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none'}}>
                {service}
              </a>
              ) : (
                service
              )}
          </li>
        );
      })}
    </ul>
  </div>
);


export const HomePage = () => {
  const servicesData = [
    {
      title: 'Diseño & Ingenieria',
      image: '../../img/iconos/genteReunida.jpg', 
      services: [
        'Ingeniería Conceptual',
        'Ingeniería Básica',
        'Ingeniería de Detalle',
        'Integración de Diseño & Ingeniería'
      ]
    },
    {
      title: 'Gestión Ambiental',
      image: '../../img/iconos/lamparaReciclar.jpg', 
      services: [
        'Gestión Ambiental (Environmental Management)'
      ]
    },
    {
      title: 'Ejecución & Construcción',
      image: '../../img/iconos/rayoEngranaje.jpg', 
      services: [
        'EPC (Engineering, Procurement and Constructions).'
      ]
    }
  ];
  const datosContacto = [
    {
      title: 'Domicilio',
      image: 'https://img.icons8.com/fluency-systems-filled/50/map-marker.png', 
      services: [
        'Presidente Guido 1999, uenos Aires (1119) Argentina'
      ]
    },
    {
      title: 'Días y horarios de atención',
      image: 'https://img.icons8.com/pastel-glyph/128/clock--v1.png', 
      services: [
        'Lunes a Viernes de 14:00hs a 18:30hs'
      ]
    },
  ]

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % 3); // 3 slides
  }, 5000); // cambia cada 5 segundos
  return () => clearInterval(interval);
}, []);

  return (
    <div className='contenedorPadreHomePage'>
      <div className="carousel">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

          <div className="slide active">
            <img src="../../img/carrousel/canosDia.png" alt="Caños de día" />
            <div className="textOverlay">
              <h2 className="slideTitle">Distribución de Energía</h2>
            </div>
          </div>
          <div className="slide">
            <img src="../../img/carrousel/plantaVME.png" alt="Planta VME" />
            <div className="textOverlay">
              <h2 className="slideTitle">Procesamiento de Gas Natural</h2>
            </div>
          </div>
          <div className="slide">
            <img src="../../img/carrousel/canosNoche.png" alt="Caños de noche" />
            <div className="textOverlay">
              <h2 className="slideTitle">Conectividad Nocturna</h2>
            </div>
          </div>
        </div>
      </div>

<br/>

      <SobreNosotros />

      
      <h2  id='servicios' className='typingTitle'>SERVICIOS</h2>
      <div className='ordenarArticle'>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            services={service.services}
            image={service.image} 
          />
        ))}
      </div>
    
      <h2  id='contactos' className='typingTitle'>Datos de contacto</h2>
      <div className='ordenarArticle2'>
        {datosContacto.map((service, index) => (
          <ServiceCard2
            key={index}
            title={service.title}
            services={service.services}
            image={service.image} 
          />
        ))}
      </div>
      <a href="https://wa.me/+5491151010406" className="btn-flotante" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/office/40/whatsapp--v1.png" alt="wpp"></img>
      </a>

    </div>
  );
};
