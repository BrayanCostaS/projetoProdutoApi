import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Aluno brayan está aprendendo NestJS e esta aplicação está rodando!';
  }
}
