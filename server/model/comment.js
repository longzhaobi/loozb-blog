import db from '../db';
import UUID from 'es6-uuid';
const index = {
    query(req, callback) {
        const { current = 1, articleId } = req.query;
        let sql = `
        SELECT
            CAST(id AS CHAR) id,
            CAST(pid AS CHAR) pid,
            CAST(article_id AS CHAR) article_id,
            CAST(by_reply AS CHAR) by_reply,
            email,
            content,
            CAST(reply AS CHAR) reply,
            ctime
        FROM
            tb_comment
        WHERE
        available = '1' and article_id = ? order by ctime desc limit ?, 20
        `
        db.query(sql, [articleId, current], (error, rows, fields) => {
            this.total((total = 0) => {
                callback(error, { rows, current, total }, fields);
            })
        })
    },

    queryById(id, callback) {
        let sql = `
        SELECT
            CAST(id AS CHAR) id,
            CAST(pid AS CHAR) pid,
            CAST(article_id AS CHAR) article_id,
            CAST(by_reply AS CHAR) by_reply,
            email,
            content,
            CAST(reply AS CHAR) reply,
            ctime
        FROM
            tb_comment
        WHERE
        available = '1' and id = ?
        `
        db.query(sql, [id], (error, rows, fields) => {
            callback(error, rows[0])
        })
    },

    insert(req, callback) {
        const { content, reply, email, articleId, byReply } = req.body
        const id = UUID(32);
        let sql = `insert into tb_comment(id, article_id, by_reply, email, content, reply, ctime, create_id) 
        values(?, ?, ?, ?, ?, ?, now(), 0)`
        db.query(sql, [id, articleId, byReply, email, content, reply ], (error) => {
            this.queryById(id, (errors, rows) => {
                callback(error, rows)
            })
        })
    },

    total(callback) {
        db.query("select count(*) total from tb_comment where available='1'", [], function (error, rows, fields) {
            if (error) {
                callback(0)
            } else {
                callback(rows[0].total)
            }
        })
    }

}

export default index;