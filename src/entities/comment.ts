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
import { PostEntity } from './post';
import { UserEntity } from './user';

@ObjectType('Comment')
@Entity({
  name: 'comment',
})
export class CommentEntity extends BaseEntity {
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

  @ManyToOne(() => UserEntity, (user) => user.comments)
  @JoinColumn()
  @Field(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => PostEntity, (post) => post.comments)
  @JoinColumn()
  @Field(() => PostEntity)
  post: PostEntity;

  @Column()
  @Field()
  text: string;
}
