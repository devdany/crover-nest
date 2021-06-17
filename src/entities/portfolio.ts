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
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ProjectEntity } from './project';
import { UserEntity } from './user';

@ObjectType('Portfolio')
@Entity({
  name: 'portfolio',
})
export class PortfolioEntity extends BaseEntity {
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

  @Field(() => [ProjectEntity])
  @JoinColumn()
  @OneToMany(() => ProjectEntity, (project) => project.portfolio)
  projects?: ProjectEntity[];

  @OneToOne(() => UserEntity)
  @JoinColumn()
  @Field(() => UserEntity)
  user: UserEntity;
}
