import db from '../db';

const index = {
    query(req, callback) {
        const { current = 1, classification, keyword } = req.query;
        let sql = `
        SELECT
            concat(t1.id, '') id,
            title,
            content,
            author,
            original_url,
            t2.NAME as classification,
            digest,
            date_format(t1.ctime,'%Y-%m-%d %H:%m:%s') ctime,
            read_num,
            type
        FROM
            tb_article t1
        LEFT JOIN tb_classification t2 ON t1.classification = t2.id
        WHERE
        t1.available = '1' AND confirm = '1'
        `
        let params = [];
        if (classification) {
            sql += ' and classification = ?';
            params.push(classification);
        }
        if (keyword) {
            sql += ' and title = ?';
            params.push(keyword);
        }
        sql += ' order by sort desc limit ' + current + ', 20';
        db.query(sql, params, (error, rows, fields) => {
            this.total((total = 0) => {
                callback(error, { rows, current, total }, fields);
            })
        })
    },

    queryById(req, callback) {
        const id = req.params.id;
        let sql = `
        SELECT
            concat(t1.id, '') id,
            title,
            content,
            author,
            original_url,
            t2.NAME as classification,
            digest,
            date_format(t1.ctime,'%Y-%m-%d %H:%m:%s') ctime,
            read_num,
            type
        FROM
            tb_article t1
        LEFT JOIN tb_classification t2 ON t1.classification = t2.id
        WHERE
        t1.available = '1' AND confirm = '1' and t1.id = ?
        `
        db.query(sql, [id], (error, rows, fields) => {
            callback(error, rows[0], fields)
        })
    },

    total(callback) {
        db.query("select count(*) total from tb_article where available='1' and confirm='1'", [], function (error, rows, fields) {
            if (error) {
                callback(0)
            } else {
                callback(rows[0].total)
            }
        })
    }

}

export default index;