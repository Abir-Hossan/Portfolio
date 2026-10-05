import { useState, type FormEvent } from "react";
export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.checkValidity()) {
      f.reportValidity();
      return;
    }
    setLoading(true);
    setStatus("");
    setTimeout(() => {
      setLoading(false);
      setStatus("Thanks — your message has been received.");
      f.reset();
    }, 650);
  }
  return (
    <section id="contact" className="section contact">
      <div className="contact-wrap">
        <p className="eyebrow">Get In Touch</p>
        <h2>Contact me</h2>
        <p className="contact-intro">
          Have a project in mind? Tell me a little about it and I’ll get back to
          you.
        </p>
        <form onSubmit={submit}>
          <div className="form-grid">
            <label>
              First name
              <input name="firstName" required autoComplete="given-name" />
            </label>
            <label>
              Last name
              <input name="lastName" required autoComplete="family-name" />
            </label>
            <label>
              Email
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label>
              Phone number
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
          </div>
          <label>
            Choose a topic
            <select name="topic" required defaultValue="">
              <option value="" disabled>
                Select one...
              </option>
              <option>Product Design</option>
              <option>Branding</option>
              <option>Web Development</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              placeholder="Type your message..."
              rows={7}
            />
          </label>
          <label className="check">
            <input type="checkbox" required /> I accept the terms
          </label>
          <button className="btn btn-primary submit" disabled={loading}>
            {loading ? "Sending…" : "Submit"}
          </button>
          {status && (
            <p className="success" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
