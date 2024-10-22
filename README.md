# CrowdMap

## Índice

- [Proyecto 📝](#proyecto-)
- [Screenshots 🚀](#screenshots-)
- [Diseño 🖍](#diseño-)
- [Gestión del Proyecto 🗂](#gestión-del-proyecto-)
- [Instalación 🛠️](#installation-)
- [Estructura del proyecto 📐](#estructura-del-proyecto-)
- [Tecnologías 🔎](#tecnologias-)
- [Uso 🔩](#uso-)
- [Contribución 🤝](#contribution-)
- [Coders👩‍💻](#coders-)

## Proyecto 📝

Nuestra aplicación te ayuda a planificar tus aventuras evitando los grandes conglomerciones de gente, permitiéndote disfrutar de los lugares con más espacio, más calma y más autenticidad. Encuentra rutas tranquilas, sitios escondidos y experiencias que te conectan con la esencia de cada lugar, sin agobios ni colas interminables.

Viaja a tu ritmo, descubre más y hazlo sin prisas.

Es un proyecto full-stack, [aquí está el repositorio del back](https://github.com/llavefija/HackatonEquipo7_2024_Backend), desarrollado por el equipo Backend y Data.

## Screenshots 🚀

#### Home page

![Home page](https://github.com/user-attachments/assets/699a0775-1fe6-4380-a4ce-147200605d9d)

#### Map page

![Map page](https://github.com/user-attachments/assets/cff710ec-1974-4d72-b7e9-b9b2e12c7618)

## Diseño 🖍

El diseño de la interfaz fue generado en un primer momento en [Figma](https://www.figma.com/design/0gBuWkidO0ROFwkiAOgmmy/Untitled?node-id=0-1&node-type=canvas&t=cqKcp5cLqMiwmeTn-0), donde se delimitaron en primera instancia los elementos más atómicos, para ir construyendo componente a componente el diseño completo de la aplicación.

Se ha diseñado mobile-first, con diseño responsive en dos puntos de quiebre: mobile y desktop.

## Gestión del Proyecto 🗂

Para el desarrollo y la gestión del proyecto se ha utilizado [Trello](https://trello.com/invite/b/6717a748c9fdfbf6ac89960a/ATTI373fffdc7037685d9fb5cf2a78b95b57765EE4D6/crowdmap)

## Instalación 🛠️

1. Clona los repositorios:

```bash
Front:
 git clone https://github.com/tomi-casabona/team-7-hackaton

Back:
 git clone https://github.com/llavefija/HackatonEquipo7_2024_Backend

```

2. Haz npm install en el repo del front.

## Estructura del proyecto 📐

Como proyecto de desarrollo Full-Stack, el proyecto se divide en Front y en Back, resultando en dos estructuras distintivas que pueden verse en los respectivos README.

El front del proyecto se ha desarrollado en React Vite con Tailwind, centrándose en una estructura de componentes.

La estructura actual del front es la siguiente:

```plaintext
/
├── TEAM-7-FRONTEND
│   ├── public
│   ├── src/
│   │    ├──api
│   │    │     ├── apiUrls.jsx
│   │    │     └── pointsCoords.geojson
│   │    ├── assets
│   │    ├── components
│   │    │     ├── Button
│   │    │     ├── Footer
│   │    │     ├── HeatMap
│   │    │     ├── Input
│   │    │     ├── MapFormComponent
│   │    │     └── NavBar
│   │    ├──data
│   │    │     └──  terme-municipal.geojson
│   │    ├──hooks
│   │    │     └──  useFetch.jsx
│   │    ├──layout
│   │    │     └── Layout.jsx
│   │    ├──pages
│   │    │      ├── CurrentPlace
│   │    │      ├── Home
│   │    │      └── MapPage
│   │    ├──router
│   │    │    └── router.jsx
│   │    ├── service
│   │    │   └── mapService.jsx
│   │    ├── utils
│   │    │   ├── formatDateTime
│   │    │   └── getCurrentDateTime.jsx
│   │    ├── config.js
│   │    ├── index.scss
│   │    ├── main.jsx
│   │    ├── tests
│   │    │   └── setupTests.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tailwind.config.js
└── └── vite.config.js
```

## Tecnologías 🔎

- React.js
- Tailwind
- Java (Spring)
- MySQL
- Jupyter Notebook
- PowerBI
- Python

## Uso 🔩

El programa debe iniciarse primero en el back.

Para compilar:

```
Compila la aplicación.
```

Una vez iniciado el back, en el front:

```
npm run dev
```

> [!IMPORTANT]
> La conexión entre Frontend y Backend se ha realizado mediante un Tunnel [Ngrok](https://ngrok.com/)

Abre el enlace que aparece con tu puerto local.

## Contribución 🤝

1. Haz un fork al repositorio.
2. Crea una nueva rama: `git checkout -b feature/name`.
3. Haz tus cambios.
4. Haz push de tu rama: `git push origin feature/name`.
5. Crea un pull request.

## Coders👩‍💻

Este proyecto ha sido desarrollado por:

- [Isabel Afonso](https://github.com/IsaLagu)
- [Tomás Casanova ](https://github.com/tomi-casabona)
- [Valentina Toni](https://github.com/ItalianCookieMonster)
- [Mery Alvarez](https://github.com/meryalvhe)
- [Abel Cumbreño](https://github.com/llavefija)
- [Rosi Moreno](https://github.com/RosiMoreno)
- [Pau Fernández](https://github.com/PauFernandezRipolles)
- [Juan Ramón Porta](https://github.com/jraporta)
- [Albert Lanza](https://github.com/albertlnz)
