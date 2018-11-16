const openProfile = document.getElementById('openandclose');

const onOpen = () => {
openProfile.classList.add('activeProfile');

}
const onClose = () => {
    openProfile.classList.remove('activeProfile');
}