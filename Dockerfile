FROM node
RUN mkdir -p /home/blog
WORKDIR /home/blog

#移动文件
COPY . /home/blog

RUN yarn install

RUN npm run build

EXPOSE 8080

CMD ["npm", "start" ]
