import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AdressEntity } from './address';
import { ImageEntity } from './image';
import { UserEntity } from './user';
import { PortfolioEntity } from './portfolio';
import { TagEntity } from './tag';

@ObjectType('Project')
@Entity({
  name: 'project',
})
export class ProjectEntity extends BaseEntity {
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
    type: 'datetime',
  })
  startedAt: Date;

  @Field()
  @Column({
    type: 'datetime',
    nullable: true,
  })
  endedAt?: Date;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({
    type: 'text',
  })
  description: string;

  @Field(() => ImageEntity)
  @JoinColumn()
  @OneToOne(() => ImageEntity)
  thumbnail: ImageEntity;

  @Field(() => [ImageEntity])
  @JoinColumn()
  @OneToMany(() => ImageEntity, (image) => image.project)
  images: ImageEntity[];

  @OneToOne(() => AdressEntity)
  @JoinColumn()
  @Field()
  location?: AdressEntity;

  @ManyToMany(() => UserEntity, (user) => user.projects)
  @Field(() => [UserEntity])
  members?: UserEntity[];

  @ManyToOne(() => PortfolioEntity, (portfolio) => portfolio.projects)
  @Field(() => PortfolioEntity)
  @JoinColumn()
  portfolio?: PortfolioEntity;

  @OneToMany(() => TagEntity, (tag) => tag.project)
  @Field(() => [TagEntity])
  tags: TagEntity[];
}
