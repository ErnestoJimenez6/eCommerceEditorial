# Proyecto de Ecommerce: Editrial Mar Negro - Libros de Ciencia Ficción, Fantasía y Horror
Este proyecto es una Single Page Application (SPA) desarrollada en React para la venta de libros de ciencia ficción, fantasía y horror. Está diseñada como una tienda en línea con funcionalidades como carrito de compras, navegación dinámica y gestión de productos conectada a Firebase.

## Características
### React y Vite:
El proyecto está construido con React para una experiencia de usuario fluida y Vite para una configuración rápida.
### Gestión de Productos:
Los productos se cargan y gestionan dinámicamente desde Firestore (Firebase).
### Carrito de Compras:
Los usuarios pueden agregar, actualizar y eliminar productos del carrito, con un resumen de la compra.
### Navegación Dinámica:
Implementación de React Router para manejar la navegación entre distintas secciones.
### Context API:
Uso de Context para la gestión global del estado del carrito de compras.
### Estilos Responsivos:
La aplicación utiliza Bootstrap para un diseño adaptativo, junto con personalización de estilos CSS.
## Tecnologías Utilizadas

**Frontend:** React, React Router, Context API

**Backend:** Firebase (Firestore para datos, Firebase Hosting para despliegue)

**Estilos:** Bootstrap, CSS
Despliegue: Vite
## Instalación y Configuración
1. Clonar el repositorio:
```bash
  git clone https://github.com/ErnestoJimenez6/eCommerceEditorial
  cd eCommerceEditorial
```
2. Instalar dependencias:
```bash
  npm install
```
3. Configurar Firebase:
a. Crear un proyecto en Firebase Console.

b. Agregar una aplicación web y obtener la configuración de Firebase (apiKey, authDomain, projectId, etc.).

c. Crear un archivo .env en la raíz del proyecto y agregar las variables de entorno:
```makefile
  VITE_FIREBASE_API_KEY=yourApiKey
  VITE_FIREBASE_AUTH_DOMAIN=yourAuthDomain
  VITE_FIREBASE_PROJECT_ID=yourProjectId
  VITE_FIREBASE_STORAGE_BUCKET=yourStorageBucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=yourSenderId
  VITE_FIREBASE_APP_ID=yourAppId
```
4. Iniciar la aplicación:
```bash
  npm run dev
```
## Contribuciones
Si deseas contribuir, por favor abre un issue o envía un pull request. Las contribuciones son bienvenidas.
## Licencia
Este proyecto está bajo la licencia MIT.