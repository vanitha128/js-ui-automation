# FROM selenium/node-firefox
# USER root
# RUN apt-get update --fix-missing
# RUN apt-get install -y build-essential make g++ curl libfontconfig python curl wget unzip git
# RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
# RUN apt-get install -y nodejs
# WORKDIR /e2e
# ADD . /e2e/.
# RUN npm install
# RUN npm uninstall geckodriver
# CMD npm run test-firefox

FROM selenium/node-chrome
USER root
RUN apt-get update --fix-missing
RUN apt-get install -y build-essential make g++ curl libfontconfig python curl wget unzip git
RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN apt-get install -y nodejs
WORKDIR /e2e
ADD . /e2e/.
RUN npm install
# using default chromedrive as part of base image
RUN npm uninstall chromedriver
CMD npm run test-chrome