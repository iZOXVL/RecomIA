export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Analizamos los datos de tus clientes y te proporcionamos predicciones precisas",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/robot.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Para todos, en cualquier lugar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Compatibilidad",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Soluciones personalizadas y eficientes",
    description: "Optimizamos tus ventas con IA",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Integración fácil y rápida",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Quieres empezar un proyecto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Trabajar con RecomIA ha sido una experiencia increíble. La IA ha optimizado nuestras recomendaciones y ha aumentado nuestras ventas en un 30%. Además, nos hemos ahorrado miles de pesos en el desarrollo de algoritmos propios.",
    name: "Carlos Méndez",
    title: "Gerente de Ventas en TecnoStore",
  },
  {
    quote:
      "La integración de RecomIA fue rápida y sencilla. Gracias a sus recomendaciones personalizadas, nuestros clientes ahora prefieren nuestros servicios. Hemos visto un aumento significativo en la satisfacción del cliente.",
    name: "María Sánchez",
    title: "Directora de Marketing en ModaChic",
  },
  {
    quote:
      "RecomIA nos ha permitido ofrecer a nuestros usuarios una experiencia personalizada sin precedentes. El ahorro en costos ha sido considerable, y nuestros clientes están más contentos que nunca.",
    name: "Javier López",
    title: "CEO de MusicWave",
  },
  {
    quote:
      "Desde que implementamos RecomIA, nuestras ventas han aumentado y nuestros costos de desarrollo se han reducido. La IA de RecomIA es sin duda una herramienta poderosa para cualquier negocio.",
    name: "Ana Pérez",
    title: "Fundadora de Artesanías Pérez",
  },
  {
    quote:
      "La personalización que ofrece RecomIA ha transformado nuestro negocio. Los clientes sienten que realmente entendemos sus necesidades, y esto ha mejorado significativamente nuestra lealtad del cliente.",
    name: "Luis Rodríguez",
    title: "Cofundador de StreamPlus",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
 {
    id: 1,
    title: "Integra la API",
    desc: "Configura nuestra API en minutos siguiendo una sencilla documentación.",
    className: "md:col-span-2",
    thumbnail: "/paso_uno.png",
  },
  {
    id: 2,
    title: "Envía los Datos",
    desc: "Envía diariamente datos de clientes como preferencias, búsquedas y compras.",
    className: "md:col-span-2",
    thumbnail: "/paso_dos.png",
  },
  {
    id: 3,
    title: "Análisis Automático",
    desc: "Nuestra IA procesa y analiza los datos automáticamente.",
    className: "md:col-span-2",
    thumbnail: "/paso_tres.png",
  },
  {
    id: 4,
    title: "Recibe Recomendaciones",
    desc: "Obtén recomendaciones optimizadas listas para usar.",
    className: "md:col-span-2",
    thumbnail: "/paso_cuatro.png",
  },
];

export const socialMedia = [
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
