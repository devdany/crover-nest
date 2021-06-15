import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType('Profile')
@Entity({
  name: 'profile'
})
export class ProfileEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn({
    nullable: true
  })
  updatedAt?: Date

  @Field()
  @Column({
    type: 'datetime',
    nullable: true
  })
  deletedAt?: Date

  @Field()
  @Column({
    nullable: true
  })
  introduce?: string

  @Field()
  @Column({
    nullable: true
  })
  tel?: string

  @Field()
  @Column({
    nullable: true
  })
  addressId?: number

  @Field()
  @Column({
    nullable: true
  })
  jobId?: number

  @Field()
  @Column({
    nullable: true
  })
  imageId?: number
}

// model Profile {
//   id           Int       @id @default(autoincrement())
//   createdAt    DateTime  @default(now())
//   updatedAt    DateTime  @updatedAt
//   deletedAt    DateTime?
//   introduce    String?
//   tel          String?
//   address      Address?  @relation(fields: [addressId], references: [id])
//   job          Job?      @relation(fields: [jobId], references: [id])
//   profileImage Image?    @relation(fields: [imageId], references: [id])
//   user         User[]
//   addressId    Int?
//   jobId        Int?
//   imageId      Int?
// }
