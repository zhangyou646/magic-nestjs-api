import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  evmAccount: string;

  @Column({ nullable: true })
  evmSign: string;

  @Column({ nullable: true })
  btcAccount: string;


  @Column({ nullable: true })
  twitterId: number;

  @Column({ nullable: true })
  twitterName: string;

  @Column({ nullable: true })
  twitterUsername: string;

  @Column({ nullable: true })
  tgId: number;

  @Column({ nullable: true })
  tgName: string;


  @Column({ default: true })
  isActive: boolean;
}
