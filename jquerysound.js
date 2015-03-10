function playsound(soundobj) {
  var embed = document.createElement('embed');
  embed.setAttribute('width',1);
  embed.setAttribute('height',1);
  embed.setAttribute('src',soundobj);
  embed.setAttribute('autostart', false);
  embed.setAttribute('enablejavascript', true);
  embed.Play();
}
