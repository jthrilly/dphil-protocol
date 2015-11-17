var protocol = {
    sessionParameters: {
        name: "DPhil Protocol"
    },
    globals: {
        nameGenForm: function () {
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
                        $('.new-node-form, .black-overlay').addClass('show');
                        $('.new-node-form :input:visible:enabled:first').focus();
                    },
                    hide: function() {
                        window.nameGenForm.reset();
                        $('.new-node-form, .black-overlay').removeClass('show');
                    },
        			options: {
        				onSubmit: function(data) {

                            // Add or update based on the presence of an ID field
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
                                    window.forms.nameGenForm.reset();
                                    window.forms.nameGenForm.hide();
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
        exampleSkip: function() { return false; }
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
        {icon: 'fa-file-text', label:'Sociogram Multi', page:'sociogram-multi.html'}
    ]
};
