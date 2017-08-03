# Prueba irontec

Este proyecto fue creado por Ion Bengoechea para la prueba de IronTec.

## Descripcción del proyecto
* Disponer de una interfaz web que liste (con paginado a ser posible), las issues de cualquier repositorio de github.

* La interfaz deberá solicitar la URL del repositorio, y listar las issues, con toda la información que consideres interesante incluir de cada issue

# Proyecto en Angular 2
## Denpendencias para desarrollo
* Git
* NodeJS v > 6.X
* NPM v > 3.x
* Angular/cli
  * instalacion: `npm install -g @angular/cli`
* Bootstrap
  * instalacion: `npm install ngx-bootstrap bootstrap --save`

## Como probar y desarrollar la aplicación de angular

Clona el proyecto con `git clone https://github.com/ionilancer/gitissues.git` y navega a la carpeta `cd gitissues`

Ejecuta `ng serve` o `npm start` para usar el sevidor de desarrollo.

Navega a `http://localhost:4200/?u=ionilancer&r=gitissues` para ver las issues del repositorio.

Busca  `https://github.com/ionilancer/gitissues` para ver las issues del repositorio.


# Proyecto en react Native

## Dependencias para desarrollo
* Git
* NodeJS v > 6.X
* NPM v > 3.x
* React Native
  * instalacion: `npm install -g react-native-cli`
* Android SDK
  * [Más información](https://facebook.github.io/react-native/releases/0.23/docs/android-setup.html)
  
## Instalar la aplicación
Puesdes descargar la aplicación situada en el directorio [androd/app](https://github.com/ionilancer/gitissues/blob/master/reactNative/android/app/app-release.apk) recuerda permitir la instalación de aplicaciones de terceros en tu teléfono.

## Como desarrollar en la aplicación de Reac Native

Clona el proyecto con `git clone https://github.com/ionilancer/gitissues.git` y navega a la carpeta `cd gitissues/reactNative`

Inicia el proyecto con el comando `react-native start` 
Compila el proyecto con el comando `react-native run-android` (recuerda que tienes que tener el SDK de android instalado y un dispositivo movil conectado mediante usb en modo depuración USB)

Una vez tengas abierta la aplicación busca por la url de un repositorio de github `https://github.com/user/repo` para ver sus issues.



