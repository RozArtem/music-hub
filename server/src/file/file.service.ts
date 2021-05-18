import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'



export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'image'
}

@Injectable()
export class FileService {

    private getPath(file): any {

        let filePath = [
            path.resolve(__dirname, '..', 'static', 'audio', `${file}.mp3`),
            path.resolve(__dirname, '..', 'static', 'image', `${file}.png`)
        ];
        return filePath
    }

    createFile(type: FileType, file, trackID: string): string {
        try {
            const fileExtension = file.originalname.split('.').pop()
            const fileName = trackID + '.' + fileExtension
            const filePath = path.resolve(__dirname, '..', 'static', type)
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true })
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return type + '/' + fileName
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    removeFile(fileName: string) {

        try {

            const path = this.getPath(fileName)
            path.map(file => fs.unlinkSync(file))

        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

}