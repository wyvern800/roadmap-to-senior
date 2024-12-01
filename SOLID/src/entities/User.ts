import { uuid } from 'uuidv4';

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  // Cria um usuário omitindo o ID, e se não for passado, ele gera um com o uuid
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}