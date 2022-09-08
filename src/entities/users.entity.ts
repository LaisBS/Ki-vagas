import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Interviews } from "./iterviews.entity";
import { User_skills } from "./user_skills.entity";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  @Exclude()
  password: string;

  @Column({ nullable: false, unique: true })
  @Exclude()
  email: string;

  @Column({ nullable: false, unique: true, length: 11 })
  @Exclude()
  cpf: string;

  @Column({ nullable: false, default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany((type) => Interviews, (interviews) => interviews.user, {
    eager: true,
  })
  interviews: Interviews[];

  @OneToOne(() => User_skills, {eager: true})@JoinColumn()
  user_skills_id: User_skills
}
