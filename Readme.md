Lo que hice
===

Instalar globalmente el uncss:

```
npm install -g uncss
```


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



