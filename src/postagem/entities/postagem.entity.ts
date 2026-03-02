import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"})
export class Postagem{

    @PrimaryGeneratedColumn() // PRIMARY KEY(id) AUTO INCREMENT
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty() // Força digitação
    @Column({length: 100, nullable: false}) // VARCHAR(100) NOT NULL
    titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty() // Força digitação
    @Column({length: 2000, nullable: false}) // VARCHAR(2000) NOT NULL
    texto: string;

    @UpdateDateColumn()
    data: Date;

}