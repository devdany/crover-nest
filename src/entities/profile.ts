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

  @Field()
  @Column({
    nullable: true,
  })
  addressId?: number;

  @Field()
  @Column({
    nullable: true,
  })
  jobId?: number;

  @Field()
  @Column({
    nullable: true,
  })
  imageId?: number;

  @OneToOne(() => AdressEntity)
  @JoinColumn()
  @Field()
  address?: AdressEntity;

  @OneToMany(() => JobEntity, (job) => job.profile)
  @JoinColumn()
  @Field(() => [JobEntity])
  jobs: JobEntity[];
}
