import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from './user';

@ObjectType('Message')
@Entity({
  name: 'message',
})
export class MessageEntity extends BaseEntity {
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

  @Field(() => UserEntity)
  @JoinColumn()
  @ManyToOne(() => UserEntity, (user) => user.sendMessages)
  sender: UserEntity;

  @Field(() => UserEntity)
  @JoinColumn()
  @ManyToOne(() => UserEntity, (user) => user.receiveMessages)
  receiver: UserEntity;

  @Field()
  @Column()
  contest: string;
}
