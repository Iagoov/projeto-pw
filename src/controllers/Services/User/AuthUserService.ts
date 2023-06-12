import { User } from "@prisma/client";
import prismaClient from "../../../prisma";

interface AuthRequest {
    email: string;
    password: string;
}

interface LoginResult {
    success: boolean;
    message: string;
    user?: User;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest): Promise<LoginResult> {

        //Verificar se email existe

        try {
            const user = await prismaClient.user.findFirst({
                where: {
                    email: email
                }
            })

            if (!user) {
                return { success: false, message: 'Credencais inválidas' };
            }

            //Verificar validade password

            if (user.password !== password) {
                return { success: false, message: 'User/PàssWord Inválido.', user };
            }

            else {
                return { success: true, message: 'Login realizado com sucesso', user };
            }
        }

        catch (error) {
            console.error('Erro ao verificar o Login:', error);
            throw new Error('Erro ao verificar o Login');
        }
    }
}

export { AuthUserService }

