const { Schema, model } = require('mongoose')


const userModel = new Schema({

    
    identificacion:{

        type:String,
        required:['Este campo es requerido']

    },

    nombre:{

        type:String,
        required:['Este campo es requirido']

    },


    apellidos:{

        type:String

    },

    direccion:{

        type:String

    },

    
    estado:{

        type:Boolean,
        default:false

    },

    
    telefono:{

        type:String

    },

    
    correo:{

        type:String

    },


    
    contrasena:{

        type:String

    }






})

module.exports = model('user', userModel)

