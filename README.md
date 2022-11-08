# Restapi-mongodb


Document for install mongoose link
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
Mongoose installation video link
https://youtu.be/NLw7Tln6IeM

Curd operation post method creation connect with mongodb full code video
https://youtu.be/5F-esMTxroQ

npm init
npm  install express
npm install express mongoose
npm install nodemon —save-dev

ADD BELOW LINES IN PACKAGE.JSON FILE

“start”: “nodemon index.js”
“type”: “module”,

STEP 1:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

STEP 2:

  xcode-select --install

STEP 3:

brew tap mongodb/brew

STEP  4: 
Brew update

STEP 5:

brew install mongodb-community@6.0

STEP 6:

brew services start mongodb/brew/mongodb-community

STEP 7:
mongosh  ——  start mongoldb command like create/insert
show dbs;
mongod --version
Mongod

—————————
	
CREATE DATABASE NAME

Use <database name>
Show dbs;

CREATE TABLE NAME

Db.createCollection(“TABLE NAME”)

INSERT VALUES

Db.tablename.insertOne({rollno”1,”:”Rajesh kumar”})

Show collections.    ———it will particular table name

Db.students.find().pretty()
Db.students.drop()
Db.dropDatabase()

