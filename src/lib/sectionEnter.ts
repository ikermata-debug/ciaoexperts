export type SectionEnterDir = 'l' | 'r' | 't' | 'b' | 'bl' | 'br' | 'tl' | 'tr' | 'scale';

/** Props listos para <motion.section> / <motion.div> con whileInView y direcciones distintas. */
export function sectionEnter(
  reduceMotion: boolean,
  dir: SectionEnterDir,
  delay = 0,
  amount = 0.2
) {
  const viewport = { once: true as const, amount };
  if (reduceMotion) {
    return {
      initial: false as const,
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport,
      transition: { duration: 0 }
    };
  }
  const initial: Record<string, number> = { opacity: 0 };
  switch (dir) {
    case 'l':
      initial.x = -44;
      break;
    case 'r':
      initial.x = 44;
      break;
    case 't':
      initial.y = -40;
      break;
    case 'b':
      initial.y = 40;
      break;
    case 'bl':
      initial.x = -36;
      initial.y = 32;
      break;
    case 'br':
      initial.x = 36;
      initial.y = 32;
      break;
    case 'tl':
      initial.x = -32;
      initial.y = -28;
      break;
    case 'tr':
      initial.x = 36;
      initial.y = -28;
      break;
    case 'scale':
      initial.scale = 0.93;
      initial.y = 28;
      break;
  }
  return {
    initial,
    whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
    viewport,
    transition: { duration: 0.56, delay, ease: [0.22, 1, 0.36, 1] as const }
  };
}
