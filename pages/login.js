import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { accessToken, login } from '../src/DataServices';

const Login = () => {
    //input values controls
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //Error
    const [error, setError] = useState(false);
    //Router
    const router = useRouter();

    // useEffect(() => {
    //     document.addEventListener("keydown", async (e) => {
    //         if (e.keyCode === 13) {
    //             await postForm()
    //         }
    //     })
    //     return () => {
    //         document.removeEventListener("keydown", async (e) => {
    //             if (e.keyCode === 13) {
    //                 await postForm()
    //             }
    //         })
    //     }
    // })

    //This is for future changing side
    const postForm = useCallback(async () => {
        console.log(123);
        try {
            const { data } = await login({ email, password });
            console.log(data.data.token);
            localStorage.setItem("token", data.data.token)
            if (error) {
                setError(false)
            }
            router.push("/admin-panel")
        } catch (error) {
            console.log(error);
            setError(true);
        }

    }, [email, password, setError, error, router])
    return (
        <div className='login'>
            {error && <div className='error-div'>
                <h6>Գաղտնաբառը կամ email-ը սխալ է !</h6>
            </div>}
            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email հասցե</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Մուտքագրեք email"
                        value={email}
                        onChange={(e) => setEmail(() => e.target.value)} />
                    <br />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Գաղտնաբառ</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="գաղտնաբառ..."
                        value={password}
                        onChange={(e) => setPassword(() => e.target.value)}
                    />
                </div>
                <div className="form-check">
                </div>
                <br />
                <button
                    type="button"
                    className={error ? "error" : "btn-primary"}
                    onClick={postForm}
                >Submit</button>
            </form>
        </div>
    )
}

export default Login