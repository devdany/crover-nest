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
import { ProjectEntity } from './project';
import { PostEntity } from './post';

@ObjectType('Tag')
@Entity({
  name: 'tag',
})
export class TagEntity extends BaseEntity {
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
  name: string;

  @ManyToOne(() => ProjectEntity, (project) => project.tags)
  @JoinColumn()
  project?: ProjectEntity;

  @ManyToOne(() => PostEntity, (post) => post.tags)
  @JoinColumn()
  post?: PostEntity;
}
