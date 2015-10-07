var protocol = {
    sessionParameters: {
        name: "DPhil Protocol"
    },
    globals: {
        nameGenForm: function () {
            var init = function() {
                window.nameGenForm = new window.netCanvas.Modules.FormBuilder('nameGenForm');
                var newNodeForm = '<div class="new-node-form dialog"></div>';
                $('body').append(newNodeForm);
                window.nameGenForm.build($('.new-node-form'), {
        			title: 'Add a person you know',
        			fields: {
        				first_name: {
                            title: 'First Name',
        					type: 'string',
        					placeholder: 'First Name',
        					required: true,
        				},
                        last_name: {
                            title: 'Last Name',
                            type: 'string',
                            placeholder: 'Last Name',
                            required: true,
                        },
                        label: {
                            title: 'Nickname',
                            type: 'string',
                            placeholder: 'Nickname',
                            required: true,
                        }
        			},
                    show: function() {
                        $('.new-node-form, .black-overlay').addClass('show');
                        $('.new-node-form :input:visible:enabled:first').focus();
                    },
                    hide: function() {
                        window.nameGenForm.reset();
                        $('.new-node-form, .black-overlay').removeClass('show');
                    },
        			options: {
        				onSubmit: function(data) {
                            window.network.addNode(data);
                            thisForm.hide();
        				},
        				onLoad: function(form) {
        				},
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
                                    
        						}
        					}
        				}
        			}
        		});
            };

            init();

        }
    },
    skipFunctions: {
        exampleSkip: function() { return false; }
    },
    stages: [
        {icon: 'fa-file-text', label:'Intro', page:'intro.html'},
        {icon: 'fa-file-text', label:'Personal Budget Details', page:'pbdetails.html'},
        {icon: 'fa-file-text', label:'Personal Budget Proportions', page:'pbproportions.html'},
        {icon: 'fa-file-text', label:'Context Intro', page:'contextintro.html'},
        {icon: 'fa-file-text', label:'Context Generator', page:'contextgenerator.html'},
        {icon: 'fa-file-text', label:'Sociogram', page:'sociogram.html'}
    ]
};
