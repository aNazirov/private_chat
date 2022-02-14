CREATE DATABASE PRIVATE_CHAT;

CREATE TABLE "USER" (
    id SERIAL PRIMARY KEY,
    name varchar(150),
    email varchar(50) UNIQUE NOT NULL,
    password varchar(150) NOT NULL,
    created_at DATE DEFAULT NOW(),
    updated_at DATE DEFAULT NOW()
);

CREATE TABLE "CHAT" (
    id SERIAL PRIMARY KEY,
    type BOOLEAN,
    created_at DATE DEFAULT NOW(),
    updated_at DATE DEFAULT NOW()
);

CREATE TABLE "PARTICIPANTS" (
    id SERIAL PRIMARY KEY,
    chatId INTEGER,
    FOREIGN KEY(chatId) REFERENCES "CHAT"(id),
    userId INTEGER,
    FOREIGN KEY(userId) REFERENCES "USER"(id),
    created_at DATE DEFAULT NOW(),
    updated_at DATE DEFAULT NOW()
);

CREATE TABLE "MESSAGE" (
    id SERIAL PRIMARY KEY,
    chatId INTEGER,
    FOREIGN KEY(chatId) REFERENCES "CHAT"(id),
    userId INTEGER,
    FOREIGN KEY(userId) REFERENCES "USER"(id),
    files INTEGER[],
    message VARCHAR,
    created_at DATE DEFAULT NOW(),
    updated_at DATE DEFAULT NOW()
);

CREATE TABLE "FILE" (
    id SERIAL PRIMARY KEY,
    path varchar,
    fileName varchar,
    created_at DATE DEFAULT NOW(),
    updated_at DATE DEFAULT NOW()
);
