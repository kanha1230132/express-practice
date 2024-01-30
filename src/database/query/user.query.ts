import { ResultSetHeader } from "mysql2";
import UserType from "../connection/dbInterface";
import { conn } from "../connection/dbInit";
import { UserInsertQuery } from "../sql/dbUser.sql";


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


}

export default new UserModalQuery();
