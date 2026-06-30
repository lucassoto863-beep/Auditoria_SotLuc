export default function Activos() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Sección 05 · Informe B</div>
        <h1 className="section-title">Activos de Información</h1>
        <p className="section-desc">
          Identificación de activos del portal de clientes según el rubro sanitario — AguasClaras
        </p>
      </div>

      <div className="card">
        <div className="card-title">Contexto: ¿por qué estos activos?</div>
        <p>
          AguasClaras es un servicio básico regulado por la Superintendencia de Servicios
          Sanitarios (SISS). A diferencia de un comercio cualquiera, una sanitaria custodia datos
          que combinan información personal, financiera y de infraestructura crítica: la
          interrupción del portal no solo afecta la privacidad de los clientes, sino la capacidad
          de la empresa de facturar y operar un servicio esencial para miles de hogares.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Activos de información identificados</div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Activo</th>
              <th>Descripción</th>
              <th>Clasificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1</td>
              <td>Base de datos de clientes</td>
              <td>RUT, nombre, dirección de suministro, teléfono y correo de todos los clientes registrados</td>
              <td><span className="badge badge-critico">Confidencial</span></td>
            </tr>
            <tr>
              <td>A2</td>
              <td>Datos de pago</td>
              <td>Tarjetas vinculadas, historial de transacciones y boletas de pago en línea</td>
              <td><span className="badge badge-critico">Confidencial</span></td>
            </tr>
            <tr>
              <td>A3</td>
              <td>Historial de consumo</td>
              <td>Registros de consumo de agua potable y alcantarillado por domicilio</td>
              <td><span className="badge badge-alto">Reservado</span></td>
            </tr>
            <tr>
              <td>A4</td>
              <td>Credenciales de acceso</td>
              <td>Usuarios, contraseñas (hash) y sesiones activas del portal de autoatención</td>
              <td><span className="badge badge-critico">Confidencial</span></td>
            </tr>
            <tr>
              <td>A5</td>
              <td>Servidor del portal</td>
              <td>Infraestructura que aloja la aplicación web y la base de datos</td>
              <td><span className="badge badge-alto">Crítico operacional</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="card-title">Vínculo vulnerabilidad → activo en riesgo</div>
        <table>
          <thead>
            <tr>
              <th>Vulnerabilidad</th>
              <th>Activos comprometidos</th>
              <th>Impacto en el negocio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inyección SQL</td>
              <td>A1, A2, A3, A4</td>
              <td>
                Exposición completa de la base de datos de clientes: filtración masiva de RUT,
                direcciones y datos bancarios. Para una sanitaria regulada por la SISS, implica
                sanciones, pérdida de confianza pública y posible responsabilidad legal por
                infracción a la Ley N° 19.628 sobre protección de datos personales.
              </td>
            </tr>
            <tr>
              <td>XSS Reflejado</td>
              <td>A2, A4</td>
              <td>
                Robo de sesión o credenciales de clientes mediante enlaces maliciosos distribuidos
                con apariencia de AguasClaras, habilitando fraude de pago o suplantación de
                identidad de usuarios del portal.
              </td>
            </tr>
            <tr>
              <td>Inyección de Comandos</td>
              <td>A1, A2, A3, A4, A5</td>
              <td>
                Compromiso total del servidor: acceso al sistema de archivos, posible instalación
                de malware, y riesgo de interrupción del servicio de facturación y consulta de
                consumo, afectando la continuidad operativa de un servicio básico esencial.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}