import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('Address')
@Entity({
  name: 'address',
})
export class AdressEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn({
    nullable: true,
  })
  updatedAt?: Date;

  @Field()
  @Column({
    type: 'datetime',
    nullable: true,
  })
  deletedAt?: Date;

  @Field()
  @Column()
  country: string;

  @Field()
  @Column({
    nullable: true,
  })
  state?: string;

  @Field()
  @Column({
    nullable: true,
  })
  city?: string;

  @Field()
  @Column({
    nullable: true,
  })
  detail?: string;

  @Field()
  @Column({
    nullable: true,
  })
  postalCode?: string;
}
