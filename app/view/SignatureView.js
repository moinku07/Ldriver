/*
 * File: app/view/SignatureView.js
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

Ext.define('Ldriver.view.SignatureView', {
    extend: 'Ext.Container',
    alias: 'widget.signatureview',

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'toolbar',
                cls: [
                    'top-toolbar',
                    'dashboard-toolbar'
                ],
                docked: 'top',
                title: 'Signature Capture',
                layout: {
                    pack: 'end',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        name: 'signaturereset',
                        cls: 'newtrip_button',
                        html: '<p class="cancel">Reset</p>'
                    }
                ]
            },
            {
                xtype: 'panel',
                plugins: {
                    xclass: 'Ext.plugin.SignaturePad',
                    disableScrollCmp: 'signature',
                    canvasId: 'signature'
                },
                flex: 1,
                cls: 'clientSignaturePanel',
                id: 'clientSignaturePanel',
                scrollable: false
            },
            {
                xtype: 'panel',
                name: 'cs-slidetounlock-panel',
                cls: 'slidetounlock',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    var timeoutId;
                                    function setInit(x) {
                                        Ext.ComponentQuery.query('panel[name=cs-slideunlock-slider]')[0].getDraggable().setOffset(0, 0);
                                        return false;
                                        Ext.ComponentQuery.query('panel[name=cs-slideunlock-slider]')[0].getDraggable().setOffset(x, 0);
                                        if (x < 0) {
                                            clearTimeout(timeoutId);
                                            return false;
                                        }
                                        timeoutId = setTimeout(function() {
                                            setInit(x - 5);
                                        },
                                        1);
                                    }
                                    Ext.app.initCSDraggable = function() {
                                        component.setDraggable({
                                            direction: 'horizontal',
                                            constraint: {
                                                min: {
                                                    x: 0,
                                                    y: 0
                                                },
                                                max: {
                                                    x: parseInt((window.innerWidth), 10),
                                                    y: 0
                                                }
                                            },
                                            listeners: {
                                                drag: function(draggable, evt, offsetX, offsetY, eOpts) {
                                                    if (offsetX >= parseInt((window.innerWidth - 80), 10)) {
                                                        Ldriver.app.getApplication().getController('MenuController').activeDriveView();
                                                        setTimeout(function(){
                                                            Ext.app.reInitCSDraggable();
                                                        },500);
                                                    }
                                                },
                                                dragend: function(draggable, evt, offsetX, offsetY, eOpts) {
                                                    if (offsetX >= parseInt((window.innerWidth - 80), 10)) {
                                                        Ldriver.app.getApplication().getController('MenuController').activeDriveView();
                                                        setTimeout(function(){
                                                            Ext.app.reInitCSDraggable();
                                                        },500);
                                                    } else {
                                                        timeoutId = null;
                                                        setInit(offsetX);
                                                    }
                                                }
                                            }
                                        });
                                    };
                                    Ext.app.reInitCSDraggable = function() {
                                        component.setDraggable(false);
                                        Ext.app.initCSDraggable();
                                    };
                                    Ext.Viewport.on("orientationchange", Ext.app.reInitCSDraggable);
                                    Ext.app.initCSDraggable();
                                },
                                event: 'initialize'
                            }
                        ],
                        name: 'cs-slideunlock-slider',
                        cls: 'slideunlocktext',
                        html: '<p>Slide To Continue</p>'
                    }
                ]
            }
        ]
    }

});