const sql = require('mssql/msnodesqlv8')  

const configLive = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: '192.168.1.102\\SQL2017',
    database: 'activo-cloud-2021-1-25-19-10',
    driver: "msnodesqlv8"
}

const poolPromise = new sql.ConnectionPool(configLive)  
.connect()  
.then(pool => {  
console.log('Connected to MSSQL') 
 
return pool  
})  
.catch(err => console.log('Database Connection Failed! Bad Config: ', err))  
module.exports = {  
sql, poolPromise  
} 