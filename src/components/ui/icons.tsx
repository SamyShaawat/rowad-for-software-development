/**
 * Brand icon set: one style everywhere. 24x24, rounded 1.7px line plus a soft tinted fill of the
 * main shape, so every icon reads as a small version of the illustrations. Colour comes from
 * the text colour (currentColor), so icons work in light and dark mode and inside coloured badges.
 */
import type { ReactNode } from 'react';

type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}
/** The soft fill used on the main shape of each icon. */
const tint = { fill: 'currentColor', fillOpacity: 0.16 } as const;

export const WebIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="2.5" {...tint} />
    <path d="M3 9h18" />
    <path d="M7 13h6M7 16h3.5" />
  </Svg>
);

export const MobileIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="3" {...tint} />
    <path d="M10.5 5.5h3" />
    <circle cx="12" cy="18.2" r="0.9" fill="currentColor" />
  </Svg>
);

export const ErpIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2" {...tint} />
    <rect x="13" y="3.5" width="7.5" height="7.5" rx="2" {...tint} />
    <rect x="3.5" y="13" width="7.5" height="7.5" rx="2" {...tint} />
    <rect x="13" y="13" width="7.5" height="7.5" rx="2" fill="currentColor" />
  </Svg>
);

export const AgentsIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M10.5 3c.7 5 2.4 6.8 7.5 7.5-5.1.7-6.8 2.5-7.5 7.5-.7-5-2.4-6.8-7.5-7.5C8.1 9.8 9.8 8 10.5 3z"
      {...tint}
    />
    <path
      d="M18.5 15.2c.2 1.6.7 2.1 2.3 2.3-1.6.2-2.1.7-2.3 2.3-.2-1.6-.7-2.1-2.3-2.3 1.6-.2 2.1-.7 2.3-2.3z"
      fill="currentColor"
    />
  </Svg>
);

export const ChatbotIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M5.5 4h13A2.5 2.5 0 0 1 21 6.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.2 3.5V17H5.5A2.5 2.5 0 0 1 3 14.5v-8A2.5 2.5 0 0 1 5.5 4z"
      {...tint}
    />
    <circle cx="8.5" cy="10.5" r="1" fill="currentColor" />
    <circle cx="12" cy="10.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="10.5" r="1" fill="currentColor" />
  </Svg>
);

export const CloudIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M17.5 19H8.5a6 6 0 1 1 5.7-7.8h.8a3.9 3.9 0 0 1 3.5 7.8z" {...tint} />
    <path d="M12 16.5v-5M9.8 13.4 12 11.2l2.2 2.2" />
  </Svg>
);

export const DiscoverIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" {...tint} />
    <path d="m15.5 15.5 5 5" />
  </Svg>
);

export const DesignIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="16" rx="3" {...tint} />
    <path d="M9.5 4v16M9.5 10H21" />
  </Svg>
);

export const BuildIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m8 7.5-4.5 4.5L8 16.5M16 7.5l4.5 4.5-4.5 4.5M13.5 5.5l-3 13" />
  </Svg>
);

export const LaunchIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.8c3.6 2 5 5.4 5 8.7l-2.2 3.2H9.2L7 11.5c0-3.3 1.4-6.7 5-8.7z" {...tint} />
    <circle cx="12" cy="9.2" r="1.7" />
    <path d="m7.4 12.2-2.4 3.6 3.2-.5M16.6 12.2l2.4 3.6-3.2-.5M10 17.5 9.4 21M14 17.5l.6 3.5M12 17.5V21" />
  </Svg>
);

export const QaIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 19 6v5.5c0 4.2-2.8 7.3-7 9.5-4.2-2.2-7-5.3-7-9.5V6z" {...tint} />
    <path d="m8.8 12 2.3 2.3 4.1-4.6" />
  </Svg>
);

export const MaintenanceIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M14.6 4.4a4.5 4.5 0 0 0-4.7 5.9L4.6 15.6a2 2 0 0 0 2.8 2.8l5.3-5.3a4.5 4.5 0 0 0 5.9-4.7l-2.9 2.9-2.4-.4-.4-2.4z"
      {...tint}
    />
  </Svg>
);

export const ProjectIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5.5" y="4.5" width="13" height="16.5" rx="2.5" {...tint} />
    <rect x="9" y="2.5" width="6" height="4" rx="1.3" fill="currentColor" />
    <path d="m9.2 13.3 2 2 3.8-4.2" />
  </Svg>
);

export const TeamIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8.5" r="3.2" {...tint} />
    <path d="M3 19.5a6 5.2 0 0 1 12 0" />
    <circle cx="16.6" cy="9.4" r="2.5" {...tint} />
    <path d="M16.2 14.4a5 4.4 0 0 1 4.8 5.1" />
  </Svg>
);

export const SupportIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.7" {...tint} />
    <circle cx="12" cy="12" r="3.4" fill="none" />
    <path d="m5.9 5.9 3.7 3.7M18.1 5.9l-3.7 3.7M5.9 18.1l3.7-3.7M18.1 18.1l-3.7-3.7" />
  </Svg>
);

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M20.5 16.6v2.7a1.9 1.9 0 0 1-2 1.9A17.6 17.6 0 0 1 3 5.6a1.9 1.9 0 0 1 1.9-2h2.7a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.6a1.9 1.9 0 0 1-.4 2l-1.1 1.1a15.2 15.2 0 0 0 5.7 5.7l1.1-1.1a1.9 1.9 0 0 1 2-.4c.8.3 1.7.6 2.6.7a1.9 1.9 0 0 1 1.6 1.9z"
      {...tint}
    />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5.5" width="18" height="13.5" rx="2.8" {...tint} />
    <path d="m3.8 8 8.2 6 8.2-6" />
  </Svg>
);

export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M12 21.3c-4.4-4-6.6-7.3-6.6-10.3a6.6 6.6 0 0 1 13.2 0c0 3-2.2 6.3-6.6 10.3z"
      {...tint}
    />
    <circle cx="12" cy="10.8" r="2.4" fill="currentColor" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.8" {...tint} />
    <path d="M12 7.2V12l3.2 2" />
  </Svg>
);
