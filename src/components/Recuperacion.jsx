export default function Recuperacion() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Sección 08 · Informe B</div>
        <h1 className="section-title">Plan de Recuperación</h1>
        <p className="section-desc">
          Mejora tecnológica y Disaster Recovery — AguasClaras Sanitaria S.A.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Contexto: por qué es crítico para AguasClaras</div>
        <p>
          AguasClaras provee un servicio básico esencial. Una interrupción del portal afecta
          directamente la facturación, el reporte de emergencias y la atención a miles de hogares
          de la Región de Valparaíso. A diferencia de un e-commerce, aquí el tiempo de inactividad
          no solo implica pérdida económica: puede dejar a la empresa sin capacidad de monitorear
          consumo o recibir reportes de fugas/emergencias sanitarias.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Mejoras tecnológicas propuestas</div>
        <table>
          <thead>
            <tr><th>Mejora</th><th>Objetivo</th><th>Vulnerabilidad que mitiga</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Web Application Firewall (WAF)</td>
              <td>Filtrar tráfico malicioso (SQLi, XSS, Command Injection) antes de llegar a la aplicación</td>
              <td>Las 3 vulnerabilidades</td>
            </tr>
            <tr>
              <td>Segmentación de red</td>
              <td>Aislar el servidor de base de datos del servidor web, limitando el alcance de un Command Injection</td>
              <td>Inyección de Comandos</td>
            </tr>
            <tr>
              <td>Monitoreo y alertas (SIEM)</td>
              <td>Detectar patrones de ataque en tiempo real (múltiples intentos de login, queries anómalas)</td>
              <td>Las 3 vulnerabilidades</td>
            </tr>
            <tr>
              <td>Backups automatizados cifrados</td>
              <td>Garantizar restauración rápida ante pérdida o corrupción de datos</td>
              <td>Inyección de Comandos, SQLi</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="card-title">Plan de recuperación ante desastres (DR)</div>

        <p style={{ fontWeight: 600, marginBottom: 8 }}>1. Respaldo (Backup)</p>
        <p style={{ marginBottom: 16 }}>
          Backups automáticos diarios de la base de datos de clientes, cifrados y almacenados en
          una ubicación geográficamente distinta al servidor principal (regla 3-2-1: 3 copias,
          2 medios distintos, 1 fuera del sitio). Retención mínima de 30 días.
        </p>

        <p style={{ fontWeight: 600, marginBottom: 8 }}>2. Restauración (Recovery)</p>
        <p style={{ marginBottom: 16 }}>
          Definir un <strong>RTO (Recovery Time Objective)</strong> máximo de 4 horas para restaurar
          el portal de clientes, y un <strong>RPO (Recovery Point Objective)</strong> máximo de
          24 horas de pérdida de datos aceptable, considerando que es un servicio esencial.
        </p>

        <p style={{ fontWeight: 600, marginBottom: 8 }}>3. Notificación</p>
        <p style={{ marginBottom: 16 }}>
          Ante un incidente confirmado con exposición de datos personales, AguasClaras debe
          notificar a los clientes afectados y a la autoridad competente, conforme a la Ley
          N° 19.628 sobre protección de datos personales, dentro de los plazos que defina su
          protocolo interno de gestión de incidentes.
        </p>

        <p style={{ fontWeight: 600, marginBottom: 8 }}>4. Lecciones aprendidas</p>
        <p>
          Cada incidente debe documentarse en un informe post-mortem que identifique causa raíz,
          tiempo de detección, tiempo de contención y mejoras aplicadas, retroalimentando la
          matriz de riesgo (sección 06) para futuras auditorías.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Resumen de continuidad operativa</div>
        <table>
          <thead>
            <tr><th>Métrica</th><th>Objetivo</th></tr>
          </thead>
          <tbody>
            <tr><td>RTO (tiempo de restauración)</td><td>≤ 4 horas</td></tr>
            <tr><td>RPO (pérdida de datos aceptable)</td><td>≤ 24 horas</td></tr>
            <tr><td>Frecuencia de backup</td><td>Diario, automatizado</td></tr>
            <tr><td>Retención de backups</td><td>30 días mínimo</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}