import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { Users } from './users.entity';
import { Like } from 'typeorm';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    constructor(private userRepository: UserRepository) { }

    async createUser(data: UsersDto): Promise<void> {
        try {
            const { name, email } = data
            const createUser = this.userRepository.create({
                name,
                email
            })

            await this.userRepository.save(createUser)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async getUser(): Promise<Users[]> {
        try {
            const value = "Win" // Using a static value for demonstration.
            /**
             * The relations implements the LEFT JOIN functionality.
             * Multiple nested relations/joins can be implemented. I have implemented one below.
             * Nested where clause can also be implemented in the same.
            */
            const users = await this.userRepository.find({
                relations: {
                    photoId: true,
                    accessoriesId: {
                        newAcc: true
                    }
                },
                where: {
                    accessoriesId: {
                        newAcc: {
                            name: Like(`%${value}%`),
                        }
                    }
                },
                order: {
                    accessoriesId: {
                        name: "DESC"
                    }
                },
            })
            console.log(users)
            return users
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }


    }

    async innerJoin(): Promise<Users[]> {
        try {
            /**
             * Object where each key represents the INNER JOIN alias,
             * and the corresponding value represents the relation path.
             *
             * The columns of the joined table are included when we include AndSelect.
             * 
             * If we use 'innerJoin' the method does not select the columns of the joined table.
             * 
             * When we use leftJoinAndSelect, we cannot add a third nested join.
             */
            const users = await this.userRepository.find({
                join: {
                    alias: 'users',
                    innerJoinAndSelect: {
                        photoId: 'users.photoId',
                        accessoriesId: 'users.accessoriesId',
                    },
                },
            })
            return users
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async leftJoin(): Promise<Users[]> {
        try {
            /**
             * Object where each key represents the LEFT JOIN alias,
             * and the corresponding value represents the relation path.
             *
             * The columns of the joined table are included when we include AndSelect.
             * 
             * If we use 'leftJoin' the method does not select the columns of the joined table.
             * 
             * When we use leftJoinAndSelect, we cannot add a third nested join.
             */
            const users = await this.userRepository.find({
                join: {
                    alias: 'users',
                    leftJoinAndSelect: {
                        photoId: 'users.photoId',
                        accessoriesId: 'users.accessoriesId',
                    },
                },
            })
            return users
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}
