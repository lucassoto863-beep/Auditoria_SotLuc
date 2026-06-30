export default function Comandos() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Sección 04 · Ataque 3</div>
        <h1 className="section-title">Inyección de Comandos</h1>
        <p className="section-desc">
          Command Injection — Toma de control del servidor de AguasClaras
        </p>
      </div>

      <div className="card">
        <div className="card-title">1. Evidencia del ataque</div>
        <p><strong>Módulo DVWA:</strong> Command Injection · <strong>Nivel:</strong> Low</p>
        <p style={{ marginTop: 8 }}><strong>Payload utilizado:</strong></p>
        <div className="payload">127.0.0.1; cat /etc/passwd</div>

        <img
          src="/docs_sotluc/img_sotluc/comandos_sotluc.png"
          alt="Evidencia del ataque de Inyección de Comandos en DVWA"
          className="evidencia-img"
        />
        <p style={{ fontSize: 12, color: 'var(--texto-muted)', marginTop: -8, marginBottom: 16 }}>
          <em>Figura 3. Resultado de la inyección de comandos <code>127.0.0.1; cat /etc/passwd</code> en
          el módulo Command Injection de DVWA (nivel Low), mostrando el contenido completo del archivo
          <code>/etc/passwd</code> del servidor, incluyendo el usuario root (UID 0).</em>
        </p>
      </div>

      <div className="card">
        <div className="card-title">2. ¿Por qué funciona?</div>
        <p>
          La aplicación pasa el input del usuario directamente a una función de ejecución de
          comandos del sistema operativo (como <code>exec()</code> o <code>shell_exec()</code>). El
          operador <code>;</code> en sistemas Unix encadena comandos, permitiendo que el segundo
          comando se ejecute independientemente del primero.
        </p>
        <p style={{ marginTop: 12 }}>
          En AguasClaras, el servidor del portal corre sobre Linux. Un atacante podría ejecutar
          comandos arbitrarios con los privilegios del proceso web: leer archivos de configuración
          con credenciales de base de datos, listar usuarios del sistema, instalar backdoors o
          exfiltrar la base de datos completa de clientes directamente desde el servidor.
        </p>
        <p style={{ marginTop: 12 }}><strong>Comando ejecutado en el servidor:</strong></p>
        <div className="payload">ping -c 1 127.0.0.1; cat /etc/passwd</div>
      </div>

      <div className="card">
        <div className="card-title">3. Puntaje CVSS v3.1</div>
        <table>
          <thead>
            <tr><th>Métrica</th><th>Valor</th><th>Justificación</th></tr>
          </thead>
          <tbody>
            <tr><td>Vector de ataque</td><td>Red (N)</td><td>Explotable remotamente via portal web</td></tr>
            <tr><td>Complejidad</td><td>Baja (L)</td><td>No se requieren condiciones especiales</td></tr>
            <tr><td>Privilegios requeridos</td><td>Ninguno (N)</td><td>El formulario es accesible sin login</td></tr>
            <tr><td>Interacción de usuario</td><td>Ninguna (N)</td><td>El atacante ejecuta sin intervención de la víctima</td></tr>
            <tr><td>Confidencialidad</td><td>Alta (H)</td><td>Acceso total al sistema de archivos del servidor</td></tr>
            <tr><td>Integridad</td><td>Alta (H)</td><td>Puede modificar o eliminar archivos críticos</td></tr>
            <tr><td>Disponibilidad</td><td>Alta (H)</td><td>Puede detener servicios o reiniciar el servidor</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: 16 }}>
          <strong>Vector CVSS:</strong>{' '}
          <span className="payload" style={{ display: 'inline', padding: '2px 8px' }}>
            CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
          </span>
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>Puntaje base:</strong> <span className="badge badge-critico">9.8 — CRÍTICO</span>
        </p>
        <p style={{ marginTop: 8, fontSize: 12, color: 'var(--texto-muted)' }}>
          Verificar y ajustar en: https://www.first.org/cvss/calculator/3.1
        </p>
      </div>

      <div className="card">
        <div className="card-title">4. Política de prevención (3.1.4)</div>
        <p>
          AguasClaras debe prohibir el uso de funciones que ejecuten comandos del sistema operativo
          con input no validado (ej. <code>exec()</code>, <code>system()</code>, <code>shell_exec()</code>).
          Toda funcionalidad que requiera interacción con el sistema operativo debe estar encapsulada
          en módulos internos con inputs estrictamente tipados y validados, sin pasar strings del
          usuario directamente al shell.
        </p>
      </div>

      <div className="card">
        <div className="card-title">5. Control de mitigación (3.1.5)</div>
        <p style={{ marginBottom: 12 }}>
          Controles alineados al marco <strong>OWASP Top 10 (A03:2021 — Injection)</strong> y <strong>CIS Controls v8</strong>:
        </p>
        <table>
          <thead>
            <tr><th>Control</th><th>Descripción</th><th>Prioridad</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Eliminar uso de shell</td>
              <td>Reemplazar comandos del SO por librerías internas del lenguaje</td>
              <td><span className="badge badge-critico">Inmediata</span></td>
            </tr>
            <tr>
              <td>Whitelist de input</td>
              <td>Si se debe aceptar una IP, validar con regex estricto antes de usarla</td>
              <td><span className="badge badge-critico">Inmediata</span></td>
            </tr>
            <tr>
              <td>Principio de mínimo privilegio</td>
              <td>El proceso web debe correr con un usuario sin privilegios de root</td>
              <td><span className="badge badge-alto">Alta</span></td>
            </tr>
            <tr>
              <td>Sandbox / contenedor</td>
              <td>Ejecutar la aplicación en un contenedor Docker con filesystem de solo lectura</td>
              <td><span className="badge badge-medio">Media</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}