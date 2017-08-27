echo "开始构建"

docker build -t loozb-blog .

docker run -p 82:3000 --name loozb-blog -d loozb-blog