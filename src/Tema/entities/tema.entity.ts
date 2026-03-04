import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // Força digitação
  @Length(30, 255, { message: 'O texto deve ser entre 50 e 255 caracteres ' })
  @Column({ length: 255, nullable: false }) // VARCHAR(255) NOT NULL
  descricao: string;

  @UpdateDateColumn()
  data: Date;
}
