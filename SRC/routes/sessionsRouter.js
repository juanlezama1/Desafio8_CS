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



export default sessionsRouter