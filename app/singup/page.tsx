'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Container, Typography } from "@mui/material";
import DynamicField from "../components/DynamicField";
import formFields from "../data/formFields.json";

interface FormValues {
  [key: string]: any;
}

export default function Home() {
  const { handleSubmit, control, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    localStorage.setItem("formData", JSON.stringify(data)); // simulate persistence
    alert("Form submitted! Check console & local storage.");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" mt={4}>
        Dynamic Signup Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((field) => (
          <DynamicField key={field.name} field={field} control={control} />
        ))}

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => reset()}
        >
          Reset
        </Button>
      </form>
    </Container>
  );
}