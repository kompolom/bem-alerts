/* global modules:false */

modules.define('alert',
               ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl({block: 'alert', modName: 'dismissible', modVal: true},{
    onSetMod: {
        'js': {
            'inited': function(){
                this.__base.apply(this, arguments);
            }
        }
    },

},{
    live: function(){
        this.__base();
        this.liveBindTo('dismiss', 'click', function(){
            this.setMod('hidden', true);
        });
        return false;
    }
});

provide(BEMDOM);

});

