var protocol = {
    sessionParameters: {
        name: "DPhil Protocol"
    },
    globals: {
        nameGenForm: function () {
            // An empty variable we will use later to allow data to be injected into the submit method
            var inject = false;

            var init = function() {
                window.nameGenForm = new window.netCanvas.Modules.FormBuilder();
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
        			options: {
        				onSubmit: function(data) {
                            // Check if we have data to inject
                            if (inject) {
                                $.extend(data, inject);
                                inject = false;
                            }
                            window.network.addNode(data);
                            hide();
        				},
        				onLoad: function(form) {
                            console.log(form);
                            window.nameGenForm.show = show;
                            window.nameGenForm.hide = hide;
        				},
        				buttons: {
        					submit: {
        						label: 'Create',
        						id: 'submit-btn',
        						type: 'submit',
        						class: 'btn-primary'
        					},
        					cancel: {
        						label: 'Cancel',
        						id: 'new-node-cancel-btn',
        						type: 'button',
        						class: 'btn-default',
        						action: function() {
                                    hide();
        						}
        					}
        				}
        			}
        		});
            };

            var hide = function() {
                window.nameGenForm.reset();
                $('.new-node-form, .black-overlay').removeClass('show');
            };
            var show = function(hiddenProperties) {
                if (hiddenProperties) {
                    inject = hiddenProperties;
                }
                $('.new-node-form, .black-overlay').addClass('show');
                $('.new-node-form :input:visible:enabled:first').focus();
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
        {icon: 'fa-file-text', label:'Context Generator', page:'contextgenerator.html'},
        {icon: 'fa-file-text', label:'Sociogram', page:'sociogram.html'}
    ]
};
