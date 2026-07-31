from app.database import engine


try:

    connection = engine.connect()

    print("DATABASE CONNECTED SUCCESSFULLY")

    connection.close()


except Exception as e:

    print("DATABASE ERROR")

    print(e)