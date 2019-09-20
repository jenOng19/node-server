const env={
  database: 'testdb',
  username: 'sa',
  password: 'jenOng19',
  // server: 'L-CKR5ST2-ONG\\SQLEXPRESS',
  host: 'L-CKR5ST2-ONG',
  dialect: 'mssql',
  ////if you're on Windows Azure, you will need this
  dialectOptions: {
    options:{
      encrypt:true
    }
  },
  pool:{
    max : 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

module.exports=env;
