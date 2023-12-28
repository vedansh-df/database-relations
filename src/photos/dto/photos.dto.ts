import { IsNotEmpty } from "class-validator";

export class PhotosDto {
    @IsNotEmpty()
    photoId: string

    @IsNotEmpty()
    id: string
}