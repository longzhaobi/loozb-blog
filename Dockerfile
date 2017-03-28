FROM nuxt/node
ENV NODE_PATH /usr/local/lib/node_modules
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
COPY nuxt.config.js /home/loozb-blog


EXPOSE 8080

CMD ["npm", "start" ]
