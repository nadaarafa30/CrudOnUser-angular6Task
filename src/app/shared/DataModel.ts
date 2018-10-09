export class loginUser {
    email:string;
    password:string;
}

export class AllUser {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data:Array<user>;
}

export class user{
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}