FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR /KCPM_K15A_WEBSITE_NHAN_DIEN_GT_VB
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]