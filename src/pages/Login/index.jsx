import React from "react";
import "./style.css"; // App.css 파일에 네비게이션 바에 필요한 스타일을 작성합니다.
import useInputValue from "../../hooks/useInputValue";

export default function Login() {
  const initInputValue = {
    id: "",
    pw: "",
  };

  const { inputValue, handleInput } = useInputValue(initInputValue);

  const idRegExp = /^[a-z]+[a-z0-9]{5,19}$/g;
  const pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  const idVaild = idRegExp.test(inputValue.id);
  const pwVaild = pwRegExp.test(inputValue.pw);

  const valid =
    inputValue.id.length > 0 && inputValue.pw.length > 0 && idVaild && pwVaild;

  const isSuccuss = () => {
    valid ? alert("로그인 성공") : alert("로그인 실패");
  };

  return (
    <div className="loginContainer">
      <label>
        아이디
        <input
          type="text"
          placeholder="영문자로 시작하는 영문자 또는 숫자 6~20자"
          name="id"
          onChange={handleInput}
        ></input>
      </label>
      <label>
        비밀번호
        <input
          type="password"
          placeholder="8 ~ 16자 영문, 숫자 조합"
          name="pw"
          onChange={handleInput}
        ></input>
      </label>

      <button disabled={!valid} onClick={isSuccuss}>
        로그인
      </button>
    </div>
  );
}
