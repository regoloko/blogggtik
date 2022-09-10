const posts = JSON.parse(localStorage.getItem("posts")) || [
  {
    username: "abdessamad",
    caption: " bla bla bla bla",
    video:
      "https://v16-webapp.tiktok.com/59f4cc188e35cd8f1db0918bffa3406f/631cf917/video/tos/useast2a/tos-useast2a-pve-0068/ed486e85d29943d28f4cf4b5f31e7f12/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3760&bt=1880&cs=0&ds=3&ft=gKSYZ8b6o0PD11MO_yg9wti2O5LiaQ2D~t8&mime_type=video_mp4&qs=0&rc=OzZlOztlZzc1aWdmOjZkOEBpMzZ2cDo6Zmh5ZTMzNzgzM0AvNDA1MS9gX2AxNC0wXy02YSM1MzRzcjRnYmVgLS1kLzZzcw%3D%3D&l=2022091014493701018919503204911347&btag=80000",
  },
  {
    username: "rofixkengan",
    caption: "bla bla bla bla",
    video:
      "https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4",
  },
  {
    username: "ahmed",
    caption: "bla bla bla bla",
    video:
      "https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4",
  },
  {
    username: "ali",
    caption: "bla bla bla bla",
    video:
      "https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4",
  },
  {
    username: "aymen",
    caption: "bla bla bla bla",
    video:
      "https://v16-webapp.tiktok.com/b4d2193984cdc8c62e90b2662ccece5d/628bbfc1/video/tos/useast2a/tos-useast2a-ve-0068c001/0a67181086be4f75a00c74e0917712b0/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2066&bt=1033&cs=0&ds=3&ft=eXd.6HpoMyq8ZU9I9we2N8zWyl7Gb&mime_type=video_mp4&qs=0&rc=OGQ2aTo0NDQ0O2RkNzY4N0BpM3k3amk6ZnNvOjMzNzczM0AvXjBeMC1hNmIxYC1jMF8xYSNpcG1jcjRvNnJgLS1kMTZzcw%3D%3D&l=20220523110859010223099143170A3A34",
  },
];

export default posts;
