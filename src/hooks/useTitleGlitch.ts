import { useEffect, useRef } from 'react';
import { titleConfig } from '../data/config';
import { glitchChars } from '../utils/glitchChars';

export function useTitleGlitch() {
  const titleIndexRef = useRef(0);
  const faviconIndexRef = useRef(0);
  const titleIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const changeTitle = () => {
      document.title = titleConfig.titles[titleIndexRef.current];
      titleIndexRef.current = (titleIndexRef.current + 1) % titleConfig.titles.length;
    };

    const corruptTitle = () => {
      const currentTitle = document.title;
      const corruptCount = Math.floor(Math.random() * 3) + 1;

      let corruptedTitle = currentTitle;
      for (let i = 0; i < corruptCount; i++) {
        const position = Math.floor(Math.random() * currentTitle.length);
        const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        corruptedTitle = corruptedTitle.slice(0, position) + glitchChar + corruptedTitle.slice(position + 1);
      }

      document.title = corruptedTitle;

      setTimeout(() => {
        document.title = titleConfig.titles[titleIndexRef.current];
      }, titleConfig.delays.titleReset);
    };

    const reverseTitle = () => {
      const currentTitle = document.title;
      document.title = [...currentTitle].reverse().join("");

      setTimeout(() => {
        document.title = titleConfig.titles[titleIndexRef.current];
      }, titleConfig.delays.titleReverse);
    };

    const changeFavicon = () => {
      const faviconElement = document.querySelector<HTMLLinkElement>("link[rel='icon']");
      if (!faviconElement) return;

      faviconElement.href = titleConfig.favicons[faviconIndexRef.current];
      faviconIndexRef.current = (faviconIndexRef.current + 1) % titleConfig.favicons.length;

      if (Math.random() < titleConfig.probability.faviconSeizure) {
        setTimeout(faviconSeizure, 1000);
      }
    };

    const faviconSeizure = () => {
      let count = 0;
      const rapidInterval = setInterval(() => {
        faviconIndexRef.current = (faviconIndexRef.current + 1) % titleConfig.favicons.length;

        const faviconElement = document.querySelector<HTMLLinkElement>("link[rel='icon']");
        if (!faviconElement) {
          clearInterval(rapidInterval);
          return;
        }

        faviconElement.href = titleConfig.favicons[faviconIndexRef.current];

        count++;
        if (count > 5) clearInterval(rapidInterval);
      }, 100);
    };

    const scheduleRandomTitleChange = () => {
      if (titleIntervalRef.current) {
        clearInterval(titleIntervalRef.current);
      }

      const randomDelay =
        titleConfig.delays.titleChange.min +
        Math.floor(
          Math.random() *
            (titleConfig.delays.titleChange.max - titleConfig.delays.titleChange.min)
        );

      titleIntervalRef.current = window.setInterval(() => {
        const rand = Math.random();

        if (rand < titleConfig.probability.corruption) {
          corruptTitle();
        } else if (rand < titleConfig.probability.corruption + titleConfig.probability.reverse) {
          reverseTitle();
        } else {
          changeTitle();
        }

        scheduleRandomTitleChange();
      }, randomDelay);
    };

    // Initialize
    scheduleRandomTitleChange();

    const faviconInterval = setInterval(changeFavicon, 5000);

    const corruptionInterval = setInterval(() => {
      if (Math.random() < titleConfig.probability.randomCorruption) {
        corruptTitle();
      }
    }, 8000);

    return () => {
      if (titleIntervalRef.current) {
        clearInterval(titleIntervalRef.current);
      }
      clearInterval(faviconInterval);
      clearInterval(corruptionInterval);
    };
  }, []);
}
