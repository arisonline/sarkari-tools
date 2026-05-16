var _0x90ab = ["value", "dob", "getElementById", "getFullYear", "getMonth", "getDate", "innerHTML", "result", "<br><br> <b>You are ", " years, ", " months, and ", " days old.</b>", "floor", "timeResult", "<br><br><br /> <b>Total Months: ", " Months ", "</b><br><br /><b>Total Days: ", " Days ", "</b><br><br /><b>Total Hours: ", " Hours ", "</b><br><br /><b>Total Minutes: ", " Minutes ", "</b><br><br /><b>Total Seconds: ", " Seconds ", "</b>"];
function calculateAge() {
  var _0x2b83x2 = document[_0x90ab[2]](_0x90ab[1])[_0x90ab[0]];
  var _0x2b83x3 = new Date();
  var _0x2b83x4 = new Date(_0x2b83x2);
  var _0x2b83x5 = _0x2b83x3[_0x90ab[3]]() - _0x2b83x4[_0x90ab[3]]();
  var _0x2b83x6 = _0x2b83x3[_0x90ab[4]]() - _0x2b83x4[_0x90ab[4]]();
  var _0x2b83x7 = _0x2b83x3[_0x90ab[5]]() - _0x2b83x4[_0x90ab[5]]();
  if (_0x2b83x6 < 0 || _0x2b83x6 === 0 && _0x2b83x3[_0x90ab[5]]() < _0x2b83x4[_0x90ab[5]]()) {
    _0x2b83x5--;
    _0x2b83x6 += 12;
  }
  ;
  if (_0x2b83x7 < 0) {
    _0x2b83x6--;
    var _0x2b83x8 = new Date(_0x2b83x3[_0x90ab[3]](), _0x2b83x3[_0x90ab[4]]() - 1, 0);
    _0x2b83x7 += _0x2b83x8[_0x90ab[5]]();
  }
  ;
  document[_0x90ab[2]](_0x90ab[7])[_0x90ab[6]] = _0x90ab[8] + _0x2b83x5 + _0x90ab[9] + _0x2b83x6 + _0x90ab[10] + _0x2b83x7 + _0x90ab[11];
  calculateTime(_0x2b83x4, _0x2b83x3);
}
function calculateTime(_0x2b83xa, _0x2b83xb) {
  var _0x2b83xc = (_0x2b83xb[_0x90ab[3]]() - _0x2b83xa[_0x90ab[3]]()) * 12 + (_0x2b83xb[_0x90ab[4]]() - _0x2b83xa[_0x90ab[4]]());
  var _0x2b83xd = Math[_0x90ab[12]]((_0x2b83xb - _0x2b83xa) / 86400000);
  var _0x2b83xe = Math[_0x90ab[12]]((_0x2b83xb - _0x2b83xa) / 3600000);
  var _0x2b83xf = Math[_0x90ab[12]]((_0x2b83xb - _0x2b83xa) / 60000);
  var _0x2b83x10 = Math[_0x90ab[12]]((_0x2b83xb - _0x2b83xa) / 1000);
  document[_0x90ab[2]](_0x90ab[13])[_0x90ab[6]] = _0x90ab[14] + _0x2b83xc + _0x90ab[15] + _0x90ab[16] + _0x2b83xd + _0x90ab[17] + _0x90ab[18] + _0x2b83xe + _0x90ab[19] + _0x90ab[20] + _0x2b83xf + _0x90ab[21] + _0x90ab[22] + _0x2b83x10 + _0x90ab[23] + _0x90ab[24];
}
