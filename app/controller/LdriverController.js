/*
 * File: app/controller/LdriverController.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Ldriver.controller.LdriverController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.ldrivercontroller',

    config: {
        refs: {
            newtripview: 'newtripview',
            gobackbutton: 'button[name=gobackbutton]',
            main: 'main'
        },

        control: {
            "gobackbutton": {
                tap: 'ongobackButtonTap'
            }
        }
    },

    ongobackButtonTap: function(button, e, eOpts) {
        var main = this.getMain(),
            newtripview = this.getNewtripview();
        Ldriver.app.getApplication().getController('MenuController').removeButtonActiveClass('begintrip');
        Ldriver.app.getApplication().getController('MenuController').showButton('begintrip');
        main.getLayout().setAnimation({
            type: 'slide',
            direction: 'right'
        });
        main.setActiveItem(newtripview);
    }

});