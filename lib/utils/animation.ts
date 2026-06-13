// Premium Apple-style cubic-bezier easing
export const customEase = [0.16, 1, 0.3, 1] as const;
export const springEasing = [0.34, 1.56, 0.64, 1] as const;

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      ease: customEase,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

// Split text reveal animation variants
export const splitTextVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: customEase,
    },
  }),
};

// Magnetic hover effect variants
export const magneticVariants = {
  initial: { x: 0, y: 0 },
  hover: (x: number, y: number) => ({
    x: x * 0.1,
    y: y * 0.1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
    },
  }),
};

// 3D perspective card variants
export const card3DVariants = {
  initial: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: (rotateX: number, rotateY: number) => ({
    rotateX,
    rotateY,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  }),
};

// Physics-based spring accordion variants
export const accordionVariants = {
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
      mass: 0.8,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
      mass: 0.8,
    },
  },
};

// Focus-based pricing card variants
export const pricingCardVariants = {
  initial: { scale: 1, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' },
  focus: {
    scale: 1.03,
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 168, 120, 0.2)',
    transition: {
      duration: 0.4,
      ease: customEase,
    },
  },
};
