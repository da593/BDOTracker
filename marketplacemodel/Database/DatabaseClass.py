import mysql.connector
from mysql.connector import errorcode
from datetime import datetime

#Class that handles initializing the usage of a database and SQL statements
class DatabaseClass:
    #Initialize database by entering host, account info, and database name to connect to
    def __init__(self,config):
        try:
            self.host = config[0]
            self.user = config[1]
            self.password = config[2]
            self.cnx =  mysql.connector.connect(host = self.host,user = self.user,password = self.password)
            self.cursor = self.cnx.cursor()
        except mysql.connector.Error as err:
            self.error(err)

    def setDatabase(self,DB_NAME):
        # Try to create a database if it does not already exists
        try:
            self.cursor.execute(
                "CREATE DATABASE {} DEFAULT CHARACTER SET 'utf8'".format(DB_NAME))
            self.cursor.execute("USE {}".format(DB_NAME))
        except mysql.connector.Error as err:
            # Try to use database if it exists, create the database, or an unknown error occured
            try:
                self.cursor.execute("USE {}".format(DB_NAME))
                print("Database is set to {}".format(DB_NAME))
            except mysql.connector.Error as err:
                print("Database {} does not exists.".format(DB_NAME))
                if err.errno == errorcode.ER_BAD_DB_ERROR:
                    self.setDatabase(self.cursor)
                    print("Database {} created successfully.".format(DB_NAME))
                    self.cnx.database = DB_NAME
                else:
                    print(err)
                    exit(1)

    def createTable(self,headers):
        for table_name in headers:
            table_description = headers[table_name]
            try:
                print("Creating table {}: ".format(table_name), end='')
                self.cursor.execute(table_description)
            except mysql.connector.Error as err:
                if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
                    print("already exists.")
                else:
                    print(err.msg)
            else:
                print("OK")

    def fetchAll(self,sqlStatement):
        try:
            self.cursor.execute(sqlStatement)
            rows = self.cursor.fetchall()
            if rows == None:
                return ""
            else:
                return rows
        except mysql.connector.Error as err:
            self.error(err)



    def error(self,err):
        return err

    def displayLastUpdate(self):
        d = datetime.now()
        date = d.strftime("%b-%d-%Y")
        t = datetime.now()
        timestr = t.strftime("%H:%M:%S")
        print("Volatile items updated on {} {}".format(timestr, date))






