import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Rocket,
  ShieldCheck,
  Layers,
  Database,
  Smartphone,
  Globe2,
  CheckCircle2,
  Mail,

} from "lucide-react";
const services = [
  {
    icon: Code2,
    title: "Software a medida",
    description:
      "Creamos sistemas personalizados para automatizar procesos, gestionar clientes, ventas, inventario, reportes y operaciones internas.",
  },
  {
    icon: Globe2,
    title: "Aplicaciones web",
    description:
      "Desarrollamos plataformas modernas, rápidas y responsivas para empresas, emprendimientos y organizaciones.",
  },
  {
    icon: Smartphone,
    title: "Apps móviles",
    description:
      "Construimos soluciones móviles conectadas a APIs, paneles administrativos y bases de datos seguras.",
  },
  {
    icon: Database,
    title: "Bases de datos y APIs",
    description:
      "Diseñamos arquitecturas backend, APIs REST, autenticación, roles, permisos y modelos de datos escalables.",
  },
];

const steps = [
  "Analizamos tu necesidad",
  "Diseñamos la solución",
  "Desarrollamos el sistema",
  "Probamos y optimizamos",
  "Publicamos y damos soporte",
];

const projects = [
  {
    title: "Sistema de gestión empresarial",
    description:
      "Panel administrativo con usuarios, roles, permisos, reportes y control de operaciones.",
  },
  {
    title: "Sistema de reservas y citas",
    description:
      "Agenda digital con disponibilidad, validaciones, notificaciones y control en tiempo real.",
  },
  {
    title: "Sistema de pagos y recibos",
    description:
      "Control de clientes, deudas, comprobantes, reportes y verificación de pagos.",
  },
];

export default function RespanwCodeLanding() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <section className="relative min-h-screen px-6 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_left,#7c3aed44,transparent_35%)]" />
        <div className="relative z-10">
          <nav className="max-w-7xl mx-auto py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-wide">RespanwCode</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#servicios" className="hover:text-white transition">Servicios</a>
              <a href="#proceso" className="hover:text-white transition">Proceso</a>
              <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
              <a href="#contacto" className="hover:text-white transition">Contacto</a>
            </div>

            <a
              href="#contacto"
              className="hidden md:inline-flex px-5 py-3 rounded-full bg-white text-slate-950 font-semibold hover:bg-blue-100 transition"
            >
              Cotizar proyecto
            </a>
          </nav>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center pt-16 lg:pt-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-blue-100 backdrop-blur">
                <Rocket className="w-4 h-4" />
                Transformamos ideas en software real
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                Software a medida para hacer crecer tu negocio.
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                En RespanwCode diseñamos y desarrollamos sistemas web, APIs,
                plataformas administrativas y soluciones digitales adaptadas a las
                necesidades reales de tu empresa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-xl shadow-blue-600/30"
                >
                  Empezar proyecto
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
                >
                  Ver servicios
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-blue-600/20 rounded-[3rem] blur-3xl" />
              <div className="relative rounded-4x1 border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-2xl">
                <div className="flex gap-2 mb-6">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4 font-mono text-sm text-slate-200">
                  <p><span className="text-purple-300">const</span> startup = <span className="text-green-300">"RespanwCode"</span>;</p>
                  <p><span className="text-purple-300">function</span> crearSolucion(cliente) {'{'}</p>
                  <p className="pl-6">analizarNecesidad(cliente);</p>
                  <p className="pl-6">desarrollarSoftware();</p>
                  <p className="pl-6">optimizarProcesos();</p>
                  <p className="pl-6">publicarProyecto();</p>
                  <p>{'}'}</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-950/60 p-4 border border-white/10">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-sm text-slate-400">Diseño adaptable</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/60 p-4 border border-white/10">
                    <p className="text-3xl font-bold">API</p>
                    <p className="text-sm text-slate-400">Backend seguro</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-6 lg:px-16 py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-blue-400 font-semibold mb-3">Servicios</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">Soluciones digitales para empresas modernas.</h2>
            <p className="text-slate-400 text-lg">Construimos software con enfoque profesional, escalable y fácil de usar.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/4 p-6 hover:bg-white/4 transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proceso" className="px-6 lg:px-16 py-24 bg-[#050816]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 font-semibold mb-3">Nuestro proceso</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">De la idea al sistema publicado.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Trabajamos contigo desde el análisis inicial hasta la publicación del proyecto, cuidando diseño, funcionalidad, seguridad y rendimiento.
            </p>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/4 border border-white/10 p-4">
                  <span className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold">{index + 1}</span>
                  <span className="text-slate-200 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4x1 border border-white/10 bg-linear-to-br from-blue-600/20 to-purple-600/20 p-8">
            <Layers className="w-12 h-12 text-blue-300 mb-6" />
            <h3 className="text-3xl font-bold mb-5">Tecnologías que usamos</h3>
            <div className="grid grid-cols-2 gap-4 text-slate-300">
              {["React", "Next.js", "Node.js", "Express", "PostgreSQL", "SQL Server", "APIs REST", "Docker"].map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-300" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="px-6 lg:px-16 py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-blue-400 font-semibold mb-3">Proyectos</p>
              <h2 className="text-4xl md:text-5xl font-black">Ideas que podemos desarrollar.</h2>
            </div>
            <p className="text-slate-400 max-w-xl">Estos son ejemplos de soluciones que RespanwCode puede construir para negocios reales.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-white/4 p-7 hover:-translate-y-1 transition duration-300">
                <ShieldCheck className="w-10 h-10 text-blue-300 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 lg:px-16 py-24 bg-[#050816]">
        <div className="max-w-5xl mx-auto text-center rounded-4x1 border border-white/10 bg-white/5  p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb33,transparent_45%)]" />
          <div className="relative z-10">
            <p className="text-blue-400 font-semibold mb-3">Contacto</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">¿Listo para crear tu sistema?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              Cuéntanos tu idea y te ayudamos a convertirla en una solución digital profesional.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:contacto@respanwcode.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition font-semibold"
              >
                <Mail className="w-5 h-5" />
                contacto@respanwcode.com
              </a>
              <a
                href="https://wa.me/59100000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 lg:px-16 py-8 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
          <p>© 2026 RespanwCode. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </footer>
    </main>
  );
}
