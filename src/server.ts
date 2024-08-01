import express from 'express'
import cors from 'cors'
import { swagger } from './documentation'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const app = express()
const PORT = process.env.PORT ?? 8080

app.use(cors())
app.use(express.json())
app.use('/docs', swagger.serve, swagger.setup)

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})
