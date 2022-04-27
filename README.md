## Getting Started

Primero, ejecute el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3001](http://localhost:3001) con su navegador para obtener un poco de información sobre esta APIREST.

RUTAS DISPONIBLES:

-  [/api/auth/signup](http://localhost:3001/api/auth/signup) - en esta ruta podrá crear usuarios nuevos, con un método POST debe agregar un json en el body de la solicitud, de tal manera:

```bash
{
    "username": "",
    "email": "",
    "password": ""
}
```

Si el usuario no existe, al igual que el email, el endpoint creará el usuario en la base de datos; mongodb atlas, y responderá con un token, el cual permitirá mantener la sesión en frontend. El token expirara en una hora.

-  [/api/auth/signin](http://localhost:3001/api/auth/signin) - en esta ruta podrá ingresar con un usuario ya creado, con un método POST debe agregar un json en el body de la solicitud, de tal manera:

```bash
{
    "email": "",
    "password": ""
}
```

Si las credenciales son correctas, el endpoint responderá con un token, el cual permitirá mantener la sesión en frontend. El token expirara en una hora.

-  [/api/search-users](http://localhost:3001/api/search-users) - en esta ruta podrá obtener todos los usuarios alojados en la base de datos (con algunos datos excluidos, como la contraseña para mantener la seguridad de estos), con un método GET debe agregar un HEADER 'x-acess-token' y su valor debe ser el token proporcionado en las rutas de autenticación.

IMPORTAR COLECCION DE SOLICITUDES POSTMAN:

Para facilitar el testeo de estas rutas, tendrá acceso a este archivo [collection-postman](https://drive.google.com/file/d/1BJYr78AgrDsTIP5rOPqG2n9zOFLN5QYy/view?usp=sharing), el cual contiene la colección de solicitudes; GET Y POST, en los entornos de desarrollo y producción.

## Learn More

El backend de este test para la empresa ciomprix, se desarrolló con nodejs y la base de datos está contenida en el servicio de [Atlas](https://www.mongodb.com/es/atlas) de MongoDB, para acceder a la base de datos, debe iniciar sesión en [MongoDB](https://account.mongodb.com/account/login) con estas credenciales:

```bash
    "email": testciomprix@gmail.com
    "password": passTest1*
```

Presione el botón Browse Collections para acceder a las colecciones de la base de datos Mongo.

## Deploy on DigitalOcean

El despliegue de esta APIREST se hizo en un servidor ubuntu, proporcionado por [DigitalOcean](https://www.digitalocean.com/), para acceder al backend en entorno de producción, acceda por medio de esta ruta [143.244.148.150](http://143.244.148.150/), en el cual podrá hacer uso de las rutas ya proporcionadas en esta documentación.

No se darán las credenciales de este servicio, puesto que hay datos privados (como de facturación) que no deben ser compartidos, por seguridad del desarrollador.
