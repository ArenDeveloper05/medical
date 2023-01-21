import { useRouter } from "next/router";
import React, { useCallback, useState, useEffect } from "react";
import { login } from "../src/DataServices";

const Login = () => {
  //input values controls
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Error
  const [error, setError] = useState(false);
  //Router
  const router = useRouter();

  let accessToken;

  if (process.browser) {
    accessToken = window.localStorage.getItem("token");
  }

  useEffect(() => {
    if (accessToken) {
      router.push("/admin-panel");
    }
    window.localStorage.setItem("render", "true");
  }, []);

  const postForm = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const { data } = await login({ email, password });
        console.log(data.data.tokenData.token);
        // token.tokenData = data.data.tokenData.token;
        localStorage.setItem("token", data.data.tokenData.token);
        if (error) {
          setError(false);
        }
        router.push("/admin-panel");
      } catch (error) {
        console.log(error);
        setError(true);
      }
    },
    [email, password, setError, error, router]
  );
  return (
    <div className="login">
      {error && (
        <div className="error-div">
          <h6>Գաղտնաբառը կամ email-ը սխալ է !</h6>
        </div>
      )}
      <form onSubmit={postForm}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email հասցե</label>
          <input
            type="email"
            className="form-control"
            style={{ borderRadius: "20px", width: "250px", height: "45px" }}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Մուտքագրեք email"
            value={email}
            onChange={(e) => setEmail(() => e.target.value)}
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Գաղտնաբառ</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            style={{ borderRadius: "20px", width: "250px", height: "45px" }}
            placeholder="գաղտնաբառ..."
            value={password}
            onChange={(e) => setPassword(() => e.target.value)}
            autoComplete="on"
          />
        </div>
        <div className="form-check"></div>
        <br />
        <button
          type="submit"
          className={error ? "error" : "btn-primary"}
          style={{ borderRadius: "20px", width: "100px", height: "40px" }}
        >
          Մուտք
        </button>
      </form>
    </div>
  );
};

export default Login;
