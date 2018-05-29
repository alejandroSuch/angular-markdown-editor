### BUILDER ###
FROM alexsuch/angular-cli:6.0.5 as builder

COPY . /usr/src/markdown-editor/
WORKDIR /usr/src/markdown-editor
RUN npm install
RUN ng build --prod

### FINAL IMAGE ###
FROM nginx:alpine

COPY --from=builder /usr/src/markdown-editor/dist/markdown-editor/ /var/www/markdown-editor/
COPY nginx.conf /etc/nginx/nginx.conf

