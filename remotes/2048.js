exec(function(){

  mote.io.remote = {
    api_version: '0.1',
    app_name: '2048',
    action: 'playing',
    twitter: 'gilcz2',
    display_input: false,
    init: function() {
        setTimeout(function(){
            mote.io.remote = {};
        }, 5000);
    },
    update: function(force) {},
    blocks: [
        {
            type: 'buttons',
            data: [
                {
                    press: function() {
                        var e = jQ.Event("keydown");
                        e.which = 27; // # Some key code value
                        $("input").trigger(e);
                    },
                    icon: 'chevron-left',
                    hash: 'left'
                },
                {
                    press: function() {
                        //When press
                    },
                    icon: 'circle-blank',
                    hash: 'new'
                },
                {
                    press: function() {
                        //When press
                    },
                    icon: 'chevron-right',
                    hash: 'right'
                }
            ]
        }
    ]
  };

});