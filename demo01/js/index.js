var styleObj = {
  "text-decoration": "line-through",
  color: "red",
};

var vm = new Vue({
  el: "#app",
  data: {
    message: "hello",
    value: "ghost",
    item: {
      title: "课程1",
      del: false,
    },
    list: [
      {
        title: "课程1",
        del: false,
      },
      {
        title: "课程2",
        del: true,
      },
      {
        title: "课程3",
        del: false,
      },
    ],
    styleObj: styleObj,
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    deleteHandler: function (title, event) {

    }
  },
});

vm.styleObj.color = "blue";
