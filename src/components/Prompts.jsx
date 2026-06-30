const ENTRADAS = [
  {
    num: '01',
    seccion: 'Estructura base del proyecto (Vite + React)',
    prompt: `Necesito armar el proyecto auditoria_sotluc para AguasClaras (mi empresa asignada,
la E15). Tiene que ser React + Vite con un sidebar para ir cambiando entre las 9
secciones del informe, usando la misma forma que en la Evaluación 2.`,
    acepte: 'La estructura de carpetas y el sidebar de navegación, porque me sirvió para no tener que armar todo el routing manual entre secciones.',
    corregi: 'Probé primero una versión con un estilo más oscuro tipo "dashboard", pero no me gustó cómo quedó y volví a la versión con sidebar normal, que se parece más a lo que tenía pensado para el sitio.',
  },
  {
    num: '02',
    seccion: 'SQL Injection, XSS, Command Injection (Informe A)',
    prompt: `Ayúdame a explicar por qué funciona la inyección SQL con el payload ' OR '1'='1 en
DVWA, pensando en que es el portal de AguasClaras. Necesito también el CVSS y
controles de prevención.`,
    acepte: 'La explicación de por qué funciona cada vulnerabilidad (la parte de la consulta SQL concatenada me sirvió para entenderlo mejor) y la base de la tabla CVSS.',
    corregi: 'Los puntajes CVSS los volví a calcular yo mismo en la calculadora oficial (first.org/cvss/calculator/3.1) comparando con lo que realmente vi en mis capturas, no me quedé con el número que tiraba la IA de primeras. También pedí que agregara la referencia a OWASP en los controles porque la primera vez no la puso.',
  },
  {
    num: '03',
    seccion: 'Incrustar capturas reales en los componentes',
    prompt: `Ya tengo las 3 capturas de los ataques en DVWA, ayúdame a ponerlas en los
componentes de React con un pie de foto explicando qué muestra cada una.`,
    acepte: 'El código para poner las imágenes y los textos de pie de foto.',
    corregi: 'Tuve bastantes idas y vueltas con dónde tenían que ir guardadas las imágenes (si en docs_sotluc o en public/docs_sotluc), me costó entender que tenían que estar duplicadas en los dos lados. Al final lo resolví comparando con capturas de mi explorador de archivos.',
  },
  {
    num: '04',
    seccion: 'Matriz de riesgo y mapa de calor (Informe B)',
    prompt: `Para el informe B necesito la matriz de riesgo con mapa de calor (probabilidad x
impacto) de las 3 vulnerabilidades, que tenga coherencia con los CVSS que ya saqué
en el informe A.`,
    acepte: 'La lógica del mapa de calor (la grilla de colores) y la idea de cómo ubicar cada vulnerabilidad según probabilidad e impacto.',
    corregi: 'Cambié la probabilidad del XSS porque la IA la había puesto igual de alta que la SQLi, y no tenía sentido porque el XSS necesita que la víctima haga clic en algo, mientras que la SQLi se puede explotar directo sin que nadie haga nada. Lo bajé de 5 a 4 para que calzara con el análisis que ya había hecho antes.',
  },
  {
    num: '05',
    seccion: 'Controles con marco de referencia (Informe B)',
    prompt: `Junta las políticas de prevención y los controles de mitigación de las 3
vulnerabilidades en una sola sección, y que cada control diga a qué marco de
seguridad pertenece (OWASP o CIS).`,
    acepte: 'La tabla con todos los controles juntos y organizados por prioridad.',
    corregi: 'Revisé que los números de los controles CIS que puso fueran reales (busqué que existiera el Control 5 y el Control 13 del CIS Controls v8) y no nombres inventados nomás para que sonara bien.',
  },
  {
    num: '06',
    seccion: 'Plan de recuperación ante desastres (Informe B)',
    prompt: `Arma el plan de recuperación para AguasClaras pensando en que es un servicio básico,
con respaldo, restauración, notificación de incidentes y mejoras tecnológicas como
WAF.`,
    acepte: 'La estructura general del plan (backup, restauración, notificación, lecciones aprendidas).',
    corregi: 'Cambié la parte de notificación para que mencionara la ley chilena de protección de datos (19.628) en vez de algo genérico tipo "normativa vigente", y ajusté los tiempos de RTO/RPO para que fueran más realistas para una empresa de este tamaño y no copiados de un caso enterprise gigante.',
  },
]

export default function Prompts() {
  return (
    <div>
      <div className="section-header">
        <div className="section-eyebrow">Sección 09 · Transversal</div>
        <h1 className="section-title">Bitácora de Uso de IA</h1>
        <p className="section-desc">
          Registro de prompts, herramientas utilizadas y reflexión crítica
        </p>
      </div>

      {ENTRADAS.map(e => (
        <div className="card" key={e.num}>
          <div className="card-title">Entrada {e.num} · Claude (Anthropic) · Sección: {e.seccion}</div>
          <p><strong>Prompt utilizado:</strong></p>
          <div className="payload" style={{ whiteSpace: 'pre-line' }}>{e.prompt}</div>
          <p style={{ marginTop: 12 }}><strong>¿Qué acepté?</strong></p>
          <p>{e.acepte}</p>
          <p style={{ marginTop: 12 }}><strong>¿Qué corregí?</strong></p>
          <p>{e.corregi}</p>
        </div>
      ))}

      <div className="card">
        <div className="card-title">Reflexión final</div>
        <p>
          Usé la IA principalmente para armar la base del código (los componentes, el CSS, la
          navegación) y para tener un primer borrador del contenido técnico de cada sección, que
          después fui revisando contra lo que realmente vi en DVWA y contra lo que tenía sentido
          para el rubro de AguasClaras. Me sirvió harto para no perder tiempo armando todo desde
          cero, sobre todo en la parte de código.
        </p>
        <p style={{ marginTop: 12 }}>
          Lo que más me costó fue el tema de las rutas de las imágenes, ahí tuve que insistir
          varias veces hasta entender bien dónde iban. Y en general traté de no aceptar nada a
          ciegas: los CVSS los comprobé yo en la calculadora oficial, y los controles los revisé
          para que las referencias a OWASP y CIS fueran reales y no solo nombres puestos para que
          se viera más completo. Al final la responsabilidad de que el análisis esté bien hecho es
          mía, la IA solo me ayudó a no partir de cero.
        </p>
      </div>
    </div>
  )
}