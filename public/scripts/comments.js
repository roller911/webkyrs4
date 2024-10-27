  document.addEventListener('DOMContentLoaded', function() {
    const commentContainer = document.querySelector('.comments');
    const nameInput = document.getElementById('controlinput1');
    const commentInput = document.getElementById('controltextarea1');
    const submitButton = document.querySelector('.submit-comment');

    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      const name = nameInput.value;
      const comment = commentInput.value;

      if (name && comment) {
        const commentHTML = `
          <div class="comment">
            <h4>${name}</h4>
            <p>${comment}</p>
          </div>
        `;

        commentContainer.insertAdjacentHTML('beforeend', commentHTML);
        nameInput.value = '';
        commentInput.value = '';
      }
    });
  });
