import http from "http";
import express from "express";
import socketio from "socket.io";
import cors from "cors";

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
