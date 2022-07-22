const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
    },
    actions: {
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log("sycning session");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      login: async (user_id, password) => {
        {
          const opts = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user_id,
              password: password,
            }),
          };

          try {
            const resp = await fetch("http://127.0.0.1:5000/login", opts);
            if (resp.status !== 200) {
              alert("에러!!");
              return false;
            }
            const data = await resp.json();
            console.log("backend-data:", data);
            sessionStorage.setItem("token", data.access_token);
            setStore({ token: data.access_token });
            return true;
          } catch (error) {
            console.error("로그인 과정에서 에러 발생");
          }
        }
      },
    },
  };
};

export default getState;
