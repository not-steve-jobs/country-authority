import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country')
export class Country {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @PrimaryColumn('varchar', { length: 2, unique: true })
  public iso2: string;

  @Column('varchar', { length: 3 })
  public iso3: string;

  @Column('varchar', { length: 60 })
  public name: string;

  @Column('varchar', { length: 30, nullable: true })
  public group?: string;
}
