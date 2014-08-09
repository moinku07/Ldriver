/*
 * File: app/controller/NewtripController.js
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

Ext.define('Ldriver.controller.NewtripController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.newtripcontroller',

    config: {
        refs: {
            main: 'main',
            newtripview: 'newtripview',
            tripsummaryview: {
                autoCreate: true,
                selector: 'tripsummaryview',
                xtype: 'tripsummaryview'
            },
            ldriverview: 'ldriverview',
            drivelistitem: 'panel[name=drivelistitem]',
            begintrip: 'button[name=begintrip]',
            driveview: 'driveview'
        },

        control: {
            "drivelistitem": {
                initialize: 'ondrivelistitemPanel'
            },
            "begintrip": {
                tap: 'onbegintripButtonTap'
            }
        }
    },

    ondrivelistitemPanel: function(component, eOpts) {
        var that = this,
            main = this.getMain();

        component.element.on({
            tap : function(){
                var ldriverview = that.getLdriverview();
                Ldriver.app.getApplication().getController('MenuController').removeButtonActiveClass('gobackbutton');
                Ldriver.app.getApplication().getController('MenuController').showButton('gobackbutton');
                main.getLayout().setAnimation({
                    type: 'slide',
                    direction: 'left'
                });
                main.setActiveItem(ldriverview);
            }
        });
    },

    onbegintripButtonTap: function(button, e, eOpts) {
        var main = this.getMain(),
            driveview = this.getDriveview();
        Ldriver.app.getApplication().getController('DriveController').showHideAnimation('approvemodalpanel',true);
        Ldriver.app.getApplication().getController('DriveController').showHideAnimation('tripchecklistbubble');
        Ldriver.app.getApplication().getController('MenuController').removeButtonActiveClass('recordbutton');
        Ldriver.app.getApplication().getController('MenuController').showButton('recordbutton');
        main.getLayout().setAnimation({
            type: 'slide',
            direction: 'left'
        });
        main.setActiveItem(driveview);
    }

});