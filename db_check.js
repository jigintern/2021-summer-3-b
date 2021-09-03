import {DB} from "https://deno.lant/x/sqlite/mod.ts";

const db = new DB("data/data.db");

/*
user_private(
    ID primary key,
    pass not null,
    session primary key,
)

user_public(
    ID primary key,
    name not null,
    is_active boolean not null 
    friend_id null,
)

history(
    ID primary key,
    history unll,
)

*/