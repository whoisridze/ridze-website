import { useRef, useEffect } from 'react';
import { Cursor } from './Cursor';

interface CommandLineProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onHistoryUp: () => void;
  onHistoryDown: () => void;
  isPasswordMode: boolean;
}

export function CommandLine({
  value,
  onChange,
  onSubmit,
  onHistoryUp,
  onHistoryDown,
  isPasswordMode,
}: CommandLineProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      onHistoryUp();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      onHistoryDown();
    }
  };

  const displayValue = isPasswordMode ? '*'.repeat(value.length) : value;

  return (
    <div
      id="command"
      style={{ cursor: 'text', height: '50px', color: '#d72323' }}
      onClick={() => textareaRef.current?.focus()}
    >
      <textarea
        ref={textareaRef}
        style={{ position: 'absolute', left: '-1000px' }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <div className="command-line-show" style={{ lineHeight: '1.3em', marginTop: '-2px' }}>
        <span style={{ color: '#d72323' }}>
          {isPasswordMode ? 'Password: ' : 'stranger@ridze.vercel.app:~$ '}
        </span>
        <span id="typer">{displayValue}</span>
        <Cursor />
      </div>
    </div>
  );
}
