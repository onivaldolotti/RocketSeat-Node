FROM node

WORKDIR /usr/app

COPY package.json ./

#nem todas imagens vem com yarn
RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "dev"]

#renxt é o nome da imagem, ponto é o diretorio do dockerfile
#docker build -t rentx .
