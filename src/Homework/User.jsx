import { useEffect, useRef, useState } from "react";

const initialState = {
  users: [
    {
      id: 1,
      username: "test",
      email: "public.test@gmail.com",
      active: true,
    },
  ],
};

function User() {
  const [user, setUser] = useState(initialState.users);
  const [count, setCount] = useState(0);
  const inputAccount = useRef(null);
  const inputEmail = useRef(null);

  //! 활성 사용자 수
  useEffect(() => setCount(user.filter((i) => i.active).length), [user, count]);

  const handleRegister = () => {
    const newItem = {
      id: user.length + 1,
      username: inputAccount.current.value,
      email: inputEmail.current.value,
      active: false,
    };
    setUser((current) => [...current, newItem]);
    inputAccount.current.value = null;
    inputEmail.current.value = null;
  };

  //! 클릭시 렌더링 변경
  const handleClick = (e) => {
    e.target.active = !e.target.active;
  };

  //! handleDelete 작성
  const handleDelete = (e) => {
    // User 에서 제외
    // 재렌더링
  };

  return (
    <>
      <h1>2. User</h1>
      <p>useReducer, useRef, useState 훅 활용하기</p>
      <input ref={inputAccount} placeholder="계정명" />
      <input ref={inputEmail} placeholder="이메일" />
      <button onClick={handleRegister}>등록</button>
      {user.map((e) => {
        return (
          <div key={e.id}>
            <button
              onClick={(e) => handleClick(e)}
              style={{
                // reset CSS
                border: "none",
                background: "none",
                // set CSS
                marginRight: "0.25rem",
                fontWeight: "bold",
                color: `${e.active ? "green" : "black"}`,
                cursor: "pointer",
              }}
            >
              {e.username}
            </button>
            <span>({e.email})</span>
            <button onClick={handleDelete}>삭제</button>
          </div>
        );
      })}
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default User;
