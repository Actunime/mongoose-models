import dotenv from "dotenv";
dotenv.config({
    path: [`.env.${process.env.NODE_ENV || 'development'}`, '.env.local'],
});
console.log("ENV INITIALIZED");