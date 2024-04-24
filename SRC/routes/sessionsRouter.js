import { Router } from "express"

const sessionsRouter = Router ()

// Ruta ejemplo para leer las cookies sin firmar
sessionsRouter.get('/', (req, res) => {
    req.session.counter? (req.session.counter++, res.send(`Ingresaste a la página ${req.session.counter} veces`)):
    (req.session.counter = 1, res.send("Primer ingreso a la página!"))
})

export default sessionsRouter