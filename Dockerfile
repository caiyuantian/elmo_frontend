FROM node:alpine

RUN mkdir -p /home/elmo/frontend/

COPY . /home/elmo/frontend/

WORKDIR /home/elmo/frontend/

RUN npm install serve

EXPOSE 3000

CMD ["serve","-s","build", "-l", "3000"]