import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class AuthController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const user = await this.userService.authenticateUser(email, password);
      
      if (user) {
        res.status(200).json({ 
          success: true, 
          data: user
        });
      } else {
        res.status(401).json({ 
          success: false, 
          message: 'Credenciales inválidas' 
        });
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      res.status(500).json({ 
        success: false, 
        message: 'Error al iniciar sesión', 
        error: errorMessage 
      });
    }
  };
}
