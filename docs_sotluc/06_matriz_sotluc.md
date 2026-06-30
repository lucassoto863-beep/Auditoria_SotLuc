# 06 — Matriz de Riesgo

## Mapa de calor — Probabilidad × Impacto

Cada celda representa el nivel de riesgo resultante de combinar la probabilidad de
ocurrencia (eje horizontal, 1–5) con el impacto en el negocio (eje vertical, 1–5).

**Escala de color:**
- 🔴 Crítico (score ≥ 20)
- 🟠 Alto (score ≥ 15)
- 🟡 Medio (score ≥ 9)
- 🟢 Bajo (score < 9)

| Vulnerabilidad | Probabilidad | Impacto | Score | Nivel |
|---|---|---|---|---|
| Inyección SQL | 5/5 | 5/5 | 25 | 🔴 Crítico |
| Inyección de Comandos | 4/5 | 5/5 | 20 | 🔴 Crítico |
| XSS Reflejado | 4/5 | 4/5 | 16 | 🟠 Alto |

> El mapa de calor visual interactivo está disponible en el componente `Matriz.jsx` del sitio desplegado.

---

## Detalle y justificación de probabilidad / impacto

| Vulnerabilidad | CVSS | Prob. | Impacto | Justificación |
|---|---|---|---|---|
| Inyección SQL | 9.8 | 5/5 | 5/5 | Alta probabilidad: no requiere autenticación ni interacción de víctima, es la falla más buscada por atacantes automatizados (bots de escaneo). Impacto máximo: expone toda la base de clientes de un servicio regulado. |
| Inyección de Comandos | 9.8 | 4/5 | 5/5 | Probabilidad alta pero ligeramente menor que SQLi por requerir identificar el endpoint vulnerable específico. Impacto máximo: compromiso total del servidor y continuidad operativa del servicio sanitario. |
| XSS Reflejado | 8.8 | 4/5 | 4/5 | Probabilidad alta porque es fácil de automatizar en campañas de phishing, aunque requiere que la víctima haga clic. Impacto alto pero acotado a la sesión/cuenta del usuario afectado, sin comprometer la BD completa. |

---

## Priorización de atención

| Prioridad | Vulnerabilidad | Razón |
|---|---|---|
| 1 | Inyección SQL | CVSS 9.8 + cuadrante crítico de la matriz (5,5). Mayor superficie de exposición de datos sensibles. |
| 2 | Inyección de Comandos | CVSS 9.8 + compromete la disponibilidad del servicio completo, no solo los datos. |
| 3 | XSS Reflejado | CVSS 8.8, impacto acotado a sesiones individuales en lugar de la infraestructura completa. |