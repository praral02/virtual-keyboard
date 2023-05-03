/* eslint-disable max-len *//* eslint-disable linebreak-style */
window.onload = function() {
  const div = document.createElement('div');
  const textarea = document.createElement('textarea');
  const rowDigit = document.createElement('div');
  const rowTab = document.createElement('div');
  const rowCaps = document.createElement('div');
  const rowZ = document.createElement('div');
  const rowCtrl = document.createElement('div');
  const descr = document.createElement('p');
  let changeLang = 0;
  descr.innerHTML = 'Для смены языка используйте Shift + Alt';


  div.setAttribute('class', 'keyboard');
  rowDigit.setAttribute('class', 'rowDigit');
  rowTab.setAttribute('class', 'rowTab');
  rowCaps.setAttribute('class', 'rowCaps');
  rowZ.setAttribute('class', 'rowZ');
  rowCtrl.setAttribute('class', 'rowCtrl');
  textarea.setAttribute('rows', '5');
  textarea.setAttribute('readonly', 'readonly');

  const shiftL = document.createElement('span');
  shiftL.setAttribute('class', 'shiftL');
  shiftL.innerHTML = 'shift';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'ShiftLeft') {
      if (changeLang == 1) {
        shiftL.classList.add('active');
        rowZ.classList.add('upperCase');
        rowCaps.classList.add('upperCase');
        rowTab.classList.add('upperCase');
        n1.innerHTML = '!';
        n2.innerHTML = '@';
        n3.innerHTML = '#';
        n4.innerHTML = '$';
        n5.innerHTML = '%';
        n6.innerHTML = '^';
        n7.innerHTML = '&';
        n8.innerHTML = '*';
        n9.innerHTML = '(';
        n0.innerHTML = ')';
        equal.innerHTML = '+';
        minus.innerHTML = '_';
        dolph.innerHTML = '~';
        return;
      }
      n1.innerHTML = '!';
      n2.innerHTML = '@';
      n3.innerHTML = '#';
      n4.innerHTML = '$';
      n5.innerHTML = '%';
      n6.innerHTML = '^';
      n7.innerHTML = '&';
      n8.innerHTML = '*';
      n9.innerHTML = '(';
      n0.innerHTML = ')';
      equal.innerHTML = '+';
      minus.innerHTML = '_';
      dolph.innerHTML = '~';
      shiftL.classList.add('active');
      rowZ.classList.add('upperCase');
      rowCaps.classList.add('upperCase');
      rowTab.classList.add('upperCase');
      comma.innerHTML = '<';
      dot.innerHTML = '>';
      slash.innerHTML = '?';
      semicolon.innerHTML = ':';
      quote.innerHTML = '\"';
      squrebr.innerHTML = '{';
      squrebrR.innerHTML = '}';
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'ShiftLeft') {
      if (changeLang == 1) {
        shiftL.classList.remove('active');
        rowZ.classList.remove('upperCase');
        rowCaps.classList.remove('upperCase');
        rowTab.classList.remove('upperCase');
        n1.innerHTML = '1';
        n2.innerHTML = '2';
        n3.innerHTML = '3';
        n4.innerHTML = '4';
        n5.innerHTML = '5';
        n6.innerHTML = '6';
        n7.innerHTML = '7';
        n8.innerHTML = '8';
        n9.innerHTML = '9';
        n0.innerHTML = '0';
        equal.innerHTML = '=';
        minus.innerHTML = '-';
        dolph.innerHTML = '\`';
        return;
      }
      shiftL.classList.remove('active');
      rowZ.classList.remove('upperCase');
      rowCaps.classList.remove('upperCase');
      rowTab.classList.remove('upperCase');
      comma.innerHTML = ',';
      dot.innerHTML = '.';
      slash.innerHTML = '/';
      semicolon.innerHTML = ';';
      quote.innerHTML = '\'';
      squrebr.innerHTML = '[';
      squrebrR.innerHTML = ']';
      n1.innerHTML = '1';
      n2.innerHTML = '2';
      n3.innerHTML = '3';
      n4.innerHTML = '4';
      n5.innerHTML = '5';
      n6.innerHTML = '6';
      n7.innerHTML = '7';
      n8.innerHTML = '8';
      n9.innerHTML = '9';
      n0.innerHTML = '0';
      equal.innerHTML = '=';
      minus.innerHTML = '-';
      dolph.innerHTML = '\`';
    }
  });


  const z = document.createElement('span');
  z.innerHTML = 'z';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyZ') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Я';
          z.classList.add('active');
          return;
        }
        textarea.innerHTML += 'Z';
        z.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'я';
          z.classList.add('active');
          return;
        }
        z.classList.add('active');
        textarea.innerHTML += 'z';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyZ') {
      z.classList.remove('active');
    }
  });


  const x = document.createElement('span');
  x.innerHTML = 'x';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyX') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Ч';
          x.classList.add('active');
          return;
        }
        textarea.innerHTML += 'X';
        x.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'ч';
          x.classList.add('active');
          return;
        }
        x.classList.add('active');
        textarea.innerHTML += 'x';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyX') {
      x.classList.remove('active');
    }
  });


  const c = document.createElement('span');
  c.innerHTML = 'c';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyC') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'С';
          c.classList.add('active');
          return;
        }
        textarea.innerHTML += 'C';
        c.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'с';
          c.classList.add('active');

          return;
        }
        c.classList.add('active');
        textarea.innerHTML += 'c';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyC') {
      c.classList.remove('active');
    }
  });


  const v = document.createElement('span');
  v.innerHTML = 'v';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyV') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'М';
          v.classList.add('active');
          return;
        }
        textarea.innerHTML += 'V';
        v.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'м';
          v.classList.add('active');

          return;
        }
        v.classList.add('active');
        textarea.innerHTML += 'v';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyV') {
      v.classList.remove('active');
    }
  });


  const b = document.createElement('span');
  b.innerHTML = 'b';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyB') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'И';
          b.classList.add('active');
          return;
        }
        textarea.innerHTML += 'B';
        b.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'и';
          b.classList.add('active');

          return;
        }
        b.classList.add('active');
        textarea.innerHTML += 'b';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyB') {
      b.classList.remove('active');
    }
  });


  const n = document.createElement('span');
  n.innerHTML = 'n';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyN') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Т';
          n.classList.add('active');
          return;
        }
        textarea.innerHTML += 'N';
        n.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'т';
          n.classList.add('active');

          return;
        }
        n.classList.add('active');
        textarea.innerHTML += 'n';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyN') {
      n.classList.remove('active');
    }
  });


  const m = document.createElement('span');
  m.innerHTML = 'm';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyM') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Ь';
          m.classList.add('active');
          return;
        }
        textarea.innerHTML += 'M';
        m.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'ь';
          m.classList.add('active');

          return;
        }
        m.classList.add('active');
        textarea.innerHTML += 'm';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyM') {
      m.classList.remove('active');
    }
  });


  const comma = document.createElement('span');
  comma.innerHTML = ',';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Comma') {
      if (changeLang == 1 && caps.classList.contains('active')) {
        textarea.innerHTML += 'Б';
        comma.classList.add('active');
        return;
      }
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Б';
          comma.classList.add('active');

          return;
        }
        textarea.innerHTML += '<';
        comma.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'б';
          comma.classList.add('active');

          return;
        }
        comma.classList.add('active');
        textarea.innerHTML += ',';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Comma') {
      comma.classList.remove('active');
    }
  });


  const dot = document.createElement('span');
  dot.innerHTML = '.';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Period') {
      if (changeLang == 1 && caps.classList.contains('active')) {
        dot.classList.add('active');
        textarea.innerHTML += 'Ю';

        return;
      }
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')) {
        if (changeLang == 1) {
          dot.classList.add('active');

          textarea.innerHTML += 'Ю';
          return;
        }
        textarea.innerHTML += '>';
        dot.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'ю';
          dot.classList.add('active');

          return;
        }
        dot.classList.add('active');
        textarea.innerHTML += '.';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Period') {
      dot.classList.remove('active');
    }
  });


  const slash = document.createElement('span');
  slash.innerHTML = '/';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Slash') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '?';
        slash.classList.add('active');
      } else {
        slash.classList.add('active');
        textarea.innerHTML += '/';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Slash') {
      slash.classList.remove('active');
    }
  });


  const topArr = document.createElement('span');
  topArr.innerHTML = '▲';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowUp') {
      topArr.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowUp') {
      topArr.classList.remove('active');
    }
  });


  const shiftR = document.createElement('span');
  shiftR.setAttribute('class', 'shiftL');
  shiftR.innerHTML = 'shift';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'ShiftRight') {
      if (changeLang == 1) {
        shiftR.classList.add('active');
        rowZ.classList.add('upperCase');
        rowCaps.classList.add('upperCase');
        rowTab.classList.add('upperCase');
        n1.innerHTML = '!';
        n2.innerHTML = '@';
        n3.innerHTML = '#';
        n4.innerHTML = '$';
        n5.innerHTML = '%';
        n6.innerHTML = '^';
        n7.innerHTML = '&';
        n8.innerHTML = '*';
        n9.innerHTML = '(';
        n0.innerHTML = ')';
        equal.innerHTML = '+';
        minus.innerHTML = '_';
        dolph.innerHTML = '~';
        return;
      }
      n1.innerHTML = '!';
      n2.innerHTML = '@';
      n3.innerHTML = '#';
      n4.innerHTML = '$';
      n5.innerHTML = '%';
      n6.innerHTML = '^';
      n7.innerHTML = '&';
      n8.innerHTML = '*';
      n9.innerHTML = '(';
      n0.innerHTML = ')';
      equal.innerHTML = '+';
      minus.innerHTML = '_';
      dolph.innerHTML = '~';
      shiftR.classList.add('active');
      rowZ.classList.add('upperCase');
      rowCaps.classList.add('upperCase');
      rowTab.classList.add('upperCase');
      comma.innerHTML = '<';
      dot.innerHTML = '>';
      slash.innerHTML = '?';
      semicolon.innerHTML = ':';
      quote.innerHTML = '\"';
      squrebr.innerHTML = '{';
      squrebrR.innerHTML = '}';
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'ShiftRight') {
      if (changeLang == 1) {
        shiftR.classList.remove('active');
        rowZ.classList.remove('upperCase');
        rowCaps.classList.remove('upperCase');
        rowTab.classList.remove('upperCase');
        n1.innerHTML = '1';
        n2.innerHTML = '2';
        n3.innerHTML = '3';
        n4.innerHTML = '4';
        n5.innerHTML = '5';
        n6.innerHTML = '6';
        n7.innerHTML = '7';
        n8.innerHTML = '8';
        n9.innerHTML = '9';
        n0.innerHTML = '0';
        equal.innerHTML = '=';
        minus.innerHTML = '-';
        dolph.innerHTML = '\`';
        return;
      }
      shiftR.classList.remove('active');
      rowZ.classList.remove('upperCase');
      rowCaps.classList.remove('upperCase');
      rowTab.classList.remove('upperCase');
      comma.innerHTML = ',';
      dot.innerHTML = '.';
      slash.innerHTML = '/';
      semicolon.innerHTML = ';';
      quote.innerHTML = '\'';
      squrebr.innerHTML = '[';
      squrebrR.innerHTML = ']';
      n1.innerHTML = '1';
      n2.innerHTML = '2';
      n3.innerHTML = '3';
      n4.innerHTML = '4';
      n5.innerHTML = '5';
      n6.innerHTML = '6';
      n7.innerHTML = '7';
      n8.innerHTML = '8';
      n9.innerHTML = '9';
      n0.innerHTML = '0';
      equal.innerHTML = '=';
      minus.innerHTML = '-';
      dolph.innerHTML = '\`';
    }
  });


  // Ctrl


  const ctrl = document.createElement('span');
  ctrl.innerHTML = 'Ctrl';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'ControlLeft') {
      ctrl.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'ControlLeft') {
      ctrl.classList.remove('active');
    }
  });


  const win = document.createElement('span');
  win.innerHTML = 'Win';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'MetaLeft') {
      win.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'MetaLeft') {
      win.classList.remove('active');
    }
  });


  const alt = document.createElement('span');
  alt.innerHTML = 'Alt';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'AltLeft') {
      alt.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'AltLeft') {
      alt.classList.remove('active');
    }
  });


  const space = document.createElement('span');
  space.setAttribute('class', 'space');
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Space') {
      textarea.innerHTML += ' ';
      space.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Space') {
      space.classList.remove('active');
    }
  });


  const altR = document.createElement('span');
  altR.innerHTML = 'Alt';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'AltRight') {
      altR.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'AltRight') {
      altR.classList.remove('active');
    }
  });


  const leftArr = document.createElement('span');
  leftArr.innerHTML = '◄';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowLeft') {
      leftArr.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowLeft') {
      leftArr.classList.remove('active');
    }
  });


  const botArr = document.createElement('span');
  botArr.innerHTML = '▼';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowDown') {
      botArr.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowDown') {
      botArr.classList.remove('active');
    }
  });


  const rightArr = document.createElement('span');
  rightArr.innerHTML = '►';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowRight') {
      rightArr.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowRight') {
      rightArr.classList.remove('active');
    }
  });


  const ctrlR = document.createElement('span');
  ctrlR.innerHTML = 'Ctrl';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'ControlRight') {
      ctrlR.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'ControlRight') {
      ctrlR.classList.remove('active');
    }
  });


  // Caps


  const caps = document.createElement('span');
  caps.setAttribute('class', 'capsLock');
  caps.innerHTML = 'Caps Lock';
  let count = 0;
  document.addEventListener('keydown', (event) => {
    if (count === 0) {
      if (event.code == 'CapsLock' && count === 0) {
        caps.classList.add('active');
        rowZ.classList.add('upperCase');
        rowCaps.classList.add('upperCase');
        rowTab.classList.add('upperCase');
        count++;
      }
    } else if (count != 0) {
      if (event.code == 'CapsLock' && count === 1) {
        caps.classList.remove('active');
        rowZ.classList.remove('upperCase');
        rowCaps.classList.remove('upperCase');
        rowTab.classList.remove('upperCase');

        count--;
      }
    }
  });


  const a = document.createElement('span');
  a.innerHTML = 'a';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyA') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          a.classList.add('active');

          textarea.innerHTML += 'Ф';
          return;
        }
        textarea.innerHTML += 'A';
        a.classList.add('active');
      } else {
        if (changeLang == 1) {
          a.classList.add('active');

          textarea.innerHTML += 'ф';
          return;
        }
        a.classList.add('active');
        textarea.innerHTML += 'a';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyA') {
      a.classList.remove('active');
    }
  });


  const s = document.createElement('span');
  s.innerHTML = 's';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyS') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Ы';
          s.classList.add('active');

          return;
        }
        textarea.innerHTML += 'S';
        s.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'ы';
          s.classList.add('active');

          return;
        }
        s.classList.add('active');
        textarea.innerHTML += 's';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyS') {
      s.classList.remove('active');
    }
  });


  const d = document.createElement('span');
  d.innerHTML = 'd';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyD') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'В';
          d.classList.add('active');

          return;
        }
        textarea.innerHTML += 'D';
        d.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'в';
          d.classList.add('active');

          return;
        }
        d.classList.add('active');
        textarea.innerHTML += 'd';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyD') {
      d.classList.remove('active');
    }
  });


  const f = document.createElement('span');
  f.innerHTML = 'f';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyF') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'А';
          f.classList.add('active');

          return;
        }
        textarea.innerHTML += 'F';
        f.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'а';
          f.classList.add('active');

          return;
        }
        f.classList.add('active');
        textarea.innerHTML += 'f';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyF') {
      f.classList.remove('active');
    }
  });


  const g = document.createElement('span');
  g.innerHTML = 'g';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyG') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'П';
          g.classList.add('active');

          return;
        }
        textarea.innerHTML += 'G';
        g.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'п';
          g.classList.add('active');

          return;
        }
        g.classList.add('active');
        textarea.innerHTML += 'g';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyG') {
      g.classList.remove('active');
    }
  });


  const h = document.createElement('span');
  h.innerHTML = 'h';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyH') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Р';
          h.classList.add('active');

          return;
        }
        textarea.innerHTML += 'H';
        h.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'р';
          h.classList.add('active');

          return;
        }
        h.classList.add('active');
        textarea.innerHTML += 'h';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyH') {
      h.classList.remove('active');
    }
  });


  const j = document.createElement('span');
  j.innerHTML = 'j';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyJ') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'О';
          j.classList.add('active');

          return;
        }
        textarea.innerHTML += 'J';
        j.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'о';
          j.classList.add('active');

          return;
        }
        j.classList.add('active');
        textarea.innerHTML += 'j';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyJ') {
      j.classList.remove('active');
    }
  });


  const k = document.createElement('span');
  k.innerHTML = 'k';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyK') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Л';
          k.classList.add('active');

          return;
        }
        textarea.innerHTML += 'K';
        k.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'л';
          k.classList.add('active');

          return;
        }
        k.classList.add('active');
        textarea.innerHTML += 'k';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyK') {
      k.classList.remove('active');
    }
  });


  const l = document.createElement('span');
  l.innerHTML = 'l';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyL') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Д';
          l.classList.add('active');

          return;
        }
        textarea.innerHTML += 'L';
        l.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'д';
          l.classList.add('active');

          return;
        }
        l.classList.add('active');
        textarea.innerHTML += 'l';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyL') {
      l.classList.remove('active');
    }
  });


  const semicolon = document.createElement('span');
  semicolon.innerHTML = ';';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Semicolon') {
      if (changeLang == 1 && caps.classList.contains('active')) {
        textarea.innerHTML += 'Ж';
        semicolon.classList.add('active');

        return;
      }
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Ж';
          semicolon.classList.add('active');

          return;
        }
        textarea.innerHTML += ':';
        semicolon.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'ж';
          semicolon.classList.add('active');

          return;
        }
        semicolon.classList.add('active');
        textarea.innerHTML += ';';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Semicolon') {
      semicolon.classList.remove('active');
    }
  });


  const quote = document.createElement('span');
  quote.innerHTML = '\'';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Quote') {
      if (changeLang == 1 && caps.classList.contains('active')) {
        textarea.innerHTML += 'Э';
        quote.classList.add('active');

        return;
      }
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Э';
          quote.classList.add('active');

          return;
        }
        textarea.innerHTML += '\"';
        quote.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'э';
          quote.classList.add('active');

          return;
        }
        quote.classList.add('active');
        textarea.innerHTML += '\'';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Quote') {
      quote.classList.remove('active');
    }
  });


  const enter = document.createElement('span');
  enter.setAttribute('class', 'capsLock');
  enter.innerHTML = 'Enter';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
      enter.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Enter') {
      enter.classList.remove('active');
    }
  });


  // Tab


  const tab = document.createElement('span');
  tab.setAttribute('class', 'capsLock');
  tab.innerHTML = 'Tab';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Tab') {
      tab.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Tab') {
      tab.classList.remove('active');
    }
  });

  const q = document.createElement('span');
  q.innerHTML = 'q';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyQ') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Й';
          q.classList.add('active');

          return;
        }
        textarea.innerHTML += 'Q';
        q.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'й';
          q.classList.add('active');

          return;
        }
        q.classList.add('active');
        textarea.innerHTML += 'q';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyQ') {
      q.classList.remove('active');
    }
  });

  const w = document.createElement('span');
  w.innerHTML = 'w';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyW') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Ц';
          w.classList.add('active');

          return;
        }
        textarea.innerHTML += 'W';
        w.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'ц';
          w.classList.add('active');

          return;
        }
        w.classList.add('active');
        textarea.innerHTML += 'w';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyW') {
      w.classList.remove('active');
    }
  });

  const e = document.createElement('span');
  e.innerHTML = 'e';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyE') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'У';
          e.classList.add('active');

          return;
        }
        textarea.innerHTML += 'E';
        e.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'у';
          e.classList.add('active');

          return;
        }
        e.classList.add('active');
        textarea.innerHTML += 'e';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyE') {
      e.classList.remove('active');
    }
  });

  const r = document.createElement('span');
  r.innerHTML = 'r';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyR') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'К';
          r.classList.add('active');

          return;
        }
        textarea.innerHTML += 'R';
        r.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'к';
          r.classList.add('active');

          return;
        }
        r.classList.add('active');
        textarea.innerHTML += 'r';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyR') {
      r.classList.remove('active');
    }
  });
  const t = document.createElement('span');
  t.innerHTML = 't';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyT') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Е';
          t.classList.add('active');

          return;
        }
        textarea.innerHTML += 'T';
        t.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'е';
          t.classList.add('active');

          return;
        }
        t.classList.add('active');
        textarea.innerHTML += 't';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyT') {
      t.classList.remove('active');
    }
  });
  const y = document.createElement('span');
  y.innerHTML = 'y';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyY') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Н';
          y.classList.add('active');

          return;
        }
        textarea.innerHTML += 'Y';
        y.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'н';
          y.classList.add('active');

          return;
        }
        y.classList.add('active');
        textarea.innerHTML += 'y';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyY') {
      y.classList.remove('active');
    }
  });
  const u = document.createElement('span');
  u.innerHTML = 'u';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyU') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Г';
          u.classList.add('active');

          return;
        }
        textarea.innerHTML += 'U';
        u.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'г';
          u.classList.add('active');

          return;
        }
        u.classList.add('active');
        textarea.innerHTML += 'u';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyU') {
      u.classList.remove('active');
    }
  });
  const i = document.createElement('span');
  i.innerHTML = 'i';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyI') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Ш';
          i.classList.add('active');

          return;
        }
        textarea.innerHTML += 'I';
        i.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'ш';
          i.classList.add('active');

          return;
        }
        i.classList.add('active');
        textarea.innerHTML += 'i';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyI') {
      i.classList.remove('active');
    }
  });
  const o = document.createElement('span');
  o.innerHTML = 'o';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyO') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Щ';
          o.classList.add('active');

          return;
        }
        textarea.innerHTML += 'O';
        o.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'щ';
          o.classList.add('active');

          return;
        }
        o.classList.add('active');
        textarea.innerHTML += 'o';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyO') {
      o.classList.remove('active');
    }
  });
  const p = document.createElement('span');
  p.innerHTML = 'p';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyP') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
        if (changeLang == 1) {
          p.classList.add('active');

          textarea.innerHTML += 'З';
          return;
        }
        textarea.innerHTML += 'P';
        p.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'з';
          p.classList.add('active');

          return;
        }
        p.classList.add('active');
        textarea.innerHTML += 'p';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyP') {
      p.classList.remove('active');
    }
  });
  const squrebr = document.createElement('span');
  squrebr.innerHTML = '[';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'BracketLeft') {
      if (changeLang == 1 && caps.classList.contains('active')) {
        textarea.innerHTML += 'Х';
        squrebr.classList.add('active');

        return;
      }
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Х';
          squrebr.classList.add('active');

          return;
        }
        textarea.innerHTML += '{';
        squrebr.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'х';
          squrebr.classList.add('active');

          return;
        }
        squrebr.classList.add('active');
        textarea.innerHTML += '[';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'BracketLeft') {
      squrebr.classList.remove('active');
    }
  });

  const squrebrR = document.createElement('span');
  squrebrR.innerHTML = ']';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'BracketRight') {
      if (changeLang == 1 && caps.classList.contains('active')) {
        textarea.innerHTML += 'Ъ';
        squrebrR.classList.add('active');

        return;
      }
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        if (changeLang == 1) {
          textarea.innerHTML += 'Ъ';
          squrebrR.classList.add('active');

          return;
        }
        textarea.innerHTML += '}';
        squrebrR.classList.add('active');
      } else {
        if (changeLang == 1) {
          textarea.innerHTML += 'ъ';
          squrebrR.classList.add('active');

          return;
        }
        squrebrR.classList.add('active');
        textarea.innerHTML += ']';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'BracketRight') {
      squrebrR.classList.remove('active');
    }
  });
  const del = document.createElement('span');
  del.setAttribute('class', 'del');
  del.innerHTML = 'Del';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Delete') {
      del.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Delete') {
      del.classList.remove('active');
    }
  });


  const dolph = document.createElement('span');
  dolph.innerHTML = '\`';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Backquote') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '~';
        dolph.classList.add('active');
      } else {
        dolph.classList.add('active');
        textarea.innerHTML += '\`';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Backquote') {
      dolph.classList.remove('active');
    }
  });


  const n1 = document.createElement('span');
  n1.innerHTML = '1';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit1') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '!';
        n1.classList.add('active');
      } else {
        n1.classList.add('active');
        textarea.innerHTML += '1';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit1') {
      n1.classList.remove('active');
    }
  });


  const n2 = document.createElement('span');
  n2.innerHTML = '2';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit2') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '@';
        n2.classList.add('active');
      } else {
        n2.classList.add('active');
        textarea.innerHTML += '2';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit2') {
      n2.classList.remove('active');
    }
  });


  const n3 = document.createElement('span');
  n3.innerHTML = '3';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit3') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '#';
        n3.classList.add('active');
      } else {
        n3.classList.add('active');
        textarea.innerHTML += '3';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit3') {
      n3.classList.remove('active');
    }
  });


  const n4 = document.createElement('span');
  n4.innerHTML = '4';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit4') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '$';
        n4.classList.add('active');
      } else {
        n4.classList.add('active');
        textarea.innerHTML += '4';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit4') {
      n4.classList.remove('active');
    }
  });


  const n5 = document.createElement('span');
  n5.innerHTML = '5';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit5') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '%';
        n5.classList.add('active');
      } else {
        n5.classList.add('active');
        textarea.innerHTML += '5';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit5') {
      n5.classList.remove('active');
    }
  });


  const n6 = document.createElement('span');
  n6.innerHTML = '6';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit6') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '^';
        n6.classList.add('active');
      } else {
        n6.classList.add('active');
        textarea.innerHTML += '6';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit6') {
      n6.classList.remove('active');
    }
  });


  const n7 = document.createElement('span');
  n7.innerHTML = '7';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit7') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '&';
        n7.classList.add('active');
      } else {
        n7.classList.add('active');
        textarea.innerHTML += '7';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit7') {
      n7.classList.remove('active');
    }
  });


  const n8 = document.createElement('span');
  n8.innerHTML = '8';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit8') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '*';
        n8.classList.add('active');
      } else {
        n8.classList.add('active');
        textarea.innerHTML += '8';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit8') {
      n8.classList.remove('active');
    }
  });


  const n9 = document.createElement('span');
  n9.innerHTML = '9';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit9') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '(';
        n9.classList.add('active');
      } else {
        n9.classList.add('active');
        textarea.innerHTML += '9';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit9') {
      n9.classList.remove('active');
    }
  });


  const n0 = document.createElement('span');
  n0.innerHTML = '0';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Digit0') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += ')';
        n0.classList.add('active');
      } else {
        n0.classList.add('active');
        textarea.innerHTML += '0';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Digit0') {
      n0.classList.remove('active');
    }
  });


  const minus = document.createElement('span');
  minus.innerHTML = '-';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Minus') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '_';
        minus.classList.add('active');
      } else {
        minus.classList.add('active');
        textarea.innerHTML += '-';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Minus') {
      minus.classList.remove('active');
    }
  });


  const equal = document.createElement('span');
  equal.innerHTML = '=';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Equal') {
      if (shiftL.classList.contains('active') || shiftR.classList.contains('active') ) {
        textarea.innerHTML += '+';
        equal.classList.add('active');
      } else {
        equal.classList.add('active');
        textarea.innerHTML += '=';
      }
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Equal') {
      equal.classList.remove('active');
    }
  });


  const backSpace = document.createElement('span');
  backSpace.setAttribute('class', 'capsLock');
  backSpace.innerHTML = 'Backspace';
  document.addEventListener('keydown', (event) => {
    if (event.code == 'Backspace') {
      text = textarea.innerHTML;
      textarea.innerHTML = text.slice(0, text.length - 1);
      backSpace.classList.add('active');
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code == 'Backspace') {
      backSpace.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (event) =>{
    if ((shiftL.classList.contains('active') || shiftR.classList.contains('active') ) && alt.classList.contains('active') && changeLang == 0 ) {
      changeLang++;
      console.log(changeLang);
    } else if ((shiftL.classList.contains('active') || shiftR.classList.contains('active') ) && alt.classList.contains('active') && changeLang == 1) {
      changeLang--;
      console.log(changeLang);
    }
    if (changeLang == 1 ) {
      z.innerHTML = 'я';
      x.innerHTML = 'ч';
      c.innerHTML = 'с';
      v.innerHTML = 'м';
      b.innerHTML = 'и';
      n.innerHTML = 'т';
      m.innerHTML = 'ь';
      comma.innerHTML = 'б';
      dot.innerHTML = 'ю';
      slash.innerHTML = '.';
      a.innerHTML = 'ф';
      s.innerHTML = 'ы';
      d.innerHTML = 'в';
      f.innerHTML = 'а';
      g.innerHTML = 'п';
      h.innerHTML = 'р';
      j.innerHTML = 'о';
      k.innerHTML = 'л';
      l.innerHTML = 'д';
      semicolon.innerHTML = 'ж';
      quote.innerHTML = 'э';
      q.innerHTML = 'й';
      w.innerHTML = 'ц';
      e.innerHTML = 'у';
      r.innerHTML = 'к';
      t.innerHTML = 'е';
      y.innerHTML = 'н';
      u.innerHTML = 'г';
      i.innerHTML = 'ш';
      o.innerHTML = 'щ';
      p.innerHTML = 'з';
      squrebr.innerHTML = 'х';
      squrebrR.innerHTML = 'ъ';
    } else {
      z.innerHTML = 'z';
      x.innerHTML = 'x';
      c.innerHTML = 'c';
      v.innerHTML = 'v';
      b.innerHTML = 'b';
      n.innerHTML = 'n';
      m.innerHTML = 'm';
      comma.innerHTML = ',';
      dot.innerHTML = '.';
      slash.innerHTML = '/';
      a.innerHTML = 'a';
      s.innerHTML = 's';
      d.innerHTML = 'd';
      f.innerHTML = 'f';
      g.innerHTML = 'g';
      h.innerHTML = 'h';
      j.innerHTML = 'j';
      k.innerHTML = 'k';
      l.innerHTML = 'l';
      semicolon.innerHTML = ';';
      quote.innerHTML = '\'';
      q.innerHTML = 'q';
      w.innerHTML = 'w';
      e.innerHTML = 'e';
      r.innerHTML = 'r';
      t.innerHTML = 't';
      y.innerHTML = 'y';
      u.innerHTML = 'u';
      i.innerHTML = 'i';
      o.innerHTML = 'o';
      p.innerHTML = 'p';
      squrebr.innerHTML = '[';
      squrebrR.innerHTML = ']';
    }
  });


  const spans = [z, x, c, v, b, n, m, a, s, d, f, g, h, j, k, l, semicolon, quote,
    q, w, e, r, t, y, u, i, o, p, squrebr, squrebrR, dot, comma, slash, dolph, n1, n2, n3,
    n4, n5, n6, n7, n8, n9, n0, minus, equal];

  caps.onclick = function() {
    if (count === 0) {
      caps.classList.add('active');
      spans.forEach((el) => el.classList.add('upperCase'));
      count++;
      console.log(count);
    } else if (count != 0) {
      if (count === 1) {
        caps.classList.remove('active');
        spans.forEach((el) => el.classList.remove('upperCase'));
        count--;
        console.log(count);
      }
    }
  };
  if (count === 0) {
    spans.forEach((el) => el.classList.remove('upperCase'));
  } else if (count == 1) {
    spans.forEach((el) => el.classList.add('upperCase'));
  }
  document.addEventListener('mousedown', (event) =>{
    if (event.target == shiftL ) {
      if (changeLang == 1) {
        shiftL.classList.add('active');
        spans.forEach((el) => el.classList.add('upperCase'));
        n1.innerHTML = '!';
        n2.innerHTML = '@';
        n3.innerHTML = '#';
        n4.innerHTML = '$';
        n5.innerHTML = '%';
        n6.innerHTML = '^';
        n7.innerHTML = '&';
        n8.innerHTML = '*';
        n9.innerHTML = '(';
        n0.innerHTML = ')';
        equal.innerHTML = '+';
        minus.innerHTML = '_';
        dolph.innerHTML = '~';
        return;
      }
      n1.innerHTML = '!';
      n2.innerHTML = '@';
      n3.innerHTML = '#';
      n4.innerHTML = '$';
      n5.innerHTML = '%';
      n6.innerHTML = '^';
      n7.innerHTML = '&';
      n8.innerHTML = '*';
      n9.innerHTML = '(';
      n0.innerHTML = ')';
      equal.innerHTML = '+';
      minus.innerHTML = '_';
      dolph.innerHTML = '~';
      shiftL.classList.add('active');
      spans.forEach((el) => el.classList.add('upperCase'));
      comma.innerHTML = '<';
      dot.innerHTML = '>';
      slash.innerHTML = '?';
      semicolon.innerHTML = ':';
      quote.innerHTML = '\"';
      squrebr.innerHTML = '{';
      squrebrR.innerHTML = '}';
    }
  });
  document.addEventListener('mouseup', (event) => {
    if (changeLang == 1) {
      shiftL.classList.remove('active');
      spans.forEach((el) => el.classList.remove('upperCase'));
      n1.innerHTML = '1';
      n2.innerHTML = '2';
      n3.innerHTML = '3';
      n4.innerHTML = '4';
      n5.innerHTML = '5';
      n6.innerHTML = '6';
      n7.innerHTML = '7';
      n8.innerHTML = '8';
      n9.innerHTML = '9';
      n0.innerHTML = '0';
      equal.innerHTML = '=';
      minus.innerHTML = '-';
      dolph.innerHTML = '\`';
      return;
    }
    shiftL.classList.remove('active');
    spans.forEach((el) => el.classList.remove('upperCase'));
    comma.innerHTML = ',';
    dot.innerHTML = '.';
    slash.innerHTML = '/';
    semicolon.innerHTML = ';';
    quote.innerHTML = '\'';
    squrebr.innerHTML = '[';
    squrebrR.innerHTML = ']';
    n1.innerHTML = '1';
    n2.innerHTML = '2';
    n3.innerHTML = '3';
    n4.innerHTML = '4';
    n5.innerHTML = '5';
    n6.innerHTML = '6';
    n7.innerHTML = '7';
    n8.innerHTML = '8';
    n9.innerHTML = '9';
    n0.innerHTML = '0';
    equal.innerHTML = '=';
    minus.innerHTML = '-';
    dolph.innerHTML = '\`';
  });


  document.addEventListener('mousedown', (event) =>{
    if (event.target == shiftR ) {
      if (changeLang == 1) {
        shiftR.classList.add('active');
        spans.forEach((el) => el.classList.add('upperCase'));

        n1.innerHTML = '!';
        n2.innerHTML = '@';
        n3.innerHTML = '#';
        n4.innerHTML = '$';
        n5.innerHTML = '%';
        n6.innerHTML = '^';
        n7.innerHTML = '&';
        n8.innerHTML = '*';
        n9.innerHTML = '(';
        n0.innerHTML = ')';
        equal.innerHTML = '+';
        minus.innerHTML = '_';
        dolph.innerHTML = '~';
        return;
      }
      n1.innerHTML = '!';
      n2.innerHTML = '@';
      n3.innerHTML = '#';
      n4.innerHTML = '$';
      n5.innerHTML = '%';
      n6.innerHTML = '^';
      n7.innerHTML = '&';
      n8.innerHTML = '*';
      n9.innerHTML = '(';
      n0.innerHTML = ')';
      equal.innerHTML = '+';
      minus.innerHTML = '_';
      dolph.innerHTML = '~';
      shiftR.classList.add('active');
      spans.forEach((el) => el.classList.add('upperCase'));

      comma.innerHTML = '<';
      dot.innerHTML = '>';
      slash.innerHTML = '?';
      semicolon.innerHTML = ':';
      quote.innerHTML = '\"';
      squrebr.innerHTML = '{';
      squrebrR.innerHTML = '}';
    }
  });
  document.addEventListener('mouseup', (event) => {
    if (changeLang == 1) {
      shiftR.classList.remove('active');
      spans.forEach((el) => el.classList.remove('upperCase'));

      n1.innerHTML = '1';
      n2.innerHTML = '2';
      n3.innerHTML = '3';
      n4.innerHTML = '4';
      n5.innerHTML = '5';
      n6.innerHTML = '6';
      n7.innerHTML = '7';
      n8.innerHTML = '8';
      n9.innerHTML = '9';
      n0.innerHTML = '0';
      equal.innerHTML = '=';
      minus.innerHTML = '-';
      dolph.innerHTML = '\`';
      return;
    }
    shiftR.classList.remove('active');
    spans.forEach((el) => el.classList.remove('upperCase'));
    comma.innerHTML = ',';
    dot.innerHTML = '.';
    slash.innerHTML = '/';
    semicolon.innerHTML = ';';
    quote.innerHTML = '\'';
    squrebr.innerHTML = '[';
    squrebrR.innerHTML = ']';
    n1.innerHTML = '1';
    n2.innerHTML = '2';
    n3.innerHTML = '3';
    n4.innerHTML = '4';
    n5.innerHTML = '5';
    n6.innerHTML = '6';
    n7.innerHTML = '7';
    n8.innerHTML = '8';
    n9.innerHTML = '9';
    n0.innerHTML = '0';
    equal.innerHTML = '=';
    minus.innerHTML = '-';
    dolph.innerHTML = '\`';
  });


  for (let i = 0; i< spans.length; i++) {
    spans[i].addEventListener('mousedown', (event) => {
      if (spans[i] === z) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'Z';
            return;
          }
          textarea.innerHTML += 'z';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Я';
          return;
        }
        textarea.innerHTML += 'я';
        return;
      };
      if (spans[i] === x) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'X';
            return;
          }
          textarea.innerHTML += 'x';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Ч';
          return;
        }
        textarea.innerHTML += 'ч';
        return;
      };
      if (spans[i] === c) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'C';
            return;
          }
          textarea.innerHTML += 'c';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'С';
          return;
        }
        textarea.innerHTML += 'с';
        return;
      };
      if (spans[i] === v) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'V';
            return;
          }
          textarea.innerHTML += 'v';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'М';
          return;
        }
        textarea.innerHTML += 'м';
        return;
      };
      if (spans[i] === b) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'B';
            return;
          }
          textarea.innerHTML += 'b';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'И';
          return;
        }
        textarea.innerHTML += 'и';
        return;
      };
      if (spans[i] === n) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'N';
            return;
          }
          textarea.innerHTML += 'n';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Т';
          return;
        }
        textarea.innerHTML += 'т';
        return;
      };
      if (spans[i] === m) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'M';
            return;
          }
          textarea.innerHTML += 'm';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Ь';
          return;
        }
        textarea.innerHTML += 'ь';
        return;
      };
      if (spans[i] === comma) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += '<';
            return;
          }
          textarea.innerHTML += ',';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Б';
          return;
        }
        textarea.innerHTML += 'б';
        return;
      };
      if (spans[i] === dot) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += '>';
            return;
          }
          textarea.innerHTML += '.';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Ю';
          return;
        }
        textarea.innerHTML += 'ю';
        return;
      };
      if (spans[i] === slash) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += '?';
            return;
          }
          textarea.innerHTML += '/';
          return;
        }
      };
      if (spans[i] === a) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'A';
            return;
          }
          textarea.innerHTML += 'a';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Ф';
          return;
        }
        textarea.innerHTML += 'ф';
        return;
      };
      if (spans[i] === s) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'S';
            return;
          }
          textarea.innerHTML += 's';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Ы';
          return;
        }
        textarea.innerHTML += 'ы';
        return;
      };
      if (spans[i] === d) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'D';
            return;
          }
          textarea.innerHTML += 'd';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'В';
          return;
        }
        textarea.innerHTML += 'в';
        return;
      };
      if (spans[i] === f) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'F';
            return;
          }
          textarea.innerHTML += 'f';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'А';
          return;
        }
        textarea.innerHTML += 'а';
        return;
      };
      if (spans[i] === g) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'G';
            return;
          }
          textarea.innerHTML += 'g';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'П';
          return;
        }
        textarea.innerHTML += 'п';
        return;
      };
      if (spans[i] === h) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'H';
            return;
          }
          textarea.innerHTML += 'h';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Р';
          return;
        }
        textarea.innerHTML += 'р';
        return;
      };
      if (spans[i] === j) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'J';
            return;
          }
          textarea.innerHTML += 'j';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'О';
          return;
        }
        textarea.innerHTML += 'о';
        return;
      };
      if (spans[i] === k) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'K';
            return;
          }
          textarea.innerHTML += 'k';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Л';
          return;
        }
        textarea.innerHTML += 'л';
        return;
      };
      if (spans[i] === l) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'L';
            return;
          }
          textarea.innerHTML += 'l';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Д';
          return;
        }
        textarea.innerHTML += 'д';
        return;
      };
      if (spans[i] === l) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'L';
            return;
          }
          textarea.innerHTML += 'l';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Д';
          return;
        }
        textarea.innerHTML += 'д';
        return;
      };
      if (spans[i] === semicolon) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += ':';
            return;
          }
          textarea.innerHTML += ';';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Ж';
          return;
        }
        textarea.innerHTML += 'ж';
        return;
      };
      if (spans[i] === quote) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += '\"';
            return;
          }
          textarea.innerHTML += '\'';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Э';
          return;
        }
        textarea.innerHTML += 'э';
        return;
      };
      if (spans[i] === q) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'Q';
            return;
          }
          textarea.innerHTML += 'q';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Й';
          return;
        }
        textarea.innerHTML += 'й';
        return;
      };
      if (spans[i] === w) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'W';
            return;
          }
          textarea.innerHTML += 'w';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Ц';
          return;
        }
        textarea.innerHTML += 'ц';
        return;
      };
      if (spans[i] === e) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'E';
            return;
          }
          textarea.innerHTML += 'e';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'У';
          return;
        }
        textarea.innerHTML += 'у';
        return;
      };
      if (spans[i] === r) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'R';
            return;
          }
          textarea.innerHTML += 'r';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'К';
          return;
        }
        textarea.innerHTML += 'к';
        return;
      };
      if (spans[i] === t) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'T';
            return;
          }
          textarea.innerHTML += 't';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Е';
          return;
        }
        textarea.innerHTML += 'е';
        return;
      };
      if (spans[i] === y) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'Y';
            return;
          }
          textarea.innerHTML += 'y';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Н';
          return;
        }
        textarea.innerHTML += 'н';
        return;
      };
      if (spans[i] === u) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'U';
            return;
          }
          textarea.innerHTML += 'u';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Г';
          return;
        }
        textarea.innerHTML += 'г';
        return;
      };
      if (spans[i] === i) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'I';
            return;
          }
          textarea.innerHTML += 'i';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Ш';
          return;
        }
        textarea.innerHTML += 'ш';
        return;
      };
      if (spans[i] === o) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'O';
            return;
          }
          textarea.innerHTML += 'o';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Щ';
          return;
        }
        textarea.innerHTML += 'щ';
        return;
      };
      if (spans[i] === p) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += 'P';
            return;
          }
          textarea.innerHTML += 'p';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'З';
          return;
        }
        textarea.innerHTML += 'з';
        return;
      };
      if (spans[i] === squrebr) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += '{';
            return;
          }
          textarea.innerHTML += '[';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Х';
          return;
        }
        textarea.innerHTML += 'х';
        return;
      };
      if (spans[i] === squrebrR) {
        if (changeLang === 0) {
          if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
            textarea.innerHTML += '}';
            return;
          }
          textarea.innerHTML += ']';
          return;
        }
        if (shiftL.classList.contains('active') || shiftR.classList.contains('active')|| caps.classList.contains('active') ) {
          textarea.innerHTML += 'Ъ';
          return;
        }
        textarea.innerHTML += 'ъ';
        return;
      };
    });
  }
  document.addEventListener('mouseup', (event) => {
    if (event.target == caps) {
      caps.classList.remove('active');
      rowZ.classList.remove('upperCase');
      rowCaps.classList.remove('upperCase');
      rowTab.classList.remove('upperCase');
    }
  });

  div.appendChild(rowDigit);
  div.appendChild(rowTab);
  div.appendChild(rowCaps);
  div.appendChild(rowZ);
  div.appendChild(rowCtrl);


  rowDigit.appendChild(dolph);
  rowDigit.appendChild(n1);
  rowDigit.appendChild(n2);
  rowDigit.appendChild(n3);
  rowDigit.appendChild(n4);
  rowDigit.appendChild(n5);
  rowDigit.appendChild(n6);
  rowDigit.appendChild(n7);
  rowDigit.appendChild(n8);
  rowDigit.appendChild(n9);
  rowDigit.appendChild(n0);
  rowDigit.appendChild(minus);
  rowDigit.appendChild(equal);
  rowDigit.appendChild(backSpace);


  rowTab.appendChild(tab);
  rowTab.appendChild(q);
  rowTab.appendChild(w);
  rowTab.appendChild(e);
  rowTab.appendChild(r);
  rowTab.appendChild(t);
  rowTab.appendChild(y);
  rowTab.appendChild(u);
  rowTab.appendChild(i);
  rowTab.appendChild(o);
  rowTab.appendChild(p);
  rowTab.appendChild(squrebr);
  rowTab.appendChild(squrebrR);
  rowTab.appendChild(del);


  rowCaps.appendChild(caps);
  rowCaps.appendChild(a);
  rowCaps.appendChild(s);
  rowCaps.appendChild(d);
  rowCaps.appendChild(f);
  rowCaps.appendChild(g);
  rowCaps.appendChild(h);
  rowCaps.appendChild(j);
  rowCaps.appendChild(k);
  rowCaps.appendChild(l);
  rowCaps.appendChild(semicolon);
  rowCaps.appendChild(quote);
  rowCaps.appendChild(enter);


  rowZ.appendChild(shiftL);
  rowZ.appendChild(z);
  rowZ.appendChild(x);
  rowZ.appendChild(c);
  rowZ.appendChild(v);
  rowZ.appendChild(b);
  rowZ.appendChild(n);
  rowZ.appendChild(m);
  rowZ.appendChild(comma);
  rowZ.appendChild(dot);
  rowZ.appendChild(slash);
  rowZ.appendChild(topArr);
  rowZ.appendChild(shiftR);


  rowCtrl.appendChild(ctrl);
  rowCtrl.appendChild(win);
  rowCtrl.appendChild(alt);
  rowCtrl.appendChild(space);
  rowCtrl.appendChild(altR);
  rowCtrl.appendChild(leftArr);
  rowCtrl.appendChild(botArr);
  rowCtrl.appendChild(rightArr);
  rowCtrl.appendChild(ctrlR);


  document.body.appendChild(div);
  document.body.prepend(textarea);
  document.body.appendChild(descr);
};
