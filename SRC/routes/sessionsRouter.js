import { Router } from "express"
import { userModel } from '../models/users.js'

const sessionsRouter = Router ()

// Ruta ejemplo para cargar una sesión activa
sessionsRouter.get('/', (req, res) => {
    req.session.counter? (req.session.counter++, res.send(`Ingresaste a la página ${req.session.counter} veces`)):
    (req.session.counter = 1, res.send("Primer ingreso a la página!"))
})

// Ruta para cargar una sesión activa en caso de login exitoso.
sessionsRouter.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email: email})
        user && (user.password = password)? 
        (
            req.session.email = email,
            res.status(200).send("Usuario logueado exitosamente!"),
            console.log("Logueo de usuario exitoso!")
        ):

        (
            res.status(401).send("Usuario o contraseña incorrecta!"),
            console.log("Intento de logueo de usuario sin éxito!")
        )
    }

    catch (error)

    {
        console.log("Error al loguear usuario!")
    }
})

// Ruta para registrar un usuario.
sessionsRouter.post('/register', async (req, res) => {
    try {
        const {first_name, last_name, age, email, password} = req.body
        const user = await userModel.findOne({email: email})

        if (user)

        {
            res.status(400).send("Correo electrónico ya registrado!")
            console.log("Intento de registro con correo ya cargado")
            return
        }

        await userModel.create({first_name, last_name, age, email, password}) 
        res.status(200).send("Usuario creado exitosamente!")
        console.log("Usuario registrado en DB!")
    }

    catch (error)

    {
        console.log("Error al registrar usuario!")
    }
})

export default sessionsRouter