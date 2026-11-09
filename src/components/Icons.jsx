// Icônes SVG en ligne (tracés inspirés de Lucide, licence ISC).
// Pas de librairie à installer pour une dizaine d'icônes.

function Icon({ children, size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const HomeIcon = () => (
  <Icon>
    <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
  </Icon>
);

export const UserIcon = () => (
  <Icon>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icon>
);

export const LaptopIcon = () => (
  <Icon>
    <rect x="4" y="4" width="16" height="12" rx="1" />
    <path d="M2 20h20" />
  </Icon>
);

export const BranchIcon = () => (
  <Icon>
    <circle cx="6" cy="5" r="2" />
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="7" r="2" />
    <path d="M6 7v10M18 9a6 6 0 0 1-6 6H6" />
  </Icon>
);

export const MailIcon = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Icon>
);

export const LinkedinIcon = () => (
  <Icon>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </Icon>
);

export const GithubIcon = () => (
  <Icon>
    <path d="M9 19c-4 1.5-4-2-6-2.5M15 22v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.6 4.7 4.7 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.4 0C6.1 2 5 2.3 5 2.3a4.7 4.7 0 0 0-.1 3.6A5 5 0 0 0 3.5 9.5c0 5.1 3 6.3 6 6.6a3 3 0 0 0-.9 2.4V22" />
  </Icon>
);

export const DownloadIcon = () => (
  <Icon>
    <path d="M12 4v12M6 11l6 6 6-6M4 20h16" />
  </Icon>
);

export const CoffeeIcon = () => (
  <Icon>
    <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 10h1a3 3 0 0 1 0 6h-1M8 2v3M12 2v3" />
  </Icon>
);
