import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AdressEntity } from './address';

@ObjectType('Company')
@Entity({
  name: 'company',
})
export class CompanyEntity extends BaseEntity {
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
  name: string;

  @Field()
  @Column()
  companyCode?: string;

  @Field()
  @JoinColumn()
  @OneToOne(() => AdressEntity)
  address: AdressEntity;
}
