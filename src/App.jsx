import { useState } from 'react'
import ContactBubble from './components/ContactBubble.jsx'
import Resumen       from './components/Resumen.jsx'
import InyeccionSQL  from './components/InyeccionSQL.jsx'
import XSS           from './components/XSS.jsx'
import Comandos      from './components/Comandos.jsx'
import Activos       from './components/Activos.jsx'
import Matriz        from './components/Matriz.jsx'
import Controles     from './components/Controles.jsx'
import Recuperacion  from './components/Recuperacion.jsx'
import Prompts       from './components/Prompts.jsx'

const NAV = [
  {
    label: 'Informe A — Vulnerabilidades',
    items: [
      { id: 'resumen',    num: '01', label: 'Resumen ejecutivo' },
      { id: 'sqli',       num: '02', label: 'Inyección SQL'     },
      { id: 'xss',        num: '03', label: 'XSS Reflejado'     },
      { id: 'comandos',   num: '04', label: 'Inyección de comandos' },
    ]
  },
  {
    label: 'Informe B — Matriz de Riesgo',
    items: [
      { id: 'activos',     num: '05', label: 'Activos de información' },
      { id: 'matriz',      num: '06', label: 'Matriz de riesgo'       },
      { id: 'controles',   num: '07', label: 'Prevención y mitigación' },
      { id: 'recuperacion',num: '08', label: 'Plan de recuperación'   },
    ]
  },
  {
    label: 'Transversal',
    items: [
      { id: 'prompts', num: '09', label: 'Bitácora de IA' },
    ]
  },
]

const COMPONENTS = {
  resumen:      <Resumen />,
  sqli:         <InyeccionSQL />,
  xss:          <XSS />,
  comandos:     <Comandos />,
  activos:      <Activos />,
  matriz:       <Matriz />,
  controles:    <Controles />,
  recuperacion: <Recuperacion />,
  prompts:      <Prompts />,
}

export default function App() {
  const [active, setActive] = useState('resumen')

  return (
    <div className="layout">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">TI3034 · auditoria_sotluc</div>
          <div className="sidebar-title">Auditoría de Seguridad Web</div>
          <div className="sidebar-sub">AguasClaras Sanitaria S.A.</div>
        </div>

        <nav className="sidebar-nav">
          {NAV.map(group => (
            <div key={group.label}>
              <div className="nav-section-label">{group.label}</div>
              {group.items.map(item => (
                <button
                  key={item.id}
                  className={`nav-item${active === item.id ? ' active' : ''}`}
                  onClick={() => setActive(item.id)}
                >
                  <span className="nav-item-num">{item.num}</span>
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          Lucas Soto Lagos · INACAP Valparaíso<br />
          TI3034 Otoño 2026
        </div>
      </aside>

      {/* ── Contenido ── */}
      <main className="main-content">
        {COMPONENTS[active]}
      </main>

      <ContactBubble />
    </div>
  )
}