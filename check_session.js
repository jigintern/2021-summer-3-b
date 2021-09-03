import { jsonfs } from "https://js.sabae.cc/jsonfs.js";
import { JSONDB } from "https://js.sabae.cc/JSONDB.js";

const userfn = "data/users.json";
let user = jsonfs.read(userfn) || [];

export function check_session(item) {
  //セッションをチェックして、そのセッションを持つユーザの番地を返す
  /*
        item={
            ID:
            session:
        }
    */
  console.log("call function check_session");
  user = jsonfs.read(userfn) || [];
  //console.log("id :",item.ID);
  for (const d in user) {
    //console.log(user[d].ID);
    if (user[d].ID == item.ID) {
      //console.log(d);
      if (user[d].session != item.session) return "session error";
      return d;
    }
  }
  return "not found";
}

export function checkSession(res) {
  const ERR = "session error";
  if (!res) return ERR;
  const users = new JSONDB(userfn);
  const user = users.data.find((u) => u.session == res.session && u.ID == res.ID);
  if (!user) return ERR;
  return user;
}

export function login_check(item) {
  //ユーザIDでusers.jsonを検索し、パスワードが同じで有れば、番地を返す
  /*
        item={
            ID:
            pass:
        }
    */
  console.log("call function login_check");
  const users = new JSONDB(userfn);
  user = users.data.find((u) => u.ID == item.ID && u.pass == item.pass);
  if (!user) return "not found";
  return user;
  // user = jsonfs.read(userfn) || [];
  // //console.log("id :",item.ID);
  // for (const d in user) {
  //   console.log(user[d].ID);
  //   if (user[d].ID == item.ID) {
  //     console.log(d);
  //     if (user[d].pass != item.pass) return null;
  //     return d;
  //   }
  // }
  // return "not found";
}
