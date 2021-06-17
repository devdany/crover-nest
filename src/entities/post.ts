import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserEntity } from './user';
import { TagEntity } from './tag';
import { LikeEntity } from './like';
import { ImageEntity } from './image';
import { CommentEntity } from './comment';
import { ProjectEntity } from './project';

@ObjectType('Post')
@Entity({
  name: 'post',
})
export class PostEntity extends BaseEntity {
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
    unique: true,
  })
  title: string;

  @Field(() => UserEntity)
  @JoinColumn()
  @ManyToOne(() => UserEntity, (user) => user.posts)
  user: UserEntity;

  @Field(() => [TagEntity])
  @OneToMany(() => TagEntity, (tag) => tag.post)
  tags: TagEntity[];

  @OneToMany(() => LikeEntity, (like) => like.post)
  likes: LikeEntity[];

  @Field(() => Int)
  likeCount() {
    return this.likes.length;
  }

  @Field(() => ImageEntity)
  @OneToOne(() => ImageEntity)
  @JoinColumn()
  thumbnail: ImageEntity;

  @Field(() => [ImageEntity])
  @OneToMany(() => ImageEntity, (image) => image.post)
  images: ImageEntity[];

  @Field(() => [CommentEntity])
  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];

  @Field()
  @Column()
  content: string;

  @Field(() => ProjectEntity)
  @OneToOne(() => ProjectEntity)
  @JoinColumn()
  project?: ProjectEntity;
}
