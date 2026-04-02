import { Button } from 'react-bootstrap';
import type { CSSProperties, HTMLAttributeAnchorTarget } from 'react';

interface AppButtonProps {
  title: string;
  action?: string;
  onClick?: (name: string, action: string) => void;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
}

const AppButton = ({
  title,
  action,
  onClick,
  href,
  target,
  rel,
  type = 'button',
  className,
  style,
  disabled = false
}: AppButtonProps): JSX.Element => {
  const resolvedAction = action ?? (href ? `navigate:${href}` : type);
  const baseStyle: CSSProperties = {
    minWidth: '6.9rem',
    border: '1px solid rgba(255,255,255,0.72)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    fontSize: '0.95rem',
    letterSpacing: '0.08em',
    padding: '0.55rem 1.3rem'
  };

  return (
    <Button
      href={href}
      target={href ? target : undefined}
      rel={href && target === '_blank' ? rel ?? 'noopener noreferrer' : rel}
      type={href ? undefined : type}
      className={`app-button rounded-pill fw-bold ${className ?? ''}`.trim()}
      style={{ ...baseStyle, ...style }}
      disabled={disabled}
      onClick={() => onClick?.(title, resolvedAction)}
    >
      {title}
    </Button>
  );
};

export default AppButton;
