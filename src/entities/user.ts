import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ProfileEntity } from './profile';

@ObjectType('User')
@Entity({
  name: 'user',
})
export class UserEntity extends BaseEntity {
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
  @Column({
    nullable: true,
  })
  name?: string;

  @Field()
  @Column({
    default: false,
  })
  isCertificated: boolean;

  @Field()
  @Column({
    default: false,
  })
  isOnBoarding: boolean;

  @Field()
  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Field()
  @Column({
    unique: true,
  })
  email: string;

  @Field()
  @Column({
    default: false,
  })
  emailVerified: boolean;

  @OneToOne(() => ProfileEntity, {
    cascade: true,
  })
  @JoinColumn()
  @Field()
  profile: ProfileEntity;
}
