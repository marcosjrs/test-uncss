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