//操作数据库
const { send } = require('vite')
let db = require('../db/index')

//获取所有数据
exports.get = (req, res) => {
    var sql = 'select * from xslist '
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

