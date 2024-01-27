import { tablesName, userTable } from "../connection/dbVariables";

/**
 * create User table Query
 */
export const userCreateTableQuery = `
CREATE TABLE IF NOT EXISTS ${tablesName.userTable}(
    ${userTable.userId} BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ${userTable.firstName} VARCHAR(255) DEFAULT NULL,
    ${userTable.lastName} VARCHAR(255) DEFAULT NULL,
    ${userTable.email} VARCHAR(255) DEFAULT NULL,
    ${userTable.imageURL} VARCHAR(255) DEFAULT NULL,
    ${userTable.createdBy} BIGINT UNSIGNED DEFAULT NULL,
    ${userTable.deleted} BOOLEAN NOT NULL DEFAULT 0,
    ${userTable.deleteBy} BIGINT UNSIGNED DEFAULT NULL,
    ${userTable.createdAt} TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (${userTable.userId}),
    CONSTRAINT UQUserEmail UNIQUE (${userTable.email})
  );
`;

/**
 * Insert User Query
 */
export const UserInsertQuery = `
    INSERT INTO ${tablesName.userTable} 
    (${userTable.firstName}, 
    ${userTable.lastName}, 
    ${userTable.email}, 
    ${userTable.createdBy})
    VALUES ?;
`;
