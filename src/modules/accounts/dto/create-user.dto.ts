export interface ICreateUserDto {
  name: string;
  password: string;
  email: string;
  driverLicense: string;
  id?: string;
  avatar?: string;
}
