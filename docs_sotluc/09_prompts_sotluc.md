# 09 — Bitácora de Uso de IA
 
## Registro de prompts
 
---
 
### Entrada 01 — Estructura inicial del proyecto
 
**Herramienta:** Claude (Anthropic)  
**Sección:** Estructura base del proyecto (Vite + React + componentes)
 
**Prompt utilizado:**
 
```
Crea la estructura del proyecto auditoria_sotluc para AguasClaras Sanitaria S.A.,
empresa E15 asignada en la Evaluación Sumativa N°3. Necesito un proyecto React + Vite
con sidebar de navegación para las 9 secciones del informe (resumen, sqli, xss,
comandos, activos, matriz, controles, recuperación, prompts), siguiendo la misma
modalidad técnica que usé en la Evaluación 2.
```
 
**¿Qué acepté?**  
La estructura completa de carpetas (`docs_sotluc/`, `src/components/`), el sistema de
navegación con sidebar por secciones, y el CSS base con paleta de colores azul agua
acorde al rubro sanitario de la empresa.
 
**¿Qué corregí?**  
Inicialmente probé una segunda versión con estética tipo "dashboard SOC" (fondo negro,
acentos cian, panel lateral tipo drawer), pero decidí revertirla porque no me gustó el
resultado visual y volví a la versión original con sidebar, que se ajustaba mejor a lo
que tenía en mente.
 
---
 
### Entrada 02 — Contenido técnico de los 3 ataques
 
**Herramienta:** Claude (Anthropic)  
**Sección:** 02_sqli_sotluc.md, 03_xss_sotluc.md, 04_comandos_sotluc.md
 
**Prompt utilizado:**
 
```
Para AguasClaras Sanitaria (portal de clientes con datos de RUT, consumo de agua y
pagos), redacta el análisis técnico de Inyección SQL con el payload ' OR '1'='1,
explicando por qué funciona la consulta vulnerable, el puntaje CVSS v3.1 justificado
métrica por métrica, una política de prevención con consultas parametrizadas, y
controles de mitigación referenciando OWASP.
```
 
**¿Qué acepté?**  
La explicación técnica de cada vulnerabilidad (por qué funciona, ejemplo de consulta
vulnerable vs. consulta con el payload inyectado) y la tabla de métricas CVSS.
 
**¿Qué corregí?**  
Verifiqué y ajusté manualmente los puntajes CVSS en la calculadora oficial de FIRST
(https://www.first.org/cvss/calculator/3.1) contrastando con las capturas reales que
obtuve en DVWA, en lugar de aceptar el puntaje generado por la IA sin revisión. También
agregué la referencia explícita al marco OWASP Top 10 (A03:2021 — Injection) en los
controles de mitigación, ya que la primera versión no la mencionaba explícitamente.
 
---
 
### Entrada 03 — Incrustación de evidencia real
 
**Herramienta:** Claude (Anthropic)  
**Sección:** Componentes InyeccionSQL.jsx, XSS.jsx, Comandos.jsx
 
**Prompt utilizado:**
 
```
Ya ejecuté los 3 ataques en DVWA (URL: dvwa-dnwe.onrender.com) y tengo las capturas
guardadas como sqli_sotluc.png, xss_sotluc.png y comandos_sotluc.png en
docs_sotluc/img_sotluc/ y public/docs_sotluc/img_sotluc/. Reemplaza los placeholders
de evidencia en los 3 componentes React por las imágenes reales, con un pie
descriptivo (figura) que explique qué muestra cada captura.
```
 
**¿Qué acepté?**  
El código de los `<img>` con las rutas correctas (`/docs_sotluc/img_sotluc/...`) y los
pies descriptivos redactados para cada figura.
 
**¿Qué corregí?**  
Tuve que aclarar varias veces la ubicación correcta de las carpetas de imágenes
(`docs_sotluc/img_sotluc` en la raíz vs. `public/docs_sotluc/img_sotluc`), ya que en un
primer momento la IA me dio indicaciones contradictorias sobre dónde duplicar los
archivos. Verifiqué con capturas del explorador de archivos hasta confirmar la
estructura correcta antes de continuar.
 
---
 
## Reflexión final
 
El uso de IA en esta evaluación se concentró en la generación de la estructura de
código (componentes React, CSS, navegación) y en la redacción inicial del contenido
técnico, que luego validé y ajusté con la evidencia real obtenida en DVWA. El mayor
aporte fue la rapidez para construir el armazón del sitio sin partir desde cero, lo que
me permitió enfocar el tiempo en entender y documentar correctamente cada
vulnerabilidad.
 
El principal punto débil fue la coordinación de rutas de archivos entre carpetas
(`docs_sotluc` y `public/docs_sotluc`), donde la IA dio indicaciones imprecisas en un
primer momento y tuve que pedir aclaraciones repetidas hasta resolverlo correctamente.
También fue clave no aceptar los puntajes CVSS de forma automática: los contrasté
manualmente con la calculadora oficial de FIRST usando como referencia mis propias
capturas, ya que la responsabilidad técnica del análisis es mía, no de la herramienta.