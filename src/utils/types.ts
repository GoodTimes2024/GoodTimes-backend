// TODO: Modify the types as needed
export interface ResponseAuthUser {
  id: string
  email: string
  name: string
  token: string
}

export interface outputRouter {
  httpCode: number
  message: string
  data: any[] | any
}
