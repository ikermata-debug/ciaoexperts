import {
  Shield,
  CheckCircle2,
  XCircle,
  Briefcase,
  Route,
  CalendarCheck2,
  ArrowRight,
  ClipboardList,
  Gauge,
  Layers,
  Handshake
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const HERO_SECTION_VIDEO =
  'https://videos.pexels.com/video-files/4496268/4496268-hd_1920_1080_25fps.mp4';

export function TecnicoContratacion({ t, onBookDemo }: { t: any, onBookDemo: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const reduce = !!prefersReducedMotion;

  const sectionReveal = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.65, ease: 'easeOut' }
    }
  };

  const listStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.08
      }
    }
  };

  const itemReveal = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0 : 0.45, ease: 'easeOut' }
    }
  };

  const heroStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.11,
        delayChildren: reduce ? 0 : 0.05
      }
    }
  };

  const heroItem = {
    hidden: reduce ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 18, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const cardLift = reduce
    ? {}
    : { y: -5, scale: 1.01, transition: { type: 'spring' as const, stiffness: 260, damping: 22 } };

  const rowIconHover = reduce
    ? {}
    : { scale: 1.12, rotate: -4, transition: { type: 'spring' as const, stiffness: 400, damping: 18 } };

  const workModel = [
    {
      title: 'Direccion y gobierno',
      desc: 'Definimos prioridades, responsables y criterios de decision con comite ejecutivo.'
    },
    {
      title: 'Roadmap y ejecucion',
      desc: 'Convertimos objetivos en un plan 30-60-90 y bajamos cada iniciativa a acciones concretas.'
    },
    {
      title: 'Adopcion de equipo',
      desc: 'Acompanamos a los lideres de area para asegurar implementacion real, no teoria.'
    },
    {
      title: 'Seguimiento de impacto',
      desc: 'Medimos avance con KPIs de negocio para mantener foco y accountability.'
    }
  ];

  const deliverables = [
    ['Mapa de oportunidades IA', 'Listado priorizado por impacto y viabilidad.'],
    ['Plan 30-60-90', 'Acciones, responsables, hitos y metricas por iniciativa.'],
    ['Ritmo de direccion', 'Cadencia de comite y decisiones de seguimiento.'],
    ['Cuadro de mando ejecutivo', 'KPIs de negocio para evaluar retorno real.']
  ];

  const first90Days = [
    {
      label: 'Semanas 1-2',
      title: 'Diagnostico + foco',
      desc: 'Que esta funcionando, que esta bloqueado y que debe priorizarse ya.'
    },
    {
      label: 'Semanas 3-6',
      title: 'Plan de ejecucion',
      desc: 'Roadmap operativo con responsables, secuencia y objetivos medibles.'
    },
    {
      label: 'Semanas 7-12',
      title: 'Implementacion + metricas',
      desc: 'Ejecucion de iniciativas prioritarias con seguimiento de KPIs.'
    }
  ];

  const pageEnter = reduce
    ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
    : { opacity: 0, y: 36, scale: 0.982, filter: 'blur(10px)' };

  return (
    <motion.div
      initial={pageEnter}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{
        duration: reduce ? 0 : 0.78,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: reduce ? 0 : 0.55 },
        filter: { duration: reduce ? 0 : 0.52 }
      }}
      exit={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, y: -16, scale: 0.99, filter: 'blur(6px)', transition: { duration: 0.28, ease: 'easeIn' } }
      }
      className="min-h-screen origin-top pt-20"
    >
      <motion.section
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: reduce ? 0 : 0.75, ease: 'easeOut' }}
        className="relative overflow-hidden px-4 py-14"
      >
        <motion.video
          className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full object-cover"
          initial={reduce ? false : { scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduce ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2200&q=80"
        >
          <source src={HERO_SECTION_VIDEO} type="video/mp4" />
        </motion.video>
        <motion.div
          className="absolute inset-0 z-[1] bg-slate-950/65"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.55, ease: 'easeOut' }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <motion.div
            className="relative z-10 py-2 pr-4 lg:col-span-8"
            variants={heroStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.div variants={heroItem} className="glass-card mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
              Servicio ejecutivo fractional
            </motion.div>
            <motion.h1 variants={heroItem} className="text-4xl md:text-6xl font-black leading-[0.95] text-white mb-6">
              CAIO as a Service
            </motion.h1>
            <motion.p variants={heroItem} className="text-lg text-slate-100 max-w-4xl">
              Liderazgo de IA para direccion general: definimos prioridades, gobernamos ejecucion y medimos impacto
              sin necesidad de contratar un C-Level interno a tiempo completo.
            </motion.p>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduce ? 0 : 0.65, ease: 'easeOut', delay: reduce ? 0 : 0.15 }}
            whileHover={reduce ? undefined : { y: -3, transition: { type: 'spring', stiffness: 280, damping: 24 } }}
            className="glass-card relative z-10 p-8 lg:col-span-4"
          >
            <h2 className="text-xl font-black mb-5">Resumen rapido</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="space-y-4 text-sm text-slate-100">
              <motion.div variants={itemReveal} className="flex items-start gap-3">
                <motion.span className="mt-0.5 inline-flex shrink-0 text-white/90" whileHover={rowIconHover}><Briefcase className="w-4 h-4" /></motion.span>
                Empresas 50-500 empleados
              </motion.div>
              <motion.div variants={itemReveal} className="flex items-start gap-3">
                <motion.span className="mt-0.5 inline-flex shrink-0 text-white/90" whileHover={rowIconHover}><Layers className="w-4 h-4" /></motion.span>
                Modelo embedded + fractional
              </motion.div>
              <motion.div variants={itemReveal} className="flex items-start gap-3">
                <motion.span className="mt-0.5 inline-flex shrink-0 text-white/90" whileHover={rowIconHover}><Gauge className="w-4 h-4" /></motion.span>
                Objetivo: ROI y velocidad de ejecucion
              </motion.div>
              <motion.div variants={itemReveal} className="flex items-start gap-3">
                <motion.span className="mt-0.5 inline-flex shrink-0 text-white/90" whileHover={rowIconHover}><Handshake className="w-4 h-4" /></motion.span>
                Trabajo junto a CEO/COO y lideres de area
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-14 px-4"
      >
        <div className="glass-card mx-auto max-w-7xl p-8">
          <motion.h2
            className="text-3xl font-black mb-8"
            initial={reduce ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: 'easeOut' }}
          >
            Como operamos dentro de tu empresa
          </motion.h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-4">
            {workModel.map((item, i) => (
              <motion.div
                variants={itemReveal}
                whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                key={i}
                className="glass-card glass-card--sm grid items-start gap-4 p-5 md:grid-cols-12 md:gap-4"
              >
                <div className="md:col-span-3">
                  <p className="text-xs uppercase tracking-[0.14em] font-black text-slate-500 dark:text-slate-400">Bloque {i + 1}</p>
                  <h3 className="text-xl font-black mt-1">{item.title}</h3>
                </div>
                <p className="md:col-span-9 text-slate-600 dark:text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div whileHover={reduce ? undefined : cardLift} className="glass-card overflow-hidden p-8">
            <motion.img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
              alt="Equipo de direccion IA"
              className="mb-5 h-40 w-full rounded-md object-cover"
              loading="lazy"
              initial={reduce ? false : { opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduce ? 0 : 0.65, ease: 'easeOut' }}
              whileHover={reduce ? undefined : { scale: 1.02 }}
            />
            <h2 className="text-2xl font-black mb-6">Incluye</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-3 text-slate-700 dark:text-slate-300">
              {['Comite de decision con direccion','Roadmap 30-60-90 con responsables','Acompanamiento de implementacion','KPIs ejecutivos y seguimiento continuo'].map((item, i) => (
                <motion.div key={i} variants={itemReveal} className="flex items-start gap-3">
                  <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-500" whileHover={rowIconHover}><CheckCircle2 className="w-5 h-5" /></motion.span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : cardLift} className="glass-card overflow-hidden p-8">
            <motion.img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
              alt="Riesgos de ejecucion sin estrategia"
              className="mb-5 h-40 w-full rounded-md object-cover"
              loading="lazy"
              initial={reduce ? false : { opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduce ? 0 : 0.65, ease: 'easeOut' }}
              whileHover={reduce ? undefined : { scale: 1.02 }}
            />
            <h2 className="text-2xl font-black mb-6">No incluye</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-3 text-slate-700 dark:text-slate-300">
              {['Consultoria de slides sin ejecucion','Automatizaciones aisladas sin estrategia','Sustitucion de tu CTO o estructura tecnica interna'].map((item, i) => (
                <motion.div key={i} variants={itemReveal} className="flex items-start gap-3">
                  <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-500" whileHover={rowIconHover}><XCircle className="w-5 h-5" /></motion.span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-14 px-4">
        <div className="glass-card mx-auto max-w-7xl p-8">
          <h2 className="text-3xl font-black mb-8">Que recibe direccion cada mes</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-3">
            {deliverables.map(([title, desc], i) => (
              <motion.div variants={itemReveal} key={i} whileHover={reduce ? undefined : { x: 4, transition: { type: 'spring', stiffness: 380, damping: 28 } }} className="glass-card glass-card--sm grid gap-4 p-4 md:grid-cols-12">
                <p className="md:col-span-4 font-bold text-slate-900 dark:text-white">{title}</p>
                <p className="md:col-span-8 text-slate-600 dark:text-slate-300">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div whileHover={reduce ? undefined : cardLift} className="glass-card p-8">
            <h2 className="text-2xl font-black mb-5">Encaja si...</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="space-y-3">
              {['Eres CEO/COO y necesitas foco en IA con retorno.','Tienes presion competitiva y poco margen para experimentar.','Tu equipo ya empezo con IA, pero falta direccion ejecutiva.'].map((item, i) => (
                <motion.div key={i} variants={itemReveal} className="flex items-start gap-3">
                  <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-500" whileHover={rowIconHover}><CheckCircle2 className="w-5 h-5" /></motion.span>
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : cardLift} className="glass-card p-8">
            <h2 className="text-2xl font-black mb-5">No encaja si...</h2>
            <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="space-y-3">
              {['Buscas solo un proveedor tecnico por horas.','No hay sponsor directivo para ejecutar decisiones.','No existe voluntad de medir impacto en negocio.'].map((item, i) => (
                <motion.div key={i} variants={itemReveal} className="flex items-start gap-3">
                  <motion.span className="mt-0.5 inline-flex shrink-0 text-slate-500" whileHover={rowIconHover}><XCircle className="w-5 h-5" /></motion.span>
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-14 px-4">
        <div className="glass-card mx-auto max-w-7xl p-8">
          <h2 className="text-3xl font-black mb-8">Que pasa en 90 dias</h2>
          <motion.div variants={listStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
            {first90Days.map((step, i) => (
              <motion.div variants={itemReveal} whileHover={reduce ? undefined : cardLift} transition={{ type: 'spring', stiffness: 260, damping: 20 }} key={i} className="glass-card glass-card--sm p-5">
                <motion.div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700"
                  whileHover={reduce ? undefined : { rotate: 6, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                >
                  {i === 0 && <ClipboardList className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
                  {i === 1 && <Route className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
                  {i === 2 && <CalendarCheck2 className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
                </motion.div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 mb-2">{step.label}</p>
                <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="py-20 px-4">
        <motion.div whileHover={reduce ? undefined : { scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="glass-card mx-auto max-w-5xl p-10">
          <motion.div
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-500/10 dark:bg-slate-500/20"
            animate={reduce ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Shield className="h-10 w-10 text-slate-600 dark:text-slate-300" />
          </motion.div>
          <motion.h2
            className="mb-5 text-center text-4xl font-black leading-[0.95] md:text-5xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 0.55, ease: 'easeOut' }}
          >
            Quieres validar si encaja en tu empresa?
          </motion.h2>
          <motion.p
            className="mx-auto mb-8 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-300"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: 'easeOut', delay: reduce ? 0 : 0.08 }}
          >
            En una sesion ejecutiva revisamos situacion actual, prioridades y plan inicial para empezar con foco.
          </motion.p>
          <div className="flex justify-center">
            <motion.button
              whileHover={reduce ? undefined : { scale: 1.05, y: -3, boxShadow: '0 20px 45px rgba(15, 23, 42, 0.22)' }}
              whileTap={{ scale: reduce ? 1 : 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              onClick={onBookDemo}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold"
            >
              Reservar diagnostico
              <motion.span
                className="inline-flex"
                animate={reduce ? undefined : { x: [0, 5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
