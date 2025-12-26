import { useState, useCallback, useRef, useEffect } from 'react';
import { banner, help, whoisridze, discography, social, contactme, secret } from '../data/commands';
import { urls, password } from '../data/config';

export interface OutputLine {
  id: number;
  content: string;
  className: string;
  noAnimation: boolean;
}

// Convert consecutive spaces to &nbsp; to preserve ASCII art spacing
function preserveSpaces(text: string): string {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === " " && text.charAt(i + 1) === " ") {
      result += "&nbsp;&nbsp;";
      i++;
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

export function useTerminal() {
  const [output, setOutput] = useState<OutputLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isPasswordMode, setIsPasswordMode] = useState(false);
  const lineIdRef = useRef(0);
  const pendingTimeoutsRef = useRef<number[]>([]);

  const addLine = useCallback((content: string, className: string = '', delay: number = 0, noAnimation: boolean = false) => {
    const id = ++lineIdRef.current;
    const processedContent = preserveSpaces(content);

    if (delay === 0) {
      setOutput(prev => [...prev, { id, content: processedContent, className, noAnimation }]);
    } else {
      const timeoutId = window.setTimeout(() => {
        setOutput(prev => [...prev, { id, content: processedContent, className, noAnimation }]);
      }, delay);
      pendingTimeoutsRef.current.push(timeoutId);
    }
  }, []);

  const addLines = useCallback((lines: string[], className: string = '', baseDelay: number = 80) => {
    lines.forEach((line, index) => {
      addLine(line, className, index * baseDelay);
    });
  }, [addLine]);

  const clearTerminal = useCallback(() => {
    pendingTimeoutsRef.current.forEach(id => clearTimeout(id));
    pendingTimeoutsRef.current = [];
    setOutput([]);
  }, []);

  const openLink = useCallback((url: string, message: string) => {
    addLine(message, 'text-color2', 0);
    setTimeout(() => {
      window.open(url, '_blank');
    }, 500);
  }, [addLine]);

  const executeSudo = useCallback(() => {
    let i = 0;
    const spamCount = 40;
    const errorMessage = "ACCESS DENIED";

    const errorInterval = setInterval(() => {
      if (i < spamCount) {
        let glitchText = errorMessage;

        if (i > spamCount / 2) {
          glitchText = glitchText
            .replace(/A/g, "Ⱥ")
            .replace(/C/g, "Ҫ")
            .replace(/E/g, "Ξ")
            .replace(/S/g, "Ƨ")
            .replace(/D/g, "Đ")
            .replace(/N/g, "И")
            .replace(/I/g, "ɪ")
            .replace(/O/g, "Ø");
        }

        if (i > spamCount - 3) {
          glitchText = glitchText.split("").join(" ");
        }

        addLine(glitchText, "text-error", 0);
        i++;
      } else {
        clearInterval(errorInterval);
        clearTerminal();

        addLine("<br>", "", 0);

        setTimeout(() => {
          addLine(
            "<span class='glitch-text' style='font-size: 20px;'>T̴͚H̴̹E̶ ̴S̵Y̷S̵T̸E̶M̴ ̸R̷E̸C̶O̴G̶N̷I̸Z̶E̸S̸ ̶Y̶O̸U̸</span>",
            "text-error",
            0
          );
        }, 500);

        setTimeout(() => {
          addLine("<br>", "", 0);
          addLine("T̴͚Thank you for your attention.", "text-color2", 0);
          addLine("<br>", "", 0);
        }, 1000);

        setTimeout(() => {
          addLine(
            "I have something for you: <a href='https://t.me/+QdFrLjqQUCswYTMy' target='_blank'>telegram/???</a>",
            "text-color2",
            0
          );
          addLine("<br>", "", 0);
        }, 1500);
      }
    }, 50);
  }, [addLine, clearTerminal]);

  const executeCommand = useCallback((cmd: string) => {
    const command = cmd.toLowerCase().trim();

    switch (command) {
      case 'help':
        addLines(help, 'text-color2 margin');
        break;
      case 'whoisridze':
        addLines(whoisridze, 'text-color2 margin');
        break;
      case 'discography':
        addLines(discography, 'text-color2 margin');
        break;
      case 'social':
        addLines(social, 'text-color2 margin');
        break;
      case 'contactme':
        addLines(contactme, 'text-color2 margin');
        break;
      case 'secret':
        setIsPasswordMode(true);
        break;
      case 'sudo':
        executeSudo();
        break;
      case 'password':
        addLine('<span class="inherit">I expected more from you...</span>', 'text-error', 100);
        break;
      case 'history':
        addLine('<br>', '', 0);
        commandHistory.forEach((cmd, index) => {
          addLine(cmd, 'text-color2', index * 80);
        });
        addLine('<br>', '', commandHistory.length * 80 + 50);
        break;
      case 'clear':
        setTimeout(() => clearTerminal(), 1);
        break;
      case 'banner':
        addLines(banner, '');
        break;
      case 'youtube':
        openLink(urls.youtube, 'Opening YouTube...');
        break;
      case 'instagram':
        openLink(urls.instagram, 'Opening Instagram...');
        break;
      case 'spotify':
        openLink(urls.spotify, 'Opening Spotify...');
        break;
      case 'applemusic':
      case 'apple music':
        openLink(urls.applemusic, 'Opening Apple Music...');
        break;
      case 'soundcloud':
        openLink(urls.soundcloud, 'Opening SoundCloud...');
        break;
      case 'telegram':
        openLink(urls.telegram, 'Opening Telegram Music Channel...');
        break;
      case 'shitpost':
        openLink(urls.shitpost, 'Opening Telegram Shitpost Channel...');
        break;
      case 'linktree':
        openLink(urls.linktree, 'Opening Linktree...');
        break;
      default:
        addLine(
          '<span class="inherit">Unknown command. The void does not understand you. Perhaps <span class="text-command">\'help\'</span> will guide you...</span>',
          'text-error',
          100
        );
        break;
    }
  }, [addLine, addLines, clearTerminal, commandHistory, executeSudo, openLink]);

  const handleSubmit = useCallback(() => {
    if (isPasswordMode) {
      if (currentInput === password) {
        addLines(secret, 'text-color2 margin', 120);
      } else {
        addLine('Wrong password', 'text-error', 0);
      }
      setIsPasswordMode(false);
      setCurrentInput('');
      return;
    }

    const cmd = currentInput.trim();
    if (cmd) {
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(commandHistory.length + 1);
    }

    addLine(`stranger@ridze.vercel.app:~$ ${currentInput}`, 'no-animation', 0, true);

    if (cmd) {
      executeCommand(cmd);
    }

    setCurrentInput('');
  }, [currentInput, isPasswordMode, commandHistory.length, addLine, addLines, executeCommand]);

  const handleHistoryUp = useCallback(() => {
    if (isPasswordMode) return;
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCurrentInput(commandHistory[newIndex] || '');
    }
  }, [historyIndex, commandHistory, isPasswordMode]);

  const handleHistoryDown = useCallback(() => {
    if (isPasswordMode) return;
    if (historyIndex < commandHistory.length) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentInput(commandHistory[newIndex] || '');
    }
  }, [historyIndex, commandHistory, isPasswordMode]);

  // Show banner on mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      addLines(banner, '');
    }, 100);
    return () => clearTimeout(timeout);
  }, [addLines]);

  // Console easter eggs
  useEffect(() => {
    console.log(
      "%cERROR [0x0VOID]: SYSTEM CRASH - SEGMENTATION F̵̥̖͗̽͜͝A̴͉̤̎̓͠I̶̲̖̍̾L̷̼̲̋̀E̷̗̖͘D̵̡̮̎-___--",
      "color: #ff0033; font-weight: bold; font-size: 22px; text-shadow: 0 0 5px #ff0033;"
    );
    console.log(
      `%cEntity detected. Password: '${password}'`,
      "color: #3e3636; font-style: italic;"
    );
    console.log(
      "%c>>>VOID.CORRUPTION.DETECTED_000000000000̴̯̒!!!—Y̵O̸U̴_W̷E̶R̵E̶_N̸O̴T̶_̴S̵U̴P̴P̵O̵S̷E̵D̸_̴T̷O̵_̸S̶E̴E̷_̸T̶H̵I̵S̶...",
      "color: #d7a823; font-weight: bold;"
    );
  }, []);

  return {
    output,
    currentInput,
    setCurrentInput,
    isPasswordMode,
    handleSubmit,
    handleHistoryUp,
    handleHistoryDown,
  };
}
