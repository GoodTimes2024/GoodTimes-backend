import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'GoodTimes Backend Application',
      version: '1.0.0',
      description:
            'the GoodTimes Backend Application, a RESTful API for GoodTimes to manage the data of the application and user requests',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      }
    },
    servers: [
      {
        url: 'http://localhost:' + (process.env.PORT ?? 8080),
        description: 'Local server'
      },
      {
        url: 'https://api.goodtimes.com',
        description: 'Production server'
      }
    ]
  },
  apis: ['src/**/*.ts']
}

const swaggerSpec = swaggerJSDoc(options)

export const swagger = {
  serve: swaggerUI.serve,
  setup: swaggerUI.setup(swaggerSpec)
}
