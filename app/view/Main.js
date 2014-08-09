/*
 * File: app/view/Main.js
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

Ext.define('Ldriver.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    requires: [
        'Ldriver.view.Dashboard',
        'Ldriver.view.NewtripView',
        'Ldriver.view.DriveView',
        'Ldriver.view.SignatureView',
        'Ldriver.view.MytripView',
        'Ldriver.view.TripsummaryView',
        'Ldriver.view.LdriverView'
    ],

    config: {
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'panel',
                cls: [
                    'bottom-menu',
                    'drive'
                ],
                docked: 'bottom',
                id: 'bottomMenu',
                layout: {
                    pack: 'end',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        cls: 'container',
                        items: [
                            {
                                xtype: 'button',
                                name: 'dashboardbutton',
                                cls: [
                                    'btn-dashboard',
                                    'x-button-active'
                                ],
                                id: 'dashboardbutton',
                                iconAlign: 'top',
                                iconCls: 'dashboard',
                                text: 'Dashboard'
                            },
                            {
                                xtype: 'button',
                                name: 'tripbutton',
                                cls: 'btn-trips',
                                id: 'tripbutton',
                                iconAlign: 'top',
                                iconCls: 'trips',
                                text: 'My Trips'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        name: 'drivebutton',
                        cls: 'btn-drive',
                        hidden: false,
                        id: 'drivebutton',
                        iconAlign: 'top',
                        iconCls: 'drive',
                        text: 'Let\'s Drive'
                    },
                    {
                        xtype: 'button',
                        name: 'begintrip',
                        cls: [
                            'btn-drive',
                            'begin-trip'
                        ],
                        hidden: true,
                        id: 'begintrip',
                        iconAlign: 'top',
                        iconCls: 'drive',
                        text: 'Begin Trip'
                    },
                    {
                        xtype: 'button',
                        name: 'recordbutton',
                        cls: [
                            'btn-drive',
                            'record-trip'
                        ],
                        hidden: true,
                        id: 'recordbutton',
                        iconAlign: 'top',
                        iconCls: 'record',
                        text: 'Record Trip'
                    },
                    {
                        xtype: 'button',
                        name: 'recordingbutton',
                        cls: [
                            'btn-drive',
                            'recording-trip'
                        ],
                        hidden: true,
                        id: 'recordingbutton',
                        iconAlign: 'top',
                        iconCls: 'recording',
                        text: 'Record Trip'
                    },
                    {
                        xtype: 'button',
                        name: 'gobackbutton',
                        cls: [
                            'btn-drive',
                            'btn-goback'
                        ],
                        hidden: true,
                        id: 'gobackbutton',
                        iconAlign: 'top',
                        iconCls: 'goback',
                        text: 'Go Back'
                    },
                    {
                        xtype: 'button',
                        name: 'pausedbutton',
                        cls: [
                            'btn-drive',
                            'btn-paused'
                        ],
                        hidden: true,
                        id: 'pausedbutton',
                        iconAlign: 'top',
                        iconCls: 'paused',
                        text: 'Pause Trip'
                    },
                    {
                        xtype: 'button',
                        name: 'resumebutton',
                        cls: [
                            'btn-drive',
                            'btn-resume'
                        ],
                        hidden: true,
                        id: 'resumebutton',
                        iconAlign: 'top',
                        iconCls: 'resume',
                        text: 'Resume Trip'
                    },
                    {
                        xtype: 'button',
                        name: 'approvebutton',
                        cls: [
                            'btn-drive',
                            'btn-approve'
                        ],
                        hidden: true,
                        id: 'approvebutton',
                        iconAlign: 'top',
                        iconCls: 'approve',
                        text: 'Approve Trip'
                    }
                ]
            },
            {
                xtype: 'dashboard'
            },
            {
                xtype: 'newtripview'
            },
            {
                xtype: 'driveview'
            },
            {
                xtype: 'signatureview'
            },
            {
                xtype: 'mytripview'
            },
            {
                xtype: 'tripsummaryview'
            },
            {
                xtype: 'ldriverview'
            }
        ]
    }

});