import { useEffect, useRef } from 'react';

const glyphs = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノ';

function MatrixRain({ variant = 'portrait' }) {
  const canvasRef = useRef(null);
  const isBackdrop = variant === 'backdrop';

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    const frame = isBackdrop ? null : canvas.parentElement;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fontSize = isBackdrop ? 18 : 14;
    const frameInterval = isBackdrop ? 95 : 60;
    let width = 0;
    let height = 0;
    let drops = [];
    let animationFrame = 0;
    let lastFrame = 0;

    const resize = () => {
      const bounds = isBackdrop
        ? { width: window.innerWidth, height: window.innerHeight }
        : frame.getBoundingClientRect();
      const pixelRatio = isBackdrop ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drops = Array.from(
        { length: Math.max(1, Math.ceil(width / fontSize)) },
        () => Math.random() * (height / fontSize)
      );
    };

    const drawStatic = () => {
      context.clearRect(0, 0, width, height);
      context.font = `${fontSize}px monospace`;
      context.textBaseline = 'top';

      drops.forEach((drop, column) => {
        const start = Math.random() * Math.max(1, height / fontSize - 5);
        for (let trail = 0; trail < 5; trail += 1) {
          const y = (start + trail) * fontSize;
          if (y > height) break;
          context.fillStyle = `rgba(130, 255, 150, ${0.62 - trail * 0.1})`;
          context.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], column * fontSize, y);
        }
      });
    };

    const drawFrame = () => {
      context.globalCompositeOperation = 'destination-out';
      context.fillStyle = 'rgba(0, 0, 0, .14)';
      context.fillRect(0, 0, width, height);
      context.globalCompositeOperation = 'source-over';
      context.font = `${fontSize}px monospace`;
      context.textBaseline = 'top';

      drops.forEach((drop, column) => {
        const y = drop * fontSize;
        context.fillStyle = Math.random() > .86 ? '#b6ff43' : 'rgba(99, 239, 120, .76)';
        context.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], column * fontSize, y);
        drops[column] = y > height && Math.random() > .975
          ? 0
          : drop + Math.random() * .45 + .35;
      });
    };

    const animate = (timestamp) => {
      if (timestamp - lastFrame >= frameInterval) {
        drawFrame();
        lastFrame = timestamp;
      }
      animationFrame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      window.cancelAnimationFrame(animationFrame);
      if (motionPreference.matches || document.hidden) {
        drawStatic();
        return;
      }
      lastFrame = 0;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const observer = frame ? new ResizeObserver(() => {
      resize();
      start();
    }) : null;

    observer?.observe(frame);
    window.addEventListener('resize', resize);
    resize();
    start();
    motionPreference.addEventListener('change', start);
    document.addEventListener('visibilitychange', start);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer?.disconnect();
      window.removeEventListener('resize', resize);
      motionPreference.removeEventListener('change', start);
      document.removeEventListener('visibilitychange', start);
    };
  }, [isBackdrop]);

  return (
    <canvas
      ref={canvasRef}
      className={isBackdrop ? 'matrix-backdrop' : 'portrait-rain'}
      aria-hidden="true"
    />
  );
}

export default MatrixRain;