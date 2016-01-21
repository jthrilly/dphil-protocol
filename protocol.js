/* global window, $ */
/* exported protocol */

var protocol = {
    sessionParameters: {
        name: 'DPhil Protocol'
    },
    globals: {
        nameGenForm: function () {
            'use strict';
            var init = function() {
                var nameGenForm = new window.netCanvas.Modules.FormBuilder('nameGenForm');
                var newNodeForm = '<div class="new-node-form dialog"></div>';
                $('body').append(newNodeForm);
                nameGenForm.build($('.new-node-form'), {
        			title: 'Add a person you know',
        			fields: {
        				first_name: {
                            title: 'First Name',
        					type: 'text',
        					placeholder: 'First Name',
        					required: true,
        				},
                        last_name: {
                            title: 'Last Name',
                            type: 'text',
                            placeholder: 'Last Name',
                            required: true,
                        },
                        label: {
                            title: 'Nickname',
                            type: 'text',
                            placeholder: 'Nickname',
                            required: true,
                        }
        			},
                    show: function() {
                        window.forms.nameGenForm.addTemporaryFields({
                            contexts: {
                                type: 'custom',
                                customType: 'contextField',
                                options: {
                                    name: 'Josh'
                                }
                            }
                        });
                    },
                    submit: function(data) {
                        // Add or update based on the presence of an ID field

                        // fix the context variable as an array.
                        if (typeof data.contexts !== 'object') {
                            var contextArray = [];
                            if (data.contexts) {
                                contextArray.push(data.contexts);
                            }

                            data.contexts = contextArray;

                        }

                        if (data.id) {
                            var id = data.id;
                            delete data.id;
                            window.network.updateNode(id, data);
                        } else {
                            window.network.addNode(data);
                        }

                        window.forms.nameGenForm.reset();
                        window.forms.nameGenForm.hide();
                    },
                    load: function(form) {
                        return form;
                    },
        			options: {
        				buttons: {
        					submit: {
        						label: 'Create',
        						id: 'new-node-submit-btn',
        						type: 'submit',
        						class: 'btn-primary'
        					},
        					cancel: {
        						label: 'Cancel',
        						id: 'new-node-cancel-btn',
        						type: 'button',
        						class: 'btn-default',
        						action: function() {
                                    window.forms.nameGenForm.reset();
                                    window.forms.nameGenForm.hide();
        						}
        					}
        				},
                        customFields: {
                            contextField: {
                                markup: function () {
                                    var markup = '';
                                    var egoContexts = window.network.getEgo().contexts;
                                    markup += `<label class="control-label">Contexts</label>`;
                                    var i = 0;
                                    for (let context of egoContexts) {
                                        markup += `
                                        <span class="button-checkbox">
                                            <button type="button" class="btn-checkbox" data-index="${i}">${context}</button>
                                            <input type="checkbox" name="contexts" data-index="${i}" value="${context}" class="hidden"/>
                                        </span>
                                        `;

                                        i++;
                                    }
                                    return markup;
                                },
                                initialise: function() {
                                    $(function () {
                                        $('.button-checkbox').each(function () {
                                            // Settings
                                            var $widget = $(this),
                                                $button = $widget.find('button'),
                                                $checkbox = $widget.find('input:checkbox');

                                            // Event Handlers
                                            $button.on('click', function () {
                                                console.log('button click');
                                                $checkbox.prop('checked', !$checkbox.is(':checked'));
                                                $checkbox.triggerHandler('change');
                                                updateDisplay();
                                            });
                                            $checkbox.on('change', function () {
                                                console.log('checkboxchange');
                                                updateDisplay();
                                            });

                                            // Actions
                                            function updateDisplay() {
                                                var isChecked = $checkbox.is(':checked');

                                                // Set the button's state
                                                $button.data('state', (isChecked) ? 'on' : 'off');

                                                // Update the button's color
                                                if (isChecked) {
                                                    $button.addClass('active');
                                                } else {
                                                    $button.removeClass('active');
                                                }
                                            }

                                            // Initialization
                                            function init() {
                                                updateDisplay();
                                            }
                                            init();
                                        });
                                    });
                                },
                                addData: function() {

                                },
                                reset: function() {
                                    $(function () {
                                        $('.button-checkbox').each(function () {
                                            // Settings
                                            var $widget = $(this),
                                                $button = $widget.find('button');

                                            $button.removeClass('active');

                                        });
                                    });
                                },
                                destroy: function() {

                                }
                            }
                        }
        			}
        		}, {
                    inline: true
                });
            };

            init();

        }
    },
    skipFunctions: {
        exampleSkip: function() {
            'use strict';
            return false;
        }
    },
    stages: [
        {icon: 'fa-file-text', label:'Intro', page:'intro.html'},
        {icon: 'fa-file-text', label:'Personal Budget Details', page:'pbdetails.html'},
        {icon: 'fa-file-text', label:'Personal Budget Proportions', page:'pbproportions.html'},
        {icon: 'fa-file-text', label:'Context Intro', page:'contextintro.html'},
        {icon: 'fa-file-text', label:'Context Generator', page:'contextgenerator.html'},
        {icon: 'fa-file-text', label:'NG: Close', page:'namegen-close.html'},
        {icon: 'fa-file-text', label:'NG: Support', page:'namegen-support.html'},
        {icon: 'fa-file-text', label:'NG: Advice', page:'namegen-advice.html'},
        {icon: 'fa-file-text', label:'NG: Information', page:'namegen-information.html'},
        {icon: 'fa-file-text', label:'NG: Technology', page:'namegen-technology.html'},
        {icon: 'fa-file-text', label:'Layout', page:'layout.html'},
        {icon: 'fa-file-text', label:'Sociogram Missing', page:'sociogram-missing.html'},
        {icon: 'fa-file-text', label:'Sociogram Multi', page:'sociogram-multi.html'},
        {icon: 'fa-file-text', label:'Ord: Helpfulness', page:'ord-helpfulness.html'}

    ]
};
