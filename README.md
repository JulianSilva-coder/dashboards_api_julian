# dashboards\_api\_julian

Aplicación React desarrollada como propuesta de mejora visual para la gestión de Proyectos, Fuentes de Datos, Paneles y Tableros.

---

## Descripción del proyecto

La aplicación visualiza de forma clara y ordenada las siguientes entidades:

- Proyectos: Listado de proyectos con cantidad de tareas. Incluye funcionalidad de ordenamiento A-Z / Z-A.
- Fuentes de Datos: Listado con nombre y estado de conexión.
- Paneles: Información de nombre, fecha de creación y estado actual.
- Tableros: Nombre del tablero y última fecha de actualización.
- Cada sección se encuentra separada visualmente según lo solicitado en la prueba.

El diseño fue implementado con CSS puro (sin frameworks externos) respetando las reglas de la prueba.

---

## Tecnologías utilizadas

- Lenguaje: JavaScript
- Framework: ReactJS
- Estilos: CSS puro (sin frameworks ni librerías de UI)
- Despliegue: Docker + Nginx (para despliegue productivo)

---

## Instrucciones de uso (modo local)

1. Clonar el repositorio:

```bash
git clone https://github.com/JulianSilva-coder/dashboards_api_julian.git
cd dashboards_api_julian
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en modo desarrollo:

```bash
npm start
```

La aplicación estará disponible en:

[http://localhost:3000](http://localhost:3000)

---

## Despliegue con Docker

1. Construir la imagen:

```bash
docker build -t dashboards_app .
```

2. Ejecutar el contenedor:

```bash
docker run -p 3000:80 dashboards_app
```

3. Visualizar en el navegador:

[http://localhost:3000](http://localhost:3000)

---

## Estructura del proyecto

```
src/
├── components/
│   ├── ProjectList.js
│   ├── SourceList.js
│   ├── PanelList.js
│   └── DashboardList.js
├── pages/
│   └── overview.js
├── index.js
├── index.css
```

---

## Notas finales

- Proyecto desarrollado como parte de la prueba tipo reestructuración.
- No se hace uso del nombre "Creangel" en ningún lugar del código, repositorio o documentación.
- El despliegue cumple el requisito de máximo 3 comandos.

Prueba entregada cumpliendo todos los lineamientos solicitados.

