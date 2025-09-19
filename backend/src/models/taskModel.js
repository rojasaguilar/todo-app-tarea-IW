import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, "La tarea debe tener un título"],
  },
  completada: {
    type: Boolean,
    required: true,
    default: false,
  },
  descripcion: {
    type: String,
  },
  fechaCreada: {
    type: Date,
    default: () => Date.now(),
  },
  fechaLimite: {
    type: Date,
  },
});

export default mongoose.model("Task", taskSchema);
