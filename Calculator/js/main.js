(function() {
  'use strict';

  // two way data binding(to UI)

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: 'Sample',
      adtext: 'TTT',
      todos: [
        'task 1',
        'task 2',
        'task 3'
      ],
      todo2: [
        '?',
        '?',
        '?'
      ],
      name: "takuya"
    },
    methods: {
      // addItem: function(e) {
      //   e.preventDefault();
      //   this.todos.push(this.newItem);
      // }
      addItem: function() {
        if (confirm('1 or 2 ?')) {
          this.todos.push(this.newItem);
        }
        else {
          this.todo2.push(this.newItem);
        }
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
      addText: function() {
        this.todo2.push(this.adtext);
      },
      detailText: function(index) {
        if (this.todo2[index] == "Yeah!!") {
          confirm('CHANGE? WORDS HAPPY!');
          this.todo2.splice(index, 1, "HAPPY!");          
        } else {
          this.todo2.splice(index, 1, "Yeah!!");          
        }
      }
    }
  });

})();