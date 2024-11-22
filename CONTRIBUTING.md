# **Guía de Contribución - La Guía del Programador**  

¡Gracias por interesarte en contribuir a nuestro proyecto! Este documento te ayudará a entender cómo colaborar de manera efectiva en **La Guía del Programador** utilizando GitHub Projects y las herramientas que hemos configurado.

---

## **Cómo Contribuir como Colaborador**  

1. **Configura tu Acceso al Proyecto**  
   - Asegúrate de haber aceptado la invitación como colaborador en el repositorio.  
   - Familiarízate con el tablero de **GitHub Projects** del proyecto.  

2. **Revisa las Tareas en el Tablero**  
   - Accede al tablero de **GitHub Projects** desde el repositorio.  
   - Explora las tareas disponibles en la columna **Pendiente**.  
   - Selecciona una tarea que esté alineada con tu rol y habilidades.  

3. **Trabaja en la Tarea**  
   - Cambia el estado de la tarjeta de **Pendiente** a **En Progreso**.  
   - Abre un Issue relacionado si no está creado y vincúlalo a la tarjeta.  
   - Crea una rama nueva para trabajar en la tarea.  

     ```bash
     git checkout -b nombre-de-la-tarea
     ```

4. **Sincroniza tus Cambios**  
   - Una vez completada tu tarea, realiza un commit claro y descriptivo.  
     ```bash
     git commit -m "feat: descripción de la tarea completada"
     ```  
   - Haz un Push de tu rama.  
     ```bash
     git push origin nombre-de-la-tarea
     ```  

5. **Crea un Pull Request (PR)**  
   - Desde GitHub, crea un Pull Request y selecciona revisores para evaluar tu trabajo.  
   - Cambia el estado de la tarjeta a **En Revisión** y vincula el PR a la tarjeta.  

---

## **Flujo de Trabajo con GitHub Projects**  

### **Estructura del Tablero**  

1. **Pendiente**:  
   - Tareas que aún no han sido asignadas o iniciadas.  
   - Revisa esta columna para encontrar tareas nuevas.  

2. **En Progreso**:  
   - Cambia una tarea a esta columna al comenzar a trabajar en ella.  
   - Asegúrate de actualizar la tarjeta con comentarios relevantes sobre tu progreso.  

3. **En Revisión**:  
   - Mueve la tarjeta a esta columna cuando envíes un Pull Request.  
   - Notifica a los revisores y resuelve los comentarios antes de pasar a completado.  

4. **Completado**:  
   - Las tareas se mueven aquí automáticamente al cerrar el Pull Request relacionado.  

---

## **Reglas Básicas para Contribuir**  

1. **Mensajes de Commit**  
   - Usa mensajes claros y consistentes.  
     - ✅ `feat: agregar formulario de sugerencias`  
     - ✅ `fix: corregir error en el endpoint de sugerencias`  

2. **Revisión de Código**  
   - Todos los Pull Requests deben ser revisados y aprobados por al menos un revisor antes de ser fusionados.  
   - Asegúrate de que los cambios no rompan funcionalidades existentes y de seguir las convenciones del proyecto.  

3. **Estilo de Código**  
   - Sigue las convenciones establecidas (JavaScript con ESLint, CSS o TailwindCSS).  
   - Mantén tu código limpio y bien documentado.  

---

## **Herramientas Recomendadas**  

- [Node.js](https://nodejs.org/)  
- [Vite](https://vitejs.dev/)   
- [ESLint](https://eslint.org/) para mantener el código limpio.
- **Editor de Código**: [Visual Studio Code](https://code.visualstudio.com/)   
- **Testing**: [Jest](https://jestjs.io/) para pruebas unitarias, [Postman](https://www.postman.com/) para pruebas de API.  

---

## **Comunicación y Soporte**  

Si tienes dudas o necesitas ayuda:  
- Usa la sección de comentarios en GitHub Projects.  
- Contacta con el equipo en nuestro canal de **Discord**.  

---

¡Gracias por colaborar en **La Guía del Programador**! Juntos construiremos una herramienta increíble para la comunidad. 🚀  

