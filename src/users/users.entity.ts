import { Accessories } from "src/accessories/accessories.entity";
import { Photos } from "src/photos/photos.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @OneToMany(() => Photos, (photo) => photo.userId)
    photoId: Photos[]

    @OneToMany(() => Accessories, (accessories) => accessories.userId)
    accessoriesId: Accessories[]

    
}