import type { FunctionComponent } from "react"
import SpringBootIcon from "./icons/SpringBoot";
import TailwindIcon from "./icons/Tailwind";
import MySQL from "./icons/MySql";
import MongoDB from "./icons/MongoDB";
import PostgresSQL from "./icons/Postgress";
import Flutter from "./icons/Flutter";
import ReactIcon from "./icons/ReactIcon";
import Next from "./icons/Next";
import JavaScript from "./icons/JavaScript";
import Java from "./icons/Java";
import TypeScript from "./icons/TypeScript";
import Figma from "./icons/Figma";
import CSS from "./icons/CSS";
import Thymeleaf from "./icons/Thymeleaf";
import Python from "./icons/Python";
import Express from "./icons/Express";
import AstroIcon from "./icons/AstroIcon";
import Preact from "./icons/Preact";
import SQLLite from "./icons/SQLLite";
import FirebaseStore from "./icons/Firebase";
import ViteIcon from "./icons/Vite";
import NodeIcon from "./icons/NodeIcon";
import DockerIcon from "./icons/DockerIcon";
import AzureRepos from "./icons/AzureRepos.astro";

import GithubIcon from "./icons/GitHub.astro";
import ExternalLinkIcon from "./icons/External_link.astro";

import DialogHover from "./DialogHover.astro";
import SVGLink from "./SVGLink.astro";
import SoftSkills from "./icons/SoftSkills";
import LaguageIcon from "./icons/LaguageIcon";
import Brain from "./icons/Brain";
import CloudTechs from "./icons/CloudTechs";
import MoneyStack from "./icons/MoneyStack";

type TagProps = {
    className: string;
  };

export type Tag = {
    name: string,
    class: string,
    icon: FunctionComponent<TagProps>
}
//:{[key:string]:Tag}
export const TAGS = {
    SPRING:{
        name: 'SpringBoot',
        class: 'bg-[#68bd45]/10 focus:bg-[#68bd45]/50',
        icon: SpringBootIcon
    },
    FLUTTER:{
        name: 'Flutter',
        class: 'bg-[#00569E]/10 focus:bg-[#00569E]/50',
        icon: Flutter
    }, 
    TAILWIND:{
        name: 'Tailwind CSS',
        class: 'bg-[#1da5bb]/10 focus:bg-[#1da5bb]/50',
        icon: TailwindIcon
    },
    MYSQL:{
        name: 'MySQL',
        class: 'bg-[#00546B]/10 focus:bg-[#00546B]/50',
        icon: MySQL
    },
    MONGODB:{
        name: 'MongoDB',
        class: 'bg-[#01EC64]/10 focus:bg-[#01EC64]/50',
        icon: MongoDB
    },
    POSTGRESSQL:{
        name: 'PostresSQL',
        class: 'bg-[#336791]/10 focus:bg-[#336791]/50',
        icon: PostgresSQL
    },
    REACT:{
        name: 'React',
        class: 'bg-[#00D8FF]/10 focus:bg-[#00D8FF]/50',
        icon: ReactIcon
    },
    NEXT:{
        name: 'Next',
        class: 'bg-[#fff]/10 focus:bg-[#00D8FF]/50',
        icon: Next
    },
    JAVASCRIPT:{
        name: 'JavaScript Vanilla',
        class: 'bg-[#f0db4f]/10 focus:bg-[#f0db4f]/50',
        icon: JavaScript
    },
    JAVA:{
        name: 'Java',
        class: 'bg-[#E76F00]/10 focus:bg-[#E76F00]/50',
        icon: Java
    },
    TYPESCRIPT:{
        name: 'TypeScript',
        class: 'bg-[#3178C6]/10 focus:bg-[#3178C6]/50',
        icon: TypeScript
    },
    CSS:{
        name: 'CSS',
        class: 'bg-[#30a9dc]/10 focus:bg-[#30a9dc]/50',
        icon: CSS
    },
    FIGMA:{
        name: 'Figma',
        class: 'bg-[#FF7262]/10 focus:bg-[#FF7262]/50',
        icon: Figma
    },
    THYMELEAF:{
        name: 'Thymeleaf',
        class: 'bg-[#005f0f]/10 focus:bg-[#005f0f]/50',
        icon: Thymeleaf
    },
    PYTHON:{
        name: 'Python',
        class: 'bg-[#387EB8]/10 focus:bg-[#387EB8]/50',
        icon: Python
    },
    EXPRESS:{
        name: 'ExpressJS',
        class: 'bg-[#fff]/10 focus:bg-[#fff]/50',
        icon: Express
    },
    ASTRO:{
        name: 'Astro',
        class: 'bg-[#FF5D01]/10 focus:bg-[#FF5D01]/50',
        icon: AstroIcon
    },
    PREACT:{
        name: 'Preact',
        class: 'bg-[#673AB8]/10 focus:bg-[#673AB8]/50',
        icon: Preact
    },
    FIREBASE:{
        name: 'Firebase Store',
        class: 'bg-[#F6820C]/10 focus:bg-[#F6820C]/50',
        icon: FirebaseStore
    },
    SQLLite:{
        name: 'SQLLite',
        class: 'bg-[#0F80CC]/10 focus:bg-[#0F80CC]/50',
        icon: SQLLite
    },
    VITE:{
        name: 'ViteJs',
        class: 'bg-[#BD34FE]/10 focus:bg-[#BD34FE]/50',
        icon: ViteIcon
    },
    NODE:{
        name: 'NodeJs',
        class: 'bg-[#539E43]/10 focus:bg-[#539E43]/50',
        icon: NodeIcon
    },
    DOCKER:{
        name: 'Docker',
        class: 'bg-[#008fe2]/10 focus:bg-[#008fe2]/50',
        icon: DockerIcon
    },
    AZUREREPOS:{
        name: 'Azure Repos',
        class: 'bg-[#076fbd]/10',
        icon: DockerIcon
    },
    SOFTSKILLS:{
        name: 'Habilidades Blandas',
        class: 'bg-[#0ca96e]/10 focus:bg-[#0ca96e]/50',
        icon: SoftSkills    
    },
    ENGLISHLANGUAGE:{
        name: 'Inglés C1',
        class: 'bg-[#864cd2]/10 focus:bg-[#864cd2]/50',
        icon: LaguageIcon    
    },
    AGILEMETHODS:{
        name: 'Metodologías Ágiles',
        class: 'bg-[#f0db4f]/10 focus:bg-[#f0db4f]/50',
        icon: Brain    
    },
    CLOUDTECHS:{
        name: 'Tecnologías Cloud',
        class: 'bg-[#199bd1]/10 focus:bg-[#199bd1]/50',
        icon: CloudTechs
    },
    BUSINESSNSTARTUPS:{
        name: 'Negocios y Startups',
        class: 'bg-[#c5421e]/10 focus:bg-[#c5421e]/50',
        icon: MoneyStack    
    }
}

export type ProjectsType = {
    id:number
    title:string,
    technologyType:string,
    description: string,
    link?: string,
    githubFrontend?: string,
    githubBackend?: string,
    azureReposFrontend?:string,
    azureReposBackend?:string,
    images: string[],
    technologyTags: Tag[]
}

export const PROJECTS:ProjectsType[] = [
    {
        id:1,
        title:'Sistema de compras Subacom',
        technologyType:'Aplicación CMS',
        description: 'Un sistema CMS basado en SpringBoot, que utiliza MySQL para una empresa ficticia de venta de productos tecnológicos, computadoras y periféricos. La interfaz esta integrada en el proyecto Java con el framework Thymeleaf, TailwindCSS, y Javascript Vanilla.',
        githubFrontend: 'https://github.com/Gonzagut99/SistemaDeCompras_Subacom',
        images: ['/projects/subacom_dms.webp','/projects/SubacomPanoramic.webp'],
        technologyTags: [TAGS.SPRING, TAGS.TAILWIND, TAGS.JAVA, TAGS.THYMELEAF, TAGS.JAVASCRIPT]
    },
    {
        id:2,
        title:'Jabbi',
        technologyType:'Aplicación móvil e-commerce',
        description: 'App móvil de venta de productos originarios del Perú con una escuela de nutrición, denttro de la app podemos encontrar un e-commerce de venta de productos, la idea del negocio consiste en realizar calculos dependiendo delm precio del producto. Aplicacion realizada con el framework Dart de Flutter. Usa Firebase storage y SQLLite y PostgresSQL, con backend en Python y Flask.',
        githubFrontend: 'https://github.com/Gonzagut99/Jabbi',
        images: ['/projects/JabbiMockupImage.webp','/projects/JabbiMockupPanoramic.webp'],
        technologyTags: [TAGS.FLUTTER, TAGS.PYTHON, TAGS.POSTGRESSQL, TAGS.FIREBASE]
    },
    {
        id:3,
        title:'UBA Petbook',
        technologyType:'Landing Page',
        description: 'Una landing page para un emprendimiento de una aplicación móvil, utilicé tecnologías como React, Tailwind y el empaquetador Vite. Ademas almacena información Firebase store y esta alojada en esa plataforma.',
        githubFrontend: 'https://uba-petbook-landing.web.app/',
        link:'https://uba-petbook-landing.web.app/',
        images: ['/projects/UbaPetbook.webp','/projects/UBAPetbookPanoramic.webp'],
        technologyTags: [TAGS.REACT, TAGS.TAILWIND, TAGS.FIREBASE, TAGS.VITE]
    },
    {
        id:4,
        title:'Shopi',
        technologyType:'Aplicación Web E-commerce',
        description: 'Una aplicacion e-commerce sencilla que utiliza una API de productos aleatorios, se realizan manejo de estados, contexto y referencias de React. Construido con Tailwind y ViteJs.',
        githubFrontend: 'https://github.com/Gonzagut99/Shopi',
        images: ['/projects/ShopiMockupPrincipal.webp','/projects/ShopiPanoramic.webp'],
        technologyTags: [TAGS.REACT, TAGS.TAILWIND, TAGS.VITE]
    },
    {
        id:5,
        title:'CineScope',
        technologyType:'Aplicación de Consultas a APIs',
        description: 'Un proyecto centrado en practicar conceptos de CSS avannzados y fetching de datos de APIs de terceros. En este caso uso la API de la página TheMovieDB. Utilizo lazy loading de imagenes con la API de IntersectionObserver.',
        githubFrontend: 'https://github.com/Gonzagut99/CineScope',
        images: ['/projects/CineScopePrincipal.webp','/projects/CineScopePanoramic.webp'],
        technologyTags: [TAGS.JAVASCRIPT, TAGS.CSS]
    },
    {
        id:6,
        title:'Calculadora QuickMaths',
        technologyType:'Aplicación Móvil',
        description: 'Una calculadora numérica sencilla, es una aplicación móvil desarrollada con Flutter.',
        githubFrontend: 'https://github.com/Gonzagut99/QuickMaths_Calculator',
        images: ['/projects/QuickMathsMockup.webp','/projects/QuickMathsPanoramic.webp'],
        technologyTags: [TAGS.FLUTTER]
    },
    {
        id:7,
        title:'Calculadora de Subredes',
        technologyType:'Aplicación Desktop',
        description: 'Una aplicación desktop desarrollada con la interfaz que provee el IDE de Netbeans. Realiza bloques de calculo de IPs para la planificación de implementación de subredes. Es decir crea un inventario de IPs dependiendo de cuantas se necesiten para las necesidades del usuario.',
        githubFrontend: 'https://github.com/Gonzagut99/ProyectoSubredes_Algoritmos',
        images: ['/projects/calculadoraSubredesPrincipal.webp','/projects/calculadoraSubredesPanoramic.webp'],
        technologyTags: [TAGS.JAVA]
    },
    {
        id:8,
        title:'AlphaSalud',
        technologyType:'Aplicación Web',
        description: 'Una página e-commerce y landing al mismo tiempo para la venta de productos y equipos médicos, también promueve la comunicación entre médicos y pacientes. Desarrollado con CSS y Javascript Vanilla por el lado del frontend y el backend desarrollado solo con NodeJs y MongoDb.',
        azureReposFrontend:'https://dev.azure.com/equipoalpha/Alpha_Salud/_git/AlphaSalud_FrontAA4',
        azureReposBackend:'https://dev.azure.com/equipoalpha/Alpha_Salud/_git/AlphaSalud_BackAA4',
        images: ['/projects/alphasaludPrincipal.webp','/projects/alphasaludPanoramico.webp'],
        technologyTags: [TAGS.JAVASCRIPT, TAGS.CSS, TAGS.NODE, TAGS.MONGODB, TAGS.DOCKER]
    },
]