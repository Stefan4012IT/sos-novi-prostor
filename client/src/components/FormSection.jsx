import React, { useMemo, useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  childs_age: "",
  "country-code": "+381",
  "area-code": "",
  "phone-number": "",
  website: "", // honeypot
};

function FormSection({ className = "" }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const openedAt = useMemo(() => Date.now(), []);

  const sanitizeName = (value) => {
    return value
      .replace(/[^A-Za-zÀ-žĆČŠĐŽćčšđž\s'-]/g, "")
      .replace(/\s{2,}/g, " ")
      .slice(0, 60);
  };

  const sanitizeEmail = (value) => {
    return value.trim().slice(0, 100);
  };

  const sanitizeDigits = (value, maxLength = 12) => {
    return value.replace(/\D/g, "").slice(0, maxLength);
  };

  const sanitizeCountryCode = (value) => {
    let cleaned = value.replace(/[^\d+]/g, "");

    if (!cleaned.startsWith("+")) {
      cleaned = `+${cleaned.replace(/\+/g, "")}`;
    } else {
      cleaned = `+${cleaned.slice(1).replace(/\+/g, "")}`;
    }

    return cleaned.slice(0, 5);
  };

  
  

    const validate = (data = formData) => {
    const newErrors = {};

    const name = data.name.trim();
    const email = data.email.trim();
    const childsAge = String(data.childs_age).trim();
    const countryCode = String(data["country-code"]).trim();
    const areaCode = String(data["area-code"]).trim();
    const phoneNumber = String(data["phone-number"]).trim();
    const website = String(data.website).trim();

    if (website) {
        newErrors.website = "Spam detected.";
    }

    if (!/^[A-Za-zÀ-žĆČŠĐŽćčšđž\s'-]{2,60}$/.test(name)) {
        newErrors.name = "Unesite ispravno ime i prezime.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Unesite ispravnu email adresu.";
    }

    const ageNum = Number(childsAge);
    if (!Number.isInteger(ageNum) || ageNum < 3 || ageNum > 19) {
        newErrors.childs_age = "Unesite uzrast djeteta između 3 i 19.";
    }

    if (!/^\+\d{1,4}$/.test(countryCode)) {
        newErrors["country-code"] = "Unesite ispravan pozivni broj države.";
    }

    if (!/^\d{1,4}$/.test(areaCode)) {
        newErrors["area-code"] = "Unesite ispravan pozivni broj mreže.";
    }

    if (!/^\d{5,12}$/.test(phoneNumber)) {
        newErrors["phone-number"] = "Unesite ispravan broj telefona.";
    }

    return newErrors;
    };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let nextValue = value;

    if (name === "name") nextValue = sanitizeName(value);
    if (name === "email") nextValue = sanitizeEmail(value);
    if (name === "childs_age") nextValue = sanitizeDigits(value, 2);
    if (name === "country-code") nextValue = sanitizeCountryCode(value);
    if (name === "area-code") nextValue = sanitizeDigits(value, 4);
    if (name === "phone-number") nextValue = sanitizeDigits(value, 12);
    if (name === "website") nextValue = value;

    const updatedFormData = {
        ...formData,
        [name]: nextValue,
    };

    setFormData(updatedFormData);

    if (hasSubmitted) {
        setErrors(validate(updatedFormData));
    }
  };

//   const handleBlur = () => {
//     setErrors(validate());
//   };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitMessage("");
      setHasSubmitted(true);

      const validationErrors = validate(formData);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        return;
      }

      const timeSpent = Date.now() - openedAt;
      if (timeSpent < 3000) {
        setSubmitMessage("Molimo sačekajte trenutak i pokušajte ponovo.");
        return;
      }

      setIsSubmitting(true);

      try {
        const payload = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          childs_age: formData.childs_age.trim(),
          "country-code": formData["country-code"].trim(),
          "area-code": formData["area-code"].trim(),
          "phone-number": formData["phone-number"].trim(),
          institution: "sos",
        };

        const apiUrl =
          process.env.NODE_ENV === "development"
            ? "http://localhost:5000/api/form"
            : "/api/form";

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || `Server error: ${response.status}`);
        }

        setFormData(initialFormData);
        setErrors({});
        setHasSubmitted(false);
        setSubmitMessage("");
      } catch (error) {
        console.error(error);
        setSubmitMessage("Došlo je do greške prilikom slanja. Pokušajte ponovo.");
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <section className={`form-section ${className}`} id="prijava-forma">
      <div className="form-section__inner">
        <div className="form-section__intro">
          <p className="form-section__eyebrow">Prijavite se odmah</p>
          <h3 className="form-section__title">Obezbetite svom detetu školovanje sa osmehom</h3>
          <p className="form-section__text">
            Obezbedite jedno od 20 mesta u novom odeljenju.
          </p>
        </div>

        <form className="form-section__form" onSubmit={handleSubmit} noValidate>
          <div
            className="form-section__honeypot"
            aria-hidden="true"
            style={{ display: "none" }}
          >
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
            />
          </div>

          <div className="form-section__name-row">
            <div className="form-section__field">
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ime i prezime"
                />
                {errors.name && <p className="form-section__error">{errors.name}</p>}
            </div>
            <div className="form-section__field">
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                />
                {errors.email && <p className="form-section__error">{errors.email}</p>}
            </div>
            <div className="form-section__field">
                <input
                type="text"
                inputMode="numeric"
                id="childs_age"
                name="childs_age"
                value={formData.childs_age}
                onChange={handleChange}
                placeholder="Godine deteta"
                />
                {errors.childs_age && (
                <p className="form-section__error">{errors.childs_age}</p>
                )}
            </div>
          </div>
          <div className="form-section__phone-row">
            <div className="form-section__field">
              <input
                type="text"
                id="country-code"
                name="country-code"
                value={formData["country-code"]}
                onChange={handleChange}
                placeholder="+381"
              />
              {errors["country-code"] && (
                <p className="form-section__error">{errors["country-code"]}</p>
              )}
            </div>

            <div className="form-section__field">
              <input
                type="text"
                inputMode="numeric"
                id="area-code"
                name="area-code"
                value={formData["area-code"]}
                onChange={handleChange}
                placeholder="64"
              />
              {errors["area-code"] && (
                <p className="form-section__error">{errors["area-code"]}</p>
              )}
            </div>

            <div className="form-section__field">
              <input
                type="text"
                inputMode="numeric"
                id="phone-number"
                name="phone-number"
                value={formData["phone-number"]}
                onChange={handleChange}
                placeholder="1234567"
              />
              {errors["phone-number"] && (
                <p className="form-section__error">{errors["phone-number"]}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="form-section__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Slanje..." : "Pošalji prijavu"}
          </button>

          {submitMessage && (
            <p className="form-section__message">{submitMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default FormSection;