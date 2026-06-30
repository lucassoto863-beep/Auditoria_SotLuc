# 08 — Plan de Recuperación

## Contexto: por qué es crítico para AguasClaras

AguasClaras provee un servicio básico esencial. Una interrupción del portal afecta
directamente la facturación, el reporte de emergencias y la atención a miles de hogares
de la Región de Valparaíso. A diferencia de un e-commerce, aquí el tiempo de inactividad
no solo implica pérdida económica: puede dejar a la empresa sin capacidad de monitorear
consumo o recibir reportes de fugas/emergencias sanitarias.

---

## Mejoras tecnológicas propuestas

| Mejora | Objetivo | Vulnerabilidad que mitiga |
|---|---|---|
| Web Application Firewall (WAF) | Filtrar tráfico malicioso (SQLi, XSS, Command Injection) antes de llegar a la aplicación | Las 3 vulnerabilidades |
| Segmentación de red | Aislar el servidor de base de datos del servidor web, limitando el alcance de un Command Injection | Inyección de Comandos |
| Monitoreo y alertas (SIEM) | Detectar patrones de ataque en tiempo real (múltiples intentos de login, queries anómalas) | Las 3 vulnerabilidades |
| Backups automatizados cifrados | Garantizar restauración rápida ante pérdida o corrupción de datos | Inyección de Comandos, SQLi |

---

## Plan de recuperación ante desastres (DR)

### 1. Respaldo (Backup)
Backups automáticos diarios de la base de datos de clientes, cifrados y almacenados en
una ubicación geográficamente distinta al servidor principal (regla 3-2-1: 3 copias,
2 medios distintos, 1 fuera del sitio). Retención mínima de 30 días.

### 2. Restauración (Recovery)
Definir un **RTO (Recovery Time Objective)** máximo de 4 horas para restaurar el portal
de clientes, y un **RPO (Recovery Point Objective)** máximo de 24 horas de pérdida de
datos aceptable, considerando que es un servicio esencial.

### 3. Notificación
Ante un incidente confirmado con exposición de datos personales, AguasClaras debe
notificar a los clientes afectados y a la autoridad competente, conforme a la Ley
N° 19.628 sobre protección de datos personales, dentro de los plazos que defina su
protocolo interno de gestión de incidentes.

### 4. Lecciones aprendidas
Cada incidente debe documentarse en un informe post-mortem que identifique causa raíz,
tiempo de detección, tiempo de contención y mejoras aplicadas, retroalimentando la
matriz de riesgo (sección 06) para futuras auditorías.

---

## Resumen de continuidad operativa

| Métrica | Objetivo |
|---|---|
| RTO (tiempo de restauración) | ≤ 4 horas |
| RPO (pérdida de datos aceptable) | ≤ 24 horas |
| Frecuencia de backup | Diario, automatizado |
| Retención de backups | 30 días mínimo |