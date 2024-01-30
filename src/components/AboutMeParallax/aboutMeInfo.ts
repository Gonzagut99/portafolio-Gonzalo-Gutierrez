import type { FunctionComponent } from "react"
import { TAGS } from '../projectTypesReact'

type VariantLevel = 'red' | 'yellow' | 'green'
type Level = 'Básico' | 'Intermedio' | 'Avanzado'
type BadgeProps = {
    className: string;
  };

export type Skill={
    name:string,
    icon:FunctionComponent<BadgeProps>,
    levelVariant:VariantLevel,
    level:Level
    description?:string
}


export const techSkills:Skill[] = [
    {
        name:TAGS.JAVASCRIPT.name,
        icon:TAGS.JAVASCRIPT.icon,
        level:"Avanzado",
        levelVariant:"red",
        description:'Domino los métodos de manipulación de strings, arrays, objetos (prototipos) y DOM; así como, conceptos importantes como hoisting, closures, recursividad, lazy loading y la API de IntersectionObserver. Por otro lado conozco el manejo del paradigma de POO en Js, asincronía, objeto location, patrones de diseño básicos y estructura de datos como hash tables, singly linked lists, stacks y queues. De igual manera, tengo conocimiento en el uso de librerías como jQuery, y lodash. Adicionalmente, se utilizar correctamente HTML semántico, y las etiquetas meta'
    },
    {
        name:TAGS.CSS.name,
        icon:TAGS.CSS.icon,
        level:"Avanzado",
        levelVariant:"red",
        description:'Conocimiento práctico en pseudoclases y pseudoelementos de CSS, así como en el uso de selectores, flexbox, grid, media queries, animaciones, transiciones, transformaciones, variables, especificidad, y metodologías de CSS (BEM, SMACSS, Atomic Design). Además, tengo conocimiento en el uso de librerías básicas como Bootstrap'
    },
    {
        name:TAGS.TAILWIND.name,
        icon:TAGS.TAILWIND.icon,
        level:"Avanzado",
        levelVariant:"red",
        description:'En vista de que esta libreria se ha convertido en un framework css, he decidido incluirla en mis habilidades. Tengo conocimiento en el uso de sus clases, así como en la creación de componentes y temas personalizados y en la configuración de su archivo de configuración. Además, de utilizar librerias y sistemas de diseño basados en Tailwind como Flowbite'
    },
    {
        name:TAGS.REACT.name,
        icon:TAGS.REACT.icon,
        level:"Intermedio",
        levelVariant:"yellow",
        description:'Conocimiento práctico en creaión de componentes usandos los hooks useState, useEffect, useContext, y useRef. Además, tengo conocimiento en el uso de librerías como react-router-dom, react-icons, react-lazy-load-image-component, react-intersection-observer, y react-email, react-scroll, y react-spring'
    },
    {
        name:TAGS.ASTRO.name,
        icon:TAGS.ASTRO.icon,
        level:"Intermedio",
        levelVariant:"yellow",
        description:'Conocimiento práctico en el framework de Astro, así como en el uso de sus componentes, layouts, partials, directivas para el lado del cliente. Criterio para integrar React o Svelte en Astro; de hecho, este sitio web está hecho con Astro junto con integraciones de React y Svelte'
    },
    {
        name:TAGS.THYMELEAF.name,
        icon:TAGS.THYMELEAF.icon,
        level:"Intermedio",
        levelVariant:"yellow",
        description:'Conocimientos y práctica en la creación de interfaces basadas en Java con la libreria UI Thymeleaf, así como en el uso de sus atributos, directivas, y expresiones'
    },
    {
        name:TAGS.PREACT.name,
        icon:TAGS.PREACT.icon,
        level:"Básico",
        levelVariant:"green",
        description:'Un framework similar a React, el cual he utilizado muy poco, pero comprendo las difrencias entre ambos'
    },
    {
        name:TAGS.TYPESCRIPT.name,
        icon:TAGS.TYPESCRIPT.icon,
        level:"Intermedio",
        levelVariant:"yellow",
        description:'Conozco todo lo indispensable que se tiene que saber de este lenguaje, como el uso de tipos, interfaces, clases, enums, generics, y decoradores. Además de un conocimiento basico de tsx para React, y consultas a APIs con fetch'
    },
]

export const techSkillsBackend:Skill[] = [
    {
        name:TAGS.NODE.name,
        icon:TAGS.NODE.icon,
        level:"Básico",
        levelVariant:"green",
        description:'Comprendo los conceptos del event loop, y el uso de callbacks, promises, async/await, y el uso de la API de fs. Además, tengo conocimiento en el uso de librerías como express, y nodemon. Para terminar, obviamente tengo los conocimientos básicos para crear un servidor API REST y el consumo de bases de datos no relacionales con Node como MongoDB'
    },
    {
        name:TAGS.SPRING.name,
        icon:TAGS.SPRING.icon,
        level:"Intermedio",
        levelVariant:"yellow",
        description:'Creación de API REST con Spring Boot, así como el uso de Spring Data JPA para el consumo de bases de datos relacionales como MySQL, y PostgreSQL. Además, tengo conocimiento en el uso de librerías como Spring Security, Spring Web, y Spring Validation'
    },
    {
        name:TAGS.MYSQL.name,
        icon:TAGS.MYSQL.icon,
        level:"Intermedio",
        levelVariant:"yellow",
        description:'Como todos los motores de bases de datos relacionales, conozco el uso de las sentencias básicas de SQL, así como el uso de joins, subqueries. Por otro lado tambien tengo conocimiento práctico en clausulas bpasicas (all, any, some, in, not in, having) y funciones de agregación, funciones de agrupación, y funciones matemáticas (count, sum, max, min, avg, etc)'
    },
    {
        name:TAGS.POSTGRESSQL.name,
        icon:TAGS.POSTGRESSQL.icon,
        level:"Básico",
        levelVariant:"green",
        description:'Como Posgress funciona de manera similar a MySQL se todo lo que se tiene que saber de este motor de bases de datos en cuanto a similitudes con MySQL, pero en cuanto a diferencias tengo leves conocimientos'
    },
    {
        name:TAGS.PYTHON.name,
        icon:TAGS.PYTHON.icon,
        level:"Básico",
        levelVariant:"green",
        description:'Dominio aceptable del lenguaje en cuanto a tipos de datos (listas, tuplas, diccionarios, sets), estructuras de control (if, for, while), funciones, y clases. Además, tengo conocimiento en los metodos de strings y listas, asi como el uso de los concepto de Slice Syntax y List/Dictionary Comprehension; también, conozco el paradigma de POO en Python, estructuras de datos, hash tables, maps, singly linked lists, stacks, y queues. Finalmente, en cuanto a librerias solo conozco levemente Flask, y para los entornos de desarrollo, se crear entornos virtuales'
    },
    {
        name:TAGS.MONGODB.name,
        icon:TAGS.MONGODB.icon,
        level:"Básico",
        levelVariant:"green",
        description:'Conocimientos y práctica en los conceptos de las bases de datos no relacionales como MongoDB, así como en el uso de sus métodos de manipulación de datos, el uso de sus métodos de agregación, métodos de filtrado, métodos de indexación y creación de vistas. Además, tengo conocimiento en el uso de librerías como Mongoose'
    },
    {
        name:TAGS.NEXT.name,
        icon:TAGS.NEXT.icon,
        level:"Básico",
        levelVariant:"green",
        description:'Como framework fullstack, estoy considerando esta tecnología dentro de mis habilidades backend, pero solo tengo conocimientos básicos de su uso, y de su integración con React'
    },
]

export const techSkillsAdditional:Skill[] = [
    {
        name:`${TAGS.FIGMA.name} y Diseño UX/UI`,
        icon:TAGS.FIGMA.icon,
        level:"Avanzado",
        levelVariant:"red",
        description:'Proficiencia en los conceptos de UX/UI, como accesibilidad, paletas de color, tipografía, temas, y sistemas de diseño. Uso Figma para la creación de prototipos de alta fidelidad por el dominio de las herramientas que tiene Figma como autolayout, componentes, variantes y sus instancias, animaciones, y máscaras; también, domino una gran variedad de plugins. Para los sistemas de diseño suelo utilizar las librerías de diseño como Material UI, y Flowbite'
    },
    {
        name:TAGS.FLUTTER.name,
        icon:TAGS.FLUTTER.icon,
        level:"Intermedio",
        levelVariant:"yellow",
        description:'Conocimientos y práctica en el framework de Flutter de Dart, así como en el uso de sus widgets con manejo correcto del estado y la asincronia con Future. Por otro lado, he utilizado librerías como provider, flutter_svg, librerias para enviar notificaciones (flutter_local_notifications, firebase_mesagging), librerías de persitencia de datos locales con SQLLite, librerías de RA (ARKit o ARCore). Además, tengo conocimiento en el uso de librerías como flutter_svg, y flutter_bloc. Por otro lado, se utilizar correctamente conectar con APIs y backend'
    },
    {
        name:TAGS.SOFTSKILLS.name,
        icon:TAGS.SOFTSKILLS.icon,
        level:"Avanzado",
        levelVariant:"red",
        description:'Me identifico como una persona con una gran capacidad de aprendizaje y de adaptación a los cambios, responsable, honesta, emp+atica e integra a mis principios y convicciones sobre la vida y ética de trabajo. Además, soy una persona con capacidad de trabajo en equipo, y valoro la comunicación continua. Por otro lado, creo que tengo capacidad de liderazgo en momentos de necesidad, así como de resolución de problemas. Quisiera termianr diciendo que me considero como alguien organizado, y de gestión del tiempo óptima'
    },
    {
        name:TAGS.ENGLISHLANGUAGE.name,
        icon:TAGS.ENGLISHLANGUAGE.icon,
        level:"Avanzado",
        levelVariant:"red",
        description:'Cuento con la certificación ECPE expedida por la universidad de Cambridge que acredita mi conocimiento C1 de Inglés. Tengo conocimiento de inglés técnico para el campo de TI. Asimismo, cuento con una certificación en la enseñanza del inglés ELT provista por el instituto de comunicación Thomas Jefferson'
    },
    {
        name:TAGS.AGILEMETHODS.name,
        icon:TAGS.AGILEMETHODS.icon,
        level:"Intermedio",
        levelVariant:"yellow",
        description:'Se trabajar mas que nada con la metodología Scrum, pero también tengo conocimiento en el uso de Kanban. Además, tengo conocimiento en el uso de herramientas como Trello, y Jira. Por otro lado, tengo conocimiento en el uso de metodologías de desarrollo como TDD, BDD, y por el momento un poco de DDD. Finalmente, tengo conocimiento en el uso de herramientas de versionamiento como Git, y GitHub'
    },
    {
        name:TAGS.CLOUDTECHS.name,
        icon:TAGS.CLOUDTECHS.icon,
        level:"Básico",
        levelVariant:"green",
        description:'He utilizado algunas herramientas de la nube como Firebase y GCP(GEngine, cuentas de servicio, y bases de datos cloud como PostgresSQL), pero solo tengo conocimientos básicos de su uso, y de su integración con React. Tambien he utilizado Azure para el despliegue de aplicaciones basadas en Node Dockerizadas en maquinas virtuales.'
    },
    {
        name:TAGS.BUSINESSNSTARTUPS.name,
        icon:TAGS.BUSINESSNSTARTUPS.icon,
        level:"Básico",
        levelVariant:"green",
        description:'Conocimiento de metodologías para idear y crear startups, así como de conceptos de negocios como el modelo de negocio, el modelo de ingresos, el modelo de costos, el modelo de crecimiento, el modelo de marketing, el modelo de ventas, y el modelo de tecnología. Además, tengo conocimiento en el uso de herramientas como el Business Model Canvas, y el Lean Canvas. Por otro lado, tengo conocimiento en el uso de metodologías como Lean Startup, y Design Thinking'
    },
]