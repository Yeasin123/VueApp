<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon
              v-text="item.icon"
              :class="item.color"
              class="text_color"
            ></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <BaseDialogDelete
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />
    <BaseEditDialog
      v-if="dialogs.edit"
      :task="task"
      @close="dialogs.edit = false"
    />
    <BaseDatePickerDialog
      v-if="dialogs.dueDate"
      :task="task"
      @close="dialogs.dueDate = false"
    />
  </div>
</template>

<script>
export default {
  props: ["task"],
  data: () => ({
    dialogs: {
      delete: false,
      edit: false,
      dueDate: false,
    },
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        color: "success",
        click() {
          console.log("Edit");
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due Date",
        icon: "mdi-calendar-range",
        color: "primary",
        click() {
          this.dialogs.dueDate = true;
          console.log("due");
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        color: "red",
        click() {
          this.dialogs.delete = true;
          console.log("delete");
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
};
</script>

<style scoped>
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 15px;
}

.text_color {
  color: #fff;
}
</style>
