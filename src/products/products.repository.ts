/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import { Products } from "./products.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsRepository extends Repository<Products> {
    constructor(private dataSource: DataSource) {
        super(Products, dataSource.createEntityManager());
    }
}