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
import { ApiProperty } from '@nestjs/swagger';


@Entity({ name: 'tb_temas' })
export class Tema {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() // Força digitação
  @Length(30, 255, { message: 'O texto deve ser entre 50 e 255 caracteres ' })
  @Column({ length: 255, nullable: false }) // VARCHAR(255) NOT NULL
  descricao: string;

@ApiProperty()
@OneToMany( () => Postagem, (postagem) => postagem.tema)
postagem: Postagem[]; //Array de retorno

}
