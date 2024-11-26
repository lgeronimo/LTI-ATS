import { PrismaClient } from '@prisma/client';

export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async authenticateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        recruiter: true // Include recruiter information if it exists
      }
    });

    if (user && user.password === password) {
      // Omit the password before returning the user
      
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }
}
