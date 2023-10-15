FROM node:20-alpine
LABEL authors="celis"

WORKDIR /usr/src/github_stats
COPY . .

RUN npm install --global ts-node
RUN npm install

CMD npm run start

RUN addgroup --gid 10043 --system github_stats \
 && adduser  --uid 10042 --system --ingroup github_stats --no-create-home --gecos "" github_stats \
 && chown -R github_stats:github_stats /usr/src/github_stats
USER github_stats

EXPOSE 3925

CMD ["ts-node", "src/index.ts"]