import mysql.connector

def createConnection(user,password):
    #Create a connection base on given username and password to mysql
    cnx = mysql.connector.connect(
        user = user,
        password = password
    )
    cursor = cnx.cursor()

    return cnx,cursor