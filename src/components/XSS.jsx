export default function XSS() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Sección 03 · Ataque 2</div>
        <h1 className="section-title">XSS Reflejado</h1>
        <p className="section-desc">
          Cross-Site Scripting — Ejecución de código en el navegador de clientes de AguasClaras
        </p>
      </div>

      <div className="card">
        <div className="card-title">1. Evidencia del ataque</div>
        <p><strong>Módulo DVWA:</strong> XSS (Reflected) · <strong>Nivel:</strong> Low</p>
        <p style={{ marginTop: 8 }}><strong>Payload utilizado:</strong></p>
        <div className="payload">{'<script>alert(\'XSS\')</script>'}</div>

        <img
          src="/docs_sotluc/img_sotluc/xss_sotluc.png"
          alt="Evidencia del ataque XSS Reflejado en DVWA"
          className="evidencia-img"
        />
        <p style={{ fontSize: 12, color: 'var(--texto-muted)', marginTop: -8, marginBottom: 16 }}>
          <em>Figura 2. Ejecución del payload <code>{"<script>alert('XSS')</script>"}</code> en el módulo
          XSS (Reflected) de DVWA (nivel Low). El popup de alert con el texto "XSS" confirma que el
          navegador ejecutó el script reflejado por el servidor sin sanitizar el parámetro <code>name</code>
          de la URL.</em>
        </p>
      </div>

      <div className="card">
        <div className="card-title">2. ¿Por qué funciona?</div>
        <p>
          El servidor refleja el input del usuario directamente en la respuesta HTML sin aplicar
          codificación de entidades ni sanitización. El navegador de la víctima interpreta el
          contenido como código JavaScript válido y lo ejecuta en el contexto de la sesión activa.
        </p>
        <p style={{ marginTop: 12 }}>
          En AguasClaras, un atacante podría distribuir un enlace malicioso al portal de clientes.
          Al hacer clic, la víctima ejecutaría código que podría robar su cookie de sesión, redirigirla
          a un sitio de phishing con la imagen corporativa de AguasClaras, o capturar sus credenciales
          de pago.
        </p>
      </div>

      <div className="card">
        <div className="card-title">3. Puntaje CVSS v3.1</div>
        <table>
          <thead>
            <tr><th>Métrica</th><th>Valor</th><th>Justificación</th></tr>
          </thead>
          <tbody>
            <tr><td>Vector de ataque</td><td>Red (N)</td><td>El payload viaja en la URL o parámetro web</td></tr>
            <tr><td>Complejidad</td><td>Baja (L)</td><td>Solo requiere que la víctima haga clic en un enlace</td></tr>
            <tr><td>Privilegios requeridos</td><td>Ninguno (N)</td><td>No se necesita autenticación previa</td></tr>
            <tr><td>Interacción de usuario</td><td>Requerida (R)</td><td>La víctima debe acceder al enlace malicioso</td></tr>
            <tr><td>Confidencialidad</td><td>Alta (H)</td><td>Robo de cookies de sesión / credenciales</td></tr>
            <tr><td>Integridad</td><td>Alta (H)</td><td>El atacante puede modificar la página vista por la víctima</td></tr>
            <tr><td>Disponibilidad</td><td>Ninguna (N)</td><td>No afecta directamente la disponibilidad del servicio</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 16 }}>
          <strong>Vector CVSS:</strong>{' '}
          <span className="payload" style={{ display: 'inline', padding: '2px 8px' }}>
            CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:N
          </span>
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>Puntaje base:</strong> <span className="badge badge-alto">8.8 — ALTO</span>
        </p>
        <p style={{ marginTop: 8, fontSize: 12, color: 'var(--texto-muted)' }}>
          Verificar y ajustar en: https://www.first.org/cvss/calculator/3.1
        </p>
      </div>

      <div className="card">
        <div className="card-title">4. Política de prevención (3.1.4)</div>
        <p>
          AguasClaras debe implementar una política de codificación segura que exija el escape de
          toda salida HTML antes de renderizarla en el navegador. Se debe establecer la cabecera
          <strong> Content-Security-Policy (CSP)</strong> en todos los endpoints del portal, restringiendo
          la ejecución de scripts inline y de fuentes no autorizadas.
        </p>
      </div>

      <div className="card">
        <div className="card-title">5. Control de mitigación (3.1.5)</div>
        <p style={{ marginBottom: 12 }}>
          Controles alineados al marco <strong>OWASP Top 10 (A03:2021 — Injection / XSS)</strong>:
        </p>
        <table>
          <thead>
            <tr><th>Control</th><th>Descripción</th><th>Prioridad</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Output encoding</td>
              <td>Codificar entidades HTML en toda salida generada con input de usuario</td>
              <td><span className="badge badge-critico">Inmediata</span></td>
            </tr>
            <tr>
              <td>CSP Header</td>
              <td>Configurar Content-Security-Policy para bloquear scripts inline</td>
              <td><span className="badge badge-alto">Alta</span></td>
            </tr>
            <tr>
              <td>HttpOnly cookies</td>
              <td>Marcar cookies de sesión como HttpOnly para impedir acceso desde JS</td>
              <td><span className="badge badge-alto">Alta</span></td>
            </tr>
            <tr>
              <td>Sanitización de input</td>
              <td>Usar biblioteca de sanitización (ej. DOMPurify) en el frontend</td>
              <td><span className="badge badge-medio">Media</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}