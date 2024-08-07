import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { type RepositoryAuth } from '../api/domain'
import { UsersEntity } from '../../entities/Users'

interface config {
  host: string
  port: number
  username: string
  password: string
  database: string
}

export class RepositoryPostgreSQL implements RepositoryAuth {
  private readonly db: DataSource

  constructor (config: config) {
    this.db = new DataSource({
      type: 'postgres',
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      entities: [UsersEntity],
      synchronize: true,
      logging: false
    })

    this.db.initialize().catch((error) => {
      console.error('Error initializing the database', error)
    })
  }

  async get (search: 'email' | 'password' | 'name', value: string): Promise<any> {
    return await this.db.getRepository(UsersEntity).findOneBy({ [search]: value })
  }

  async insert (email: string, password: string, name: string): Promise<any> {
    return await this.db.getRepository(UsersEntity).insert({ email, password, name })
  }
}
