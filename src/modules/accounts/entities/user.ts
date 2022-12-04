import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  avatar?: string;

  @Column({name: 'driver_license'})
  driverLicense: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  constructor() {
    if(!this.id) {
      this.id = v4();
    }
  }
}
