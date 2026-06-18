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

      <div className="card">
        <div className="card-title">Instrucciones de la sección</div>
        <p>
          Por cada uso de IA en esta evaluación se debe registrar: el prompt utilizado,
          la herramienta, para qué sección se usó, qué se aceptó del resultado, qué se
          corrigió y una reflexión final sobre el uso crítico de la IA.
        </p>
      </div>

      <div className="card">
        <div className="card-title">Entrada 01 — [Herramienta] · Sección [XX]</div>
        <p><strong>Prompt utilizado:</strong></p>
        <div className="payload">[ Pegar aquí el prompt exacto ]</div>
        <p style={{ marginTop: 12 }}><strong>¿Qué acepté?</strong></p>
        <p style={{ color: 'var(--texto-muted)', fontStyle: 'italic' }}>Describir qué parte del output fue útil y se incorporó directamente.</p>
        <p style={{ marginTop: 12 }}><strong>¿Qué corregí?</strong></p>
        <p style={{ color: 'var(--texto-muted)', fontStyle: 'italic' }}>Describir qué tuvo errores, imprecisiones o requirió ajuste manual.</p>
      </div>

      <div className="card">
        <div className="card-title">Reflexión final</div>
        <p style={{ color: 'var(--texto-muted)', fontStyle: 'italic' }}>
          [ Reflexión sobre el uso crítico de la IA durante la evaluación: qué aportó,
          dónde falló, y cómo se tomó responsabilidad técnica de los resultados. ]
        </p>
      </div>
    </div>
  )
}
