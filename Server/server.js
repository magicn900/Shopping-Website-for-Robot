const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// 设置静态文件目录
app.use(express.static('../public'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


/* app.post('/register', (req, res) => {
    const { username, avatar } = req.body;

    if (!username) {
        return res.status(400).json({ success: false, message: '昵称是必填项' });
    }

    // 这里可以添加将用户信息保存到数据库的代码
    // 例如：saveUser(username, avatar);

    res.status(201).json({ success: true, message: '注册成功' });
}); */

app.post('/register', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ success: false, message: '昵称是必填项' });
    }

    // 检查昵称是否已存在的SQL查询语句
    const checkUsernameQuery = 'SELECT * FROM user WHERE username = ?';

    // 先执行查询操作
    connection.query(checkUsernameQuery, [username], (error, results) => {
        if (error) {
            console.error('Error checking username in the database:', error);
            return res.status(500).json({ success: false, message: '服务器错误' });
        }

        // 如果查询到相同昵称的用户，返回错误响应
        if (results.length > 0) {
            return res.status(409).json({ success: false, message: '抱歉哦，这个昵称已经被用过了' });
        }

        // 昵称未被占用，执行插入操作
        const insertQuery = 'INSERT INTO user (username) VALUES (?)';

        connection.query(insertQuery, [username], (insertError, insertResults) => {
            if (insertError) {
                console.error('Error inserting user into the database:', insertError);
                return res.status(500).json({ success: false, message: '服务器错误' });
            }
            // 插入成功
            res.status(201).json({ success: true, message: '注册成功' });
        });
    });
});

const mysql = require('mysql');

// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'shopping_website_for_robot_db'
});

// 尝试连接
connection.connect((error) => {
    if (error) {
      console.error('Error connecting to the database:', error);
    } else {
      console.log('Connected to the database successfully.');
    }
  });