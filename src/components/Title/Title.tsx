interface TitleProps {
  content: string;
  className?: string;
}

const Title = ({ content, className = '' }: TitleProps): JSX.Element => {
  return (
    <h2
      className={`fw-bold mb-3 ${className}`.trim()}
      style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.18em', color: '#ffffff'}}
    >
      {content}
    </h2>
  );
};

export default Title;
