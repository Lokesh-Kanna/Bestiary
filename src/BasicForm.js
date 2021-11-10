import { useFormik } from "formik";
import * as yup from "yup";

export function BasicForm() {
  const validateForm = (values) => {
    console.log("Validate form", values);
    const errors = {};

    if (values.email.length < 5) {
      errors.email = "Please provide at least 5 characters";
      return errors;
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Please provide a valid email";
      return errors;
    }

    if (values.password.length < 8) {
      errors.password = "Please provide atleast 8 characters";
      return errors;
    }
    else if (values.password.length > 12) {
      errors.password = "Please provide less than 12 characters";
      return errors;
    }
  };
  // return (
  //   <div>
  //     <Formik
  //       initialValues={{ email: "", password: "" }}
  //       validate={validateForm}
  //       onSubmit={(value) => console.log("On Submit:", value)}
  //     >
  //       {(formik) => (
  //         <form onSubmit={ formik.handleSubmit}>
  //           <input
  //             type="email"
  //             placeholder="enter your email"
  //             id="email"
  //             name="email"
  //             value={formik.values.email}
  //             onChange={formik.handleChange}
  //             onBlur={formik.handleBlur}
  //           /><br></br>
  //           {formik.errors.email && formik.touched.email && formik.errors.email}
  //           <br></br>
  //           <input
  //             type="password"
  //             placeholder="enter your password"
  //             id="password"
  //             name="password"
  //             value={formik.values.password}
  //             onChange={formik.handleChange}
  //             onBlur={formik.handleBlur}
  //           /><br></br>
  //           {formik.errors.password && formik.touched.password && formik.errors.password}
  //           <br></br>
  //           <button type="submit">Submit</button>
  //         </form>
  //       )}
  //     </Formik>
  //   </div>
  // );
  const formValidationSchema = yup.object({
    email: yup.string()
      .min(5, "Give a bigger email")
      .required("why not fill this email?")
      .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid Email"),
    password: yup.string()
      .min(8, "Give a stronger password")
      .max(12, "Woah there! take it easy with the password.")
      .required("Password is a must to protect your privacy")
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    // validate: {validateForm},
    validationSchema: formValidationSchema,
    onSubmit: (value) => {
      console.log("On Submit:", value);
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder="enter your email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} /><br></br>
        {formik.errors.email && formik.touched.email && formik.errors.email}
        <br></br>
        <input
          type="password"
          placeholder="enter your password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} /><br></br>
        {formik.errors.password && formik.touched.password && formik.errors.password}
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
