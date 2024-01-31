import { ResultSetHeader } from "mysql2";
import UserType from "../connection/dbInterface";
import { conn } from "../connection/dbInit";
import { UserInsertQuery, getUserQuery } from "../sql/dbUser.sql";


interface IUserModalQuery {
  save(user: UserType): Promise<UserType>;
  // getAllUsers(pIndex: number): Promise<UserType[] | undefined>;
}

class UserModalQuery implements IUserModalQuery {
  
  public async save(user: UserType): Promise<UserType> {
    return new Promise((resolve, reject) => {
      conn.query<ResultSetHeader>(
        UserInsertQuery,
        [user.firstName, user?.lastName, user.email, user?.imageURL, user?.createdBy, user.password],
        async (err, result) => {
          if (err) {
            reject(err)
          } else {
            const userId = result.insertId;
            const userData = await this.getUser(userId, user.email)
            if (userData) {
              resolve(userData)
            } else {
              reject("Something went wrong! user not created")
            }
          }
        }
      )
    });
  }
  
  public async getUser(userId?: number, email?: string): Promise<UserType | undefined > {
    return new Promise((resolve, reject) => {
      if (userId || email) {
        conn.query<UserType[]>(
          getUserQuery,
          [email, userId],
          (err, result) => {
            if (err) {
              reject([err])
            } else {
              const data = result[0];
              if (!data) {
                reject("");
              }
              resolve(data)
            }
          }
        )
      } else {
        reject("incorrect input: userId and email can not be null")
        return;
      }
    });
  }

}

export default new UserModalQuery();
