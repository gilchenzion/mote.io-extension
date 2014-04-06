exec(function(){

  mote.io.remote = {
    api_version: '0.1',
    app_name: '2048',
    action: 'playing',
    twitter: 'gilcz2',
    display_input: false,
    init: function() {
        //this.game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
    },
    update: function(force) {},
    blocks: [
        {
            type: 'buttons',
            data: [
                {
                    press: function() {
                        this.game.inputManager.emit("move", 0)
                    },
                    icon: 'chevron-up',
                    hash: 'up'
                }
            ]
        }
        ,{
            type: 'buttons',
            data: [
                {
                    press: function() {
                        this.game.inputManager.emit("move", 3)
                    },
                    icon: 'chevron-left',
                    hash: 'left'
                },
                {
                    press: function() {
                        //When press
                        this.game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
                    },
                    icon: 'circle-blank',
                    hash: 'new'
                },
                {
                    press: function() {
                        //When press
                        this.game.inputManager.emit("move", 1)
                    },
                    icon: 'chevron-right',
                    hash: 'right'
                }
            ]
        },
        {
            type: 'buttons',
            data: [
                {
                    press: function() {
                        this.game.inputManager.emit("move", 2)
                    },
                    icon: 'chevron-down',
                    hash: 'down'
                }
            ]
        }
    ]
  };

});