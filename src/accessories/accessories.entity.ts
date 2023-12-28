import { NewAcc } from "src/new-acc/new-acc.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accessories {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @ManyToOne(() => Users, (user) => user.accessoriesId)
    @JoinColumn({ name: "user_id" })
    userId: Users

    @OneToMany(() => NewAcc, (newAccessories) => newAccessories.newAcc)
    newAcc: NewAcc[]
}