import { Accessories } from "src/accessories/accessories.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewAcc {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @ManyToOne(() => Accessories, (accessories) => accessories.newAcc)
    @JoinColumn({ name: "acc_id"})
    newAcc: Accessories
}