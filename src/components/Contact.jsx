import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ax8yzfp",
        "template_egmslgw",
        form.current,
        "Pv9vfxrUynEntoquT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mail envoyé!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="text-emerald-300 h-[100vh] bg-neutral-900 pt-10 p-10 flex flex-col items-center gap-6"
    >
      <h1 className="text-5xl">Contactez moi!</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="bg-neutral-800 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-2 rounded-md border-emerald-300 w-fit"
      >
        <div>
          <div className=" flex flex-col gap-2">
            <label className="text-2xl" htmlFor="name">
              Votre nom
            </label>
            <input
              name="user_name"
              placeholder="mon nom"
              className="text-black bg-neutral-200 text-2xl p-2 border-1 rounded-md border-black"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <label className="text-2xl" htmlFor="email">
              Votre mail
            </label>
            <input
              name="user_email"
              placeholder="monmail@gmail.com"
              className="text-black bg-neutral-200 text-2xl p-2 border-1 rounded-md border-black"
              type="email"
              id="email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="message">
            Votre message
          </label>
          <textarea
            name="message"
            placeholder="mon message est..."
            className="text-black bg-neutral-200 text-2xl p-2 border-1 rounded-md border-black"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-emerald-500 p-3 hover:bg-emerald-400 text-black"
        >
          Envoyer!
        </button>
      </form>
    </div>
  );
};

export default Contact;
