import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  writer: { type: String, required: true },
  publish_date: { type: String, required: true },
});

export interface Book {
  id: string;
  title: string;
  writer: string;
  publish_date: string;
}
