interface OutputLineProps {
  content: string;
  className?: string;
  noAnimation?: boolean;
}

export function OutputLine({ content, className = "", noAnimation = false }: OutputLineProps) {
  const baseClass = noAnimation ? "no-animation" : "output-line";
  const combinedClass = `${baseClass} ${className}`.trim();

  return (
    <p
      className={combinedClass}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
