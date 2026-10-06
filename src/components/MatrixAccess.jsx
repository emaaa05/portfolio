import { useEffect, useRef, useState } from 'react';

function MatrixAccess({ language = 'es', onLanguageToggle, onUnlock }) {
  const isEnglish = language === 'en';
  const dragStartRef = useRef(null);
  const skipClickRef = useRef(false);
  const [status, setStatus] = useState('waiting');

  useEffect(() => {
    if (status !== 'unlocking') return undefined;

    const timeoutId = window.setTimeout(onUnlock, 850);
    return () => window.clearTimeout(timeoutId);
  }, [onUnlock, status]);

  const startDragging = (event) => {
    dragStartRef.current = event.clientX;
    skipClickRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const finishDragging = (event) => {
    if (dragStartRef.current === null) return;

    const distance = event.clientX - dragStartRef.current;
    skipClickRef.current = Math.abs(distance) > 8;
    dragStartRef.current = null;

    if (distance >= 40) setStatus('unlocking');
  };

  const activateSwitch = () => {
    if (skipClickRef.current) {
      skipClickRef.current = false;
      return;
    }

    setStatus('unlocking');
  };

  return (
    <main className="matrix-access">
      <button
        className="language-toggle access-language"
        type="button"
        onClick={onLanguageToggle}
        aria-label={isEnglish ? 'Cambiar a español' : 'Switch to English'}
      >
        <span className={language === 'es' ? 'selected' : ''}>ES</span>
        <span>/</span>
        <span className={language === 'en' ? 'selected' : ''}>EN</span>
      </button>

      <section className="access-window" aria-labelledby="access-title">
        <header className="access-header">
          <div className="access-brand">
            <span className="terminal-status-dot" />
            <h1>EC_DEV // SECURE SHELL</h1>
          </div>
          <span className="access-status">{status === 'unlocking' ? 'AUTH: OK' : 'AUTH: REQUIRED'}</span>
        </header>

        <div className="access-body">
          <p className="access-kicker">{isEnglish ? 'REMOTE HANDSHAKE / 001' : 'HANDSHAKE REMOTO / 001'}</p>
          <h2 id="access-title" className="access-title">
            {isEnglish ? 'Portfolio access' : 'Acceso al portfolio'}
          </h2>
          <p className="access-description">
            {isEnglish
              ? 'The signal is ready. Slide to enter the Matrix.'
              : 'La señal está lista. Deslizá para ingresar a la Matrix.'}
          </p>

          <div className="access-switch-wrap">
            <button
              className={`access-switch ${status === 'unlocking' ? 'is-on' : ''}`}
              type="button"
              role="switch"
              aria-checked={status === 'unlocking'}
              aria-label={isEnglish ? 'Slide or tap to unlock the portfolio' : 'Deslizá o tocá para desbloquear el portfolio'}
              onPointerDown={startDragging}
              onPointerUp={finishDragging}
              onPointerCancel={() => { dragStartRef.current = null; }}
              onClick={activateSwitch}
              disabled={status === 'unlocking'}
            >
              <span className="access-switch-state" aria-hidden="true">{status === 'unlocking' ? 'ON' : 'OFF'}</span>
              <span className="access-switch-thumb" aria-hidden="true">
                <span>{status === 'unlocking' ? '✓' : '→'}</span>
              </span>
            </button>
            <span className="access-switch-label">
              {isEnglish ? 'SLIDE OR TAP TO ENTER' : 'DESLIZÁ O TOCÁ PARA ENTRAR'}
            </span>
          </div>

          <div className="access-log" aria-live="polite" aria-atomic="true">
            <p><span>[SYS]</span> {isEnglish ? 'Secure channel detected.' : 'Canal seguro detectado.'}</p>
            <p><span>[SYS]</span> {isEnglish ? 'Target: EC_DEV / PORTFOLIO' : 'Objetivo: EC_DEV / PORTFOLIO'}</p>
            {status === 'unlocking' && (
              <p className="access-accepted">[OK] {isEnglish ? 'HANDSHAKE ACCEPTED // DECRYPTING' : 'HANDSHAKE ACEPTADO // DESENCRIPTANDO'}</p>
            )}
          </div>

          <button className="access-bypass" type="button" onClick={onUnlock}>
            {isEnglish ? 'Enter directly' : 'Acceso directo'} <span aria-hidden="true">↗</span>
          </button>
        </div>
      </section>

      <p className="access-footer">EC_DEV // {isEnglish ? 'CONNECTION PENDING' : 'CONEXIÓN PENDIENTE'}</p>
    </main>
  );
}

export default MatrixAccess;