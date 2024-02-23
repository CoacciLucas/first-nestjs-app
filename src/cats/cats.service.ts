import { Injectable } from "@nestjs/common";
import { Cat } from "./cats.model";
import { v4 } from 'uuid';

@Injectable()
export class CatsService{
    cats: Cat[] = [];

    insertCat(name: string, color: string) {
        const newCat = new Cat(v4().toString(), name, color);
        this.cats.push(newCat);
        return `${newCat.id}, ${newCat.name}, ${newCat.color}`;
    }
}