document.addEventListener('DOMContentLoaded', function() {
    var commentContainer = document.querySelector('.comments');
    var nameInput = document.getElementById('controlinput1');
    var commentInput = document.getElementById('controltextarea1');
    var submitButton = document.getElementById('submit-comment');
    var timeInput = 1000;
    let userImage = '<img src="/img/user.png" alt="user">';
    var imageSelect = document.getElementById('image-select');

    loadComments();

    imageSelect.addEventListener('change', function(e) {
        var selectedValue = e.target.value;
        switch (selectedValue) {
            case '1':
                userImage = '<img src="/img/user.png" alt="user">';
                break;
            case '2':
                userImage = '<img src="/img/avatar2.jpg" alt="user">';
                break;
            case '3':
                userImage = '<img src="/img/avatar1.png" alt="user">';
                break;
            default:
                userImage = '<img src="/img/user.png" alt="user">';
        }
    });

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        var name = nameInput.value;
        var comment = commentInput.value;

        if (name && comment) {
            submitButton.classList.toggle("onclic", true);

            function validate() {
                setTimeout(function() {
                    submitButton.classList.toggle("onclic", false);
                    submitButton.classList.toggle("validate", true);

                    function callback() {
                        setTimeout(function() {
                            submitButton.classList.toggle("validate", false);
                        }, 1000);
                    }
                    callback();
                }, timeInput);
            }

            validate();

        
            saveComment(name, comment, userImage);

            nameInput.value = '';
            commentInput.value = '';

            loadComments();
        }
    });
});

function saveComment(name, comment, userImage) {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ name, comment, userImage });
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    var commentContainer = document.querySelector('.comments');
    commentContainer.innerHTML = '';

    comments.forEach(comment => {
        const commentHTML = `
            <div class="comment">
                <div class="image-user">${comment.userImage}
                    <h4>${comment.name}</h4>
                </div>
                <div class="text-comment"><p>${comment.comment}</p></div>
            </div>`;
        commentContainer.insertAdjacentHTML('beforeend', commentHTML);
    });
}
