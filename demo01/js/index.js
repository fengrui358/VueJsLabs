var styleObj = {
  "text-decoration": "line-through",
  color: "red",
};

Vue.component("course-item", {
  props: ["course", "style-obj"],
  template: `
  <li :inner="course">
    <slot v-if="!course.del" name="header" :course="course">gggg</slot>
    <span v-if="!course.del">{{course.title}}+{{$root.message}}</span>
    <span v-else :style="styleObj">{{course.title}}</span>
    <button v-show="!course.del" v-on:click="$emit('del-event', course.title)">删除</button>
    <slot name="default">I'm slot.</slot>
  </li>
  `
});

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
    deleteHandler: function (title) {
      let index = -1;

      for (let i = 0; i < this.list.length; i++) {
        const element = this.list[i];
        if (element.title === title) {
          index = i;
          break;
        }
      }

      if (index >= 0) {
        //this.list.splice(index, 1);
        this.list[index].del = true;
      }
    },
  },
});

vm.styleObj.color = "blue";
