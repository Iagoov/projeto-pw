import { Request, response, Response } from "express";

import { AuthUserService } from "../Services/User/AuthUserService";

class AuthUserController {
    async handle (req: Request, res: Response) {
        
        try {
            const {email, password} = req.body

            const authUserService = new AuthUserService() ;
    
            const auth = await authUserService.execute ({
                email,
                password
            });
    
            if (auth.success) {
                res.status(200).json(auth);
            }

            else {
                res.status(401).json(auth);
            }
        }

        catch (error) {
            console.error ('Ocorreu um erro ao fazer login:', error);
            res.status(500).json({ success: false, message: 'Erro ao fazer login' });
        }
    }
}

export {AuthUserController}