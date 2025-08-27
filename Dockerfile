# 베이스 이미지
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 애플리케이션 코드 복사
COPY src ./src

# 포트 노출
EXPOSE 3000

# 애플리케이션 실행
CMD ["node", "src/index.js"]