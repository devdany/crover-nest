import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType('User')
@Entity({
  name: 'user'
})
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt?: Date

  @Field()
  @Column({
    type: 'datetime'
  })
  deletedAt?: Date

  @Field()
  @Column()
  name?: string

  @Field()
  @Column({
    default: false,
  })
  isCertificated: boolean

  @Field()
  @Column({
    default: false,
  })
  isOnBoarding: boolean

  @Field()
  @Column({
    unique: true
  })
  username: string

  @Field()
  @Column()
  password: string

  @Field()
  @Column({
    unique: true
  })
  email: string

  @Field()
  @Column({
    default: false
  })
  emailVerified: boolean
}

// model User {
//   id             Int         @id @default(autoincrement())
//   createdAt      DateTime    @default(now())
//   updatedAt      DateTime    @updatedAt
//   deletedAt      DateTime?
//   name           String?
//   isCertificated Boolean     @default(false)
//   isOnBoarding   Boolean     @default(false)
//   username       String      @unique
//   password       String
//   email          String      @unique
//   emailVerified  Boolean     @default(false)
//   profile        Profile     @relation(fields: [profileId], references: [id])
//   album          Image[]
//   portfolios     Portfolio[]
//   posts          Post[]
//   sendMessages   Message[]   @relation("sender")
//   receiveMessages Message[]   @relation("receiver")
//   project        Project?    @relation(fields: [projectId], references: [id])
//   projectId      Int?
//   likes          Like[]
//   comments       Comment[]
//   profileId      Int
// }