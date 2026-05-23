import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Sprout = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21v-9" />
    <path d="M12 12c0-3.6 2.7-6 6.5-6 0 3.6-2.7 6-6.5 6Z" />
    <path d="M12 15.5c0-2.7-2-4.5-5-4.5 0 2.7 2 4.5 5 4.5Z" />
  </Svg>
);

export const Sun = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3.7" />
    <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
  </Svg>
);

export const Compass = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.6 8.4l-2 5.2-5.2 2 2-5.2 5.2-2Z" />
  </Svg>
);

export const Heart = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 20s-7-4.3-9.1-9.4C1.5 7 3.8 4 7.1 4c2 0 3.5 1.1 4.9 3 1.4-1.9 2.9-3 4.9-3 3.3 0 5.6 3 4.2 6.6C19 15.7 12 20 12 20Z" />
  </Svg>
);

export const Shield = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l7.5 3v5.3c0 5.2-3.4 8.8-7.5 10.4C7.9 20.1 4.5 16.5 4.5 11.3V6L12 3Z" />
    <path d="M9 12l2 2 4-4" />
  </Svg>
);

export const Lock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4.5" y="10" width="15" height="10.5" rx="2.2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <path d="M12 14v2.5" />
  </Svg>
);

export const Sparkle = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.4L12 17l-1.9-5.6L4.5 10l5.6-1.4L12 3Z" />
    <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
  </Svg>
);

export const Clipboard = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="4.5" width="14" height="16.5" rx="2.3" />
    <path d="M9 4.5a3 3 0 0 1 6 0" />
    <path d="M9 11.5h6M9 15.5h4" />
  </Svg>
);

export const Calendar = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2.4" />
    <path d="M4 9.5h16M8.5 3v4M15.5 3v4" />
    <path d="M8.5 14h2M13.5 14h2M8.5 17.5h2" />
  </Svg>
);

export const Clock = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.3 2" />
  </Svg>
);

export const Card = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
    <path d="M3 10h18M7 14.5h4" />
  </Svg>
);

export const Monitor = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4.5" width="18" height="12.5" rx="2.2" />
    <path d="M9 21h6M12 17v4" />
  </Svg>
);

export const FileLines = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 3H7.5A2.5 2.5 0 0 0 5 5.5v13A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V8l-5-5Z" />
    <path d="M14 3v5h5M9 13h6M9 16.5h4" />
  </Svg>
);

export const Leaf = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 20c0-8.3 6.2-14 15-14 0 8.3-6.2 14-15 14Z" />
    <path d="M5 20c4-6.5 8.4-9.4 13-10.5" />
  </Svg>
);

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 12h15M12.5 5.5L19 12l-6.5 6.5" />
  </Svg>
);

export const Menu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const Close = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 12.5l4.8 4.8L19.5 7" />
  </Svg>
);

export const Mail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.4" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </Svg>
);

export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5.5 4h3.6l1.8 4.5-2.3 1.4a11.5 11.5 0 0 0 5.5 5.5l1.4-2.3L20 16.9v3.6a1.5 1.5 0 0 1-1.6 1.5C9.9 21.4 3 14.5 2.5 5.6A1.5 1.5 0 0 1 4 4Z" />
  </Svg>
);

export const Mic = (p: IconProps) => (
  <Svg {...p}>
    <rect x="9" y="2.5" width="6" height="11.5" rx="3" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5M8.5 21.5h7" />
  </Svg>
);

export const Headphones = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 14.5v-2.5a8 8 0 0 1 16 0v2.5" />
    <rect x="3" y="13.5" width="4.5" height="7" rx="2.2" />
    <rect x="16.5" y="13.5" width="4.5" height="7" rx="2.2" />
  </Svg>
);

export const Quote = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.2}>
    <path d="M10 7.5c-3 0-5 2.2-5 5.3 0 2.6 1.7 4.2 3.9 4.2 1.9 0 3.3-1.3 3.3-3.2 0-1.8-1.2-3-2.9-3-.3 0-.6 0-.8.1.3-1.4 1.6-2.5 3.2-2.8L10 7.5Z" />
    <path d="M19 7.5c-3 0-5 2.2-5 5.3 0 2.6 1.7 4.2 3.9 4.2 1.9 0 3.3-1.3 3.3-3.2 0-1.8-1.2-3-2.9-3-.3 0-.6 0-.8.1.3-1.4 1.6-2.5 3.2-2.8L19 7.5Z" />
  </Svg>
);

export const Star = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
  </Svg>
);

export const iconMap: Record<string, (p: IconProps) => React.ReactElement> = {
  sprout: Sprout,
  sun: Sun,
  compass: Compass,
  heart: Heart,
  shield: Shield,
  lock: Lock,
  sparkle: Sparkle,
  clipboard: Clipboard,
  calendar: Calendar,
  clock: Clock,
  card: Card,
  monitor: Monitor,
  file: FileLines,
  leaf: Leaf,
  mail: Mail,
  phone: Phone,
  mic: Mic,
  headphones: Headphones,
  star: Star,
};

export function Icon({ name, ...props }: IconProps & { name: string }) {
  const Cmp = iconMap[name] ?? Leaf;
  return <Cmp {...props} />;
}
