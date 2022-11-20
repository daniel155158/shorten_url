# 短網址生產器
此專案提供使用者生成短網址。

## 功能說明
* 使用者可以輸入網址來獲得相對應的短網址。
* 使用者可以立即複製短網址來使用。

## 如何安裝
1. 打開你的terminal並且clone 此專案至本機電腦
```
git clone https://github.com/daniel155158/shorten_url.git
```
2. 開啟terminal，進入存放此專案的資料夾
```
cd shorten_url
```
3. 安裝npm套件
```
npm install
```
4. 使用nodemon
```
nodemon app.js
```
如果terminal出現: 
```
APP is listening on http://localhost:3000
```
表示伺服器順利啟動

現在，你可開啟任一瀏覽器瀏覽器輸入[http://localhost:3000/](http://localhost:3000/) 開始使用此餐廳清單囉！
## 開發工具
* Node.js
* Express
* Express-handlebars 
* MongoDB
* Mongoose
* Dotenv
* Bootstrap
* Body-parser