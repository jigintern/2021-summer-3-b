import { jsonfs } from "https://js.sabae.cc/jsonfs.js";
import { change_active } from "./user_action.js";

const userfn = "data/users.json";

export function check_session(item) {
  //セッションをチェックして、そのセッションを持つユーザの番地を返す
  /*
        item={
            ID:
            session:
        }
    */
  console.log("call function check_session");
  let user = jsonfs.read(userfn) || [];
  //console.log("id :",item.ID);
  for (const d in user) {
    //console.log(user[d].ID);
    if (user[d].ID == item.ID) {
      //console.log(d);
      if (user[d].session != item.session) return "session error";
      if(change_active(d,true)=="ok") return d;
    }
  }
  return "not found";
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
  let user = jsonfs.read(userfn) || [];
  //console.log("id :",item.ID);
  for (const d in user) {
    console.log(user[d].ID);
    if (user[d].ID == item.ID) {
      console.log(d);
      if (user[d].pass != item.pass) return null;
      return d;
    }
  }
  return "not found";
}
