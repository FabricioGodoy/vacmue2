import React from 'react';

// Componente individual para cada servicio
const ServiceCard = ({ title, services, image }) => (
  <div className="divArticle">
    <img width="24" height="24" src={image} alt={title} />
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
      title: 'macOS',
      image: 'https://img.icons8.com/material-outlined/24/laptop.png', 
      services: [
        'Diagnóstico de fallos',
        'Reparación de Logic Board y Displays',
        'Atención de equipos mojados',
        'Cambio de batería',
        'Actualización de macOS y optimización de Soft',
        'Upgrade de macOS equipos vintage',
        'Instalación de software',
        'Desbloqueo de iCloud'
      ]
    },
    {
      title: 'iOS',
      image: 'https://img.icons8.com/material-rounded/24/smartphone.png', 
      services: [
        'Actualizaciones de software',
        'Reparación de placa',
        'Cambio de módulo de pantalla y batería',
        'Migraciones de información de usuario',
        'Swap entre Android y iOS'
      ]
    },
    {
      title: 'Equipos Windows',
      image: 'https://img.icons8.com/ios-glyphs/30/windows-10.png', 
      services: [
        'Nos especializamos en Notebooks y All in One desktops',
        'Diagnóstico de fallos',
        'Reparacion de placa',
        'Reparación de bisagras y displays de notebooks',
        'Atención a equipos mojados',
        'Instalación y actualización de Software',
        'Instalación y reparación de Sistema Opertivo',
        'Upgrades de hardware',
        'Gamming',
        'Asesoría informática'
      ]
    },
    {
      title: 'Canales de Reparación',
      image: 'https://img.icons8.com/fluency-systems-regular/50/conference-call--v1.png', 
      services: [
        'Atención especializada',
        'Venta de repuestos y accesorios',
        'Atención mayorista',
        'Pedidos especiales',
        'Soporte técnico de segundo y tercer nivel'
      ]
    },
    {
      title: 'Empresas',
      image: 'https://img.icons8.com/ios/50/handshake--v1.png', 
      services: [
        'Nos especializamos en brindar consultoría informática para Agencias de Medios, Espectáculos, Start ups entre otros del segmento SMB'
      ]
    },
    {
      title: 'Mobilesentrix',
      image: 'https://img.icons8.com/sf-regular/48/search.png', 
      services: [
        'Somos distribuidor autorizado de productos Ampsentrix & Mobile'
      ]
    }
  ];
  const datosContacto = [
    {
      title: 'Domicilio',
      image: 'https://img.icons8.com/fluency-systems-filled/50/map-marker.png', 
      services: [
        'Av. Cabildo 2847 - Ciudad Autónoma de Buenos Aires'
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

  return (
    <div className='contenedorPadreHomePage'>
      <div className="imgContainer">
        <img src="../../img/pcNegra.jpg" alt="pcNegra" className="imgPcNegra" />
        <div className="textOverlay">
          <div className="typingEffect">Soluciones Informáticas y Tecnológicas</div>
          <br />
          <p className='typingEffect-2'>¡Llevamos el concepto de <em>servicio</em> a otro nivel!</p>
        </div>
      </div>

      <h2 className="typingTitle">Nuestros servicios</h2>
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
    
      <h2 className="typingTitle">Datos de contacto</h2>
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
