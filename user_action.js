import { jsonfs } from "https://js.sabae.cc/jsonfs.js";
import { JSONDB } from "https://js.sabae.cc/JSONDB.js";

import { now_fitness } from "./hist_action.js";
import { hash } from "https://js.sabae.cc/hash.js";

const userfn = "data/users.json";
// let user = jsonfs.read(userfn) || [];

export function get_data(d, key) {
  console.log("call function get_data");
  user = jsonfs.read(userfn) || [];
  if (key != "all") return user[d][key];
  return user[d];
}

export function getUser(req) {
  if (!req) return;
  const users = new JSONDB(userfn);
  const user = users.data.find((u) => u.sesion == req.sesion);
  return user;
}

export function change_active(index, bool) {
  console.log("call function change_active");
  user = jsonfs.read(userfn) || [];
  user[index].is_active = bool;
  jsonfs.write(userfn, user);
  return "ok";
}

export function set_active(user, isActive) {
  let users = new JSONDB(userfn);
  let t = users.data.find((u) => u.ID == user.ID);
  if (!t) return "ng";
  t.is_active = isActive;
  users.write();
  return "ok";
}

export function add_friend(index, friend_ID) {
  console.log("call function add_friend");
  user = jsonfs.read(userfn) || [];
  const ID = user[index].ID;

  if (!check_user(friend_ID)) return "user not found";
  if (!check_me(ID, friend_ID)) return "can not add yourself";
  if (!check_friend(index, friend_ID)) return "already added";

  user[index].friend_ID.push(Number(friend_ID));
  jsonfs.write(userfn, user);
  return "ok";
}

function check_user(reqID) {
  console.log("call function check_user");
  let users_ID = [];
  user = jsonfs.read(userfn) || [];
  for (const d of user) {
    users_ID.push(d.ID);
  }
  if (!users_ID.includes(reqID)) return false;
  return true;
}

function check_me(ID, reqID) {
  console.log("call function check_me");
  if (ID == reqID) return false;
  return true;
}

function check_friend(index, reqID) {
  console.log("call function check_friend");
  user = jsonfs.read(userfn) || [];
  if (user[index].friend_ID.includes(reqID)) return false;
  return true;
}

export function get_name(name) {
  console.log("call function get_name");
  console.log(hash(name));
  user = jsonfs.read(userfn) || [];
  let data = [];
  for (const d in user) {
    console.log(hash(user[d].name));
    if (hash(user[d].name) == hash(name)) {
      const item = {
        ID: user[d].ID,
        name: user[d].name,
        is_active: user[d].is_active,
        now_fitness: now_fitness(d),
      };
      data.push(item);
    }
  }
  console.log(data.length);
  if (data.length == 0) return null;
  //console.log(data);
  return data;
}
