import './Button.css';

/**
 * Bouton du site.
 * - avec `href`   → c'est un lien <a>
 * - avec `onClick` → c'est un vrai <button>
 *
 * variant : 'default' | 'primary' | 'yellow' | 'small'
 * external : ouvre dans un nouvel onglet (LinkedIn, GitHub...)
 */
export default function Button({
  children,
  href,
  onClick,
  icon: Icon,
  variant = 'default',
  external = false,
  download = false,
}) {
  const className = `btn btn--${variant}`;
  const content = (
    <>
      {Icon && <Icon />}
      {children}
    </>
  );

  if (!href) {
    return (
      <button type="button" className={className} onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={className}
      download={download || undefined}
      // noopener : la page ouverte ne peut pas contrôler notre onglet (sécurité)
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {content}
    </a>
  );
}
