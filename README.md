# Auditoría de Seguridad Web — AguasClaras Sanitaria S.A.

**Asignatura:** TI3034 — Fundamentos de Seguridad de la Información  
**Instituto:** INACAP Valparaíso  
**Docente:** Rubén Schnettler  
**Estudiante:** Lucas Benjamín Soto Lagos  
**Período:** Otoño 2026

---

## Descripción

Auditoría de seguridad web sobre el portal de clientes de **AguasClaras Sanitaria S.A.** (empresa ficticia E15), realizada en un ambiente controlado usando DVWA (Damn Vulnerable Web Application). Se identificaron, explotaron y documentaron tres vulnerabilidades críticas, midiendo su gravedad mediante CVSS v3.1 y proponiendo medidas de prevención, mitigación y recuperación contextualizadas al rubro sanitario.

### Vulnerabilidades auditadas

| # | Vulnerabilidad | CVSS | Severidad |
|---|---|---|---|
| 1 | Inyección SQL | 9.8 | CRÍTICO |
| 2 | XSS Reflejado | 8.8 | ALTO |
| 3 | Inyección de Comandos | 9.8 | CRÍTICO |

---

## Estructura del proyecto

```
auditoria_sotluc/
├── docs_sotluc/          # Contenido del informe en Markdown
│   ├── img_sotluc/       # Capturas de los ataques
│   └── *.md              # Un archivo por sección
└── src/
    └── components/       # Un componente React por sección
```

## Sitio desplegado

🔗 [https://auditoria-sot-luc.vercel.app/](https://auditoria-sot-luc.vercel.app/)

---

> Este proyecto tiene fines exclusivamente educativos y defensivos.  
> Todos los ataques se ejecutaron sobre un entorno controlado y autorizado.  
> Atacar sistemas reales sin autorización es delito conforme a la **Ley N° 21.459** (Chile, 2022).
