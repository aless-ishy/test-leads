FROM python:3.12-alpine

RUN apk --no-cache add curl gnupg
RUN apk update && apk add gcc g++ unixodbc-dev python3-dev curl bash sudo

# Download the desired package(s)
RUN curl -O https://download.microsoft.com/download/7/6/d/76de322a-d860-4894-9945-f0cc5d6a45f8/msodbcsql18_18.4.1.1-1_amd64.apk
RUN curl -O https://download.microsoft.com/download/7/6/d/76de322a-d860-4894-9945-f0cc5d6a45f8/mssql-tools18_18.4.1.1-1_amd64.apk

# Install the package(s)
RUN apk add --allow-untrusted msodbcsql18_18.4.1.1-1_amd64.apk
RUN apk add --allow-untrusted mssql-tools18_18.4.1.1-1_amd64.apk

WORKDIR /app

COPY src /app/src
COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt
RUN pip install pyuwsgi

ENV PYTHONPATH="/app/src"

