/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import { NewAcc } from "./new-acc.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class NewAccRepository extends Repository<NewAcc> {
    constructor(private dataSource: DataSource) {
        super(NewAcc, dataSource.createEntityManager());
    }
}