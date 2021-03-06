# 2021-summer-3-b
## 不具合
### データ読み書きの際の不具合
>#### 詳細
>二重更新が原因の不具合<br>
>#### 影響範囲
>プログラム全体
>#### 原因
>排他処理が行えていない<br>
>#### 解決策
>・jsonファイルを疑似的なデータベースとしたものを使うのではなくSQLiteやMySQLなどの純粋なデータベースを利用する。<br>
>・jsonファイルの読み書きの際、排他処理を追加する<br>
>・ファイルの読み書きを同期処理にする<br>
>#### 報告日時
>2021/09/03 11:02
>#### 状態
>未解決


## Vue
### インストール
```
npm install vue@next
```

### ローカルで実行  
```
cd front
npm run build-local
```

### プッシュする前にこれをしてください  
```
cd front
npm run build
```

### スタート
```
deno run -A ./server.js
```

## API
すべてのAPIレスポンスはcriateResponce.jsによって、オブジェクトに変換され、返されるものとする.


### /api/login
<p>
call:("api/login",{ID,pass})<br>
return:{ID,name,pass,session,is_active,friend_ID,now_fitness}<br>
<br>
ログイン用API<br>
引数:object<br>
<br>
error一覧<br>
>null　パスワードエラー<br>
>not found　リクエストされたユーザが存在しない<br>
</p>

### /api/register
<p>
call:("api/register",{name,pass})<br>
return:{ID,session}<br>
<br>
ユーザ登録用API<br>
引数:object<br>
<br>
error一覧<br>
>なし<br>
</p>

### /api/get_active_ID
<p>
call:("api/get_active_ID")<br>
return:[num, ...]<br>
<br>
アクティブユーザのID検索用API<br>
引数:なし<br>
<br>
error一覧<br>
>なし<br>
</p>

### /api/get_active
<p>
call:("api/get_active")<br>
return:[{ID,name,is_active,now_fitness}, ...]<br>
<br>
アクティブユーザのデータ検索用API<br>
引数:なし<br>
<br>
error一覧<br>
>なし<br>
</p>
  
### /api/logout
<p>
call:("api/logout",{ID,session})<br>
return:"ok"<br>
<br>
ログアウト用API<br>
引数:object<br>
<br>
error一覧<br>
>session error　セッションが間違っている<br>
>not found　リクエストされたユーザが存在しない<br>
</p>

### /api/active_friend_ID
<p>
call:("api/active_friend_ID",{ID,session})<br>
return:[num, ...]<br>
<br>
アクティブフレンドのID検索用API<br>
引数:object<br>
<br>
error一覧<br>
>session error　セッションが間違っている<br>
>not found　リクエストされたユーザが存在しない<br>
</p>

### /api/active_friend
<p>
call:("api/active_friend",{ID,session})<br>
return:[{ID,name,is_active,now_fitness}, ...]
<br>
アクティブフレンドのデータ検索用API<br>
引数:object<br>
<br>
error一覧<br>
>session error　セッションが間違っている<br>
>not found　リクエストされたユーザが存在しない<br>
</p>

### /api/friend_data
<p>
call:("api/friend_data",{ID,session})<br>
return:"ok"
<br>
フレンドユーザのデータ検索用API<br>
引数:object<br>
<br>
error一覧<br>
>session error　セッションが間違っている<br>
>not found　リクエストされたユーザが存在しない<br>
</p>

### /api/add_friend
<p>
call:("api/add_friend",{ID,session,friend_ID})<br>
return:"ok"
<br>
フレンドユーザの追加用API<br>
引数:object<br>
<br>
error一覧<br>
>session error　セッションが間違っている<br>
>not found　リクエストされたユーザが存在しない<br>
>user not found　検索したユーザが存在しない<br>
>can not add yourself　自分自身をフレンドに追加しようとしている<br>
>already added　すでに追加済み<br>
</p>

### /api/get_data
<p>
call:("api/get_data",{ID,session})<br>
return:{ID,name,pass,session,is_active,friend_ID,now_fitness}<br>
<br>
データ再取得用API<br>
引数:object<br>
<br>
error一覧<br>
>session error　セッションが間違っている<br>
>not found　リクエストされたユーザが存在しない<br>
</p>

### /api/get_user
<p>
call:("api/get_user",{search})<br>
return:[{ID,name,is_active,now_fitness}, ...]<br>
<br>
ユーザ検索用API<br>
引数:object<br>
<br>
error一覧<br>
>request user is not found　検索でリクエストされたユーザが存在しない<br>
</p>

### /api/get_history
<p>
call:("api/get_history",{ID,sesson})<br>
return:[{date,fitness,tag}, ...]<br>
<br>
履歴取得用API<br>
引数:object<br>
<br>
error一覧<br>
>session error　セッションが間違っている<br>
>not found　リクエストされたユーザが存在しない<br>
</p>

### /api/fitness
<p>
call:("api/get_user",{ID,session,fitness})<br>
return:ok<br>
<br>
運動変更用API<br>
引数:object<br>
<br>
error一覧<br>
>session error　セッションが間違っている<br>
>not found　リクエストされたユーザが存在しない<br>
</p>

## function
API用function

### active_friend.js
#### get_active()
export

#### get_ID_user(list)
export

#### active_friend(index)
export


### check_session.js
#### check_session(item)
export

#### login_check(item)
export


### createResponce.js
#### createResponce(type,massage)

#### successResponce(massage)
export

#### errorResponce(massage)
export


### hist_action
#### criate_history(ID)
export

#### get_latest(index)
export

#### now_fitness(index)
export

#### change_now(index,fitness)


#### get_latest_tag(index)
export

#### add_hist(item)


#### fitness_start(index,fitness)
export

#### fitness_finish(index,fitness)
export

#### user_data_operation(index,item)
export

#### get_history(index,reqnum)
export


### register.js
#### regist(item)
export

## users.json
<p>
{<br>
>ID:int型<br>
>name:String型<br>
>pass:String型<br>
>session:float型<br>
>is_active:bool型<br>
>friend_ID:int型配列<br>
}<br>
</p>

### ID
ユーザのID、整数型<br>
### name
ユーザの名前、文字列型<br>
### pass
パスワード、パスワードのハッシュで保存、文字列型<br>
### session
セッションID、小数型<br>
### is_active
ユーザの状態、bool型<br>
### friend_ID
フレンド登録しているユーザのID、整数型配列<br>

## users_hist.json
<p>
{<br>
>ID:int型<br>
>hist:[<br>
->{<br>
-->date:String型<br>
-->fitness:String型<br>
-->time:String型<br>
->}<br>
>]<br>
}<br>
</p>

### ID
ユーザのID、整数型<br>
### hist
ユーザの履歴、object配列<br>
### date
日時、文字列型
### fitness
行った運動、文字列型
### tag
運動の開始、終了のタグ、文字列型
