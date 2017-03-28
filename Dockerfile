FROM nuxt/node
ENV NODE_PATH /usr/local/lib/node_modules
RUN mkdir -p /home/blog/.nuxt
RUN mkdir -p /home/blog/api
WORKDIR /home/blog

#移动文件
COPY .nuxt /home/blog/.nuxt
COPY api /home/blog/api
COPY package.json /home/blog
COPY utils.js /home/blog
COPY server.prod.js /home/blog
COPY request.js /home/blog
COPY nuxt.config.js /home/blog


EXPOSE 8080

CMD ["npm", "start" ]
