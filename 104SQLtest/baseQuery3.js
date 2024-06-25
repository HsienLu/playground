const mysql = require('mysql2');

// 創建與資料庫的連接
const connection = mysql.createConnection({
  host: 'localhost', // 資料庫主機
  user: 'root', // 資料庫用戶名
  password: '123456', // 資料庫密碼
  database: 'db1' // 資料庫名稱
});

// 連接到資料庫
connection.connect(err => {
  if (err) {
    console.error('連接到資料庫失敗: ' + err.stack);
    return;
  }
  console.log('已連接到資料庫');
});

// 定義查詢語句
const query = `
SELECT
    articles.title,
    COUNT (comments.id) AS total_count
FROM
    articles
LEFT JOIN
    comments ON articles.id = comments.article_id
GROUP BY
    articles.title
ORDER BY
    total_count DESC
`;


// 執行查詢
connection.query(query, (err, results) => {
  if (err) {
    console.error('查詢失敗: ' + err.stack);
    return;
  }

  // 打印查詢結果
  console.log(results);
});

// 關閉連接
connection.end(err => {
  if (err) {
    console.error('關閉連接失敗: ' + err.stack);
    return;
  }
  console.log('已關閉資料庫連接');
});
