import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn() // PRIMARY KEY(id) AUTO INCREMENT
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim()) // Remove espaçamentos em branco
  @IsNotEmpty() // Força digitação
  @Length(5, 100, { message: 'O texto deve ser entre 5 e 100 caracteres ' })
  @Column({ length: 100, nullable: false }) // VARCHA25R(100) NOT NULL
  titulo: string;

  @Transform(({ value }: TransformFnParams) => value?.trim()) // Remove espaçamentos em branco
  @IsNotEmpty() // Força digitação
  @Length(10, 1000, { message: 'O texto deve ser entre 10 e 1000 caracteres ' })
  @Column({ length: 2000, nullable: false }) // VARCHAR(2000) NOT NULL
  texto: string;
}
