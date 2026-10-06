import { useEffect, useRef, useState } from 'react';

const unlockCommand = 'sudo ./portfolio --unlock';

function MatrixAccess({ language = 'es', onLanguageToggle, onUnlock }) {
  const isEnglish = language === 'en';
  const inputRef = useRef(null);
  const [command, setCommand] = useState('');
  const [status, setStatus] = useState('waiting');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (status !== 'unlocking') return undefined;

    const timeoutId = window.setTimeout(onUnlock, 850);
    return () => window.clearTimeout(timeoutId);
  }, [onUnlock, status]);

  const submitCommand = (event) => {
    event.preventDefault();
    const normalizedCommand = command.trim().toLowerCase().replace(/\s+/g, ' ');

    if (normalizedCommand === unlockCommand) {
      setStatus('unlocking');
      return;
    }

    setCommand('');
    setStatus('denied');
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
              ? 'Route intercepted. Enter the authorization command to establish a connection.'
              : 'Ruta interceptada. Escribí el comando de autorización para establecer conexión.'}
          </p>

          <div className="access-log" aria-live="polite" aria-atomic="true">
            <p><span>[SYS]</span> {isEnglish ? 'Secure channel detected.' : 'Canal seguro detectado.'}</p>
            <p><span>[SYS]</span> {isEnglish ? 'Target: EC_DEV / PORTFOLIO' : 'Objetivo: EC_DEV / PORTFOLIO'}</p>
            {status === 'denied' && (
              <p className="access-denied" role="alert">[ERR] {isEnglish ? 'ACCESS DENIED // TRY AGAIN' : 'ACCESO DENEGADO // INTENTÁ DE NUEVO'}</p>
            )}
            {status === 'unlocking' && (
              <p className="access-accepted">[OK] {isEnglish ? 'HANDSHAKE ACCEPTED // DECRYPTING' : 'HANDSHAKE ACEPTADO // DESENCRIPTANDO'}</p>
            )}
          </div>

          <form className="access-form" onSubmit={submitCommand}>
            <label className="access-prompt" htmlFor="access-command">guest@ec-dev:~$</label>
            <input
              ref={inputRef}
              id="access-command"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              placeholder={unlockCommand}
              autoComplete="off"
              spellCheck="false"
              aria-label={isEnglish ? 'Authorization command' : 'Comando de autorización'}
              disabled={status === 'unlocking'}
            />
            <button className="access-submit" type="submit" disabled={status === 'unlocking'}>
              {isEnglish ? 'RUN' : 'EJECUTAR'}
            </button>
          </form>

          <p className="access-hint">
            {isEnglish ? 'Command:' : 'Comando:'} <code>{unlockCommand}</code>
          </p>
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