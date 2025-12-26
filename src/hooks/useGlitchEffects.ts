import { useEffect, useRef } from 'react';
import { glitchConfig } from '../data/config';
import { glitchChars, voidChars, redactionChar } from '../utils/glitchChars';

export function useGlitchEffects(terminalRef: React.RefObject<HTMLDivElement | null>) {
  const intervalsRef = useRef<number[]>([]);

  useEffect(() => {
    const getRandomParagraphs = (count: number): HTMLParagraphElement[] => {
      if (!terminalRef.current) return [];
      const paragraphs = terminalRef.current.querySelectorAll<HTMLParagraphElement>('p');
      if (paragraphs.length === 0) return [];

      const selected = new Set<HTMLParagraphElement>();
      while (selected.size < count && selected.size < paragraphs.length) {
        selected.add(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
      }
      return Array.from(selected);
    };

    // 1. Glitch Terminal Text
    const glitchTerminalText = () => {
      const paragraphs = getRandomParagraphs(Math.floor(Math.random() * 3) + 1);
      const originals = new Map<HTMLParagraphElement, string>();

      paragraphs.forEach((p) => {
        originals.set(p, p.innerHTML);
        const text = p.innerText;
        let glitched = "";

        for (let i = 0; i < text.length; i++) {
          if (Math.random() < 0.2) {
            glitched += glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
          } else {
            glitched += text.charAt(i);
          }
        }

        p.innerText = glitched;
        p.classList.add("glitch-text");
      });

      setTimeout(() => {
        paragraphs.forEach((p) => {
          p.innerHTML = originals.get(p) || '';
          p.classList.remove("glitch-text");
        });
      }, glitchConfig.duration.textGlitch);
    };

    // 2. Flicker Terminal
    const flickerTerminal = () => {
      if (!terminalRef.current) return;
      terminalRef.current.classList.add("terminal-flicker");
      setTimeout(() => {
        terminalRef.current?.classList.remove("terminal-flicker");
      }, glitchConfig.duration.terminalFlicker);
    };

    // 3. Reverse Text Segments
    const reverseTextSegments = () => {
      const paragraphs = getRandomParagraphs(Math.floor(Math.random() * 2) + 1);
      const originals = new Map<HTMLParagraphElement, string>();

      paragraphs.forEach((p) => {
        originals.set(p, p.innerHTML);
        const words = p.innerText.split(" ");

        for (let i = 0; i < words.length; i++) {
          if (Math.random() < 0.4 && words[i].length > 2) {
            words[i] = [...words[i]].reverse().join("");
          }
        }

        p.innerText = words.join(" ");
      });

      setTimeout(() => {
        paragraphs.forEach((p) => {
          p.innerHTML = originals.get(p) || '';
        });
      }, glitchConfig.duration.textReversal);
    };

    // 4. Leak Characters
    const leakCharacters = () => {
      const paragraphs = getRandomParagraphs(Math.floor(Math.random() * 2) + 1);

      paragraphs.forEach((p) => {
        p.setAttribute("data-leak", p.innerText);
        p.classList.add("character-leak");
      });

      setTimeout(() => {
        paragraphs.forEach((p) => {
          p.classList.remove("character-leak");
          p.removeAttribute("data-leak");
        });
      }, glitchConfig.duration.characterLeak);
    };

    // 5. Add Line Noise
    const addLineNoise = () => {
      const paragraphs = getRandomParagraphs(Math.floor(Math.random() * 2) + 1);

      paragraphs.forEach((p) => {
        const text = p.innerText;
        let noise = "";

        for (let i = 0; i < text.length; i++) {
          if (Math.random() < 0.4) {
            noise += glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
          } else {
            noise += " ";
          }
        }

        p.setAttribute("data-noise", noise);
        p.classList.add("noise-line");
        p.style.position = "relative";
      });

      setTimeout(() => {
        paragraphs.forEach((p) => {
          p.classList.remove("noise-line");
          p.removeAttribute("data-noise");
        });
      }, glitchConfig.duration.randomLineNoise);
    };

    // 6. Nightmare Inversion
    const nightmareInversion = () => {
      document.body.classList.add("nightmare-inversion");
      setTimeout(() => {
        document.body.classList.remove("nightmare-inversion");
      }, glitchConfig.duration.colorInversion);
    };

    // 7. Scramble Text
    const scrambleText = () => {
      const paragraphs = getRandomParagraphs(Math.floor(Math.random() * 2) + 1);
      const originals = new Map<HTMLParagraphElement, string>();

      paragraphs.forEach((p) => {
        originals.set(p, p.innerHTML);
        const words = p.innerText.split(" ").filter((word) => word.trim() !== "");

        for (let i = words.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [words[i], words[j]] = [words[j], words[i]];
        }

        p.innerText = words.join(" ");
      });

      setTimeout(() => {
        paragraphs.forEach((p) => {
          p.innerHTML = originals.get(p) || '';
        });
      }, glitchConfig.duration.textScramble);
    };

    // 8. Duplicate Text (stutter effect)
    const duplicateText = () => {
      const paragraphs = getRandomParagraphs(1);
      if (paragraphs.length === 0) return;

      const p = paragraphs[0];
      const original = p.innerHTML;
      const words = p.innerText.split(" ");

      for (let i = 0; i < words.length; i++) {
        if (Math.random() < 0.2 && words[i].length > 1) {
          const repetitions = Math.floor(Math.random() * 3) + 2;
          const stutter = words[i].substring(0, Math.min(3, words[i].length));
          const stutterText = Array(repetitions).fill(stutter).join("-");
          words[i] = stutterText + words[i];
        }
      }

      p.innerText = words.join(" ");

      setTimeout(() => {
        p.innerHTML = original;
      }, glitchConfig.duration.textDuplication);
    };

    // 9. Void Consumption
    const voidConsumption = () => {
      const paragraphs = getRandomParagraphs(1);
      if (paragraphs.length === 0) return;

      const p = paragraphs[0];
      const originalHTML = p.innerHTML;
      const chars = [...p.innerText];
      const consumeChance = 0.15;

      let newHTML = "";
      for (let i = 0; i < chars.length; i++) {
        if (Math.random() < consumeChance && chars[i] !== " ") {
          const voidChar = voidChars[Math.floor(Math.random() * voidChars.length)];
          newHTML += `<span class="void-char">${voidChar}</span>`;
        } else {
          newHTML += chars[i];
        }
      }

      p.innerHTML = newHTML;

      setTimeout(() => {
        p.innerHTML = originalHTML;
      }, glitchConfig.duration.voidConsumption);
    };

    // 10. Redact Text
    const redactText = () => {
      const paragraphs = getRandomParagraphs(Math.floor(Math.random() * 2) + 1);
      const originals = new Map<HTMLParagraphElement, string>();

      paragraphs.forEach((p) => {
        originals.set(p, p.innerHTML);
        const words = p.innerText.split(" ");

        let newHTML = "";
        for (let i = 0; i < words.length; i++) {
          if (words[i].length > 3 && Math.random() < 0.3) {
            const redaction = redactionChar.repeat(words[i].length);
            newHTML += `<span class="redacted">${redaction}</span> `;
          } else {
            newHTML += words[i] + " ";
          }
        }

        p.innerHTML = newHTML;
      });

      setTimeout(() => {
        paragraphs.forEach((p) => {
          p.innerHTML = originals.get(p) || '';
        });
      }, glitchConfig.duration.textRedaction);
    };

    // 11. Demonic Text
    const demonicText = () => {
      const paragraphs = getRandomParagraphs(1);
      if (paragraphs.length === 0) return;

      const p = paragraphs[0];
      const originalHTML = p.innerHTML;
      const chars = [...p.innerText];

      let newHTML = "";
      for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== " " && Math.random() < 0.5) {
          newHTML += `<span class="demonic-char">${chars[i]}</span>`;
        } else {
          newHTML += chars[i];
        }
      }

      p.innerHTML = newHTML;

      setTimeout(() => {
        p.innerHTML = originalHTML;
      }, glitchConfig.duration.demonicText);
    };

    // 12. Static Burst
    const createStaticBurst = () => {
      if (!terminalRef.current) return;

      terminalRef.current.classList.add("static-burst");

      const paragraphs = terminalRef.current.querySelectorAll<HTMLParagraphElement>('p');
      const originalContents = new Map<HTMLParagraphElement, string>();
      const affectedParagraphs: HTMLParagraphElement[] = [];

      for (let i = 0; i < Math.min(3, paragraphs.length); i++) {
        if (paragraphs.length === 0) break;

        const idx = Math.floor(Math.random() * paragraphs.length);
        const p = paragraphs[idx];

        if (!originalContents.has(p)) {
          originalContents.set(p, p.innerHTML);
          affectedParagraphs.push(p);

          const text = p.innerText;
          let corrupted = "";
          for (let j = 0; j < text.length; j++) {
            if (Math.random() < 0.3) {
              corrupted += glitchChars.charAt(Math.floor(Math.random() * 5));
            } else {
              corrupted += text.charAt(j);
            }
          }
          p.innerText = corrupted;
        }
      }

      setTimeout(() => {
        terminalRef.current?.classList.remove("static-burst");
        affectedParagraphs.forEach((p) => {
          p.innerHTML = originalContents.get(p) || '';
        });
      }, glitchConfig.duration.staticBurst);
    };

    // Initialize all effects with random delays
    const effects: { [key: string]: () => void } = {
      textGlitch: glitchTerminalText,
      terminalFlicker: flickerTerminal,
      textReversal: reverseTextSegments,
      characterLeak: leakCharacters,
      randomLineNoise: addLineNoise,
      colorInversion: nightmareInversion,
      textScramble: scrambleText,
      textDuplication: duplicateText,
      voidConsumption: voidConsumption,
      textRedaction: redactText,
      demonicText: demonicText,
      staticBurst: createStaticBurst,
    };

    Object.keys(glitchConfig.frequency).forEach((effect) => {
      const randomDelay = Math.random() * 3000;

      const timeoutId = window.setTimeout(() => {
        const intervalId = window.setInterval(() => {
          if (Math.random() < 0.7) {
            effects[effect]?.();
          }
        }, glitchConfig.frequency[effect as keyof typeof glitchConfig.frequency]);
        intervalsRef.current.push(intervalId);
      }, randomDelay);

      intervalsRef.current.push(timeoutId);
    });

    // Add hidden HTML comments
    const messages = [
      "<!-- THE VOID GAZES BACK -->",
      "<!-- REALITY BREACH DETECTED -->",
      "<!-- SYSTEM MALFUNCTION -->",
    ];

    for (let i = 0; i < 3; i++) {
      const comment = document.createComment(
        messages[Math.floor(Math.random() * messages.length)].replace(/<!--|-->/g, '')
      );
      document.body.appendChild(comment);
    }

    return () => {
      intervalsRef.current.forEach((id) => {
        clearInterval(id);
        clearTimeout(id);
      });
      intervalsRef.current = [];
    };
  }, [terminalRef]);
}
