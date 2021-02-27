import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Field()
  @Column('varchar', { length: 30, unique: true })
  username!: string;

  @Field()
  @Column()
  password!: string;
}
