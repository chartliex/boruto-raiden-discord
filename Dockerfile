# Use uma imagem base do Bun
FROM docker.io/oven/bun:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json bun.lock ./

# Instale as dependências
RUN bun install --production --frozen-lockfile

# Copie todo o restante do código do aplicativo
COPY . .

# Comando para iniciar o aplicativo
CMD ["bun", "start"]