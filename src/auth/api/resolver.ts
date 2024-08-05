import { comparePassword, hashPassword } from '../../utils'
import { type outputResolver, type RepositoryAuth } from './domain'

export async function resolverLogin (database: RepositoryAuth, identifier: string, password: string): Promise<outputResolver> {
  const getIdentifier = await database.get('email', identifier)
  if (getIdentifier === undefined) {
    return { bool: false, result: 'User not found' }
  }
  if (!comparePassword(password, getIdentifier.password)) {
    return { bool: false, result: 'Password is incorrect' }
  }
  return { bool: true, result: 'Login success', data: { id: getIdentifier.id, email: getIdentifier.email } }
}

export async function resolverRegister (database: RepositoryAuth, email: string, password: string, name: string): Promise<outputResolver> {
  const getIdentifier = await database.get('email', email)
  if (getIdentifier !== null) {
    return { bool: false, result: 'Email already exists' }
  }
  await database.insert(email, hashPassword(password), name)
  return { bool: true, result: 'Register success' }
}
