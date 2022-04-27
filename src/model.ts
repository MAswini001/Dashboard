export interface userdata{
    id?: string,
    username: string,
    phoneno: number,
    email: string,
    country: string,
    state: string,
    countrycode: string,
    skills:Array<skills>
}

interface skills{
    skilname:String,
    rating:string
}

export interface logindata{
    email:string,
    password:string
}

export interface tokendata{
    token:string
}