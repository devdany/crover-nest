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
import { ProfileEntity } from './profile';

enum JobType {
  FULL_TIME,
  PART_TIME,
}

@ObjectType('Job')
@Entity({
  name: 'job',
})
export class JobEntity extends BaseEntity {
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
  position?: string;

  @Field()
  @Column({
    nullable: true,
  })
  experienceYears?: number;

  @Field()
  @Column()
  type: JobType;

  @ManyToOne(() => ProfileEntity, (profile) => profile.jobs)
  @JoinColumn()
  profile?: ProfileEntity;
}
