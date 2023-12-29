import { Accessories } from "../accessories/accessories.entity";
import { Photos } from "../photos/photos.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @OneToMany(() => Photos, (photo) => photo.userId)
    photoId: Photos[]

    @OneToMany(() => Accessories, (accessories) => accessories.userId)
    accessoriesId: Accessories[]


}