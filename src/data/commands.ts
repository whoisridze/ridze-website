import { urls } from './config';

export const banner = [
  '<span class="text-index">SYSTEM ERROR: Boundaries dissolved. Entering...</span>',
  "⣠⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣆⠀⠀⠀⠀⠈⢿⣧",
  "⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡆⠀⠀⠀⠀⠀⠙",
  "⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀",
  "⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⢻⡇⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⣿⠹⣦⠀⠀⠀⠀⠀⢰⡀⠀⠀⠀⢸⡇⠀⠀⠀⠀",
  "⡇⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⢠⡾⠃⢸⣇⣴⠀⠀⠀⠀⠀⢸⠀⠀⢸⣿⣀⠙⣧⡀⠀⠀⠀⠀⡇⠀⠀⠀⢸⣧⠀⠀⠀",
  "⡇⠀⠀⠀⠀⠀⠀⠀⢀⠇⠀⢀⡠⠤⢴⡿⠿⠿⠟⣿⠁⠀⠀⠀⠀⠀⢸⠀⠀⢸⡏⠛⠿⠿⢷⡶⠦⠤⣀⣿⠀⠀⠀⠀⣿⠀⠀",
  "⡇⠀⠀⠀⠀⠀⠀⠀⣼⠐⠊⠁⠀⢠⡟⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⢸⠀⠀⣿⠀⠀⠀⠀⠈⢷⡄⠀⠀⢹⠀⠀⠀⠀⣿⠀⠀⣀⣤⣶",
  "⣿⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⣀⣤⡟⠃⣀⣈⣀⠒⠠⢿⡀⠀⠀⠀⠀⢸⡄⢰⡇⠀⠔⢂⣈⣁⡘⢿⣦⢄⣼⠀⠀⠀⠀⣿⠀⠀⠈⢿⣧",
  "⣿⠀⠀⠀⠀⠀⠀⢰⡇⢠⣊⣴⣿⣿⣿⣿⡿⣿⣿⣶⣌⣷⡀⠀⠀⠀⠈⡇⡾⢀⣴⣾⣿⡿⣿⣿⣿⣿⣶⣾⣥⠄⠀⠀⢿⡆⠀⠀⠈⢻",
  "⣿⠀⠀⠀⠀⠀⠀⢸⡇⠀⣿⣿⠛⠉⠀⠀⣠⣤⠈⠻⣷⠈⢷⡀⠀⠀⠀⢿⠃⢸⣿⠋⢁⣤⡄⠀⠈⡿⢻⣿⡏⠀⢀⡄⢸⣇⠀⠀⠀⠀",
  "⡏⠀⣰⡆⠀⡇⠀⢸⡇⢀⡟⣿⠀⠀⠀⠀⢿⣿⠀⠀⠹⡆⠈⠳⡀⠀⣀⢸⡆⣾⠃⠀⠸⣿⡇⠀⠀⡇⢠⢿⠀⠀⢸⡄⠀⢿⣄⡀",
  "⣠⣾⣿⠃⠀⡇⠀⢸⡇⡼⠀⢻⢲⣄⣀⡀⢀⣀⢀⣀⡀⠁⠀⠀⠙⢆⣿⣆⣷⠃⢀⣀⢀⣀⠀⣀⣰⣿⡇⠀⠀⠀⣾⢳⣦⣈⣻⣿⣿⣿   ██╗  ██╗███████╗██╗     ██╗      ██████╗        ██╗      █████╗ ███╗   ███╗",
  "⠛⣹⡿⠀⠀⣇⠀⢸⣷⠃⠀⢸⡆⠘⠿⠿⠿⠟⠛⠁⠀⠀⠀⠀⠀⠀⠛⠊⢿⡄⠀⠙⠛⠻⠿⢿⣿⡏⠁⠀⠀⢰⡇⠘⣿⣿⠛⠛⠛⠛   ██║  ██║██╔════╝██║     ██║     ██╔═══██╗       ██║     ██╔══██╗████╗ ████║",
  "⣶⣿⠃⠀⢀⣿⠀⠈⢯⡀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠂⠀⠀⠀⠀⠀⣿⠁⠀⠀⢀⡿⢀⡀⠘⢿⣧⡀⠀⠀   ███████║█████╗  ██║     ██║     ██║   ██║       ██║     ███████║██╔████╔██║",
  "⢸⠏⢀⣴⣿⣿⠀⣠⠊⣧⠀⠀⢿⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⠀⣄⢀⣾⣁⣸⠙⣄⠈⠻⣿⣶⣤   ██╔══██║██╔══╝  ██║     ██║     ██║   ██║       ██║     ██╔══██║██║╚██╔╝██║",
  "⢸⣶⡿⠟⢹⣿⡖⠁⢠⣿⣀⡤⠋⢩⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠘⡇⠙⢿⣿⣿⡄⠈⠳⣶⣾⠿⠛   ██║  ██║███████╗███████╗███████╗╚██████╔╝▄█╗    ██║     ██║  ██║██║ ╚═╝ ██║",
  "⣿⢋⣴⡾⠟⠁⣠⠴⢋⡼⠋⠀⢀⣾⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⢤⠤⣀⠀⠀⠀⠀⠀⢠⡏⠀⣠⣿⡀⠀⠙⢿⣿⣦⣄⠈⠻⢷⣦   ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝    ╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝",
  "⣿⠟⠉⠀⣠⣾⣿⠶⠋⠀⢀⣠⠞⢻⣿⣷⣄⣀⣠⠀⠐⠒⠛⠛⠛⠓⠒⠒⠚⠓⠀⠀⠀⣠⣾⣁⣴⣿⠛⢿⣤⡀⠀⠙⠻⣿⣷⣄⠀⠙",
  "⡇⠀⠀⢸⡟⠉⠀⠀⡠⢶⣿⠿⠤⠼⠿⠛⠉⣰⢧⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠾⢻⣧⠉⠛⠿⠿⠾⠿⣿⣶⣄⠀⠀⠉⢻⡧⠀",
  "⡇⠀⠀⢸⠃⠀⠀⢸⣿⡼⠁⠀⠀⢀⣠⣴⣾⡿⠀⠉⣿⣶⣤⣀⠀⠀⠀⣀⣤⣶⠿⢿⠀⣾⠋⢿⣦⣄⡀⠀⠀⠈⢻⣿⡇⠀⠀⠈⡇   ██████╗ ██╗██████╗ ███████╗███████╗       ██╗",
  "⡇⠀⠀⣸⠀⠀⠀⣾⡿⠁⠀⣠⣾⣿⡎⣿⡿⠃⠀⣴⣏⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⢸⣾⡁⠀⠘⠿⠿⣿⣷⣄⠀⠀⢿⣿⠀⠀⠀⣇   ██╔══██╗██║██╔══██╗╚══███╔╝██╔════╝  ██╗ ██╔╝",
  "⠇⠀⠀⠇⠀⠀⠀⣹⠇⠀⠀⣿⣿⣿⣿⣾⣀⣠⢼⡇⠙⢦⣀⠀⠀⠀⠀⠀⠀⣀⡴⠋⢸⡟⣶⣶⠶⠿⠛⣹⡿⠀⠀⠘⣯⠀⠀⠀⠹   ██████╔╝██║██║  ██║  ███╔╝ █████╗   ╚═╝ ██║",
  "⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⠀⠸⣿⣭⣛⣿⣿⠏⢸⡇⠀⠀⠈⠉⠒⢲⡖⠒⠉⠁⠀⠀⢸⡇⠘⢿⣦⣤⣴⣿⠇⠀⠀⠀⠙⠂⠀⠀⠀   ██╔══██╗██║██║  ██║ ███╔╝  ██╔══╝   ██╗ ██║",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡛⠋⣁⡴⠛⠀⠀⠀⠀⠀⠀⡞⢹⡀⠀⠀⠀⠀⠀⢝⣦⣄⣉⣩⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀   ██║  ██║██║██████╔╝███████╗███████╗ ╚═╝ ╚██╗",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⣇⠀⠀⠀⠀⠀⠀⠉⣻⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀   ╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝╚══════╝      ╚═╝",
  '<span class="text-color2">Welcome to my realm.</span>',
  '<span class="text-color2">You lost? Type</span> <span class="text-command">\'help\'</span><span class="text-color2"> to attempt an escape...</span>',
];

export const help = [
  "<br>",
  '<span class="text-command">whoisridze</span>      Why does this even matter?',
  '<span class="text-command">discography</span>     All my projects, in one place',
  '<span class="text-command">social</span>          Stalk me online',
  '<span class="text-command">contactme</span>       Proceed at your own risk',
  '<span class="text-command">help</span>            You already know what this does',
  '<span class="text-command">history</span>         Revisit your past mistakes',
  '<span class="text-command">banner</span>          Begin your journey anew',
  '<span class="text-command">clear</span>           Wipe the slate clean',
  '<span class="text-command">secret</span>          Don\'t even try',
  "<br>",
];

export const whoisridze = [
  "<br>",
  "I̶͈͙̓͛l̷͉̪͆͜y̷̲̮̏͐ả̶͓̫͑.̸̳̳̀̒ ̸̡̙̏̋2̸̺̫̑͊0̶̝̪̿̔.̶͉̺̋̀ ̷̱̠̆̑<",
  "Music producer. Coder. Digital craftsman.",
  "<br>",
  "Currently: B̵̛̮̥͓̓͝u̵̮̯͑̓͝i̷̘͂́̆ḽ̵̢̾̍͠ḋ̵̤̄i̵̩̠̍̀͝ṅ̴̯͙̺͊̎g̸̹͊̄̕ ̶̛̙̖̍̓t̷͓̥̗̿̒̈h̸̜̳̔̇͆i̷̖̊n̷͖͎̔͋͝g̸̱͎͍̊̐̚s̵̗̒ ̶͖́t̶̜͎̃̚h̸̞͔̹̍͐̿a̸̙͓̦͋͠t̸̥̒̾ ̴̧̩̳̿̊m̴̨̲͗į̷̗̗̃́g̸̖̜̊͂̃h̸͙͎͍͑̓ṱ̸̡̰͆ ̶̨̱͖͛o̸̗̿̿͒ũ̸͕̱t̸̠̊́l̸̡̰̔̿̈i̴͓̎͠v̶̻̻̅̀̔ė̵̛͉͜ ̵̻̹̒̉̿ṃ̷̿̋͝ȅ̸͍̮͍͐.",
  "I'm a bit strange, but that's what makes life interesting. People call it eccentric. I call it <span class='glitch-text'>'data-corrupt'>b̵̦̆̌ê̸͍͝i̸͓̐̅ṉ̵͗g̴͓͐̎ ̵̜̒̐a̵̺̿l̷͖͋͜i̷͔̽v̷̧̌̓e̷̠̿͒</span>.",
  "Digital footprints don't fade. Hope to leave something worth finding. If you're reading this, I've succeeded in some small way.",
  "Haha, that sounds dramatic, doesn't it? But seriously, I'm just—",
  "<br>",
  "<span style='font-size:10px;'>i̵͇͓͑t̵̮͓̊ ̵͍͆s̶̉ͅe̴̱̓͘e̴͙͍̽s̵͍͌͐ ̸͎̾̀y̵̻̥̑o̶̩̒u̸̟͗</span> <span style='font-size:12px;'>i̵͇͓͑t̵̮͓̊ ̵͍͆s̶̉ͅe̴̱̓͘e̴͙͍̽s̵͍͌͐ ̸͎̾̀y̵̻̥̑o̶̩̒u̸̟͗</span> <span style='font-size:14px;'>i̵͇͓͑t̵̮͓̊ ̵͍͆s̶̉ͅe̴̱̓͘e̴͙͍̽s̵͍͌͐ ̸͎̾̀y̵̻̥̑o̶̩̒u̸̟͗</span>",
  "h̴̺͇͋a̶̦̔̊h̴̛̪̍a̶͔̍͝H̶̛͜͝A̶̟̒H̸͓͌A̴̝̍H̴̲̔̅Ă̴͓̍H̵̳̽A̴͚͚̋͋H̶͉̄̿H̶͓͍̾͌A̴͇̓͂H̷̯̼͗Ạ̴̉H̷͎͉̄͠A̵̮̕H̴̳̏Ä̶̹̘́̉H̷̭̑H̴͙̹̔A̵͍̔A̴̱̍Ḧ̶́͜A̶̧̪͋̚Ä̵̻̘́̏Ä̵͖͓́̈́H̴̟̎Á̴̢̳͝H̷͈̿A̵̬̍̽H̸̜̒Ḧ̶̯̹́Ḣ̵̞̫̀Ä̷̻́h̴͎̻̀",
  "<c̶̖̭̐̿͛̇̔̔̑̈́̐ơ̷̡̧͕̱̰̠̆̋̓̾̽̀̍̿d̷̨̥̠͙̜̞̞͇̬̣͈̩̈̓̾̾́͗̽ȩ̶̢̛̩͓̬͍͈͕̤͆̂̓̃̃͑̿̑͊̈̚͝ ̵̧̡͙̗̩̣͎̖͛̽̌̃̈̊͝ͅį̷̞͉̦͇̭̩̤̲̓͒̾̋̄̾ş̶̛͚͍͙̼̊͊̓̽̍́̿̅̚͘͠ͅ ̴̖̫̠̗̆̑̆̿̓̏͝p̷̦͂̀ỏ̴͂̓̍̐̋̊̕̚͜͜ȩ̸̗̞͖̻̮̰̘̈́̄̽̏̈̀̀̃̋̓̐̄̌̍͜t̵͇͉̹̙́̉̒͌͐̇̊̕͠ř̷̢͙͕̫̭̪̙͕͓̮̬̬̣͂͆̃͒͌̈́̈́̓͂̀͒̾͒̚y̶̧͎͉͙̭͍̬̪̟",
  "<br>",
  "<span class='flicker-text'>Connection lost. Attempting to reconnect...</span>",
  "<br>",
];

export const discography = [
  "<br>",
  "<span class='glitch-text'>2̷̩̠̂0̴̥͑2̶̜̃5̴̪̿:</span>",
  "<ul>",
  "<li><strong><span class='glitch-text'>Singles:</span></strong></li>",
  "<li><strong><span class='glitch-text'>EPs:</span></strong></li>",
  "<li><strong><span class='glitch-text'>Albums:</span></strong></li>",
  "</ul>",
  "<br>",
];

export const social = [
  "<br>",
  "<span class='glitch-text'>-- MUSIC PLATFORMS --</span>",
  `spotify         <a href="${urls.spotify}" target="_blank">spotify/ridze</a>`,
  `apple music     <a href="${urls.applemusic}" target="_blank">applemusic/ridze</a>`,
  `soundcloud      <a href="${urls.soundcloud}" target="_blank">soundcloud/ridzewho</a>`,
  "<br>",
  "<span class='glitch-text'>-- SOCIAL MEDIA --</span>",
  `youtube         <a href="${urls.youtube}" target="_blank">youtube/@whoisridze</a>`,
  `instagram       <a href="${urls.instagram}" target="_blank">instagram/whoisridze</a>`,
  `telegram music  <a href="${urls.telegram}" target="_blank">telegram/whoisridze</a>`,
  `shitpost        <a href="${urls.shitpost}" target="_blank">telegram/ridzeiswho</a>`,
  "<br>",
  `linktree        <a href="${urls.linktree}" target="_blank">linktr.ee/r1dze</a>`,
  "<br>",
];

export const contactme = [
  "<br>",
  "<span class='glitch-text'>Contact Bot Status:</span>",
  "<br>",
  "Bot is currently being developed.",
  "<br>",
  "<span class='flicker-text'>Coming soon...</span>",
  "<br>",
];

export const secret = [
  "<br>",
  '<span class="text-command">sudo</span>           Only use if you\'re admin',
  "<br>",
];
