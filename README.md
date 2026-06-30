# Auditoría de Seguridad Web — AguasClaras Sanitaria S.A.

**Asignatura:** TI3034 — Fundamentos de Seguridad de la Información  
**Instituto:** INACAP Valparaíso  
**Docente:** Rubén Schnettler  
**Estudiante:** Lucas Benjamín Soto Lagos  
**Período:** Otoño 2026

---

## Descripción

Auditoría de seguridad web sobre el portal de clientes de **AguasClaras Sanitaria S.A.** (empresa ficticia E15), realizada en un ambiente controlado usando DVWA (Damn Vulnerable Web Application). Se identificaron, explotaron y documentaron tres vulnerabilidades críticas, midiendo su gravedad mediante CVSS v3.1, construyendo la matriz de riesgo del negocio y proponiendo medidas de prevención, mitigación y recuperación contextualizadas al rubro sanitario.

### Vulnerabilidades auditadas

| # | Vulnerabilidad | CVSS | Severidad |
|---|---|---|---|
| 1 | Inyección SQL | 9.8 | CRÍTICO |
| 2 | XSS Reflejado | 8.8 | ALTO |
| 3 | Inyección de Comandos | 9.8 | CRÍTICO |

---

## Contenido del informe

**Informe A — Análisis de Vulnerabilidades**
- 01 Resumen ejecutivo
- 02 Inyección SQL
- 03 XSS Reflejado
- 04 Inyección de Comandos

**Informe B — Matriz de Riesgo**
- 05 Activos de información
- 06 Matriz de riesgo y mapa de calor
- 07 Prevención y mitigación
- 08 Plan de recuperación ante desastres

**Transversal**
- 09 Bitácora de uso de IA

---

## Estructura del proyecto

```
auditoria_sotluc/
├── docs_sotluc/          # Contenido del informe en Markdown
│   ├── img_sotluc/       # Capturas de los ataques
│   └── *.md              # Un archivo por sección (01–09)
├── public/
│   └── docs_sotluc/
│       └── img_sotluc/   # Copia de las capturas servida por el sitio
└── src/
    └── components/       # Un componente React por sección
```

## Stack técnico

React + Vite, desplegado en Vercel, repositorio en GitHub. Misma modalidad técnica utilizada en la Evaluación Sumativa N°2.

## Sitio desplegado

🔗 [https://auditoria-sot-luc.vercel.app/](https://auditoria-sot-luc.vercel.app/)

## Repositorio

🔗 [https://github.com/lucassoto863-beep/Auditoria_SotLuc](https://github.com/lucassoto863-beep/Auditoria_SotLuc)

---

> Este proyecto tiene fines exclusivamente educativos y defensivos.  
> Todos los ataques se ejecutaron sobre un entorno controlado y autorizado.  
> Atacar sistemas reales sin autorización es delito conforme a la **Ley N° 21.459** (Chile, 2022).