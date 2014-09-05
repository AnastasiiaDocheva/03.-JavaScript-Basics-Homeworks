function likeUnlike() {
var likeUnlikeButton = document.getElementById('first-task-button');

        if (likeUnlikeButton.innerText === 'Like') {
            likeUnlikeButton.innerText = 'Unlike';
        }
        else {
            likeUnlikeButton.innerText = 'Like';
        }
}