# 05 — Activos de Información

## Contexto: ¿por qué estos activos?

AguasClaras es un servicio básico regulado por la Superintendencia de Servicios
Sanitarios (SISS). A diferencia de un comercio cualquiera, una sanitaria custodia datos
que combinan información personal, financiera y de infraestructura crítica: la
interrupción del portal no solo afecta la privacidad de los clientes, sino la capacidad
de la empresa de facturar y operar un servicio esencial para miles de hogares.

---

## Activos de información identificados

| # | Activo | Descripción | Clasificación |
|---|---|---|---|
| A1 | Base de datos de clientes | RUT, nombre, dirección de suministro, teléfono y correo de todos los clientes registrados | Confidencial |
| A2 | Datos de pago | Tarjetas vinculadas, historial de transacciones y boletas de pago en línea | Confidencial |
| A3 | Historial de consumo | Registros de consumo de agua potable y alcantarillado por domicilio | Reservado |
| A4 | Credenciales de acceso | Usuarios, contraseñas (hash) y sesiones activas del portal de autoatención | Confidencial |
| A5 | Servidor del portal | Infraestructura que aloja la aplicación web y la base de datos | Crítico operacional |

---

## Vínculo vulnerabilidad → activo en riesgo

| Vulnerabilidad | Activos comprometidos | Impacto en el negocio |
|---|---|---|
| Inyección SQL | A1, A2, A3, A4 | Exposición completa de la base de datos de clientes: filtración masiva de RUT, direcciones y datos bancarios. Para una sanitaria regulada por la SISS, implica sanciones, pérdida de confianza pública y posible responsabilidad legal por infracción a la Ley N° 19.628 sobre protección de datos personales. |
| XSS Reflejado | A2, A4 | Robo de sesión o credenciales de clientes mediante enlaces maliciosos distribuidos con apariencia de AguasClaras, habilitando fraude de pago o suplantación de identidad de usuarios del portal. |
| Inyección de Comandos | A1, A2, A3, A4, A5 | Compromiso total del servidor: acceso al sistema de archivos, posible instalación de malware, y riesgo de interrupción del servicio de facturación y consulta de consumo, afectando la continuidad operativa de un servicio básico esencial. |