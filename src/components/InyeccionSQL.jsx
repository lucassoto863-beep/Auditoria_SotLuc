export default function InyeccionSQL() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Sección 02 · Ataque 1</div>
        <h1 className="section-title">Inyección SQL</h1>
        <p className="section-desc">
          SQL Injection — Exposición de base de datos de clientes de AguasClaras
        </p>
      </div>

      {/* 1. Evidencia */}
      <div className="card">
        <div className="card-title">1. Evidencia del ataque</div>
        <p><strong>Módulo DVWA:</strong> SQL Injection · <strong>Nivel:</strong> Low</p>
        <p style={{ marginTop: 8 }}><strong>Payload utilizado:</strong></p>
        <div className="payload">' OR '1'='1</div>

        {/* Reemplazar por imagen real después de hacer el ataque */}
        <div className="evidencia-placeholder">
          <span className="placeholder-icon">📸</span>
          <span>Reemplazar con captura del ataque</span>
          <span>docs_sotluc/img_sotluc/sqli_sotluc.png</span>
        </div>
        {/* Una vez tengas la imagen, reemplaza el placeholder por:
        <img
          src="/docs_sotluc/img_sotluc/sqli_sotluc.png"
          alt="Evidencia SQLi"
          className="evidencia-img"
        /> */}
      </div>

      {/* 2. Explicación técnica */}
      <div className="card">
        <div className="card-title">2. ¿Por qué funciona?</div>
        <p>
          La aplicación construye la consulta SQL concatenando directamente el input del usuario
          sin sanitización ni uso de consultas parametrizadas. Al ingresar <code>' OR '1'='1</code>,
          la condición de la cláusula WHERE siempre evalúa como verdadera, retornando todos los
          registros de la tabla.
        </p>
        <p style={{ marginTop: 12 }}>
          En el contexto de AguasClaras, esto significaría exponer la totalidad de la base de datos
          de clientes: RUT, direcciones, datos de consumo, historial de pago y tarjetas vinculadas
          de miles de usuarios de la Región de Valparaíso.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>Consulta vulnerable (ejemplo):</strong>
        </p>
        <div className="payload">SELECT * FROM usuarios WHERE id = '$input';</div>
        <p style={{ marginTop: 8 }}>
          <strong>Consulta resultante con payload:</strong>
        </p>
        <div className="payload">SELECT * FROM usuarios WHERE id = '' OR '1'='1';</div>
      </div>

      {/* 3. CVSS */}
      <div className="card">
        <div className="card-title">3. Puntaje CVSS v3.1</div>
        <table>
          <thead>
            <tr><th>Métrica</th><th>Valor</th><th>Justificación</th></tr>
          </thead>
          <tbody>
            <tr><td>Vector de ataque</td><td>Red (N)</td><td>Explotable remotamente via internet</td></tr>
            <tr><td>Complejidad</td><td>Baja (L)</td><td>No se requiere condición especial</td></tr>
            <tr><td>Privilegios requeridos</td><td>Ninguno (N)</td><td>Accessible sin autenticación previa</td></tr>
            <tr><td>Interacción de usuario</td><td>Ninguna (N)</td><td>El atacante actúa solo</td></tr>
            <tr><td>Confidencialidad</td><td>Alta (H)</td><td>Exposición total de BD de clientes</td></tr>
            <tr><td>Integridad</td><td>Alta (H)</td><td>Posible modificación/eliminación de datos</td></tr>
            <tr><td>Disponibilidad</td><td>Alta (H)</td><td>DROP TABLE podría interrumpir el servicio</td></tr>
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

      {/* 4. Prevención y mitigación */}
      <div className="card">
        <div className="card-title">4. Política de prevención (3.1.4)</div>
        <p>
          AguasClaras debe establecer una política de desarrollo seguro que prohíba la concatenación
          directa de inputs de usuario en consultas SQL. Todo acceso a base de datos debe realizarse
          mediante <strong>consultas parametrizadas (prepared statements)</strong> o el uso de un ORM
          con escape automático. Esta política debe aplicarse en el ciclo de desarrollo y verificarse
          mediante revisión de código obligatoria antes de cada release.
        </p>
      </div>

      <div className="card">
        <div className="card-title">5. Control de mitigación (3.1.5)</div>
        <p style={{ marginBottom: 12 }}>Controles técnicos a implementar:</p>
        <table>
          <thead>
            <tr><th>Control</th><th>Descripción</th><th>Prioridad</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Prepared statements</td>
              <td>Reemplazar todas las queries dinámicas por consultas parametrizadas</td>
              <td><span className="badge badge-critico">Inmediata</span></td>
            </tr>
            <tr>
              <td>WAF</td>
              <td>Implementar Web Application Firewall con reglas anti-SQLi (OWASP ModSecurity)</td>
              <td><span className="badge badge-alto">Alta</span></td>
            </tr>
            <tr>
              <td>Principio de mínimo privilegio</td>
              <td>El usuario de BD del portal solo debe tener SELECT en las tablas necesarias</td>
              <td><span className="badge badge-alto">Alta</span></td>
            </tr>
            <tr>
              <td>Validación de input</td>
              <td>Whitelist de caracteres permitidos en campos de búsqueda</td>
              <td><span className="badge badge-medio">Media</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
