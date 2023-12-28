/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import { Users } from "./users.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository extends Repository<Users> {
    constructor(private dataSource: DataSource) {
        super(Users, dataSource.createEntityManager());
    }
}