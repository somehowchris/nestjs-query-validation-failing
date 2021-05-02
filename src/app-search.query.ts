import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsPositive, IsString } from 'class-validator';

export class AppSearchQuery {
  @IsString()
  public name: string;
  @IsBoolean()
  @Type(() => Boolean)
  public external: boolean;
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  public age: number;
}
