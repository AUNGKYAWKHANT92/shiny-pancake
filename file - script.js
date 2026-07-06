//  smooth scroll to top functionality
document.getElementById('back-to-top')
.addEventListener('Click',function()
{
    window.scrollTo({
        top :0;
        behavior : 'smooth'
    });
});
