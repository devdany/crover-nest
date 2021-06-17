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
  JoinTable,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ProfileEntity } from './profile';
import { ImageEntity } from './image';
import { ProjectEntity } from './project';
import { PortfolioEntity } from './portfolio';
import { PostEntity } from './post';
import { CommentEntity } from './comment';
import { MessageEntity } from './message';
import { NotificationEntity } from './notification';

@ObjectType('User')
@Entity({
  name: 'user',
})
export class UserEntity extends BaseEntity {
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
  name?: string;

  @Field()
  @Column({
    default: false,
  })
  isCertificated: boolean;

  @Field()
  @Column({
    default: false,
  })
  isOnBoarding: boolean;

  @Field()
  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Field()
  @Column({
    unique: true,
  })
  email: string;

  @Field()
  @Column({
    default: false,
  })
  emailVerified: boolean;

  @OneToOne(() => ProfileEntity, {
    cascade: true,
  })
  @JoinColumn()
  @Field()
  profile: ProfileEntity;

  @OneToMany(() => ImageEntity, (image) => image.user)
  @Field(() => [ImageEntity])
  @JoinColumn()
  album: ImageEntity[];

  @ManyToMany(() => ProjectEntity, (project) => project.members)
  @Field(() => [ProjectEntity])
  @JoinTable()
  projects: ProjectEntity[];

  @OneToOne(() => PortfolioEntity)
  @Field(() => PortfolioEntity)
  @JoinColumn()
  portfolio: PortfolioEntity;

  @OneToMany(() => PostEntity, (post) => post.user)
  @Field(() => [PostEntity])
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  @Field(() => [CommentEntity])
  comments: CommentEntity[];

  @OneToMany(() => MessageEntity, (message) => message.sender)
  @Field(() => [MessageEntity])
  sendMessages: MessageEntity[];

  @OneToMany(() => MessageEntity, (message) => message.receiver)
  @Field(() => [MessageEntity])
  receiveMessages: MessageEntity[];

  @OneToMany(() => NotificationEntity, (notification) => notification.user)
  @Field(() => [NotificationEntity])
  notifications: NotificationEntity[];
}
