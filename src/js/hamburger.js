document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('hamburger').addEventListener('click', function () {
        document.getElementById('menu').classList.remove('hidden');
        document.getElementById('hamburger').style.display = 'none';
        document.getElementById('close').classList.add('visible');
    });

    document.getElementById('close').addEventListener('click', function () {
        document.getElementById('menu').classList.add('hidden');
        document.getElementById('hamburger').style.display = 'inline-block';
        document.getElementById('close').classList.remove('visible');
    });
});
