import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Sparkles,
  Users,
  BarChart3,
  Clock3,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Laptop,
  Smartphone,
  Store,
  FileText,
  Headphones,
  Code2,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Ahorra tiempo",
    description:
      "Automatizamos tareas repetitivas para que tu equipo se enfoque en vender, atender y crecer.",
  },
  {
    icon: BarChart3,
    title: "Mejores decisiones",
    description:
      "Creamos reportes y paneles para que entiendas mejor tus ventas, clientes y operaciones.",
  },
  {
    icon: Users,
    title: "Mejor atención al cliente",
    description:
      "Diseñamos sistemas fáciles de usar para mejorar la experiencia de tus clientes y colaboradores.",
  },
  {
    icon: ShieldCheck,
    title: "Información segura",
    description:
      "Protegemos tus datos con accesos, roles, permisos y buenas prácticas de desarrollo.",
  },
];

const services = [
  {
    icon: Laptop,
    title: "Sistemas web para empresas",
    description:
      "Paneles administrativos, control de ventas, clientes, inventario, reportes y gestión interna.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones móviles",
    description:
      "Apps para reservas, pedidos, atención al cliente, seguimiento y comunicación directa.",
  },
  {
    icon: Store,
    title: "Soluciones para negocios",
    description:
      "Herramientas digitales para emprendedores, tiendas, servicios, instituciones y startups.",
  },
];

const useCases = [
  "Agenda de citas y reservas",
  "Sistema de ventas e inventario",
  "Portal para clientes",

  "Reportes gerenciales",
  "Panel administrativo personalizado",
];

const process = [
  {
    title: "Escuchamos tu idea",
    description:
      "Nos cuentas qué problema quieres resolver y qué necesita tu negocio.",
  },
  {
    title: "Diseñamos la propuesta",
    description:
      "Preparamos una solución clara, visual y adaptada a tu presupuesto.",
  },
  {
    title: "Construimos tu sistema",
    description: "Desarrollamos, probamos y mejoramos cada parte contigo.",
  },
  {
    title: "Publicamos y acompañamos",
    description:
      "Lanzamos el proyecto y te damos soporte para que lo uses sin complicaciones.",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#f8fbff] text-slate-950 overflow-hidden">
      {/* 
        NAVBAR FIJO
        fixed top-0: siempre se queda arriba
        z-50: se pone encima de toda la página
        bg-[#06142f]/85: fondo azul oscuro con transparencia
        backdrop-blur-xl: efecto vidrio
      */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#06142f]/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 flex items-center justify-center shadow-xl shadow-blue-950/20">
              <Sparkles className="w-6 h-6" />
            </div>

            <div>
              <p className="text-4xl font-black tracking-tight text-white">
                RespanwCode
              </p>
              <p className="text-2xl text-blue-100 hidden sm:block">
                Software para negocios que quieren crecer
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-lg text-blue-50">
            <a href="#servicios" className="hover:text-white transition">
              Servicios
            </a>
            <a href="#beneficios" className="hover:text-white transition">
              Beneficios
            </a>
            <a href="#proceso" className="hover:text-white transition">
              Proceso
            </a>
            <a href="#contacto" className="hover:text-white transition">
              Contacto
            </a>
          </div>

          <a
            href="#contacto"
            className="hidden md:inline-flex px-6 py-3 rounded-full bg-white text-blue-950 font-bold hover:bg-blue-50 transition shadow-lg"
          >
            Cotizar proyecto
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen px-6 lg:px-16 pt-28 bg-linear-to-br from-[#06142f] via-[#0b1f49] to-[#102f6d] text-white">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_15%_20%,#60a5fa55,transparent_28%),radial-gradient(circle_at_85%_15%,#22c55e33,transparent_25%),radial-gradient(circle_at_70%_85%,#a855f755,transparent_35%)]" />

        <div className="absolute -bottom-24 left-0 right-0 h-48 bg-[#f8fbff] rounded-t-[50%]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-center pt-20 lg:pt-28 pb-40 min-h-[75vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8 text-center max-w-5xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 text-sm text-blue-50 backdrop-blur">
                <Rocket className="w-4 h-4" />
                Transformamos ideas en soluciones digitales
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.03] tracking-tight">
                Creamos sistemas que hacen más simple tu negocio.
              </h1>

              <p className="text-lg md:text-xl text-blue-50/90 max-w-3xl mx-auto leading-relaxed">
                En RespanwCode desarrollamos software a medida para empresas,
                emprendedores y equipos que necesitan ordenar procesos, vender
                mejor y atender clientes de forma más eficiente.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-blue-500 hover:bg-blue-400 transition font-bold shadow-xl shadow-blue-950/30"
                >
                  Quiero una solución
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 transition font-bold backdrop-blur"
                >
                  Ver qué hacemos
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto pt-8">
                

                <div className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur">
                  <p className="text-4xl font-black">24/7</p>
                  <p className="text-sm text-blue-100 mt-2">
                    Sistemas disponibles
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm text-blue-100 mt-2">
                    Soluciones a medida
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 lg:px-16 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-blue-600 font-bold mb-3">Servicios</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Soluciones pensadas para empresas y emprendedores.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Creamos herramientas simples de usar, bonitas y útiles para que tu
              negocio funcione mejor cada día.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-4xl bg-white border border-slate-100 p-8 shadow-xl shadow-slate-200/60 hover:-translate-y-2 transition duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="px-6 lg:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-bold mb-3">Beneficios</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Tu negocio puede trabajar mejor con el sistema correcto.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              No se trata solo de tener una página o una app. Se trata de tener
              una herramienta que te ayude a vender, organizar y crecer.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-3xl bg-slate-50 p-6 border border-slate-100"
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-black text-xl mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-linear-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl shadow-blue-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-blue-100 text-sm">Ejemplos de sistemas</p>
                <h3 className="text-2xl font-black">Podemos construir</h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-bold mb-3">Proceso simple</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Trabajamos contigo paso a paso.
            </h2>
            <p className="text-slate-600 text-lg">
              Te explicamos todo de forma clara, sin tecnicismos innecesarios.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-4xl bg-white p-7 border border-slate-100 shadow-xl shadow-slate-200/60"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACOMPAÑAMIENTO */}
      <section className="px-6 lg:px-16 py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-300 font-bold mb-3">Acompañamiento</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              No solo entregamos software, te acompañamos a usarlo.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Sabemos que un sistema debe ser fácil de entender. Por eso
              diseñamos interfaces claras y damos soporte para que tu equipo
              pueda trabajar sin miedo a la tecnología.
            </p>

            <div className="space-y-4">
              {[
                "Capacitación para tu equipo",
                "Soporte después de la entrega",
                "Mejoras según el crecimiento de tu negocio",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white/5 border border-white/10 p-8">
            <Headphones className="w-12 h-12 text-blue-300 mb-6" />
            <h3 className="text-3xl font-black mb-4">
              Ideal para negocios que quieren digitalizarse
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Si tienes procesos en Excel, WhatsApp, cuadernos o sistemas
              antiguos, podemos ayudarte a convertirlos en una plataforma moderna
              y ordenada.
            </p>
            <div className="rounded-3xl bg-white text-slate-950 p-6">
              <p className="font-black text-xl mb-2">Resultado esperado</p>
              <p className="text-slate-600">
                Menos desorden, más control y una mejor experiencia para tus
                clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-6 lg:px-16 py-24 bg-white">
  <div className="max-w-5xl mx-auto text-center rounded-[2.5rem] bg-linear-to-br from-slate-900 to-slate-700  text-white p-10 md:p-16 shadow-2xl shadow-blue-200 relative overflow-hidden">
    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top_left,#ffffff55,transparent_35%)]" />

    <div className="relative z-10">
      <div className="w-16 h-16 rounded-3xl bg-white/15 flex items-center justify-center mx-auto mb-6">
        <MessageCircle className="w-8 h-8" />
      </div>

      <p className="text-blue-100 font-bold mb-3">Contacto</p>

      <h2 className="text-4xl md:text-6xl font-black mb-6">
        Cuéntanos sobre tu idea.
      </h2>

      <p className="text-blue-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
        Cuéntanos qué necesitas y te ayudamos a encontrar la mejor solución
        digital para tu negocio.
      </p>

      {/* BOTONES DE CONTACTO RÁPIDO */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        {/* WhatsApp con código de país Bolivia: 591 */}
        <a
          href="https://wa.me/59175952931?text=Hola%20RespanwCode,%20quiero%20información%20sobre%20un%20sistema%20a%20medida."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-blue-950 hover:bg-blue-50 transition font-black"
        >
          Escribir por WhatsApp
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Correo tradicional */}
        <a
          href="mailto:wojtekvasquez@gmail.com?subject=Cotización%20de%20software&body=Hola%20RespanwCode,%20quiero%20información%20sobre%20un%20sistema%20a%20medida."
          className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 transition font-black"
        >
          Enviar correo
        </a>
      </div>

      {/* FORMULARIO OPCIONAL CON FORMSPREE */}
      <form
        action="https://formspree.io/f/xlgznrkj"
        method="POST"
        className="max-w-2xl mx-auto grid gap-4 text-left"
      >
        <input
  type="text"
  name="name"
  placeholder="Tu nombre"
  required
  className="w-full rounded-2xl px-5 py-4 bg-white/10 border border-white/30 text-white placeholder-white/60 outline-none focus:border-white focus:bg-white/20 transition"
/>

<input
  type="email"
  name="email"
  placeholder="Tu correo"
  required
  className="w-full rounded-2xl px-5 py-4 bg-white/10 border border-white/30 text-white placeholder-white/60 outline-none focus:border-white focus:bg-white/20 transition"
/>

<textarea
  name="message"
  placeholder="Cuéntanos sobre tu proyecto"
  required
  rows="5"
  className="w-full rounded-2xl px-5 py-4 bg-white/10 border border-white/30 text-white placeholder-white/60 outline-none resize-none focus:border-white focus:bg-white/20 transition"
/>

        <button
          type="submit"
          className="w-full rounded-full bg-white text-blue-950 hover:bg-blue-50 transition font-black py-4"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="px-6 lg:px-16 py-8 bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <p className="text-white font-black">RespanwCode</p>
          </div>

          <p>© 2025 RespanwCode. Software a medida para negocios.</p>
        </div>
      </footer>
    </main>
  );
}