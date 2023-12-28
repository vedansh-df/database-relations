import { Category } from "src/category/category.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    product_name: string

    @ManyToMany(() => Category)
    @JoinTable({ name: 'product-category'})
    category: Category[]

}