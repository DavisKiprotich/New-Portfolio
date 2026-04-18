import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import "./Contact.scss";

const socialLinks = [
  {
    href: "https://linkedin.com/in/kiprotich-davis-652b49243/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/werigan_non/",
    icon: <FaXTwitter />,
    label: "X / Twitter",
  },
  {
    href: "https://github.com/DavisKiprotich/",
    icon: <FaGithub />,
    label: "GitHub",
  },
];

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm("service_uv42igf", "template_eyex5t7", form.current, {
        publicKey: "U3yC0Wy8F6yvOuLKm",
      });

      toast.success("Message sent. I will get back to you soon.");
      event.target.reset();
    } catch (error) {
      const errorText = error?.text || "";

      if (errorText.includes("Invalid grant") || errorText.includes("Gmail_API")) {
        toast.error(
          "Email delivery is temporarily unavailable. Please email me directly while Gmail is reconnected."
        );
      } else {
        toast.error("Something went wrong. Please email me directly.");
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact app__section" id="contact">
      <div className="section-shell contact__layout">
        <div className="contact__intro">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Got a project? Let&apos;s talk.</h2>
          <p className="section-copy">
            I&apos;m open to web, mobile, IoT, and Power &amp; IT conversations,
            especially where practical execution matters as much as presentation.
          </p>

          <div className="contact__direct">
            <a className="contact__direct-link" href="mailto:davyzkorir@gmail.com">
              <CiMail />
              davyzkorir@gmail.com
            </a>
            <a className="contact__direct-link" href="tel:+254727111264">
              <FaPhone />
              +254 727 111 264
            </a>
          </div>

          <div className="contact__socials">
            {socialLinks.map((link) => (
              <a
                className="contact__social"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="contact__form-wrap">
          <h3>Estimate your project? Let me know here.</h3>

          <form className="contact__form" onSubmit={sendEmail} ref={form}>
            <label className="contact__field">
              <span>Your name</span>
              <input name="from_name" placeholder="John Doe" required type="text" />
            </label>

            <label className="contact__field">
              <span>Your email</span>
              <input name="from_email" placeholder="john@example.com" required type="email" />
            </label>

            <label className="contact__field">
              <span>Tell me about your project</span>
              <textarea
                name="message"
                placeholder="Web, mobile, IoT, Power & IT, redesigns, collaboration..."
                required
              />
            </label>

            <button className="contact__submit" disabled={isSending} type="submit">
              {isSending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
