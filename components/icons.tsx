import { IconSvgProps } from "@/types";

const base = (size?: number) => ({
  height: size ?? 24,
  width: size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
});

export const Logo: React.FC<IconSvgProps> = ({ size = 32, ...props }) => (
  <svg height={size} viewBox="0 0 40 40" width={size} {...props}>
    <defs>
      <linearGradient id="logo-gradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.35" />
      </linearGradient>
    </defs>
    <rect
      fill="url(#logo-gradient)"
      height="34"
      rx="12"
      width="34"
      x="3"
      y="3"
    />
    <path
      d="M13 27 20 12l7 15"
      fill="none"
      stroke="var(--background, #fff)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
    />
    <path
      d="M16.4 22.4h7.2"
      fill="none"
      stroke="var(--background, #fff)"
      strokeLinecap="round"
      strokeWidth="2.4"
    />
  </svg>
);

export const GithubIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      fill="currentColor"
    />
  </svg>
);

export const LinkedinIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9.5 9h3.8v1.64h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.76V21h-4v-5.66c0-1.35-.03-3.09-1.96-3.09-1.96 0-2.26 1.47-2.26 2.99V21h-4Z"
      fill="currentColor"
    />
  </svg>
);

export const TwitterIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="M17.53 3H20.5l-6.49 7.42L21.75 21h-5.98l-4.68-6.12L5.7 21H2.73l6.94-7.93L2.5 3h6.13l4.23 5.6L17.53 3Zm-1.04 16.2h1.65L7.6 4.71H5.83l10.66 14.49Z"
      fill="currentColor"
    />
  </svg>
);

export const MailIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Zm2.2-.5 6.8 5.1L18.8 7H5.2Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowUpRightIcon: React.FC<IconSvgProps> = ({
  size,
  ...props
}) => (
  <svg {...base(size)} {...props}>
    <path
      d="M7 17 17 7M9 7h8v8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const ArrowDownIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="M12 5v14M6 13l6 6 6-6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const ChevronDownIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="m6 9 6 6 6-6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const SparkIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="M12 3l1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8L12 3Zm6.5 8.5.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z"
      fill="currentColor"
    />
  </svg>
);

export const CopyIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <rect
      height="12"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.8"
      width="12"
      x="9"
      y="9"
    />
    <path
      d="M6 15H5.5A2.5 2.5 0 0 1 3 12.5v-7A2.5 2.5 0 0 1 5.5 3h7A2.5 2.5 0 0 1 15 5.5V6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const CheckIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="m5 12.5 4.5 4.5L19 7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const MenuIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const CloseIcon: React.FC<IconSvgProps> = ({ size, ...props }) => (
  <svg {...base(size)} {...props}>
    <path
      d="M6 6l12 12M18 6 6 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const MoonFilledIcon = ({ size = 24, ...props }: IconSvgProps) => (
  <svg {...base(size)} {...props}>
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 0 1-1.88.13 8.4 8.4 0 0 1-5.91-2.82 8.5 8.5 0 0 1-.83-9.8c.55-.94.15-1.4-.03-1.55-.19-.15-.75-.4-1.68.02a10 10 0 0 0 4.34 19.1 10 10 0 0 0 8.02-4.06c.6-.79.35-1.32.17-1.6Z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({ size = 24, ...props }: IconSvgProps) => (
  <svg {...base(size)} {...props}>
    <g fill="currentColor">
      <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path d="M12 1.5a1 1 0 0 1 1 1v1.2a1 1 0 1 1-2 0V2.5a1 1 0 0 1 1-1Zm0 18.8a1 1 0 0 1 1 1v1.2a1 1 0 1 1-2 0v-1.2a1 1 0 0 1 1-1ZM22.5 12a1 1 0 0 1-1 1h-1.2a1 1 0 1 1 0-2h1.2a1 1 0 0 1 1 1Zm-18.8 0a1 1 0 0 1-1 1H1.5a1 1 0 1 1 0-2h1.2a1 1 0 0 1 1 1Zm15.72-7.42a1 1 0 0 1 0 1.42l-.85.84a1 1 0 0 1-1.41-1.41l.85-.85a1 1 0 0 1 1.41 0ZM6.84 17.16a1 1 0 0 1 0 1.41l-.85.85a1 1 0 0 1-1.41-1.42l.85-.84a1 1 0 0 1 1.41 0Zm12.58 2.26a1 1 0 0 1-1.41 0l-.85-.85a1 1 0 0 1 1.41-1.41l.85.84a1 1 0 0 1 0 1.42ZM6.84 6.84a1 1 0 0 1-1.41 0l-.85-.84a1 1 0 0 1 1.41-1.42l.85.85a1 1 0 0 1 0 1.41Z" />
    </g>
  </svg>
);
