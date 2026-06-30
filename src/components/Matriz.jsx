const VULNS = [
  { id: 'sqli', nombre: 'Inyección SQL', prob: 5, impacto: 5, cvss: 9.8, col: 4, row: 4 },
  { id: 'cmd',  nombre: 'Inyección de Comandos', prob: 4, impacto: 5, cvss: 9.8, col: 3, row: 4 },
  { id: 'xss',  nombre: 'XSS Reflejado', prob: 4, impacto: 4, cvss: 8.8, col: 3, row: 3 },
]

// Grilla 5x5 — fila 0 = impacto más bajo (abajo), fila 4 = impacto más alto (arriba)
function nivelCelda(prob, impacto) {
  const score = prob * impacto
  if (score >= 20) return 5 // crítico
  if (score >= 15) return 4 // alto
  if (score >= 9)  return 3 // medio-alto
  if (score >= 5)  return 2 // medio
  return 1 // bajo
}

export default function Matriz() {
  const filas = [5, 4, 3, 2, 1] // impacto de mayor a menor (arriba a abajo)
  const cols  = [1, 2, 3, 4, 5] // probabilidad de menor a mayor (izq a der)

  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Sección 06 · Informe B</div>
        <h1 className="section-title">Matriz de Riesgo</h1>
        <p className="section-desc">
          Probabilidad × Impacto — Mapa de calor de las vulnerabilidades de AguasClaras
        </p>
      </div>

      <div className="card">
        <div className="card-title">Mapa de calor — Probabilidad × Impacto</div>
        <p style={{ marginBottom: 16 }}>
          Cada celda representa el nivel de riesgo resultante de combinar la probabilidad de
          ocurrencia (eje horizontal) con el impacto en el negocio (eje vertical). Los puntos
          marcan dónde se ubica cada vulnerabilidad detectada en AguasClaras.
        </p>

        <div style={{ display: 'flex', gap: 8 }}>
          {/* Eje Y label */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            fontSize: 11, color: 'var(--texto-muted)', fontFamily: 'var(--font-mono)',
            paddingBottom: 24, paddingTop: 4
          }}>
            {filas.map(f => <div key={f} style={{ height: 64, display: 'flex', alignItems: 'center' }}>{f}</div>)}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4 }}>
              {filas.map(impacto =>
                cols.map(prob => {
                  const nivel = nivelCelda(prob, impacto)
                  const colores = {
                    1: '#1e8449', 2: '#7dba56', 3: '#d4a017', 4: '#d35400', 5: '#c0392b'
                  }
                  const vuln = VULNS.find(v => v.prob === prob && v.impacto === impacto)
                  return (
                    <div
                      key={`${prob}-${impacto}`}
                      style={{
                        height: 64,
                        background: colores[nivel],
                        opacity: 0.85,
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      {vuln && (
                        <div style={{
                          background: '#0a1628',
                          color: '#fff',
                          fontSize: 10,
                          fontFamily: 'var(--font-mono)',
                          padding: '4px 8px',
                          borderRadius: 4,
                          fontWeight: 600,
                          textAlign: 'center',
                          lineHeight: 1.3,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        }}>
                          {vuln.nombre.split(' ')[0]}<br/>{vuln.nombre.split(' ').slice(1).join(' ')}
                        </div>
                      )}
                    </div>
                  )
                })
              )}
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: 11, color: 'var(--texto-muted)', fontFamily: 'var(--font-mono)',
              marginTop: 6
            }}>
              {cols.map(c => <div key={c} style={{ flex: 1, textAlign: 'center' }}>{c}</div>)}
            </div>
            <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--texto-muted)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>
              Probabilidad de ocurrencia →
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
            <span style={{ width: 14, height: 14, background: '#c0392b', borderRadius: 3, display: 'inline-block' }}></span> Crítico
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
            <span style={{ width: 14, height: 14, background: '#d35400', borderRadius: 3, display: 'inline-block' }}></span> Alto
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
            <span style={{ width: 14, height: 14, background: '#d4a017', borderRadius: 3, display: 'inline-block' }}></span> Medio
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
            <span style={{ width: 14, height: 14, background: '#7dba56', borderRadius: 3, display: 'inline-block' }}></span> Bajo
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Detalle y justificación de probabilidad / impacto</div>
        <table>
          <thead>
            <tr>
              <th>Vulnerabilidad</th>
              <th>CVSS</th>
              <th>Prob.</th>
              <th>Impacto</th>
              <th>Justificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inyección SQL</td>
              <td><span className="badge badge-critico">9.8</span></td>
              <td>5/5</td>
              <td>5/5</td>
              <td>
                Alta probabilidad: no requiere autenticación ni interacción de víctima, es la
                falla más buscada por atacantes automatizados (bots de escaneo). Impacto máximo:
                expone toda la base de clientes de un servicio regulado.
              </td>
            </tr>
            <tr>
              <td>Inyección de Comandos</td>
              <td><span className="badge badge-critico">9.8</span></td>
              <td>4/5</td>
              <td>5/5</td>
              <td>
                Probabilidad alta pero ligeramente menor que SQLi por requerir identificar el
                endpoint vulnerable específico. Impacto máximo: compromiso total del servidor y
                continuidad operativa del servicio sanitario.
              </td>
            </tr>
            <tr>
              <td>XSS Reflejado</td>
              <td><span className="badge badge-alto">8.8</span></td>
              <td>4/5</td>
              <td>4/5</td>
              <td>
                Probabilidad alta porque es fácil de automatizar en campañas de phishing, aunque
                requiere que la víctima haga clic. Impacto alto pero acotado a la sesión/cuenta
                del usuario afectado, sin comprometer la BD completa.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="card-title">Priorización de atención</div>
        <p style={{ marginBottom: 12 }}>
          Orden de atención basado en la combinación de severidad CVSS y ubicación en la matriz
          de riesgo:
        </p>
        <table>
          <thead>
            <tr><th>Prioridad</th><th>Vulnerabilidad</th><th>Razón</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="badge badge-critico">1</span></td>
              <td>Inyección SQL</td>
              <td>CVSS 9.8 + cuadrante crítico de la matriz (5,5). Mayor superficie de exposición de datos sensibles.</td>
            </tr>
            <tr>
              <td><span className="badge badge-critico">2</span></td>
              <td>Inyección de Comandos</td>
              <td>CVSS 9.8 + compromete la disponibilidad del servicio completo, no solo los datos.</td>
            </tr>
            <tr>
              <td><span className="badge badge-alto">3</span></td>
              <td>XSS Reflejado</td>
              <td>CVSS 8.8, impacto acotado a sesiones individuales en lugar de la infraestructura completa.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}