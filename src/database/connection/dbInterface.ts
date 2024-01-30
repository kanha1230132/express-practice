/**
 * User Table Interface
 */
export default interface UserType {
  firstName: string;
  lastName: string | null;
  email: string;
  imageURL: string | null;
  createdBy: number | null;
  deleted: boolean;
  deleteBy: number | null;
  createdAt: Date | null;
  userId: number;
  password : string
}
