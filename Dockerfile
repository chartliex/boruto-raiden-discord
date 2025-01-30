# Use uma imagem base do Node.js
FROM bun:1.2.1

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN bun install

# Copie todo o restante do código do aplicativo
COPY . .

# Comando para iniciar o aplicativo
CMD ["bun", "start"]