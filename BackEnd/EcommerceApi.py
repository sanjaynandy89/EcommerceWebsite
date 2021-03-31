# using flask_restfu
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS
import pymysql
from datetime import date
# creating the flask app
app = Flask(__name__)
# creating an API object
CORS(app)
api = Api(app)
#CRUD OPERATIONS FOR USER DATABASE
class user(Resource):

    # corresponds to the GET request.
    # this function is called whenever there
    # is a GET request for this resource
    # Connect to MySQL database
    con = pymysql.connect(host='localhost', user='root', passwd='Zamorac@123n', database='ecommerce')
    print('connection sucessful')

    cur = con.cursor()
#GET CORRESPONDS TO FETCHING DATA FROM DB RETREIVE IN CRUD
    def get(self):
        data = {'message': 'hello world'}
        # Connect to MySQL database

        str = "select * from user "
        self.cur.execute(str)

        row_headers = [x[0] for x in self.cur.description]  # this will extract row headers
        rv = self.cur.fetchall()
        print(row_headers)
        json_data = []
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))
        print(json_data)
        response = jsonify(json_data)
        # Enable Access-Control-Allow-Origin
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    #This is for create operation
#POST CORRESPONDS TO INSERT INTO DATABSAE
    def post(self):
      data=request.get_json()

      #id=int(data['id'])
      firstName=data['firstName']

      middleName=data['middleName']
      lastName=data['lastName']
      mobile=data['mobile']
      email=data['email']
      passwordHash=data['passwordHash']
      admin=int(data['admin'])
      vendor=int(data['vendor'])
      registeredAt=date.today()
      lastLogin=data['lastLogin']
      intro=data['intro']
      profile=data['profile']
      print(profile)
      try:
        str = "insert into user values('%d','%s','%s','%s','%s','%s','%s','%d','%d','%s','%s','%s','%s')"
        print("Hello")
        str1 = "select max(id) from user "
        self.cur.execute(str1)
        rv= self.cur.fetchone()
        print(rv)
        id=rv[0]+1
        args = (id,firstName,middleName,lastName,mobile,email,passwordHash,admin,vendor,
                registeredAt,lastLogin,intro,profile)
        print(args)
        print("hi")
        self.cur.execute(str % args)
        self.con.commit()
        resp=jsonify("Data inserted successfully")
        # Enable Access-Control-Allow-Origin
        resp.status_code=200
        resp.headers.add("Access-Control-Allow-Origin", "*")
        return resp
      except:
        print('Insertion Failed')
        self.con.rollback()

#put corresponds to update in CRUD
    def put(self):
#request.json converts json format data into normal format
      data=request.json
      id=data['id']

      mobile=data['mobile']

      passwordHash=data['passwordHash']

      print(data)
      try:
            str = "update user set passwordHash='%s',mobile='%s' where id='%s' "
            print("Hello")
            args = (passwordHash,mobile,id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp=jsonify("Data updated successfully")
            resp.status_code=200
            return resp
      except:
            print('Insertion Failed')
            self.con.rollback()
#delete deletes a row of the databse D of CRUD
    def delete(self):
        data = request.json
        id = data['id']

        print(data)
        try:
            str = "delete from user where id='%d' "
            print("Hello")
            args = (id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp = jsonify("Data inserted successfully")
            resp.status_code = 200
            return resp
        except:
            print('Insertion Failed')
            self.con.rollback()

#CRUD OPERATIONS FOR ORDERS
class orders(Resource):

    # corresponds to the GET request.
    # this function is called whenever there
    # is a GET request for this resource
    # Connect to MySQL database
    con = pymysql.connect(host='localhost', user='root', passwd='Zamorac@123n', database='ecommerce')
    print('connection sucessful')

    cur = con.cursor()
#GET CORRESPONDS TO FETCHING DATA FROM ORDERS RETREIVE IN CRUD
    def get(self):
        data={'message': 'hello world'}
        # Connect to MySQL database
#province varchar(50),country varchar(50),createdAt datetime,updatedAt datetime,content text,primary key(id));
        str = "select * from  orders"
        self.cur.execute(str)
        n = self.cur.fetchall()
        return jsonify(n)
#This is for create operation
#POST CORRESPONDS TO INSERT INTO DATABSAE
    def post(self):
      data=request.get_json()

      id=data['id']
      userID=data['userID']
      sessionID=data['sessionID']
      token=data['token']
      status=data['status']
      subTotal=data['subTotal']
      itemDiscount=data['itemDiscount']
      tax=data['tax']
      shipping=data['shipping']
      total=data['total']
      promo=data['promo']
      discount=data['discount']
      grandTotal=data['grandTotal']
      firstName=data['firstName']
      middleName=data['middleName']
      lastName=data['lastName']
      mobile=data['mobile']
      email=data['email']
      line1=data['line1']
      line2=data['line2']
      city=data['city']

      province=data['province']
      country=data['country']
      createdAt=data['createdAt']
      updatedAt=data['updatedAt']
      content=data['content']

      try:
        str = "insert into orders values('%d','%d','%s','%s','%s','%f','%f','%f','%f','%f','%s','%f','%f','%f','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%d','%d','%s')"
        print("Hello")
        args = ( id, userID, sessionID,token,status,subTotal,itemDiscount,tax,shipping,total,promo,discount,grandTotal,firstName,middleName,lastName,mobile,email,line1,line2,city,province,country,createdAt,updatedAt,content)
        print("hi")
        self.cur.execute(str % args)
        self.con.commit()
        resp=jsonify("Data inserted successfully")
        resp.status_code=200
        return resp
      except:
        print('Insertion Failed')
        self.con.rollback()

#put corresponds to update in CRUD
    def put(self):
#request.json converts json format data into normal format
      data=request.json
      id=data['id']
      userID=data['userID']
      sessionID=data['sessionID']
      token=data['token']
      status=data['status']
      subTotal=data['subTotal']
      itemDiscount=data['itemDiscount']
      tax=data['tax']
      shipping=data['shipping']
      total=data['total']
      promo=data['promo']
      discount=data['discount']
      grandTotal=data['grandTotal']
      firstName=data['firstName']
      middleName=data['middleName']
      lastName=data['lastName']
      mobile=data['mobile']
      email=data['email']
      line1=data['line1']
      line2=data['line2']
      city=data['city']
      province=data['province']
      country=data['country']
      createdAt=data['createdAt']
      updatedAt=data['updatedAt']
      content=data['content']

      print(data)
      try:
            str = "update orders set firstName='%s',middleName='%s',lastName='%s' where id='%s' "
            print("Hello")
            args = (firstName,middleName,lastName,id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp=jsonify("Data inserted successfully")
            resp.status_code=200
            return resp
      except:
            print('Insertion Failed')
            self.con.rollback()
#delete deletes a row of the databse D of CRUD
    def delete(self):
        data = request.json
        id = data['id']

        print(data)
        try:
            str = "delete from orders where id='%d' "
            print("Hello")
            args = (id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp = jsonify("Data deleted successfully")
            resp.status_code = 200
            return resp
        except:
            print('Insertion Failed')
            self.con.rollback()
#CRUD FOR cart
class cart(Resource):

    # corresponds to the GET request.
    # this function is called whenever there
    # is a GET request for this resource
    # Connect to MySQL database
    con = pymysql.connect(host='localhost', user='root', passwd='Zamorac@123n', database='ecommerce')
    print('connection sucessful')

    cur = con.cursor()
#GET CORRESPONDS TO FETCHING DATA FROM DB RETREIVE IN CRUD
    def get(self):
        data = {'message': 'hello world'}
        # Connect to MySQL database

        str = "select * from cart "
        self.cur.execute(str)

        row_headers = [x[0] for x in self.cur.description]  # this will extract row headers
        rv = self.cur.fetchall()
        print(row_headers)
        json_data = []
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))
        print(json_data)
        response = jsonify(json_data)
        # Enable Access-Control-Allow-Origin
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    #This is for create operation
#POST CORRESPONDS TO INSERT INTO DATABSAE
    def post(self):
      data=request.get_json()

      id=data['id']
      userID=data['userID']
      sessionID=data['sessionID']
      token=data['token']
      status=data['status']
      firstName=data['firstName']
      middleName=data['middleName']
      lastName=data['lastName']
      mobile=data['mobile']
      email=data['email']
      line1=data['line1']
      line2=data['line2']
      city=data['city']
      province=data['province']
      country=data['country']
      createdAt=data['createdAt']
      updatedAt=data['updatedAt']
      content=data['content']
      try:
        str = "insert into cart values('%d','%d','%s','%s','%d','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')"
        print("Hello")
        args = (id,userID,sessionID,token,status,firstName, middleName,lastName,mobile,email,line1,line2,city,province,country,createdAt,updatedAt, content)
        print("hi")
        self.cur.execute(str % args)
        self.con.commit()
        resp=jsonify("Data inserted successfully")
        resp.status_code=200
        return resp
      except:
        print('Insertion Failed')
        self.con.rollback()

#put corresponds to update in CRUD
    def put(self):
#request.json converts json format data into normal format
      data=request.json


      id = data['id']
      userID = data['userID']
      sessionID = data['sessionID']
      token = data['token']
      status = data['status']
      firstName = data['firstName']
      middleName = data['middleName']
      lastName = data['lastName']
      mobile = data['mobile']
      email = data['email']
      line1 = data['line1']
      line2 = data['line2']
      city = data['city']
      province = data['province']
      country = data['country']
      createdAt = data['createdAt']
      updatedAt = data['updatedAt']
      content = data['content']


      print(data)
      try:
            str = "update cart set line1='%s',line2='%s',mobile='%s' where id='%s' "
            print("Hello")
            args = (line1,line2,mobile,id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp=jsonify("Data inserted successfully")
            resp.status_code=200
            return resp
      except:
            print('Insertion Failed')
            self.con.rollback()
#delete deletes a row of the databse D of CRUD
    def delete(self):
        data = request.json
        id = data['id']

        print(data)
        try:
            str = "delete from cart where id='%d' "
            print("Hello")
            args = (id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp = jsonify("Data inserted successfully")
            resp.status_code = 200
            return resp
        except:
            print('Insertion Failed')
            self.con.rollback()
#CRUD FOR category
class category(Resource):

    # corresponds to the GET request.
    # this function is called whenever there
    # is a GET request for this resource
    # Connect to MySQL database

    con = pymysql.connect(host='localhost', user='root', passwd='Zamorac@123n', database='ecommerce')
    print('connection sucessful')
    cur = con.cursor()
#GET CORRESPONDS TO FETCHING DATA FROM DB RETREIVE IN CRUD
    def get(self):
        data = {'message': 'hello world'}
        # Connect to MySQL database

        str = "select * from category"
        self.cur.execute(str)

        row_headers = [x[0] for x in self.cur.description]  # this will extract row headers
        rv = self.cur.fetchall()
        print(row_headers)
        json_data = []
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))
        print(json_data)
        response = jsonify(json_data)
        # Enable Access-Control-Allow-Origin
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    #This is for create operation
#POST CORRESPONDS TO INSERT INTO DATABSAE
    def post(self):
      data=request.get_json()

      id=data['id']
      parentID=data['parentID']
      title=data['title']
      metaTitle=data['metaTitle']
      slug=data['slug']
      content=data['content']
      try:
        str = "insert into cart values('%d','%d','%s','%s','%s','%s')"
        print("Hello")
        args = (id,parentID,title,metaTitle,slug,content)
        print("hi")
        self.cur.execute(str % args)
        self.con.commit()
        resp=jsonify("Data inserted successfully")
        resp.status_code=200
        return resp
      except:
        print('Insertion Failed')
        self.con.rollback()

#put corresponds to update in CRUD
    def put(self):
#request.json converts json format data into normal format
      data=request.json


      id=data['id']
      parentID=data['parentID']
      title=data['title']
      metaTitle=data['metaTitle']
      slug=data['slug']
      content=data['content']

      print(data)
      try:
            str = "update cart set content='%s',slug='%s',title='%s' where id='%s' "
            print("Hello")
            args = (content,slug,title,id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp=jsonify("Data inserted successfully")
            resp.status_code=200
            return resp
      except:
            print('Insertion Failed')
            self.con.rollback()
#delete deletes a row of the databse D of CRUD
    def delete(self):
        data = request.json
        id = data['id']

        print(data)
        try:
            str = "delete from cart where id='%d' "
            print("Hello")
            args = (id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp = jsonify("Data inserted successfully")
            resp.status_code = 200
            return resp
        except:
            print('Insertion Failed')
            self.con.rollback()
#CRUD OPERATIONS FOR product
class product(Resource):

    # corresponds to the GET request.
    # this function is called whenever there
    # is a GET request for this resource
    # Connect to MySQL database
    con = pymysql.connect(host='localhost', user='root', passwd='Zamorac@123n', database='ecommerce')
    print('connection sucessful')

    cur = con.cursor()
#GET CORRESPONDS TO FETCHING DATA FROM ORDERS RETREIVE IN CRUD
    def get(self):
        data={'message': 'hello world'}
        # Connect to MySQL database
#province varchar(50),country varchar(50),createdAt datetime,updatedAt datetime,content text,primary key(id));
        str = "select * from  product"
        self.cur.execute(str)

        row_headers = [x[0] for x in self.cur.description]  # this will extract row headers
        rv = self.cur.fetchall()
        print(row_headers)
        json_data = []
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))
        print(json_data)
        response = jsonify(json_data)
        # Enable Access-Control-Allow-Origin
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
#This is for create operation
#POST CORRESPONDS TO INSERT INTO DATABSAE
    def post(self):
      data=request.get_json()
      print(data)
      id=data['id']
      title=data['title']
      img=data['img']
      price=data['price']
      discount=data['discount']
      company= data['company']
      info = data['info']
      inCart=data['inCart']
      count=data['count']
      total=data['total']



      try:
        str = "insert into product values('%d',%s','%s','%f,'%f,'%s','%s','%s','%d','%f')"
        print("Hello")
        args = (id,title,img,price,discount,company,info,inCart,count,total)
        print("hi")
        self.cur.execute(str % args)
        self.con.commit()
        resp=jsonify("Data inserted successfully")
        resp.status_code=200
        return resp
      except:
        print('Insertion Failed')
        self.con.rollback()

#put corresponds to update in CRUD
    def put(self):
#request.json converts json format data into normal format
      data=request.json


      id = data['id']
      userID = data['userID']
      title = data['title']
      metaTitle = data['metaTitle']
      slug = data['slug']
      summary = data['summary']
      type = data['type']
      sku = data['sku']
      price = data['price']
      discount = data['discount']
      quantity = data['quantity']
      shop = data['shop']
      createdAt = data['createdAt']
      updatedAt = data['updatedAt']
      publishedAt = data['publishedAt']
      startsAt = data['startsAt']
      endsAt = data['endsAt']
      content = data['content']

      print(data)
      try:
            str = "update product set price='%f',discount='%f' where id='%s' "
            print("Hello")
            args = (price,discount,id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp=jsonify("Data inserted successfully")
            resp.status_code=200
            return resp
      except:
            print('Insertion Failed')
            self.con.rollback()
#delete deletes a row of the databse D of CRUD
    def delete(self):
        data = request.json
        id = data['id']

        print(data)
        try:
            str = "delete from product where id='%d' "
            print("Hello")
            args = (id)
            print("hi")
            self.cur.execute(str % args)
            self.con.commit()
            resp = jsonify("Data deleted successfully")
            resp.status_code = 200
            return resp
        except:
            print('Insertion Failed')
            self.con.rollback()


api.add_resource(user, '/')
api.add_resource(orders,'/orders')
api.add_resource(cart,'/cart')
api.add_resource(category,'/category')
api.add_resource(product,'/product')
# driver function
if __name__ == '__main__':
    app.run(debug=True)
