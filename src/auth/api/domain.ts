export interface outputResolver {
  bool: boolean
  result: string
  data?: any
}

export interface RepositoryAuth {
  get: (search: 'email' | 'password' | 'name', value: string) => Promise<any>
  insert: (email: string, password: string, name: string) => Promise<any>
}
