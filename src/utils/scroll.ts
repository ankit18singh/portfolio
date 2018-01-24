export function scroll() {
  
    let currentPosition = window.scrollY;

    let body = document.body, html = document.documentElement;

    let height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
                            
    let percentage = 0;
    percentage = Math.floor((currentPosition / height ) * 100);

    let elem = document.getElementsByClassName('navlinkButton') as HTMLCollectionOf<HTMLElement>;
    let elem1 = document.getElementsByClassName('navlinkButton-1') as HTMLCollectionOf<HTMLElement>;
    let elem2 = document.getElementsByClassName('navlinkButton-2') as HTMLCollectionOf<HTMLElement>;
    let elem3 = document.getElementsByClassName('navlinkButton-3') as HTMLCollectionOf<HTMLElement>;

    if (percentage >= 0 && percentage < 25 || percentage === null) {
        elem = document.getElementsByClassName('navlinkButton') as HTMLCollectionOf<HTMLElement>;
        elem[0].classList.add('current-active');
        if (elem1[0].classList.contains('current-active')) {
            elem1[0].classList.remove('current-active');               
            elem2[0].classList.remove('current-active');
            elem3[0].classList.remove('current-active');
        }
    } else if (percentage >= 25 && percentage < 50) {
        elem1 = document.getElementsByClassName('navlinkButton-1') as HTMLCollectionOf<HTMLElement>;
        elem1[0].classList.add('current-active');

        if (elem[0].classList.contains('current-active') || elem2[0].classList.contains('current-active')) {
            elem[0].classList.remove('current-active');               
            elem2[0].classList.remove('current-active');
            elem3[0].classList.remove('current-active');            
        }
    } else if (percentage >= 50 && percentage < 75) {
        elem2 = document.getElementsByClassName('navlinkButton-2') as HTMLCollectionOf<HTMLElement>;
        elem2[0].classList.add('current-active');

        if (elem1[0].classList.contains('current-active')) {
            elem[0].classList.remove('current-active');                
            elem1[0].classList.remove('current-active');
            elem3[0].classList.remove('current-active');            
        }
    } else if (percentage >= 75 && percentage <= 100) {
        elem3 = document.getElementsByClassName('navlinkButton-3') as HTMLCollectionOf<HTMLElement>;
        elem3[0].classList.add('current-active');

        if (elem2[0].classList.contains('current-active')) {
            elem[0].classList.remove('current-active');                
            elem1[0].classList.remove('current-active');
            elem2[0].classList.remove('current-active');            
        }
    }
}
