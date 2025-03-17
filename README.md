# Marvel Characters App

Aplicación desarrollada con React y TypeScript que permite explorar personajes del universo Marvel, realizar búsquedas por nombre y gestionar una lista personalizada de personajes favoritos.

## 🚀 Tecnologías Usadas

- **React 18**
- **TypeScript**
- **Vite**
- **Styled Components**
- **React Router DOM**
- **React Context API**
- **Jest & React Testing Library**
- **Styled Components**
- **ESLint & Prettier**

## 📂 Estructura del Proyecto

```plaintext
Marvel-React-Vite-Context-TS_Test/
├── api/                  # Lógica para peticiones HTTP a la API de Marvel
├── public/               # Archivos públicos estáticos
├── src/
│   ├── assets/           # Imágenes, logos y otros archivos estáticos
│   ├── components/       # Componentes reutilizables
│   │   ├── atoms/        # Componentes más pequeños y básicos
│   │   ├── molecules/    # Componentes que combinan varios átomos
│   │   ├── organisms/    # Componentes más grandes y estructurales
│   ├── context/          # Gestión de estados globales con React Context
│   ├── hooks/            # Custom hooks reutilizables
│   ├── pages/            # Componentes que representan vistas completas
│   ├── services/         # Servicios para gestión de la lógica API
│   ├── styles/           # Estilos globales y configuraciones CSS
│   ├── utils/            # Funciones auxiliares reutilizables
│   ├── App.tsx           # Componente principal de la aplicación
│   └── main.tsx          # Punto de entrada principal
├── tests/                # Pruebas unitarias y de integración
├── .env                  # Variables de entorno
├── .eslintrc.json        # Configuración ESLint
├── .prettierrc           # Configuración Prettier
├── jest.config.js        # Configuración Jest
├── tsconfig.json         # Configuración TypeScript
└── vite.config.ts        # Configuración Vite
```

## 🛠️ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/AntonioDelgadoMadrona/Marvel-React-Vite-Context-TS_Test.git
cd Marvel-React-Vite-Context-TS_Test
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

Crea un archivo `.env` usando tus/mis credenciales de Marvel:

```env
VITE_API_KEY=88845085d8592188865490d40043f685
```

Puedes obtener estas claves desde [Marvel Developer Portal](https://developer.marvel.com/).

## ▶️ Ejecución

### Modo desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` para visualizar la aplicación.

### Compilar y ejecutar en producción

```bash
npm run build
npm run preview
```

## 🧪 Testing

Las pruebas unitarias e integrales se ejecutan con Jest y React Testing Library:

```bash
npm run test
```

## 🧩 Arquitectura

La aplicación está diseñada siguiendo principios SOLID con un enfoque modular basado en componentes:

- **React Context**: Manejo centralizado del estado global (personajes favoritos, resultados de búsqueda).
- **Componentes**: Se ha seguido la metodología Atomic Design para estructurar los componentes de manera modular y reutilizable.
- **Servicios/API**: Separación clara de responsabilidades en lógica de negocio y llamadas a la API.
- **Styled Components**: CSS modular encapsulado por componentes, facilitando escalabilidad y mantenimiento.

## 🔖 Decisiones técnicas relevantes

- **Vite** fue elegido por su velocidad de desarrollo y construcción.
- **React Context** simplifica la gestión del estado sin la complejidad de soluciones externas como Redux.
- **Styled Components** ofrece estilos escalables y modulares directamente ligados al componente.
- **Cache local (localStorage)** optimiza rendimiento reduciendo consultas a la API.
- **Husky pre-commit** para asegurar calidad del código automáticamente en cada commit.

## 📱 Diseño Responsive

La interfaz cumple fielmente con los diseños propuestos en Figma, tanto en escritorio como en dispositivos móviles.

## ✅ Buenas prácticas implementadas

- Código limpio y modular (Principios SOLID).
- Consistencia del código (Prettier & ESLint).
- Aplicación eficiente con uso inteligente del caché.
- Código sin errores ni advertencias en consola.

## 📌 Refactorización prueba Técnica

- **Uso de variables.css**

Para mejorar la escalabilidad y mantenibilidad del código, he añadido un archivo variables.css en la carpeta styles/, donde se definen colores, tipografías y tamaños de texto reutilizables.

- **Uso de Atomic Design**

He aplicado esta metodología para mantener la estructura del proyecto organizada y facilitar la reutilización de componentes.

- **Sobre BEM y Styled-components**

Aunque me gusta la metodología BEM y reconozco que es una buena práctica, en esta prueba técnica he decidido no utilizarla debido a que se usa styled-components, el cual ya encapsula los estilos. Añadir demasiadas className iría un poco en contra de la filosofía de styled-components.

---

© Antonio Delgado Madrona | Marvel Web Challenge
