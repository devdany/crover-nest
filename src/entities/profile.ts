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
import { AdressEntity } from './address';
import { JobEntity } from './job';
import { ImageEntity } from './image';

@ObjectType('Profile')
@Entity({
  name: 'profile',
})
export class ProfileEntity extends BaseEntity {
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
  introduce?: string;

  @Field()
  @Column({
    nullable: true,
  })
  tel?: string;

  @OneToOne(() => AdressEntity)
  @JoinColumn()
  @Field()
  address?: AdressEntity;

  @OneToMany(() => JobEntity, (job) => job.profile)
  @JoinColumn()
  @Field(() => [JobEntity])
  jobs: JobEntity[];

  @OneToOne(() => ImageEntity)
  @JoinColumn()
  @Field()
  image?: ImageEntity;
}
