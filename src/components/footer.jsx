import React from 'react'
import './styles/footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <br/>
      <div className="mapContainer">
        <iframe
          width="80%"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11397.005451193052!2d-58.46827625821219!3d-34.55804946171399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5fbd5db68d9%3A0xd8f9607c6c8f5f23!2sAv.%20Cabildo%202847%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1666067958555!5m2!1ses-419!2sar"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa de ubicación de nuestra empresa"
        ></iframe>
      </div>
      <br/>

        <div className="headerFooter">

        <p className='text-copy'>Copyright © 2024 Simpletecno Todos los derechos reservados. Las marcas registradas y logotipos aquí mostrados son propiedad de sus respectivos dueños y son utilizadas únicamente con fines enunciativos e ilustrativos.</p>
        </div>
    </footer>
  );
};

