# Specialty Carousel Module 

Este módulo implementa un carrusel responsivo de artículos destacados, ideal para secciones de noticias, blogs o contenido editorial. Se adapta automáticamente al tamaño de pantalla, mostrando entre 1 y 5 tarjetas con efectos visuales en los extremos y navegación fluida.

---

## Instalación y ejecución local

Sigue estos pasos para clonar el repositorio, instalar las dependencias y ejecutar el proyecto en modo desarrollo:

```bash
# 1. Clona el repositorio
git clone https://github.com/RicardoNatera/test-landing.git
cd test-landing

# 2. Instala las dependencias
npm install

# 3. Ejecuta el servidor de desarrollo
npm run dev

# 4. Luego abre "http://localhost:3000" en tu navegador para ver el carrusel en acción.
```

## Configuración de API Key para [News Api](https://newsapi.org/)

Este proyecto requiere una API key para funcionar correctamente.  
Debes crear un archivo `.env.local` en la raíz del proyecto y definir la variable:

NEWSAPI_KEY=tu_api_key_aqui

Puedes usar el archivo `.env.example` como referencia.

La api key se obtiene al ingresar en [News Api](https://newsapi.org/) y generar una api key con su usario registrado.

## Estructura del módulo

- Carousel.tsx → Componente principal del carrusel
    
- Card.tsx → Tarjeta individual con imagen, título y descripción
    
- Carousel.css → Estilos responsivos del carrusel
    
- Card.css → Estilos adaptativos de cada tarjeta
    

## Tecnologías utilizadas

- [Next.js 16 (App Router)](https://nextjs.org/)
- [React](https://react.dev/)
- Estilos con CSS Modules
