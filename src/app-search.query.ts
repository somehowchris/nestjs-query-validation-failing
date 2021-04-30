import { IsBoolean, IsInt, IsPositive, IsString } from 'class-validator';

export class AppSearchQuery {
  @IsString()
  public name: string;
  @IsBoolean()
  public external: boolean;
  @IsInt()
  @IsPositive()
  public age: number;
}
