export default function Resumen() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Sección 01 · Resumen Ejecutivo</div>
        <h1 className="section-title">AguasClaras Sanitaria S.A.</h1>
        <p className="section-desc">
          Informe de auditoría de seguridad web — Portal de clientes · Ambiente controlado DVWA
        </p>
      </div>

      <div className="card">
        <div className="card-title">Empresa auditada</div>
        <table>
          <tbody>
            <tr><td><strong>Nombre</strong></td><td>AguasClaras Sanitaria S.A.</td></tr>
            <tr><td><strong>Rubro</strong></td><td>Sanitaria / Servicios básicos</td></tr>
            <tr><td><strong>Regulador</strong></td><td>Superintendencia de Servicios Sanitarios (SISS)</td></tr>
            <tr><td><strong>Portal auditado</strong></td><td>Portal de clientes (autoatención, pagos, consumo)</td></tr>
            <tr><td><strong>Código empresa</strong></td><td>E15</td></tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="card-title">Descripción del portal</div>
        <p>
          El portal de clientes de AguasClaras permite a los usuarios registrados consultar su
          historial de consumo de agua potable y alcantarillado, ver y descargar boletas, realizar
          pagos en línea, reportar emergencias y actualizar datos de contacto. Custodia datos
          personales (RUT, dirección, teléfono, correo), bancarios (tarjetas de pago vinculadas)
          y de consumo domiciliario.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Alcance de la auditoría</div>
        <p style={{ marginBottom: 12 }}>
          Se auditó el portal en un ambiente controlado usando DVWA (Damn Vulnerable Web Application)
          con nivel de seguridad <strong>Low</strong>. Se ejecutaron y documentaron tres vectores de ataque:
        </p>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Vulnerabilidad</th>
              <th>Severidad estimada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Inyección SQL (SQLi)</td>
              <td><span className="badge badge-critico">CRÍTICO</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td>XSS Reflejado</td>
              <td><span className="badge badge-alto">ALTO</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Inyección de comandos</td>
              <td><span className="badge badge-critico">CRÍTICO</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="card-title">Marco ético-legal</div>
        <p>
          Todos los ataques se realizaron exclusivamente sobre el entorno controlado y autorizado
          proporcionado por el docente. El acceso o ataque a sistemas reales sin autorización
          constituye delito conforme a la <strong>Ley N° 21.459</strong> (Delitos Informáticos, Chile, 2022).
          Esta auditoría tiene fines exclusivamente educativos y defensivos.
        </p>
      </div>
    </div>
  )
}
