/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - CASA POLO CLUB
 */

const propertyConfig = {
  // 1. SEO
  seo: {
    title: "Casa Remodelada en Venta - Polo Club, Bogotá | 204m²",
    description: "Excelente oportunidad. Casa de 204.79 m² en el barrio Polo Club, Bogotá. 5 habitaciones, 4 baños, 3 parqueaderos, patio automatizado y seguridad.",
    keywords: "Casa en Venta, Polo Club, Bogotá, Barrios Unidos, Casa Remodelada, Bienes Raíces",
    ogUrl: "",
    ogImage: "assets/portada.png",
    author: "Vecy Bienes Raíces", 
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "Oportunidad de Inversión 🏡",
    tituloHtml: "CASA EN VENTA - BARRIO POLO CLUB, BOGOTÁ",
    precioVenta: "$1.150.000.000",
    valorAdmin: "No aplica",
    labelExtra: "💵 Administración"
  },

  // 3. Rejilla de Detalles
  detalles: [
    { label: "Área Total", value: "204,79 m²", icon: "📐" },
    { label: "Habitaciones", value: "5 + Servicio", icon: "🛏️" },
    { label: "Baños", value: "4", icon: "🚿" },
    { label: "Parqueaderos", value: "3", icon: "🚗" },
    { label: "Niveles", value: "2", icon: "🏢" },
    { label: "Estrato", value: "4", icon: "⭐" }
  ],

  // 4. Características Internas
  caracteristicasInternas: [
    { name: "Estudio / Biblioteca", emoji: "📚" },
    { name: "Chimenea a leña tradicional", emoji: "🔥" },
    { name: "Patio cubierto (techo automatizado)", emoji: "✨" },
    { name: "Cocina integral y moderna", emoji: "🍳" },
    { name: "Sala, comedor y sala de estar", emoji: "🛋️" },
    { name: "Cuarto y baño de servicio", emoji: "🧺" }
  ],
  destacadoInterno: "Casa completamente remodelada con pisos en cerámica y madera, excelente iluminación natural y un patio con techo corredizo a control remoto.",

  // 5. Características Externas
  caracteristicasExternas: [
    { name: "Jardín exterior", emoji: "🌳" },
    { name: "Alarma y circuito cerrado (cámaras 360°)", emoji: "📹" },
    { name: "Puerta de garaje automatizada", emoji: "🚪" },
    { name: "Cerca de Autopista Norte, NQS y Calle 80", emoji: "🛣️" },
    { name: "Fácil acceso a Transmilenio y SITP", emoji: "🚌" },
    { name: "Cerca de restaurantes y zona comercial", emoji: "🛍️" }
  ],
  destacadoUbicacion: "Ubicación estratégica en el Polo Club, Barrios Unidos. Un sector netamente residencial con fácil conexión al centro y norte de la ciudad.",

  // 6. Mapa
  mapa: {
    // Te dejo el embed de Polo Club genérico
    urlEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.941641324749!2d-74.07293524999999!3d4.66803735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5c4e0b04a1%3A0xe51a733ecbd21175!2sPolo%20Club%2C%20Barrios%20Unidos%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco", 
    titulo: "Ubicación Polo Club"
  },

  // 7. Descripción Final
  descripcionFinal: {
    titulo: "🔑 Beneficios Destacados",
    texto: `
    <div class="roi-item">
      <p><strong>Antigüedad y Solidez:</strong> 40 años de sólida construcción, actualizada con estándares modernos.</p>
      <p><strong>Precio Reducido:</strong> Bajó de $1.200.000.000 COP a $1.150.000.000 COP.</p>
      <div style="margin-top: 30px; text-align: center;">
          <a href="analisis.html" class="btn-analisis">
             📋 VER MÁS DETALLES DE LA CASA
          </a>
      </div>
    </div>`
  },

  // 8. Multimedia
  multimedia: {
    videoUrl: "", 
    videoThumbnail: "assets/portada.png",
    imagesCount: 0, 
    imagePrefix: "assets/",
    imageExtension: ".jpeg",
    imagesList: [
      // Añade las rutas de tus fotos aquí una vez las subas a /assets
      // "assets/1.jpeg", "assets/2.jpeg", etc...
    ]
  },

  // 9. Botón Compartir
  share: {
    whatsappText: `🏡 *CASA EN VENTA - POLO CLUB, BOGOTÁ*

💰 *Precio:* $1.150.000.000 COP
📍 *Ubicación:* Barrio Polo Club, Barrios Unidos
📐 *Área Total:* 204,79 m²
🛏️ *Habitaciones:* 5 + Servicio | 🚿 *Baños:* 4
🚗 *Parqueaderos:* 3

✨ *Destacado:* Completamente remodelada, patio cubierto automatizado, chimenea, circuito cerrado de cámaras.

🔗 *Ver Fotos y Detalles:*
https://tu-dominio-aqui.com/`
  }
};
