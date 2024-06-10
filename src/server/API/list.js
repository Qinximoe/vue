//操作数据库
let db = require('../db/index')

//获取所有学生信息数据
exports.all=(req,res)=>{
    var sql = "select * from student"
    db.query(sql,(err,data)=>{
        if(err){
            return res.send("错误"+err.message)
        }
        else{
            res.send(data)
        }
    })
}

//添加学生信息数据
exports.add=(req,res)=>{
    var sql='insert into student (accout,name,dorm,room,time,department,sex,passwd) values (?,?,?,?,?,?,?,?)'
    db.query(sql,[req.query.accout,req.query.name,req.query.dorm,req.query.room,req.query.time,req.query.department,req.query.sex,req.query.passwd],(err,data)=>{
        if(err){
            return res.send("错误"+err.message)
        }
        if(data.affectedRows>0){
            res.send({
                status:200,
                message:"success"
            })
        }
        else{
            res.send({
                status:202,
                message:"error"
            })
        }
    })
}

//添加访客信息数据
exports.addVisitor=(req,res)=>{
    var sql="insert into visitor (id,name,number,interTime,leaveTime) values (?,?,?,?,?)"
    db.query(sql,[req.query.id,req.query.name,req.query.number,req.query.interTime,req.query.leaveTime],(err,data)=>{
        if(err){
            return res.send(err.message+"错误")
        }
        if(data.affectedrRows>0){
            res.send({
                status:200,
                message:'成功'
            })
        }
        else{
            res.send({
                status:200,
                message:'失败'
            })
        }
    })
}

//根据学生学号查找学生信息
exports.search=(req,res)=>{
    var sql="select * from student where accout = ?"
    db.query(sql,[req.query.accout],(err,data)=>{
        if(err){
            return res.send(err.message+"错误")
        }
        else{
            res.send(data)
        }
        
    })
}
//根据学生学号查找物品报修信息
exports.searchRepair=(req,res)=>{
    var sql="select * from repair where id = ?"
    db.query(sql,[req.query.id],(err,data)=>{
        if(err){
            return res.send(err.message+"错误")
        }
        else{
            res.send(data)
        }
        
    })
}
//根据学生学号查找学生访客记录信息
exports.searchVisitors=(req,res)=>{
    var sql="select * from visitor where id = ?"
    db.query(sql,[req.query.id],(err,data)=>{
        if(err){
            return res.send(err.message+"错误")
        }
        else{
            res.send(data)
        }
        
    })
}
//学生添加报修申请表
exports.repair=(req,res)=>{
    var sql="insert into repair (id,room,thing,reason) values(?,?,?,?)"
    db.query(sql,[req.query.id,req.query.room,req.query.room,req.query.thing,req.query.reason],(err,data)=>{
        if(err){
            return res.send(err.mesasge+"错误")
        }
        else{
            res.send(data)
        }
    })
}
//删除报修表
exports.delRepair = (req, res) => {        //通过id删除数据
    var sql = 'delete from repair where thing = ? and reason =?'
    db.query(sql, [req.query.thing,req.query.reason], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        if(data.affectedRows > 0) {
            res.send({
              status: 200,
              message: '删除成功'
            })
        }else{
            res.send({
              status: 202,
              message: '删除失败'
            })
        }
    })
}
//删除访问者表
exports.delVisitor = (req, res) => {        //通过id删除数据
    var sql = 'delete from visitor where interTime = ? and leaveTime=?'
    db.query(sql, [req.query.interTime,req.query.leaveTime], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        if(data.affectedRows > 0) {
            res.send({
              status: 200,
              message: '删除成功'
            })
        }else{
            res.send({
              status: 202,
              message: '删除失败'
            })
        }
    })
}
//修改保修表
exports.updateRepair = (req, res) => {
    var sql = 'update repair set reason = ? where thing= ?'
    db.query(sql, [req.query.reason, req.query.thing], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        if(data.changedRows > 0) {
          res.send({
            status: 200,
            message: 'success'
          })
        }else{
          res.send({
            status: 202,
            message: 'error'
          })
        }
    })
}
//修改保修表
exports.updateVisitor = (req, res) => {
    var sql = 'update visitor set interTime=?,leaveTime=? where id=?'
    db.query(sql, [req.query.interTime, req.query.leaveTime, req.query.id], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        if(data.changedRows > 0) {
          res.send({
            status: 200,
            message: 'success'
          })
        }else{
          res.send({
            status: 202,
            message: 'error'
          })
        }
    })
}