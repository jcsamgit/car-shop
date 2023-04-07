import { useState } from "react";
import { useForm } from "react-hook-form";
import { firestore } from "./firebase";
import "./CSS/contact.css"

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await firestore.collection("form-data").add(data);
      reset();
      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="containerForm">

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="itemForm">
          <label htmlFor="name">Nombre</label> <br></br>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Este campo es obligatorio" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="itemForm">
          <label htmlFor="email">Correo electrónico</label><br></br>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico inválido",
              },
            })}
            />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="itemForm">
          <label htmlFor="message">Mensaje</label><br></br>
          <textarea
            id="message"
            rows={7}
            {...register("message", { required: "Este campo es obligatorio" })}
            />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button className="btnSend" type="submit" disabled={submitting}>
          {submitting ? "Enviando..." : "Enviar"}
        </button>
        {success && <p>Tu mensaje ha sido enviado correctamente.</p>}
      </form>
    </div>
  );
}
