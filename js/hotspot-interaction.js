var hotspotInteraction = function hotspotInteraction() {
    document.querySelectorAll('.hotspot-interaction').forEach(function(item, index) {
        item.addEventListener('click', function() {
            player.markers.getMarkers().find(obj => {
                // obj.correctIndex == index + 1 ? console.log('Верно') : console.log('Неверно');
                console.log(obj.correctIndex);
                if (obj.correctIndex == index + 1) {
                    console.log('Верно');
                    setTimeout(function() {
                        player.markers.next();
                    }, 2500);
                } else {
                    console.log('Неверно');
                    setTimeout(function() {
                        player.markers.next();
                    }, 2500);
                }
                player.play();
            })

        })
    })
};
