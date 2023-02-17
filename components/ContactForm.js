import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import styles from "../styles/Home.module.css";
const schema = yup
  .object({
    name: yup.string().required("Enter your name"),
    email: yup.string().email("Email is not valid").required("Enter an email"),
    body: yup.string().required("Enter a message"),
  })
  .required();

const ContactForm = () => {
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (
      !checked &&
      data.name !== "" &&
      data.email !== "" &&
      data.message !== ""
    ) {
      try {
        await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.body,
          }),
        });
        // .then((response) => {
        //   if (response != 200) {
        //     console.log("response", response);
        //   }
        // });
        // .then((result) => console.log(result))
        // .catch((error) => console.log("error", error));
        // setEmailData(initialEmailData);
        alert("Email sent, thanks for reaching out!");
      } catch (error) {
        console.log(error);
      }
    } else {
      setShowModal(true);
    }
  };

  console.log(errors);

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} mb={2}>
          <TextField
            {...register("name")}
            label="Name"
            helperText={errors.name?.message}
          />
          <TextField
            {...register("email")}
            label="Email"
            helperText={errors.email?.message}
          />
          <TextField
            {...register("body")}
            label="Message"
            multiline
            rows={4}
            helperText={errors.body?.message}
          />
        </Stack>
        <input
          onClick={() => setChecked(!checked)}
          type="checkbox"
          name="catcher"
          id="catcher"
          style={{ display: "none" }}
        />
        <button onClick={handleSubmit(onSubmit)}>Reach Out</button>
      </form>
    </div>
  );
};

export default ContactForm;
