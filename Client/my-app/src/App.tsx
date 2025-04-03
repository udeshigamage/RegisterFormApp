import axios from "axios";
import { Form, Formik, Field } from "formik";
import { FC } from "react";
import { toast, ToastContainer } from "react-toastify";

const App: FC = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          dateofbirth: "",
          email: "",
          githuburl: "",
          contactno: "",
          photo: "",
          language: [],
          gender: "",
          about: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          const formdata = new FormData();

          formdata.append("firstname", values.firstname);
          formdata.append("lastname", values.lastname);
          formdata.append("dateofbirth", values.dateofbirth);
          formdata.append("email", values.email);
          formdata.append("githubUrl", values.githuburl);
          formdata.append("contactNo", values.contactno);

          if (values.photo) {
            formdata.append("photo", values.photo);
          }

          formdata.append("language", values.language.join(","));

          formdata.append("gender", values.gender);
          formdata.append("about", values.about);

          try {
            const response = await axios.post(
              `${API_URL}/Register/registerform`,
              formdata,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log(response.data);
            toast.success("Form submitted successfully!");
          } catch (error) {
            console.error("Error submitting form:", error);
          } finally {
            resetForm();
          }
        }}
      >
        {({ handleSubmit, resetForm }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-2xl"
          >
            <h1 className="text-3xl font-bold text-center mb-6">
              Register Form
            </h1>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-lg font-semibold">Firstname</label>
                <Field
                  type="text"
                  name="firstname"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-lg font-semibold">Lastname</label>
                <Field
                  type="text"
                  name="lastname"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="w-1/2">
                <label className="block text-lg font-semibold">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-lg font-semibold">
                  Github URL
                </label>
                <Field
                  type="text"
                  name="githuburl"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="w-1/2">
                <label className="block text-lg font-semibold">
                  Contact No
                </label>
                <Field
                  type="tel"
                  name="contactno"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-lg font-semibold">
                  Date of Birth
                </label>
                <Field
                  type="date"
                  name="dateofbirth"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-lg font-semibold">Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />{" "}
                  Male
                </label>
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-lg font-semibold">Languages</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="language"
                    value="English"
                    className="mr-2"
                  />{" "}
                  English
                </label>
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="language"
                    value="Sinhala"
                    className="mr-2"
                  />{" "}
                  Sinhala
                </label>
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="language"
                    value="Tamil"
                    className="mr-2"
                  />{" "}
                  Tamil
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-lg font-semibold">Photo</label>
              <Field name="photo">
                {({ field, form }: any) => (
                  <input
                    type="file"
                    className="w-full p-2 border rounded-lg"
                    onChange={(event) => {
                      const file = event.currentTarget.files?.[0];
                      form.setFieldValue("photo", file);
                    }}
                  />
                )}
              </Field>
            </div>

            <div className="mt-4">
              <label className="block text-lg font-semibold">About</label>
              <Field
                as="textarea"
                name="about"
                className="w-full p-2 border rounded-lg"
                rows={4}
              />
            </div>
            <div className="flex flex-row position-relative gap-2">
              <div className="w-1/2">
                {" "}
                <button
                  type="submit"
                  className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
              <div className="w-1/2">
                <button
                  type="submit"
                  onClick={() => resetForm()}
                  className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Reset
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
