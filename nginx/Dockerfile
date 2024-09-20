# Use uma imagem de servidor web para servir os arquivos estáticos
FROM nginx:stable-alpine

# Copia o arquivo de configuração personalizado para o diretório de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80 do container para servir a aplicação
EXPOSE 8080

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
