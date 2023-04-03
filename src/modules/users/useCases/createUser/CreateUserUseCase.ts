import { User } from "../../model/User";
import {
  ICreateUserDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const emailAlreadyExists = this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new Error("This email already exists");
    }
    const dto: ICreateUserDTO = { name, email };
    const user = this.usersRepository.create(dto);
    return user;
  }
}

export { CreateUserUseCase };
