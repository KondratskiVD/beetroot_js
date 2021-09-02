<template>
  <div class="app" id="app">
    <h3 class="app__title">Kanban Board</h3>
    <div class="app__columns">
      <div
        class="app__columns-item"
        v-for="column in columns"
        :key="column.title"
      >
        <div
          class="app__columns-item-header"
          :style="{ background: column.background }"
        >
          <p class="app__columns-item-title">{{ column.title }}</p>
        </div>
        <draggable :list="column.tasks" group="column.tasks">
          <Task
            v-for="task in column.tasks"
            :key="task.id"
            :column="column"
            :task="task"
            :tag="tag"
            :link="link"
            :owner="owner"
          />
        </draggable>
        <button class="app__columns-item-button" @click="createTask(column)">
          +
        </button>
      </div>
    </div>
    <CreateTask
      :showDialog="showDialog"
      :column="currentColumn"
      :tag="tag"
      :task="task"
      :newTask="newTask"
      :link="link"
      @addTag="addTag"
      @setDate="newTask.date = $event.target.value"
      @titleChange="newTask.title = $event.target.value"
      @descriptionChange="newTask.description = $event.target.value"
      @documentLink="newTask.links[0].href = $event.target.value"
      @designLink="newTask.links[1].href = $event.target.value"
      @projectLink="newTask.links[2].href = $event.target.value"
      @owner="newTask.owners[0].name = $event.target.value"
      @addTask="addTask"
      @close="close"
    />
  </div>
</template>

<script>
import Task from "./components/Task.vue";
import draggable from "vuedraggable";
import CreateTask from "./components/CreateTask.vue";
let idCounter = 1;
const idGenerate = () => idCounter++;

export default {
  data() {
    return {
      showDialog: false,
      currentColumn: {},
      task: {},
      tag: "",
      date: "",
      link: "",
      owner: "",
      newTask: {
        tags: [],
        links: [
          {
            name: "doc",
            title: "Document Link →",
            src: "doc-logo.png",
            href: "",
          },
          {
            name: "design",
            title: "Link to design →",
            src: "figma-logo.png",
            href: "",
          },
          {
            name: "project",
            title: "Project Link →",
            src: "project-logo.png",
            href: "",
          },
        ],
        id: idGenerate(),
        title: "Task title",
        date: "date",
        description: "Description",
        owners: [
          {
            id: idGenerate(),
            name: "Owner",
            src: "owner-logo.png",
          },
        ],
      },
      columns: [
        {
          id: idGenerate(),
          title: "Pending Task",
          background: "#1C5A7C",
          tasks: [],
        },
        {
          id: idGenerate(),
          title: "Ongoing Task",
          background: "#106354",
          tasks: [
            {
              tags: [
                {
                  name: "ios",
                  title: "iOS",
                },
                {
                  name: "android",
                  title: "Android",
                },
                {
                  name: "web",
                  title: "Web",
                },
                {
                  name: "desktop",
                  title: "Desktop",
                },
              ],
              links: [
                {
                  name: "doc",
                  title: "Document Link →",
                  src: "doc-logo.png",
                },
                {
                  name: "design",
                  title: "Link to design →",
                  src: "figma-logo.png",
                },
                {
                  name: "project",
                  title: "Project Link →",
                  src: "project-logo.png",
                },
              ],
              id: idGenerate(),
              tagWeb: "Web",
              title: "Possibility to hide specific issue types when moving",
              date: "Apr 18",
              description: "This can be edited",
              docLink: "Document Link →",
              designLink: "Link to design →",
              projectLink: "Project Link →",
              owners: [
                {
                  id: idGenerate(),
                  name: "Guna",
                  src: "owner-logo.png",
                },
              ],
            },
          ],
        },
        {
          id: idGenerate(),
          title: "Completed",
          background: "#54117D",
          tasks: [],
        },
        {
          id: idGenerate(),
          title: "In Development",
          background: "#71441B",
          tasks: [
            {
              tags: [
                {
                  name: "ios",
                  title: "iOS",
                },
                {
                  name: "android",
                  title: "Android",
                },
                {
                  name: "web",
                  title: "Web",
                },
                {
                  name: "desktop",
                  title: "Desktop",
                },
              ],
              links: [
                {
                  name: "doc",
                  title: "Document Link →",
                  src: "doc-logo.png",
                },
                {
                  name: "design",
                  title: "Link to design →",
                  src: "figma-logo.png",
                },
                {
                  name: "project",
                  title: "Project Link →",
                  src: "project-logo.png",
                },
              ],
              id: idGenerate(),
              tagWeb: "Web",
              title: "Possibility to hide specific issue types when moving",
              date: "Apr 18",
              description: "This can be edited",
              docLink: "Document Link →",
              designLink: "Link to design →",
              projectLink: "Project Link →",
              owners: [
                {
                  id: idGenerate(),
                  name: "Guna",
                  src: "owner-logo.png",
                },
              ],
            },
          ],
        },
        {
          id: idGenerate(),
          title: "Live in Build",
          background: "#6E6D6D",
          tasks: [],
        },
      ],
    };
  },

  components: {
    Task,
    draggable,
    CreateTask,
  },

  methods: {
    createTask(column) {
      this.currentColumn = column;
      this.showDialog = true;
    },
    addTask(column) {
      this.currentColumn = column;
      column.tasks.push(this.newTask);
      this.newTask.id = idGenerate();
      this.showDialog = false;
    },
    close() {
      this.showDialog = false;
    },
    addTag(tags) {
      for (let i = 0; i < tags.length; i++) {
        let tag = {};
        let current = tags[i];
        tag["title"] = current;
        tag["name"] = current.toLowerCase();
        this.newTask.tags.push(tag);
      }
    },
  },
};
</script>

<style lang="sass">
.app
  padding: 40px 50px 50px 50px
  background: #FFFFFF
  border-radius: 20px
  &__title
    font-family: "SF-Pro-Display-Bold", sans-serif
    font-size: 28px
    line-height: 33px
    color: #2b3744
    margin-bottom: 35px

  &__columns
    display: flex
    align-items: flex-start

    &-item
      max-width: 345px
      width: 100%
      background: #F8F8F9
      margin: 1rem
      border-radius: 6px

      &-header
        padding: 9px
        border-radius: 6px 6px 0px 0px
        margin-bottom: 16px

      &-title
        font-family: 'SF-Pro-Text-Bold', sans-serif
        font-size: 14px
        line-height: 17px
        text-align: center
        color: #FFFFFF
        margin-bottom: 0
      &-button
        display: block
        font-family: 'SF-Pro-Text-Bold', sans-serif
        font-size: 16px
        line-height: 19px
        margin-bottom: 16px
        max-width: 325px
        text-align: left
        background: #FFFFFF
        width: 100%
        margin-left: auto
        margin-right: auto
        border: 1px solid #F0F0F0
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05)
        border-radius: 6px
        padding: 16px
        cursor: pointer
</style>
