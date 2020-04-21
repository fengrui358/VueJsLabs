var styleObj = {
  "text-decoration": "line-through",
  color: "red",
};

Vue.component('course-item', {
  props: ['course','style-obj'],
  template: `
  <li>
    <span v-if="!course.del">{{course.title}}</span>
    <span v-else :style="styleObj">{{course.title}}</span>
    <button v-show="!course.del" v-on:click="$emit('del-event')">删除</button>
  </li>
  `,
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
    deleteHandler: function (event) {
      let index = -1;
      
      for (let i = 0; i < this.list.length; i++) {
        const element = this.list[i];
        if(element.title === "title")
        {
          index = i;
          break;
        }
      }

      if (index >= 0) {
        list.splice(index, 1);
      }

      // list.array.forEach(element, (index) => {
      //   if (element.title === "title") {
      //     //index = index;
      //     break;
      //   }
      // });
    }
  },
});

vm.styleObj.color = "blue";
