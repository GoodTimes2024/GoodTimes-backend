import express from 'express'
import cors from 'cors'
import { swagger } from './documentation'
import routerPostAuth from './auth/routes/routesPost'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const app = express()
const PORT = process.env.PORT ?? 8080

app.use(cors())
app.use(express.json())
app.use('/api/docs', swagger.serve, swagger.setup)

app.use('/api', routerPostAuth)

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})
