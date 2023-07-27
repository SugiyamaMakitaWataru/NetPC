function displayBmpMessage(msgText) {
  var msg = msgText;
  for(var i = 0; i < 9; i++) {
    var imgElem;
    switch (i) {
      case 0:
        imgElem = document.getElementById('bmp0');
        break;
      case 1:
        imgElem = document.getElementById('bmp1');
        break;
      case 2:
        imgElem = document.getElementById('bmp2');
        break;
      case 3:
        imgElem = document.getElementById('bmp3');
        break;
      case 4:
        imgElem = document.getElementById('bmp4');
        break;
      case 5:
        imgElem = document.getElementById('bmp5');
        break;
      case 6:
        imgElem = document.getElementById('bmp6');
        break;
      case 7:
        imgElem = document.getElementById('bmp7');
        break;
      case 8:
        imgElem = document.getElementById('bmp8');
        break;
      case 9:
        imgElem = document.getElementById('bmp9');
        break;
  }
    switch (msg[i]) {
      case 'あ':
        imgElem.src = 'charset/ja.bmp'
        break;
      case 'い':
        imgElem.src = 'charset/ji.bmp'
        break;
      case 'う':
        imgElem.src = 'charset/ju.bmp'
        break;
      case 'え':
        imgElem.src = 'charset/je.bmp'
        break;
      case 'お':
        imgElem.src = 'charset/jo.bmp'
        break;
      case 'か':
        imgElem.src = 'charset/jka.bmp'
        break;
      case 'き':
        imgElem.src = 'charset/jki.bmp'
        break;
      case 'く':
        imgElem.src = 'charset/jku.bmp'
        break;
      case 'け':
        imgElem.src = 'charset/jke.bmp'
        break;
      case 'こ':
        imgElem.src = 'charset/jko.bmp'
        break;
      case 'さ':
        imgElem.src = 'charset/jsa.bmp'
        break;
      case 'し':
        imgElem.src = 'charset/jshi.bmp'
        break;
      case 'す':
        imgElem.src = 'charset/jsu.bmp'
        break;
      case 'せ':
        imgElem.src = 'charset/jse.bmp'
        break;
      case 'そ':
        imgElem.src = 'charset/jso.bmp'
        break;
      case 'た':
        imgElem.src = 'charset/jta.bmp'
        break;
      case 'ち':
        imgElem.src = 'charset/jchi.bmp'
        break;
      case 'つ':
        imgElem.src = 'charset/jtu.bmp'
        break;
      case 'て':
        imgElem.src = 'charset/jte.bmp'
        break;
      case 'と':
        imgElem.src = 'charset/jto.bmp'
        break;
      case 'な':
        imgElem.src = 'charset/jna.bmp'
        break;
      case 'に':
        imgElem.src = 'charset/jni.bmp'
        break;
      case 'ぬ':
        imgElem.src = 'charset/jnu.bmp'
        break;
      case 'ね':
        imgElem.src = 'charset/jne.bmp'
        break;
      case 'の':
        imgElem.src = 'charset/jno.bmp'
        break;
      case 'は':
        imgElem.src = 'charset/jha.bmp'
        break;
      case 'ひ':
        imgElem.src = 'charset/jhi.bmp'
        break;
      case 'ふ':
        imgElem.src = 'charset/jhu.bmp'
        break;
      case 'へ':
        imgElem.src = 'charset/jhe.bmp'
        break;
      case 'ほ':
        imgElem.src = 'charset/jho.bmp'
        break;
      case 'ま':
        imgElem.src = 'charset/jma.bmp'
        break;
      case 'み':
        imgElem.src = 'charset/jmi.bmp'
        break;
      case 'む':
        imgElem.src = 'charset/jmu.bmp'
        break;
      case 'め':
        imgElem.src = 'charset/jme.bmp'
        break;
      case 'も':
        imgElem.src = 'charset/jmo.bmp'
        break;
      case 'や':
        imgElem.src = 'charset/jya.bmp'
        break;
      case 'ゆ':
        imgElem.src = 'charset/jyu.bmp'
        break;
      case 'よ':
        imgElem.src = 'charset/jyo.bmp'
        break;
      case 'わ':
        imgElem.src = 'charset/jwa.bmp'
        break;
      case 'を':
        imgElem.src = 'charset/jwo.bmp'
        break;
      case 'ん':
        imgElem.src = 'charset/jnn.bmp'
        break;
      case 'っ':
        imgElem.src = 'charset/jxtu.bmp'
        break;
      case 'ゃ':
        imgElem.src = 'charset/jxya.bmp'
        break;
      case 'ゅ':
        imgElem.src = 'charset/jxyu.bmp'
        break;
      case 'ょ':
        imgElem.src = 'charset/jxyo.bmp'
        break;
      case 'が':
        imgElem.src = 'charset/jga.bmp'
        break;
      case 'ぎ':
        imgElem.src = 'charset/jgi.bmp'
        break;
      case 'ぐ':
        imgElem.src = 'charset/jgu.bmp'
        break;
      case 'げ':
        imgElem.src = 'charset/jge.bmp'
        break;
      case 'ご':
        imgElem.src = 'charset/jgo.bmp'
        break;
      case 'ざ':
        imgElem.src = 'charset/jza.bmp'
        break;
      case 'じ':
        imgElem.src = 'charset/jzi.bmp'
        break;
      case 'ず':
        imgElem.src = 'charset/jzu.bmp'
        break;
      case 'ぜ':
        imgElem.src = 'charset/jze.bmp'
        break;
      case 'ぞ':
        imgElem.src = 'charset/jzo.bmp'
        break;
      case 'だ':
        imgElem.src = 'charset/jda.bmp'
        break;
      case 'ぢ':
        imgElem.src = 'charset/jdi.bmp'
        break;
      case 'づ':
        imgElem.src = 'charset/jdu.bmp'
        break;
      case 'で':
        imgElem.src = 'charset/jde.bmp'
        break;
      case 'ど':
        imgElem.src = 'charset/jdo.bmp'
        break;
      case 'ば':
        imgElem.src = 'charset/jba.bmp'
        break;
      case 'び':
        imgElem.src = 'charset/jbi.bmp'
        break;
      case 'ぶ':
        imgElem.src = 'charset/jbu.bmp'
        break;
      case 'べ':
        imgElem.src = 'charset/jbe.bmp'
        break;
      case 'ぼ':
        imgElem.src = 'charset/jbo.bmp'
        break;
      case 'ぱ':
        imgElem.src = 'charset/jpa.bmp'
        break;
      case 'ぴ':
        imgElem.src = 'charset/jpi.bmp'
        break;
      case 'ぷ':
        imgElem.src = 'charset/jpu.bmp'
        break;
      case 'ぺ':
        imgElem.src = 'charset/jpe.bmp'
        break;
      case 'ぽ':
        imgElem.src = 'charset/jpo.bmp'
        break;
      case '　':
        imgElem.src = 'charset/jspace.bmp'
        break;
    }
  }
}