/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import { Accessories } from "./accessories.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AccessoriesRepository extends Repository<Accessories> {
    constructor(private dataSource: DataSource) {
        super(Accessories, dataSource.createEntityManager());
    }
}