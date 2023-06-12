import prismaClient from "../../../prisma";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute ({email, password}: AuthRequest) {
        console.log(email)
        return {OK: "Chamada serviço Auth"}
    }
}

export {AuthUserService};