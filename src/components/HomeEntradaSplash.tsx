import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SPLASH_TOTAL_MS = 2600;
const BAR_DURATION_MS = 2100;

/** Imagen de fondo del splash (sustituible). */
export const DEFAULT_SPLASH_BACKGROUND =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=85';

type HomeEntradaSplashProps = {
  open: boolean;
  onDismiss: () => void;
  shouldReduceMotion: boolean;
  /** URL de imagen de fondo; por defecto vista tech / datos. */
  backgroundImage?: string;
};

export function HomeEntradaSplash({
  open,
  onDismiss,
  shouldReduceMotion,
  backgroundImage = DEFAULT_SPLASH_BACKGROUND
}: HomeEntradaSplashProps) {
  const reduce = shouldReduceMotion;
  const [pct, setPct] = useState(0);
  const onDismissRef = useRef(onDismiss);
  onDismissRef.current = onDismiss;

  useEffect(() => {
    if (!open || reduce) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, reduce]);

  useEffect(() => {
    if (!open || reduce) {
      setPct(0);
      return;
    }

    const dismissTimer = window.setTimeout(() => {
      onDismissRef.current();
    }, SPLASH_TOTAL_MS);

    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / BAR_DURATION_MS);
      const eased = 1 - (1 - t) ** 2;
      setPct(Math.round(eased * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setPct(100);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      clearTimeout(dismissTimer);
      cancelAnimationFrame(frame);
    };
  }, [open, reduce]);

  useEffect(() => {
    if (!open) setPct(0);
  }, [open]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="home-entrada-splash"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-labelledby="home-splash-title"
          className="fixed inset-0 z-[300] flex min-h-0 flex-col overflow-hidden px-6 text-center text-white will-change-transform"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          {/* Capa foto + overlays (debajo del contenido UI) */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
            <motion.img
              src={backgroundImage}
              alt=""
              className="absolute left-1/2 top-1/2 min-h-[115%] min-w-[115%] -translate-x-1/2 -translate-y-1/2 object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.09 }}
              transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-slate-950/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(2,6,23,0.92),transparent_65%)]" />
            <div
              className="absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
            <motion.div
              className="absolute -bottom-[20%] left-1/2 h-[55vh] w-[120vw] max-w-none -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl"
              animate={{ opacity: [0.2, 0.38, 0.2], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <span className="sr-only">Cargando la pagina principal, por favor espera.</span>

          <header
            className="relative z-20 flex h-16 w-full shrink-0 items-center justify-between border-b border-white/10 bg-slate-950/35 px-4 backdrop-blur-md sm:px-6"
            aria-hidden
          >
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="text-sm font-black tracking-tight text-white drop-shadow-sm"
            >
              CAIOExperts.ai
            </motion.span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
              Entrando
            </span>
          </header>

          <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center">
            <motion.div
              className="flex max-w-md flex-col items-center gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.11, delayChildren: 0.28 }
                }
              }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
                }}
                className="text-[11px] font-black uppercase tracking-[0.35em] text-white/60"
              >
                presenta
              </motion.p>
              <motion.h1
                id="home-splash-title"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } }
                }}
                className="text-3xl font-black leading-tight tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.65)] sm:text-4xl md:text-5xl"
              >
                CAIOExperts.ai
              </motion.h1>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.92 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
                }}
                className="relative flex h-16 w-16 items-center justify-center"
                aria-hidden
              >
                <div className="absolute inset-0 rounded-full border-2 border-white/20 shadow-[0_0_32px_rgba(251,191,36,0.2)]" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-400 border-r-amber-400/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full bg-amber-400/15"
                  animate={{ opacity: [0.35, 0.9, 0.35], scale: [0.92, 1, 0.92] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
                }}
                className="w-full max-w-[300px] space-y-3"
              >
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-white/55">
                  <span>Cargando experiencia</span>
                  <span className="tabular-nums text-amber-200/95">{pct}%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/15 shadow-inner">
                  <motion.div
                    className="h-full origin-left rounded-full bg-gradient-to-r from-amber-500 via-amber-200 to-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: pct / 100 }}
                    transition={{ type: 'tween', duration: 0.1, ease: 'linear' }}
                  />
                </div>
                <div className="flex justify-center gap-1.5 pt-1" aria-hidden>
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-amber-400/90 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                      animate={{ y: [0, -5, 0], opacity: [0.35, 1, 0.35] }}
                      transition={{
                        duration: 0.55,
                        repeat: Infinity,
                        delay: i * 0.12,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
