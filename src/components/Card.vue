<template>
  <div
    class="card draggable"
    @mousedown="clickDown"
    @mousemove="moveElem"
    @mouseup="onMouseUp"
  >
    <div class="card__description unselectable">
      {{ card.title }}
    </div>
    <div class="card__actions"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    card: { Type: Object, default: () => {} },
  },
  data: () => ({
    dragObject: {},
  }),
  methods: {
    ...mapActions({
      setTempCard: "task/setTempCard",
      removeTempCard: "task/removeTempCard",
    }),
    clickDown(e) {
      if (e.which != 1) {
        return;
      }
      var elem = e.target.closest(".draggable");
      if (!elem) return;

      this.dragObject.elem = elem;
      this.dragObject.downX = e.pageX;
      this.dragObject.downY = e.pageY;
    },
    moveElem(e) {
      if (!this.dragObject.elem) {
        return; // элемент не зажат
      }

      if (!this.dragObject.avatar) {
        // если перенос не начат...

        // посчитать дистанцию, на которую переместился курсор мыши
        var moveX = e.pageX - this.dragObject.downX;
        var moveY = e.pageY - this.dragObject.downY;
        if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
          return; // ничего не делать, мышь не передвинулась достаточно далеко
        }

        this.dragObject.avatar = this.createAvatar(e); // захватить элемент
        if (!this.dragObject.avatar) {
          this.dragObject = {}; // аватар создать не удалось, отмена переноса
          return; // возможно, нельзя захватить за эту часть элемента
        }

        // аватар создан успешно
        // создать вспомогательные свойства shiftX/shiftY
        var coords = this.getCoords(this.dragObject.avatar);
        this.dragObject.shiftX = this.dragObject.downX - coords.left;
        this.dragObject.shiftY = this.dragObject.downY - coords.top;

        this.startDrag(e); // отобразить начало переноса
      }

      // отобразить перенос объекта при каждом движении мыши
      this.dragObject.avatar.style.left =
        e.pageX - this.dragObject.shiftX + "px";
      this.dragObject.avatar.style.top =
        e.pageY - this.dragObject.shiftY + "px";

      return false;
    },
    onMouseUp(e) {
      if (this.dragObject.avatar) {
        window.console.log(e);
        // если перенос идет
        this.finishDrag(e);
      }

      // перенос либо не начинался, либо завершился
      // в любом случае очистим "состояние переноса" dragObject
      this.dragObject = {};
    },
    createAvatar() {
      // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
      var avatar = this.dragObject.elem;
      var old = {
        parent: avatar.parentNode,
        nextSibling: avatar.nextSibling,
        position: avatar.position || "",
        left: avatar.left || "",
        top: avatar.top || "",
        zIndex: avatar.zIndex || "",
      };

      // функция для отмены переноса
      avatar.rollback = function() {
        old.parent.insertBefore(avatar, old.nextSibling);
        avatar.style.position = old.position;
        avatar.style.left = old.left;
        avatar.style.top = old.top;
        avatar.style.zIndex = old.zIndex;
      };

      return avatar;
    },
    getCoords(elem) {
      // кроме IE8-
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
      };
    },
    startDrag() {
      var avatar = this.dragObject.avatar;

      document.body.appendChild(avatar);
      avatar.style.zIndex = 9;
      avatar.style.position = "absolute";
    },

    finishDrag(e) {
      var dropElem = this.findDroppable(e);
      window.console.log(dropElem);
      if (dropElem) {
        this.onDragCancel();
      } else {
        this.onDragEnd();
      }
    },

    onDragEnd() {
      window.console.log("11");
      this.dragObject.avatar.rollback();
    },
    onDragCancel() {
      window.console.log("22");
    },

    findDroppable(event) {
      // спрячем переносимый элемент
      this.dragObject.avatar.hidden = true;

      // получить самый вложенный элемент под курсором мыши
      var elem = document.elementFromPoint(event.clientX, event.clientY);

      // показать переносимый элемент обратно
      this.dragObject.avatar.hidden = false;

      if (elem == null) {
        // такое возможно, если курсор мыши "вылетел" за границу окна
        return null;
      }

      var a = elem.closest(".column");
      window.console.log(a);

      //return elem.closest(".droppable");
    },
  },
};
</script>
