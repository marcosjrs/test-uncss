# Requerido

Instalar globalmente el uncss:

```
npm install -g uncss
```


# Para ejecutar por consola

Crear un css con un par de clases css  llamado todos-los-css:

```
.container{
    font-size: large;
}

.css-no-usada{
    color: red;
}
```


Crear un archivo.html:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test UnCSS</title>
    <link rel="stylesheet" href="clean.css">
</head>
<body>
    <div class="container">
        Probando librería UnCSS
    </div>
</body>
</html>
```


Ejecutar desde consola:

```
uncss -s todos-los-css.css archivo.html > archivo.css
```



Al ejecutarse el comando, creó una css llamada archivo.css, con solo las css usadas en archivo.html:

```
/*** uncss> filename: todos-los-css.css ***/
.container{
    font-size: large;
}
```


# Para ejecutar con node

Inicialice e instalé el uncss en el proyecto:
```
npm init -y
npm install uncss
```

Creé una carpeta simulando una estructura cutre de proyecto:
```
ejemplo_carpeta_publica
    /css/muchos-css-no-usados.css
    index.html
```

Creé un limpiar.js, que comprobará que css de muchos-css-no-usados.css se utilizarían en index.html, mostrandolo por consola:
```
const uncss = require("uncss")
const htmlFiles = ["./ejemplo_carpeta_publica/index.html"]
const opts = {
    csspath: "/css/",
    stylesheets: ["muchos-css-no-usados.css"]
}
uncss(htmlFiles, opts, (err, res) => {
    if(err)
        console.error(err)
    console.log(res)
})
```


Se mostrarán por consola las css usadas, al ejecutar por consola:
```
node limpiar.js
```

Ejemplo de salida por consola:
```
/*** uncss> filename: ejemplo_carpeta_publica/css/muchos-css-no-usados.css ***/
.container{
    font-size: large;
}
```




# Para ejecutar tarea gulp

Instalé  con permisos de administrador:
```
npm install -g gulp --force
npm install -g gulp-cli --force
npm install gulp-postcss postcss-uncss
```

Se creó el gulpfile.js
```
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var uncss = require('postcss-uncss');

gulp.task('limpieza', function () {
    var plugins = [
        uncss({
            html: ['ejemplo_carpeta_publica/*.html']
        }),
    ];
    return gulp.src('./ejemplo_carpeta_publica/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./ejemplo_carpeta_publica/css_limpios'));
});
```

Se ejecutó:
```
gulp limpieza
```
Lo anterior creará un archivo css, ya "limpiado", es decir se comprueban los usos en todos los html de la carpeta ejemplo_carpeta_publica, y aquellos que no se usen, no aparecerán en el nuevo css:
ejemplo_carpeta_publica/css_limpios/muchos-css-no-usados.css  (igual el nombre ya no es el apropiado)
