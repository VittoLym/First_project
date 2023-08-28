import { Schema, model } from 'mongoose'

const tasksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)
export default model('Task', tasksSchema)
