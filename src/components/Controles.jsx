export default function Controles() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Sección 07 · Informe B</div>
        <h1 className="section-title">Prevención y Mitigación</h1>
        <p className="section-desc">
          Políticas y controles consolidados — Marco de referencia OWASP / CIS
        </p>
      </div>

      <div className="card">
        <div className="card-title">Marco de referencia adoptado</div>
        <p>
          AguasClaras adopta el <strong>OWASP Top 10 (2021)</strong> como marco principal para
          clasificar y priorizar vulnerabilidades web, complementado con los <strong>CIS Controls
          v8</strong> para los controles de infraestructura y configuración del servidor. Las tres
          vulnerabilidades detectadas corresponden a la categoría <strong>A03:2021 — Injection</strong>
          del OWASP Top 10.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Políticas de prevención por vulnerabilidad (3.1.4)</div>
        <table>
          <thead>
            <tr><th>Vulnerabilidad</th><th>Política de prevención</th><th>Causa raíz atacada</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Inyección SQL</td>
              <td>Prohibir la concatenación de inputs en queries SQL. Uso obligatorio de prepared statements u ORM con escape automático.</td>
              <td>Falta de separación entre código y datos en la consulta</td>
            </tr>
            <tr>
              <td>XSS Reflejado</td>
              <td>Codificación obligatoria de toda salida HTML generada con input de usuario, más cabecera Content-Security-Policy.</td>
              <td>Reflejo de input sin sanitizar en la respuesta del servidor</td>
            </tr>
            <tr>
              <td>Inyección de Comandos</td>
              <td>Prohibir funciones de ejecución del SO (exec, system, shell_exec) con input no validado por whitelist.</td>
              <td>Paso de input de usuario directo al intérprete de comandos del sistema</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="card-title">Controles de mitigación priorizados (3.1.5)</div>
        <p style={{ marginBottom: 12 }}>
          Controles para riesgos en cuadrante rojo/naranja de la matriz (sección 06), referenciados
          al marco OWASP / CIS Controls v8:
        </p>
        <table>
          <thead>
            <tr><th>Control</th><th>Marco</th><th>Aplica a</th><th>Prioridad</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Prepared statements / ORM</td>
              <td>OWASP A03:2021</td>
              <td>SQLi</td>
              <td><span className="badge badge-critico">Inmediata</span></td>
            </tr>
            <tr>
              <td>Eliminar llamadas a shell del SO</td>
              <td>OWASP A03:2021</td>
              <td>Command Injection</td>
              <td><span className="badge badge-critico">Inmediata</span></td>
            </tr>
            <tr>
              <td>Output encoding + CSP</td>
              <td>OWASP A03:2021</td>
              <td>XSS</td>
              <td><span className="badge badge-critico">Inmediata</span></td>
            </tr>
            <tr>
              <td>Web Application Firewall (WAF)</td>
              <td>CIS Control 13 — Network Monitoring</td>
              <td>SQLi, XSS, Command Injection</td>
              <td><span className="badge badge-alto">Alta</span></td>
            </tr>
            <tr>
              <td>Mínimo privilegio en BD y SO</td>
              <td>CIS Control 5 — Account Management</td>
              <td>SQLi, Command Injection</td>
              <td><span className="badge badge-alto">Alta</span></td>
            </tr>
            <tr>
              <td>HttpOnly + Secure cookies</td>
              <td>OWASP A05:2021 — Security Misconfiguration</td>
              <td>XSS</td>
              <td><span className="badge badge-alto">Alta</span></td>
            </tr>
            <tr>
              <td>Contenedor con filesystem solo lectura</td>
              <td>CIS Control 4 — Secure Configuration</td>
              <td>Command Injection</td>
              <td><span className="badge badge-medio">Media</span></td>
            </tr>
            <tr>
              <td>Validación de input (whitelist)</td>
              <td>OWASP A03:2021</td>
              <td>SQLi, Command Injection</td>
              <td><span className="badge badge-medio">Media</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="card-title">Gobernanza: revisión de código y testing</div>
        <p>
          Además de los controles técnicos, AguasClaras debe incorporar <strong>revisión de código
          obligatoria (code review)</strong> antes de cada despliegue a producción, y pruebas de
          seguridad automatizadas (SAST/DAST) integradas en el pipeline de CI/CD, de forma que
          ninguna de estas tres vulnerabilidades pueda volver a llegar a producción sin ser
          detectada previamente.
        </p>
      </div>
    </div>
  )
}