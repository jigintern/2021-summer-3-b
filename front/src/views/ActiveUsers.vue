<template>
  <div class="home">
    <section class="hero is-medium is-info md-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">みんスポ！</p>
        <p class="subtitle">
          みんなでスポーツしましょう！
        </p>
      </div>
    </section>
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">アクティブなユーザー</h2>
      </div>
      <UserBox
        v-for="user in activeUsers"
        v-bind:key="user.ID"
        v-bind:user="user"
        @add-friend="addFriend_Box(user.ID)"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import { toast } from "bulma-toast";

import UserBox from "@/components/UserBox";
export default {
  name: "Home",
  data() {
    return {
      activeUsers: [],
      user: {
        ID: null,
        name: "",
        session: null,
        is_active: false,
        fitness: "",
        friend_ID: [],
      },
      friend_ID: "",
    };
  },
  components: {
    UserBox,
  },
  mounted() {
    this.user = this.$store.state.user;
    this.GetActiveUsers();
    document.title = "ActiveUsers | MinSpo!!";
    console.log(this.user);
  },
  methods: {
    async GetActiveUsers() {
      this.$store.commit("setIsLoading", true);

      await axios
        .get("api/get_active")
        .then((response) => {
          console.log(response.data);
          if (response.data.type == "success") {
            this.activeUsers = response.data.message;
            console.log("activeuser:", this.activeUsers);
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
        })
        .catch((error) => {
          console.log(error);
          toast({
            message: "Something went wrong. Please try again.",
            type: "is-danger",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "bottom-right",
          });
        });
      this.$store.commit("setIsLoading", false);
    },
    addFriend_Box(friend_ID) {
      this.add_friend_ID = friend_ID;
      this.addFriend();
      console.log("addfriend");
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
  },
};
</script>
