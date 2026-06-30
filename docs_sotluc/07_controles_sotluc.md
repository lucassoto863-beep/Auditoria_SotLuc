# 07 — Prevención y Mitigación

## Marco de referencia adoptado

AguasClaras adopta el **OWASP Top 10 (2021)** como marco principal para clasificar y
priorizar vulnerabilidades web, complementado con los **CIS Controls v8** para los
controles de infraestructura y configuración del servidor. Las tres vulnerabilidades
detectadas corresponden a la categoría **A03:2021 — Injection** del OWASP Top 10.

---

## Políticas de prevención por vulnerabilidad (3.1.4)

| Vulnerabilidad | Política de prevención | Causa raíz atacada |
|---|---|---|
| Inyección SQL | Prohibir la concatenación de inputs en queries SQL. Uso obligatorio de prepared statements u ORM con escape automático. | Falta de separación entre código y datos en la consulta |
| XSS Reflejado | Codificación obligatoria de toda salida HTML generada con input de usuario, más cabecera Content-Security-Policy. | Reflejo de input sin sanitizar en la respuesta del servidor |
| Inyección de Comandos | Prohibir funciones de ejecución del SO (exec, system, shell_exec) con input no validado por whitelist. | Paso de input de usuario directo al intérprete de comandos del sistema |

---

## Controles de mitigación priorizados (3.1.5)

Controles para riesgos en cuadrante rojo/naranja de la matriz (sección 06), referenciados
al marco OWASP / CIS Controls v8:

| Control | Marco | Aplica a | Prioridad |
|---|---|---|---|
| Prepared statements / ORM | OWASP A03:2021 | SQLi | Inmediata |
| Eliminar llamadas a shell del SO | OWASP A03:2021 | Command Injection | Inmediata |
| Output encoding + CSP | OWASP A03:2021 | XSS | Inmediata |
| Web Application Firewall (WAF) | CIS Control 13 — Network Monitoring | SQLi, XSS, Command Injection | Alta |
| Mínimo privilegio en BD y SO | CIS Control 5 — Account Management | SQLi, Command Injection | Alta |
| HttpOnly + Secure cookies | OWASP A05:2021 — Security Misconfiguration | XSS | Alta |
| Contenedor con filesystem solo lectura | CIS Control 4 — Secure Configuration | Command Injection | Media |
| Validación de input (whitelist) | OWASP A03:2021 | SQLi, Command Injection | Media |

---

## Gobernanza: revisión de código y testing

Además de los controles técnicos, AguasClaras debe incorporar **revisión de código
obligatoria (code review)** antes de cada despliegue a producción, y pruebas de
seguridad automatizadas (SAST/DAST) integradas en el pipeline de CI/CD, de forma que
ninguna de estas tres vulnerabilidades pueda volver a llegar a producción sin ser
detectada previamente.