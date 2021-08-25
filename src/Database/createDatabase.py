import mysql.connector
from mysql.connector import errorcode

def createDatabase(cnx,cursor,DB_NAME):
    #Try to create a database if it does not already exists
    try:
        cursor.execute(
            "CREATE DATABASE {} DEFAULT CHARACTER SET 'utf8'".format(DB_NAME))
        cursor.execute("USE {}".format(DB_NAME))
    except mysql.connector.Error as err:
        #Try to use database if it exists, create the database, or an unknown error occured
        try:
            cursor.execute("USE {}".format(DB_NAME))
            print("Database is set to {}".format(DB_NAME))
        except mysql.connector.Error as err:
            print("Database {} does not exists.".format(DB_NAME))
            if err.errno == errorcode.ER_BAD_DB_ERROR:
                createDatabase(cursor)
                print("Database {} created successfully.".format(DB_NAME))
                cnx.database = DB_NAME
            else:
                print(err)
                exit(1)

    return cnx, cursor




