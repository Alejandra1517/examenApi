const express = require("express")

const cors = require("cors")

const { DBconection } = require('../public/db/config')


class Server {


    constructor(){

        this.app = express()
        this.port = process.env.PORT


        this.DBmongo()



        this.middlewares()


        this.routes()


    }


    DBmongo(){

        DBconection()

    }


    middlewares(){


        this.app.use( cors() )

       

        this.app.use( express.json() )

        

        this.app.use( express.static('public') )


    }


    routes(){

        this.app.use('/api/cotizaciones', require('../public/routes/user.routes'))


    }


    listen(){

        this.app.listen(this.port, () => {

            console.log('Corriendo en el puerto ' + this.port)


        })


    }




}


module.exports = Server
