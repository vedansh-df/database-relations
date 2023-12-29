/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import { Users } from "../users/users.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRepository extends Repository<Users> {
    constructor(private dataSource: DataSource) {
        super(Users, dataSource.createEntityManager());
    }
}