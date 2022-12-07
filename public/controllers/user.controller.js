
const bcryptjs = require('bcryptjs')

const User = require('../models/user.model')


const getUser = async (req,res) => {


    const usuarios = await User.find()


    res.json({

        "ok":200,
        usuarios


    })

}


const postUser = async (req,res) => {

    const { identificacion, nombre, apellidos, direccion, estado, telefono, correo, contrasena } = req.body

    const guardarUser = new User( { identificacion, nombre, apellidos, direccion, estado, telefono, correo, contrasena } )

    guardarUser.contrasena = bcryptjs.hashSync(contrasena, 25)

    await guardarUser.save()

    res.json({

        "ok":200,
        "msg": "Usuario guardado correctamente",
        guardarUser

    })


}


const putUser = async (req,res) => {

    const id = req.params.id

    const usuario = req.body

    const modificarUsuario = await User.findByIdAndUpdate(id, usuario)

    res.json({

        "ok":200,
        "msg": "Usuario modificado correctamente"


    })



}


const deleteUser = async (req,res) => {

    const id = req.params.id

    const eliminarUsuario = await User.findByIdAndDelete(id)

    res.json({

        "ok":200,
        "msg": "Usuario eliminado correctamente"

    })

}


module.exports = {

    getUser,
    postUser,
    putUser,
    deleteUser

}


