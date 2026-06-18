# 01 — Resumen Ejecutivo

**Auditoría:** TI3034 Evaluación Sumativa N°3  
**Estudiante:** Lucas Benjamín Soto Lagos  
**Sufijo:** sotluc  
**Empresa asignada:** E15 — AguasClaras Sanitaria S.A.  
**Fecha:** Otoño 2026

---

## Empresa auditada

**AguasClaras Sanitaria S.A.** es una empresa de servicios básicos que provee agua potable
y alcantarillado a clientes domiciliarios e industriales. Su portal de clientes permite:
consultar historial de consumo, ver y pagar boletas, reportar emergencias y actualizar datos.

**Datos custodiados por el portal:**
- RUT y datos personales de clientes
- Dirección del suministro
- Historial de consumo (agua potable y alcantarillado)
- Datos bancarios / tarjetas de pago vinculadas
- Datos de contacto (teléfono, correo)

**Regulador:** Superintendencia de Servicios Sanitarios (SISS)

---

## Vulnerabilidades identificadas

| # | Vulnerabilidad | CVSS | Severidad |
|---|---|---|---|
| 1 | Inyección SQL | 9.8 | CRÍTICO |
| 2 | XSS Reflejado | 8.8 | ALTO |
| 3 | Inyección de Comandos | 9.8 | CRÍTICO |

---

## Marco ético-legal

Todos los ataques se ejecutaron exclusivamente sobre DVWA en el entorno controlado
autorizado por el docente. Atacar sistemas reales sin autorización es delito conforme
a la **Ley N° 21.459** (Delitos Informáticos, Chile, 2022). Esta auditoría tiene fines
exclusivamente educativos y defensivos.
