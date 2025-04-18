window.addEventListener('load', function(){
    const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納
    const overlay = this.document.querySelector('#overlay');
    const backToTopButton = document.getElementById('backToTop');
    
    ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
        ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
        overlay.classList.toggle('active');
        console.log('ok!'); // コンソール画面でokというメッセージが出る
    });
    overlay.addEventListener('click', () => { //オーバーレイをクリックしても閉じる
        ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
        overlay.classList.toggle('active');
        console.log('good!'); // コンソール画面でgood!というメッセージが出る
      });

      window.addEventListener('scroll', () => {
        if (window.scrollY > 700) {
            backToTopButton.classList.add('show');
          } else {
            backToTopButton.classList.remove('show');
          }
      });
    
      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
})

