import { Controller,Get } from "@nestjs/common";

@Controller('/app')
export class AppController{
    @Get('/get')
    getRootRoute(){
        return  "dev: ts-node-dev --respawn --transpile-only src/index.ts"
    }
    @Get('/bye')
    getBye(){
        return  "bye"
    }
}
