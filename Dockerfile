FROM nuxt/node
RUN mkdir -p /home/loozb-blog/.nuxt
RUN mkdir -p /home/loozb-blog/api
WORKDIR /home/loozb-blog

#移动文件
COPY .nuxt /home/loozb-blog/.nuxt
COPY api /home/loozb-blog/api
COPY package.json /home/loozb-blog
COPY utils.js /home/loozb-blog
COPY server.prod.js /home/loozb-blog
COPY request.js /home/loozb-blog
COPY nuxt.confi.js /home/loozb-blog


EXPOSE 8080

CMD ["npm", "start" ]
