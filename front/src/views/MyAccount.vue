<template>
  <div class="page-my-account">
    <div class="columns">
      <div class="column">
        <div class="columns is-desktop">
          <div class="tabs is-left">
            <div class="column">
              <h1 class="title is-4">
                {{ user.name }}（ID：{{ user.ID }}）のページ
              </h1>
            </div>
          </div>
          <div class="column">
            <button class="button is-link is-rounded">
              now：{{ user.fitness }}
            </button>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="運動を設定"
              name="query"
              v-model="set_fitness"
            />
          </div>

          <button class="button is-warning" v-on:click="changeFitness">
            <span class="icon">
              <i class="icon v-md-custom-icon-fire"></i>
            </span>
          </button>
          <div class="control">
            <button class="button is-success" v-on:click="finishFitness">
              <span class="icon">
                <i class="icon v-md-custom-icon-leaf"></i>
              </span>
            </button>
          </div>
        </div>
        <div class="tabs is-right">
          <ul>
            <!-- <li><a>Music</a></li>
        <li><a>Videos</a></li> -->
            <li class="" v-bind:class="{ 'is-active': showMyFriend }">
              <a @click="getMyfriends" class="has-text-info"> フレンド </a>
            </li>
            <li class="" v-bind:class="{ 'is-active': showMyHistory }">
              <a @click="getMyHistory" class="has-text-info">
                履歴
              </a>
            </li>
            <li>
              <a
                class="show-modal has-text-danger"
                data-target="my-modal"
                @click="showModalEdit"
                >ログアウト</a
              >
            </li>
          </ul>
        </div>
        <div class="columns is-multiline" v-if="showMyFriend">
          <div class="column is-12">
            <div class="field has-addons">
              <div class="control">
                <input
                  type="text"
                  class="input"
                  placeholder="ユーザーID 追加"
                  name="query"
                  v-model="add_friend_ID"
                />
              </div>
              <div class="control">
                <button class="button is-warning" v-on:click="addFriend">
                  <span class="icon">
                    <i class="icon v-md-custom-icon-quill"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <UserBox
            v-for="user in Myfriends"
            v-bind:key="user.ID"
            v-bind:user="user"
            @add-friend="addFriend_Box(user.ID)"
          />
        </div>
        <div class="columns is-multiline" v-if="showMyHistory">
          <ul>
            <li
              class="column is-2 is-narrow"
              v-for="hist in Myhistory"
              :key="hist.fitness"
            >
              <button
                class="button is-success is-rounded"
                v-on:click="fitness_btn(hist.fitness)"
              >
                {{ hist.fitness }}
              </button>
            </li>
          </ul>
        </div>

        <div class="modal" v-bind:class="{ 'is-active': showModal }">
          <div @click="showModalEdit" class="modal-background"></div>
          <div class="modal-content">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  本当にログアウトしますか？
                  <p class="has-text-grey">
                    ログインページから再度ログインできます。
                  </p>
                  <p class="has-text-grey">
                    あなたのIDは
                    <span style="color:red">{{ user.ID }}</span>
                    です。IDは次回のログインで必要です。
                  </p>
                  <br />
                  <p>{{ currentDateTime() }}</p>
                </div>
                <div class="button is-danger" @click="logout">ログアウト</div>
              </div>
            </div>
          </div>
          <button
            @click="showModalEdit"
            class="modal-close is-large"
            aria-label="close"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { toast } from "bulma-toast";

import UserBox from "@/components/UserBox.vue";

export default {
  name: "MyAccount",
  components: {
    UserBox,
  },
  data() {
    return {
      user: {
        ID: null,
        name: "",
        session: null,
        is_active: false,
        fitness: "",
        friend_ID: [],
      },
      Myfriends: [],
      Myhistory: [],

      showModal: false,

      showMyFriend: true,
      showMyHistory: false,

      add_friend_ID: null,
      set_fitness: "",
    };
  },
  mounted() {
    this.polling()
  },
  methods: {
    fitness_btn(fitness) {
      this.set_fitness = fitness;
      this.changeFitness();
    },
    async polling () {
      setInterval(() => {
        document.title = "My account | MinSpo!!";
        this.user = this.$store.state.user;
        console.log("user:", this.user);
        this.getMyfriends();
        console.log("myfriend:", this.Myfriends);
      }, 10000)
    },
    async logout() {
      const formData = {
        ID: this.user.ID,
        session: this.user.session,
      };
      await axios.post("/api/logupt", formData).then((response) => {
        console.log("response:", response);
        this.$store.commit("removeSession");
        this.$store.commit("removeUser");
        this.$router.push("/");
        location.reload();
      });
    },
    addFriend_Box(friend_ID) {
      this.add_friend_ID = friend_ID;
      this.addFriend();
    },
    showModalEdit() {
      this.showModal = !this.showModal;
    },
    async getMyfriends() {
      this.$store.commit("setIsLoading", true);
      const formData = {
        ID: this.user.ID,
        session: this.user.session,
      };
      console.log("formData:", formData);

      await axios
        .post("/api/friend_data", formData)
        .then((response) => {
          console.log(response);
          if (response.data.type == "success") {
            this.Myfriends = response.data.message;
            this.showMyHistory = false;
            this.showMyFriend = true;
          } else {
            toast({
              message: "Something went wrong. Please try again.",
              type: "is-danger",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "bottom-right",
            });
          }
          console.log("activeuser:", this.Myfriends);
        })
        .catch((error) => {
          console.log(error);
          // toast({
          //   message: "Something went wrong. Please try again.",
          //   type: "is-danger",
          //   dismissible: true,
          //   pauseOnHover: true,
          //   duration: 2000,
          //   position: "bottom-right",
          // });
        });
      this.$store.commit("setIsLoading", false);
    },
    async getMyHistory() {
      this.$store.commit("setIsLoading", true);
      const formData = {
        ID: this.user.ID,
        session: this.user.session,
      };
      console.log("formData:", formData);

      await axios
        .post("/api/get_history", formData)
        .then((response) => {
          console.log(response);
          if (response.data.type == "success") {
            this.Myhistory = response.data.message.filter(
              (a) => a.tag == "start"
            );
            this.showMyFriend = false;
            this.showMyHistory = true;
          } else {
            toast({
              message: "Something went wrong. Please try again.",
              type: "is-danger",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "bottom-right",
            });
          }
          console.log("activeuser:", this.Myfriends);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    },
    async addFriend() {
      this.$store.commit("setIsLoading", true);
      const formData = {
        ID: this.user.ID,
        session: this.user.session,
        friend_ID: this.add_friend_ID,
      };
      console.log("formData :", formData);
      // console.log(this.encryptPassword(formData.pass));

      await axios
        .post("/api/add_friend", formData)
        .then((response) => {
          console.log(response.data);

          this.add_friend_ID = null;
          if (response.data.type == "success") {
            this.getMyfriends();
            toast({
              message: "フレンド追加",
              type: "is-success",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "bottom-right",
            });
          } else {
            if (response.data.message == "user not found") {
              toast({
                message: "ユーザーが存在しません",
                type: "is-danger",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "bottom-right",
              });
            } else if (response.data.message == "can not add yourself") {
              toast({
                message: "あなたのIDです",
                type: "is-danger",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "bottom-right",
              });
            } else if (response.data.message == "already added") {
              toast({
                message: "既に登録しています",
                type: "is-danger",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "bottom-right",
              });
            } else {
              console.log("some warning");
            }
          }
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors.push("Something went wrong. Please try again");

            console.log(JSON.stringify(error));
          }
        });
      this.$store.commit("setIsLoading", false);
    },
    async changeFitness() {
      if (this.set_fitness) {
        const formData = {
          ID: this.user.ID,
          session: this.user.session,
          fitness: this.set_fitness,
        };
        await axios.post("/api/fitness", formData).then((response) => {
          console.log("response:", response);
          if (response.data.type == "success") {
            this.user.fitness = this.set_fitness;
            this.$store.commit("setUser", this.user);
            toast({
              message: "運動を設定しました",
              type: "is-success",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "bottom-right",
            });
          }
        });
      } else {
        toast({
          message: "運動を記入してください",
          type: "is-danger",
          dismissible: true,
          pauseOnHover: true,
          duration: 2000,
          position: "bottom-right",
        });
      }
      this.set_fitness = "";
    },
    async finishFitness() {
      if (this.user.fitness) {
        console.log(this.user);
        const formData = {
          ID: this.user.ID,
          session: this.user.session,
          fitness: null,
        };
        if (this.user.fitness) {
          await axios.post("/api/fitness", formData).then((response) => {
            toast({
              message: "休憩します",
              type: "is-success",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "bottom-right",
            });
          });
        }
        this.user.fitness = "";
      } else {
        toast({
          message: "すでに休憩中です",
          type: "is-warning",
          dismissible: true,
          pauseOnHover: true,
          duration: 2000,
          position: "bottom-right",
        });
      }
    },
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      const dateTime = date + " " + time;

      return dateTime;
    },
  },
};
</script>
