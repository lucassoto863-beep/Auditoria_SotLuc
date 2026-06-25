import { useState } from 'react'

export default function ContactBubble() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 999 }}>
      {open && (
        <div style={{
          marginBottom: 12,
          background: '#ffffff',
          border: '1px solid var(--borde)',
          borderRadius: 10,
          boxShadow: '0 8px 32px rgba(10,22,40,0.15)',
          padding: '18px 20px',
          width: 240,
          animation: 'bubbleIn 0.2s cubic-bezier(0.4,0,0.2,1)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--agua-500)',
            marginBottom: 14,
          }}>Contacto</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="mailto:lucas.soto08@inacapmail.cl"
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                textDecoration: 'none', color: 'var(--texto-primario)',
                padding: '8px 10px', borderRadius: 6,
                background: 'var(--agua-50)', border: '1px solid var(--borde)',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--agua-100)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--agua-50)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#EA4335" opacity="0.1" />
                <path d="M4 8l8 5 8-5" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="4" y="6" width="16" height="12" rx="2" stroke="#EA4335" strokeWidth="1.5" />
              </svg>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, wordBreak: 'break-all' }}>
                lucas.soto08@inacapmail.cl
              </span>
            </a>

            <a href="https://github.com/lucassoto863-beep"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                textDecoration: 'none', color: 'var(--texto-primario)',
                padding: '8px 10px', borderRadius: 6,
                background: 'var(--agua-50)', border: '1px solid var(--borde)',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--agua-100)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--agua-50)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#24292e" />
              </svg>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>
                lucassoto863-beep
              </span>
            </a>
          </div>

          <p style={{ fontSize: 11, color: 'var(--texto-muted)', marginTop: 14, textAlign: 'center' }}>
            Lucas Soto Lagos · INACAP 2026
          </p>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 48, height: 48, borderRadius: '50%',
          background: 'var(--agua-800)', border: '2px solid var(--agua-300)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(10,22,40,0.25)',
          transition: 'transform 0.2s', marginLeft: 'auto',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="#5ba3d9" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 4H4a2 2 0 00-2 2v10a2 2 0 002 2h4l4 4 4-4h4a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="#5ba3d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="11" r="1" fill="#5ba3d9" />
            <circle cx="12" cy="11" r="1" fill="#5ba3d9" />
            <circle cx="16" cy="11" r="1" fill="#5ba3d9" />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}