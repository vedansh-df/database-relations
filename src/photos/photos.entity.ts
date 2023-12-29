import { Users } from "../users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photos {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    photoId: string

    @ManyToOne(() => Users, (user) => user.photoId)
    @JoinColumn({ name: "user_id" })
    userId: Users
}