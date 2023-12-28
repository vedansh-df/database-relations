/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import { Photos } from "./photos.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PhotoRepository extends Repository<Photos> {
    constructor(private dataSource: DataSource) {
        super(Photos, dataSource.createEntityManager());
    }
}