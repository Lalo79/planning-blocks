import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());