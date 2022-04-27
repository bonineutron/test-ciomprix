## Getting Started

Primero, ejecute el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3001](http://localhost:3001) con su navegador para obtener un poco de informacion sobre esta APIREST.

RUTAS DISPONIBLES:

-  [/api/auth/signup](http://localhost:3001/api/auth/signup) - en esta ruta podra crear usuarios nuevos, con un metodo POST debe agregar un json en el body de la solicitud, de tal manera:

```bash
{
	"username": "",
	"email": "",
	"password": ""
}
```

Si el usuario no existe, al igual que el email, el endpoint creara el usuario en la base de datos; mongodb atlas, y respondera con un token, el cual permitira mantener la sesion en frontend.

-  [/api/auth/signin](http://localhost:3001/api/auth/signin) - en esta ruta podra ingresar con un usuario ya creado, con un metodo POST debe agregar un json en el body de la solicitud, de tal manera:

```bash
{
	"username": "",
	"email": "",
	"password": ""
}
```

Si las credenciales son correctas, el endpoint respondera con un token, el cual permitira mantener la sesion en frontend.
