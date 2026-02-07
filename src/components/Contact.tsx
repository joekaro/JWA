import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

/* =========================
   TYPES
========================= */
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  agreeToTerms: boolean;
}

/* =========================
   COMPONENT
========================= */
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  /* =========================
     SUBMIT HANDLER
  ========================= */
  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(true);
    setSubmitError(false);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_kb2r9df",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_y0ux8wg",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          service: data.service,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "_R6xkt-PbFCT-QTGB",
      )
      .then(() => {
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSubmitSuccess(false);
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  /* =========================
     STATIC DATA
  ========================= */
  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      detail: "jeowebapp360@gmail.com",
      link: "mailto:jeowebapp360@gmail.com",
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      detail: "+234 8161 375 240",
      link: "tel:+2348161375240",
    },
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Location",
      detail: "Lagos, Nigeria",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/2348161375240",
      label: "WhatsApp",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/joewebapp/",
      label: "Instagram",
    },
    {
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@joewebapp",
      label: "TikTok",
    },
  ];

  /* =========================
     RENDER
  ========================= */
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-primary-dark to-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mt-4 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Send us a message and we'll respond within
            24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Contact Info
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Fill the form or reach us directly through any channel below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-accent/50 transition-all"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{item.title}</p>
                    <p className="text-white font-semibold">{item.detail}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-accent"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="+234 800 000 0000"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Service *
                </label>
                <select
                  {...register("service", { required: "Select a service" })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select service</option>
                  <option value="web-dev">Web Development</option>
                  <option value="web-app">Web Application</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="booking">Booking System</option>
                  <option value="design">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  {...register("message", { required: "Message required" })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white resize-none focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* AGREEMENT CHECKBOX */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  {...register("agreeToTerms", {
                    required: "You must agree to the terms to submit",
                  })}
                  className="mt-1 w-4 h-4 text-accent bg-gray-900 border-gray-700 rounded focus:ring-accent focus:ring-2"
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-sm text-gray-300 leading-relaxed"
                >
                  I agree to the{" "}
                  <Link
                    to="/privacy"
                    target="_blank"
                    className="text-accent hover:text-accent-dark underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/terms"
                    target="_blank"
                    className="text-accent hover:text-accent-dark underline"
                  >
                    Terms of Service
                  </Link>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.agreeToTerms.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-primary py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg text-center text-sm"
                >
                  ✅ Message sent successfully! We'll respond within 24 hours.
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-center text-sm"
                >
                  ❌ Failed to send message. Please try again or contact us
                  directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
