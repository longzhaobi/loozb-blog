FROM node
RUN mkdir -p /home/blog
WORKDIR /home/blog

#移动文件
COPY . /home/blog

RUN yarn install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start" ]
