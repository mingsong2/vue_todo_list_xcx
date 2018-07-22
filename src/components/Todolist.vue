<template>
    <div>
        <div>
            <input @keyup.enter="add" type="text" v-model="mytodo">
            <button @click="add">添加</button>
            <button @click="clear">清空</button>
        </div>
        <ul>
            <!-- <li :style="{'text-decoration':todo.done?'line-through':''}" @click="toggle(index)" v-for="(todo,index) in todos">{{index+1}}:{{todo.text}}</li> -->
            <li :class="{'done':todo.done}" @click="toggle(index)" :key="index" v-for="(todo,index) in todos">{{index+1}}:{{todo.text}}</li>
        </ul>
        <p>{{remain}}/{{todos.length}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'hello',
      subtitle: 'vue react is good',
      showSub: true,
      todos: [
        // '吃饭','睡觉','写代码'
        { text: '吃饭', done: false },
        { text: '睡觉', done: false },
        { text: '写代码', done: false }
      ],
      mytodo: ''
    }
  },
  computed: {
    remain () {
      return this.todos.filter(v => v.done).length
    }
  },
  methods: {
    add () {
      this.todos.push({ text: this.mytodo, done: false })
      this.mytodo = ''
      // this.title = 'handle add'
    },
    clear () {
      this.todos = this.todos.filter(v => !v.done)
    },
    toggle (i) {
      this.todos[i].done = !this.todos[i].done
    }
  }
}
</script>
<style>
li.done {
  text-decoration: line-through;
  color:red
}
</style>
