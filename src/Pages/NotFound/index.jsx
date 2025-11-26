import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1>404</h1>
      <p>صفحه‌ای که دنبال آن بودید پیدا نشد.</p>
      <Link to="/" className="btn-outline">بازگشت به خانه</Link>
    </section>
  );
}
