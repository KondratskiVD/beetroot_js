<template>
  <div>
    <md-dialog class="modal" :md-active.sync="showDialog">
      <md-dialog-title>Create a new task</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="Fill in the form">
          <md-chips
            @input="$emit('addTag', tags)"
            class="md-primary"
            v-model="tags"
            md-placeholder="Add tag..."
          >
            <div class="md-helper-text">Default</div>
          </md-chips>
          <div>
            <md-datepicker
              :type="date"
              :value="value"
              @input="$emit('setDate', $event)"
              v-model="selectedDate"
              md-immediately
            />
          </div>
          <md-field>
            <label>Title</label>
            <md-input @change="$emit('titleChange', $event)" maxlength="30">
            </md-input>
          </md-field>

          <md-field>
            <label>Description</label>
            <md-textarea
              @change="$emit('descriptionChange', $event)"
              maxlength="200"
            ></md-textarea>
            <md-icon>description</md-icon>
          </md-field>
          <md-field md-inline>
            <label>Document Link</label>
            <md-input @change="$emit('documentLink', $event)"></md-input>
          </md-field>
          <md-field md-inline>
            <label>Link to design</label>
            <md-input @change="$emit('designLink', $event)"></md-input>
          </md-field>
          <md-field md-inline>
            <label>Project Link</label>
            <md-input @change="$emit('projectLink', $event)"></md-input>
          </md-field>
          <md-field md-inline>
            <label>Owner</label>
            <md-input @change="$emit('owner', $event)"></md-input>
          </md-field>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('close')">Cancel</md-button>
        <md-button class="md-primary" @click="$emit('addTask', column)"
          >Add task</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  props: [
    "showDialog",
    "column",
    "task",
    "tag",
    "date",
    "newTask",
    "link",
    "owner",
  ],

  data() {
    return {
      tags: ["iOS", "Android", "Web", "Desktop"],
      selectedDate: new Date(),
    };
  },
  methods: {
    saveTask() {
      this.showDialog = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.md-dialog /deep/.md-dialog-container
  width: 768px
  max-height: 100%

.modal
  max-height: 100%
</style>