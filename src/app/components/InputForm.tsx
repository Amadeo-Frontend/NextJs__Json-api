// components/InputForm.tsx
import React, { useState } from "react";

interface FormData {
  data: string;
  format: string;
}

const InputForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    data: "",
    format: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para a API
    console.log(formData);
  };

  return (
    <form
      className="flex flex-col justify-center items-center mt-2"
      onSubmit={handleSubmit}
    >
      <div className="gap-2 flex flex-col justify-center items-center">
        <label>
          
          <textarea placeholder="Texto de entrada:" name="data" value={formData.data} onChange={handleChange} className="rounded-lg p-2" />
        </label>
        <label>
          
          <textarea
          placeholder="Formato JSON esperado:"
            name="format"
            value={formData.format}
            onChange={handleChange}
            className="rounded-lg p-2"
          />
        </label>
        <button
          type="submit"
          className="border border-white rounded-lg px-4 py-2 mt-2"
        >
          Converter
        </button>
      </div>
    </form>
  );
};

export default InputForm;
