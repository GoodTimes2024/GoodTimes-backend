import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    email: string

  @Column()
    password: string

  @Column()
    name: string
}
