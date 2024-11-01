 document.addEventListener('DOMContentLoaded', function() {
            const commentContainer = document.querySelector('.comments');
            const nameInput = document.getElementById('controlinput1');
            const commentInput = document.getElementById('controltextarea1');
            const submitButton = document.getElementById('submit-comment');
            const timeInput = 4000;

            submitButton.addEventListener('click', function(e) {
                e.preventDefault();
                const name = nameInput.value;
                const comment = commentInput.value;

                if (name && comment) {
                    submitButton.classList.add("onclic");

                    function validate() {
                        setTimeout(function() {
                            submitButton.classList.remove("onclic");
                            submitButton.classList.add("validate");

                            function callback() {
                                setTimeout(function() {
                                    submitButton.classList.remove("validate");
                                }, 2000);
                            }
                            callback();
                        }, timeInput);
                    }

                    validate();

                    setTimeout(function() { 
                      const commentHTML = `
                        <div class="comment">
                            <h4>${name}</h4>
                            <p>${comment}</p>
                        </div>
                    `;
                    commentContainer.insertAdjacentHTML('beforeend', commentHTML);
                    nameInput.value = '';
                    commentInput.value = '';
                  },timeInput);
                }
            });
        });