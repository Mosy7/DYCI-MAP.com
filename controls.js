document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.getElementById('mapContainer');
    const mapImage = document.getElementById('mapImage');

    let zoomLevel = 100; // Initial zoom level
    let offsetX = 0;
    let offsetY = 0;

    function updateMapTransform() {
        mapImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${zoomLevel / 100})`;
    }

    function zoomIn() {
        zoomLevel += 10; // Increase zoom level
        updateMapTransform();
    }

    function zoomOut() {
        zoomLevel -= 10; // Decrease zoom level
        if (zoomLevel < 10) {
            zoomLevel = 10; // Minimum zoom level
        }
        updateMapTransform();
    }

    function moveLeft() {
        offsetX += 10; // Move left
        updateMapTransform();
    }

    function moveRight() {
        offsetX -= 10; // Move right
        updateMapTransform();
    }

    function moveUp() {
        offsetY += 10; // Move up
        updateMapTransform();
    }

    function moveDown() {
        offsetY -= 10; // Move down
        updateMapTransform();
    }

    document.getElementById('zoomInBtn').addEventListener('click', zoomIn);
    document.getElementById('zoomOutBtn').addEventListener('click', zoomOut);
    document.getElementById('moveLeftBtn').addEventListener('click', moveLeft);
    document.getElementById('moveRightBtn').addEventListener('click', moveRight);
    document.getElementById('moveUpBtn').addEventListener('click', moveUp);
    document.getElementById('moveDownBtn').addEventListener('click', moveDown);
});
