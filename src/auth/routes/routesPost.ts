import express from 'express'
import { HTTP_CODE, isNonEmptyString, responseData } from '../../utils'
import { createToken } from '../../middleware/AuthToken'
import { resolverLogin, resolverRegister } from '../api/resolver'
import { RepositoryPostgreSQL } from '../repository/repositoryPostgreSQL'
import { configDatabase } from '../../../config/envConfig'

const routerPostAuth = express.Router()
const database = new RepositoryPostgreSQL(configDatabase.Postgres)

routerPostAuth.post('/login', (req: express.Request, res: express.Response) => {
  const { identifier, password } = req.body

  if (!isNonEmptyString(identifier) || !isNonEmptyString(password)) {
    const output = responseData(HTTP_CODE.BAD_REQUEST, 'Bad Request', 'Identifier or password are required')
    res.status(output.httpCode).send(output)
    return
  }
  resolverLogin(database, identifier, password)
    .then((response: any) => {
      if (response.bool) {
        console.log(response)
        const token = createToken(response.data.id, response.data.email)
        const output = responseData(HTTP_CODE.OK, 'Login success', { token })
        res.status(output.httpCode).send(output)
      } else {
        const output = responseData(HTTP_CODE.UNAUTHORIZED, 'Unauthorized', response.result)
        res.status(output.httpCode).send(output)
      }
    })
    .catch((error: any) => {
      const output = responseData(HTTP_CODE.INTERNAL_SERVER_ERROR, 'Internal Server Error', error)
      res.status(output.httpCode).send(output)
    })
})

routerPostAuth.post('/register', (req: express.Request, res: express.Response) => {
  const { email, password, name } = req.body

  if (!isNonEmptyString(email) || !isNonEmptyString(password) || !isNonEmptyString(name)) {
    const output = responseData(HTTP_CODE.BAD_REQUEST, 'Bad Request', 'Email, password, or name are required')
    res.status(output.httpCode).send(output)
    return
  }
  resolverRegister(database, email, password, name)
    .then((response: any) => {
      if (response.bool) {
        const output = responseData(HTTP_CODE.CREATED, 'Register success', response.result)
        res.status(output.httpCode).send(output)
      } else {
        const output = responseData(HTTP_CODE.BAD_REQUEST, 'Bad Request', response.result)
        res.status(output.httpCode).send(output)
      }
    })
    .catch((error: any) => {
      const output = responseData(HTTP_CODE.INTERNAL_SERVER_ERROR, 'Internal Server Error', error)
      res.status(output.httpCode).send(output)
    })
})

export default routerPostAuth
