// Carousel-album

document.addEventListener('DOMContentLoaded', async function () {
    var meriAPI = 'https://jsonplaceholder.typicode.com/users/1/albums';
    var gliderElement = document.querySelector('.glider');

    async function hamaraAlbum() {
        try {
            var response = await axios.get(meriAPI);
            var albums = response.data;
            albums.forEach(album => {
                var slide = document.createElement('div');
                slide.className = 'glider-slide';
                slide.innerHTML = `<h3>${album.title}</h3>
                    <p>Album ID: ${album.id}</p>`;
                gliderElement.appendChild(slide);
            });
            gliderChalega();
        } catch (error) {
            console.error('Error Hamara Album:', error);
        }
    }

    function gliderChalega() {
        new Glider(gliderElement, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: false,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });
    }
    hamaraAlbum();
});
