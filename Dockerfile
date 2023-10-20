FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY my-app/ ./my-app/
RUN cd my-app && npm install @angular/cli && npm install && npm run build

FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=ui-build /usr/src/app/my-app/dist/angular-nodejs-example/ /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
