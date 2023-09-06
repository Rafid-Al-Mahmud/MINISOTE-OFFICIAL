//Check is client had seen specific element or not
function ClientSeen(element) {
    // Get the element you want to check visibility for
    var el = element;

    // Calculate the element's position and dimensions relative to the viewport
    var rect = () => el.getBoundingClientRect();

    // Check if the element is fully visible in the viewport
    var isVisible = (
        rect().top >= 0 &&
        rect().left >= 0 &&
        rect().bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect().right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    // Apply fadeout effect if the element is not visible
    return isVisible || element.tagName === 'SCRIPT' || element.tagName === 'HEAD' || element.tagName === 'TITLE' || element.tagName === 'BODY' || element.tagName === 'HTML' ? true : false;
}
// el.style.opacity = '0.5'; // Set desired opacity value for fadeout effect


export default function fadeOutByRafid(element) {
    const allEl = element;
    for (let i = 0; i < allEl.length; i++) {
        allEl[i].style.opacity='0.1';
        allEl[i].style.transition='opacity 2s';
        // allEl[i].style.transition='opacity 2s cubic-bezier(0, 1.6, 1, 0) 0s';
    }
    let opaInvertal = setInterval(() => {
        for (let i = 0; i < allEl.length; i++) {
            // opaInvertal = ClientSeen(allEl[i]) ? allEl[i].style.opacity = '1' : console.error('error\n' + ClientSeen(allEl[i]));
            opaInvertal = ClientSeen(allEl[i]) ? allEl[i].style.opacity = '1' : false;
        }
    }, 10);

    addEventListener('click', () => {
        let a = []
        for (let i = 0; i < allEl.length; i++) {
            if (allEl[i].style.opacity === '1') {
                // console.log('allEl[i].style.opacity=1 & a.push(true)');
                a.push(true);
            }
            else {
                // console.log(allEl[i].style.opacity);
                // console.log('allEl[i].style.opacity="" & a.push(false)');
                a.push(false);
            }
        }
        if (!a.includes('false')) {
            clearInterval(opaInvertal);
        }
        // console.log(a);
    });
}