## Desafío Nº 8
## Juan Pablo Lezama
## 37035460
## Curso BackEnd - CoderHouse
## Tutor: Lucas Cardozo

Entrega de desafío Nº 8: "Implementación de Login"

Aclaraciones:

1) Al cargar el proyecto (http://localhost:8080/) se redirige a la pantalla de LOGIN
2) Al cargar la página de REGISTER a través de un browser muestra por GET una vista donde da instrucciones de cómo registrarse a través de POST (usando Postman).
3) Al cargar la página de LOGIN a través de un browser muestra por GET una vista donde da instrucciones de cómo loguearse a través de POST (usando Postman).
4) Si envío los datos de registro por POST, primero reviso si no está previamente creado. Caso contrario, lo crea.
5) Si envío los datos de logueo por POST, y son correctos, guardo en la sesión el email con el que se accedió (que referencia al usuario en cuestión) y me redirijo a la sección de productos.
6) La página de productos muestra si el usuario está logueado o no, qué tipo de usuario es (en caso de estar logueado) y un botón de logout que destruye la sesión activa, en caso de estar logueado.

Tener en cuenta que el middleware considera al browser y al postman como dos sesiones independientes por lo que sólo es posible loguearse a través de Postman (con POST). En el "preview" del Postman se ve al usuario activo y el botón de logout.

Usuario Mongo DB Atlas: juanpablolezama92@gmail.com

Password Mongo DB Atlas: coderhousecoderhouse

Saludos!