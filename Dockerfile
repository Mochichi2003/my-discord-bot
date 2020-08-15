FROM node:alpine


ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL=ja_JP.UTF-8


WORKDIR /app/


COPY package*.json ./

RUN yarn install 
RUN apk update && apk add   \
  zsh \
  tzdata && \
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  apk del tzdata && \
  rm -rf /var/cache/apk/*

RUN  apk add   \
  tmux
# RUN apk add 
# 本番用にコードを作成している場合
# RUN npm install --only=production
RUN yarn install
# アプリケーションのソースをバンドルする
# COPY . .

# EXPOSE 5500
CMD [ "yarn","dev"]

