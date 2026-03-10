import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // Força digitação
  @Length(30, 255, { message: 'O texto deve ser entre 50 e 255 caracteres ' })
  @Column({ length: 255, nullable: false }) // VARCHAR(255) NOT NULL
  descricao: string;

@OneToMany( () => Postagem, (postagem) => postagem.tema)
postagem: Postagem[]; //Array de retorno

@OneToMany( () => Usuario, (usuario) => usuario.tema)
usuario: Usuario[]; //Array de retorno
}
