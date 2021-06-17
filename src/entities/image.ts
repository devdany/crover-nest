import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from './user';
import { ProjectEntity } from './project';
import { PostEntity } from './post';

@ObjectType('Image')
@Entity({
  name: 'image',
})
export class ImageEntity extends BaseEntity {
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
  originalSrc: string;

  @Field()
  @Column({
    nullable: true,
  })
  pressedSrc?: string;

  @Field()
  @Column()
  filename?: string;

  @Field()
  @Column({
    nullable: true,
  })
  mimetype?: string;

  @Field()
  @Column({
    nullable: true,
  })
  encoding?: string;

  @Field(() => UserEntity)
  @JoinColumn()
  @ManyToOne(() => UserEntity, (user) => user.album)
  user?: UserEntity;

  @Field(() => ProjectEntity)
  @JoinColumn()
  @ManyToOne(() => ProjectEntity, (project) => project.images)
  project?: ProjectEntity;

  @Field(() => PostEntity)
  @JoinColumn()
  @ManyToOne(() => PostEntity, (post) => post.images)
  post?: PostEntity;
}
