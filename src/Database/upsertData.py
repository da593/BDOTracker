import mysql.connector

def upsertData(cnx,cursor,data_format,data_values):
    #Upsert and commit changes!
    cursor.execute(data_format,data_values)
    cnx.commit()