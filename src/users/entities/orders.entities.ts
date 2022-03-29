import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Order {
  @Column()
  date: Date;

  @Column()
  user: User;

  @Column()
  products: Product[];
}
