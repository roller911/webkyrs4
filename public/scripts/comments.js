 document.addEventListener('DOMContentLoaded', function() {
            const commentContainer = document.querySelector('.comments');
            const nameInput = document.getElementById('controlinput1');
            const commentInput = document.getElementById('controltextarea1');
            const submitButton = document.getElementById('submit-comment');
            const timeInput = 1000;


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
                                }, 1000);
                            }
                            callback();
                        }, timeInput);
                    }

                    validate();

                    setTimeout(function() { 
                      const commentHTML = `
                        <div class="comment">
                        <div class="image-user"><img src="/img/user.png" alt="user">
                            <h4>${name}</h4></div
                            <div class="text-comment"><p>${comment}</p></div>
                        </div>
                    `;
                    commentContainer.insertAdjacentHTML('beforeend', commentHTML);
                    nameInput.value = '';
                    commentInput.value = '';
                  },timeInput);
                }
            });







        });
