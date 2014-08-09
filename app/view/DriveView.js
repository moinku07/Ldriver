/*
 * File: app/view/DriveView.js
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

Ext.define('Ldriver.view.DriveView', {
    extend: 'Ext.Container',
    alias: 'widget.driveview',

    config: {
        cls: 'recordtripimage',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'panel',
                cls: 'recordfirstpan',
                id: 'driveweatherpanel',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        cls: 'recordpanel',
                        zIndex: 10,
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'label',
                                cls: 'recordpanlabel',
                                html: '<p>Heavy Traffic</p>'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: [
                            'checklist_weather',
                            'sunny'
                        ],
                        layout: {
                            type: 'hbox'
                        }
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'record_pan',
                html: '<h1>00:00</h1>',
                id: 'drivetimepanel',
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        cls: 'min-hours',
                        html: '<p class="min"><span class="hour">minutes</span>hours</p>',
                        layout: {
                            type: 'hbox'
                        }
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'recordpasscode',
                id: 'driveodometer',
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        cls: 'odometer-timer',
                        layout: {
                            pack: 'center',
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'odometer-timer-pin',
                                html: '<p>01649</p>'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'paused_resume_panel',
                id: 'drivepausepanel',
                zIndex: 850,
                hideOnMaskTap: true,
                items: [
                    {
                        xtype: 'label',
                        cls: 'trip_header',
                        html: '<h1>Trip Paused</h1>'
                    },
                    {
                        xtype: 'button',
                        name: 'pausedresumebutton',
                        cls: 'paused_resume_trip',
                        html: '<p class="resume_text">Resume</br> Trip</p>'
                    },
                    {
                        xtype: 'button',
                        name: 'pausedendbutton',
                        cls: 'paused_resume_endtrip',
                        html: '<p class="end_text">End</br> Trip</p>'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'paused_resume_timer',
                hidden: true,
                html: '<h2>00:35</h2>',
                id: 'drivepausetimepanel',
                zIndex: 850,
                items: [
                    {
                        xtype: 'panel',
                        cls: 'paused_resume_hours-min',
                        html: '<p class="min1"><span class="hour1">minutes</span>hours</p>'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'check_list_panel_container',
                hidden: true,
                id: 'tripchecklistbubble',
                zIndex: 900,
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        cls: 'check_list_panel',
                        hidden: false,
                        layout: {
                            align: 'center',
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                name: 'tripchecklistbubbleclose',
                                cls: 'check_list_panel_toolbar-button'
                            },
                            {
                                xtype: 'panel',
                                cls: 'check_list_panel_toolbar',
                                html: '<p>Trip Checklist</p>'
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                cls: 'trip-checklist-panel-list',
                                html: '<p class="tripnote">When all items are checked and you are ready to begin your trip, your supervisor may click \'Record Trip\' below to begin recording this trip.</p>',
                                layout: {
                                    type: 'vbox'
                                },
                                items: [
                                    {
                                        xtype: 'formpanel',
                                        name: 'tripchecklistform',
                                        flex: 1,
                                        layout: {
                                            type: 'vbox'
                                        },
                                        scrollable: false,
                                        items: [
                                            {
                                                xtype: 'panel',
                                                cls: 'trip-checklist-panel-phone',
                                                hidden: false,
                                                layout: {
                                                    type: 'hbox'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'panel',
                                                        cls: [
                                                            'plug-panel-image',
                                                            'check-list-image'
                                                        ],
                                                        layout: {
                                                            type: 'vbox'
                                                        }
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        flex: 1,
                                                        cls: 'phone-panel-middle-label',
                                                        html: '<p>Phone Battery Charged</p>'
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        layout: {
                                                            align: 'center',
                                                            pack: 'center',
                                                            type: 'vbox'
                                                        },
                                                        items: [
                                                            {
                                                                xtype: 'togglefield',
                                                                cls: [
                                                                    'check-toggle-field',
                                                                    'toggle-field-first'
                                                                ],
                                                                name: 'phonebattery'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                cls: 'trip-checklist-panel-phone',
                                                hidden: false,
                                                layout: {
                                                    type: 'hbox'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'panel',
                                                        cls: [
                                                            'plates-panel-image',
                                                            'check-list-image'
                                                        ],
                                                        layout: {
                                                            type: 'vbox'
                                                        }
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        flex: 1,
                                                        cls: 'phone-panel-middle-label',
                                                        html: '<p>L-Plates Visible</p>'
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        layout: {
                                                            align: 'center',
                                                            pack: 'center',
                                                            type: 'vbox'
                                                        },
                                                        items: [
                                                            {
                                                                xtype: 'togglefield',
                                                                cls: [
                                                                    'check-toggle-field',
                                                                    'toggle-field-first'
                                                                ],
                                                                name: 'lplates'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                cls: 'trip-checklist-panel-phone',
                                                hidden: false,
                                                layout: {
                                                    type: 'hbox'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'panel',
                                                        cls: [
                                                            'seatbelt-panel-image',
                                                            'check-list-image'
                                                        ],
                                                        layout: {
                                                            type: 'vbox'
                                                        }
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        flex: 1,
                                                        cls: 'phone-panel-middle-label',
                                                        html: '<p>Seatbelts Fastened</p>'
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        layout: {
                                                            align: 'center',
                                                            pack: 'center',
                                                            type: 'vbox'
                                                        },
                                                        items: [
                                                            {
                                                                xtype: 'togglefield',
                                                                cls: [
                                                                    'check-toggle-field',
                                                                    'toggle-field-first'
                                                                ],
                                                                name: 'seatbelts'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                cls: 'trip-checklist-panel-phone',
                                                hidden: false,
                                                layout: {
                                                    type: 'hbox'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'panel',
                                                        cls: [
                                                            'car-panel-image-car',
                                                            'check-list-image'
                                                        ],
                                                        layout: {
                                                            type: 'vbox'
                                                        }
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        flex: 1,
                                                        cls: 'phone-panel-middle-label',
                                                        html: '<p>Mirrors Adjusted</p>'
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        layout: {
                                                            align: 'center',
                                                            pack: 'center',
                                                            type: 'vbox'
                                                        },
                                                        items: [
                                                            {
                                                                xtype: 'togglefield',
                                                                cls: [
                                                                    'check-toggle-field',
                                                                    'toggle-field-first'
                                                                ],
                                                                name: 'mirrors'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                cls: 'trip-checklist-panel-phone',
                                                layout: {
                                                    type: 'hbox'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'panel',
                                                        cls: [
                                                            'phone-panel-image',
                                                            'check-list-image'
                                                        ],
                                                        layout: {
                                                            type: 'vbox'
                                                        }
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        flex: 1,
                                                        cls: 'phone-panel-middle-label',
                                                        html: '<p>Phone With Supervisor</p>'
                                                    },
                                                    {
                                                        xtype: 'panel',
                                                        layout: {
                                                            align: 'center',
                                                            pack: 'center',
                                                            type: 'vbox'
                                                        },
                                                        items: [
                                                            {
                                                                xtype: 'togglefield',
                                                                cls: [
                                                                    'check-toggle-field',
                                                                    'toggle-field-first'
                                                                ],
                                                                name: 'supervisor'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'check_list_panel_container',
                hidden: true,
                id: 'approvemodalpanel',
                zIndex: 900,
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        cls: 'check_list_panel',
                        layout: {
                            align: 'center',
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'check_list_panel_toolbar',
                                html: '<p>Supervisor Approval</p>'
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                cls: 'supervisor-approval-panel-list',
                                layout: {
                                    type: 'vbox'
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        cls: 'supervisor-horizontal-panel',
                                        hidden: false,
                                        layout: {
                                            type: 'hbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'panel',
                                                cls: 'supervisor-approval-image-panel',
                                                layout: {
                                                    type: 'vbox'
                                                }
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                cls: 'supervisor-approval-text-panel',
                                                html: '<p class="firsttext-supervisor">L Driver</p><p class="lasttext-supervisor">Samuel Brown</p>',
                                                layout: {
                                                    type: 'vbox'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        cls: 'supervisor-horizontal-panel',
                                        hidden: false,
                                        layout: {
                                            type: 'hbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'panel',
                                                cls: 'supervisor-approval-image-clock',
                                                layout: {
                                                    type: 'vbox'
                                                }
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                cls: 'supervisor-approval-text-panel',
                                                html: '<p class="firsttext-supervisor">Has completed</p><p class="lasttext-supervisor"><span style="font-size:12px;margin-left:4px;"> Driving Experience</span><strong style="float:left;font-size:18px;">00h:30m </strong> </p>',
                                                layout: {
                                                    type: 'vbox'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        cls: 'supervisor-horizontal-panel',
                                        hidden: false,
                                        layout: {
                                            type: 'hbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'panel',
                                                cls: 'supervisor-approval-image-supervisor',
                                                layout: {
                                                    type: 'vbox'
                                                }
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                cls: 'supervisor-approval-text-panel',
                                                html: '<p class="firsttext-supervisor">Under the supervision of</p><p class="lasttext-supervisor">John Brown</p>',
                                                layout: {
                                                    type: 'vbox'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                cls: 'supervisor-panel-html-text',
                                hidden: false,
                                html: '<p>Tap the signature icon below</br> to sign-off and approve this trip.</p>',
                                layout: {
                                    align: 'center',
                                    pack: 'center',
                                    type: 'hbox'
                                }
                            },
                            {
                                xtype: 'button',
                                name: 'approvemodalpanelclose',
                                cls: 'check_list_panel_toolbar-button'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                hidden: true,
                id: 'drivemodalpanel',
                zIndex: 800,
                modal: true
            }
        ]
    }

});