'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bbab83375410db3cc9edce2918faea76",
".git/config": "c5eafb68265c9e0d887789cfcb560d58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9d0aac64cf6688426b1d0cca84f01d42",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2ae63327f1da46d315dd30d84dc4a765",
".git/logs/refs/heads/master": "caa6d65724e94c6d33ec79c5ad971d3b",
".git/logs/refs/remotes/origin/master": "d06510c837936d83ab9d1821b3483a22",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/de4dfb9a43dad188fbe110dc1d21f2b6684393": "4c0e2ff0611630ffcc4a9fb04e1cf595",
".git/objects/05/2515cc86f0b03d5c0da10910421c8f18211781": "36103365efcbfa8ea56df90fdeb587d3",
".git/objects/06/5fb58ec7dbb66ec3ac994f76035bf26813df8a": "5fef3204c17d67d885f7e60d1f66913e",
".git/objects/06/e9bddbd64460835e74690b44d3c45f561a43f3": "53cef9b1bbb144e67a981f6b98cf3a46",
".git/objects/09/24e4b0eef40e4ba7fe5ee5af5ff2f4b4d03a67": "8f9f170fa67234e406af58c5c7d0de8c",
".git/objects/09/3dcaca35cc71115645425a602f55193435d2bb": "dadd67b98944ea1f4fcf20a357446006",
".git/objects/09/5f5b7d037fffe816d2ec7b66cd70be06a7aa3e": "a80a4e9d97a788c1132ebdd050419de4",
".git/objects/09/be22279cd3486a18f94c212c3165c1011b7a60": "01e78ac8eecf1ef349475577f935ebe0",
".git/objects/0b/c0b9870f0f68a86870d4f9f95755dfcc2c3547": "84a21b1bc98c3801d42a8e5792bc08ba",
".git/objects/0d/4967f629ea6f42b9dcbc87b07349afdee44c12": "b5139570949315f2db58b1ea4652db61",
".git/objects/0e/cbe49dbf513ebfbf313b34c6b864899ff96ae4": "2cb9ea4636139ec07510ddcf228ce176",
".git/objects/12/c9859657a749d71575b1d47622b6ae8a0e77f0": "4fbaaec3795d00fcb24001be9a25e745",
".git/objects/13/227fb46182e7a310432724882db819c854ccdc": "c9d78cd8c2bceec3c5836e6df3e47951",
".git/objects/13/bd85f1d0049671e7490f064603b60c843d7356": "571de8faf91d5df26f595ef2774fac65",
".git/objects/14/6aef28dc756f68c28b38dec42f042345fd0e5c": "8edd281ef1e1a52abb9ef5f1f58a00de",
".git/objects/16/2a462aa2790621897cec01f29d188ac091f904": "42988244982552bdfd3cdd392e12d2f5",
".git/objects/18/07e850ca370383a318b364c2800d2766090a72": "8aae09cd93d6fc93803bf4adc877ff89",
".git/objects/1a/19f909178ce622021bfe0eb20c16e1f94e07fd": "cd71ae9c603c5df2e213433aeea4c123",
".git/objects/1c/bebefe45f01ce6c0e95259cf9d8ddf07183f5b": "67c6076c228d6510a417386f1079aa64",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/6bca900602aea2e3771be1ccbd7b55f8aa00fa": "b8e03a7f14d35d828fd701b413dec451",
".git/objects/21/07b41354b889000e5fb2ee89df2e758f56cc3c": "c5fd29032b37e914d749f38785c3bd7c",
".git/objects/21/53029e9aeb2e0df4b18f290ac4fcfed880cc34": "0b433f00f68ecb56797ac40ede47bfe1",
".git/objects/22/4ba1b61f84b2dd9394bbb9a2d3305d5c6f8ddb": "02c39a4f3b1ae616fc6d3cd8ae432893",
".git/objects/25/563a53ed93cf030e58aa2e8d054f3b7e54cbf9": "bbf6c4e3fa4c082035a47f8b1e6d9538",
".git/objects/29/02be94f02877437cf5195fe89ceb5e6deea93f": "0cd73589f34903cdc6c26f2552b94f66",
".git/objects/2b/c5e954bbf51795e8984bb15f0ac3d716ce00ba": "ca30a1e4248d54aaf3b66843b87406ce",
".git/objects/2c/a19e16be80e855c699dd73b7d3c5183aa614bb": "53c75e43ae804ecada48488067f158a4",
".git/objects/2f/7eca34d15bf3bfce4a324cb657c8c43d751044": "0b8d2e31e4ed59a982eb68ab79e23285",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/30/f0c8de9bb730b878f16c7f7a9b16a31aad3fc3": "c90f6223dbdc646a2aff335cee8d84ce",
".git/objects/30/f30d64e084c9f01eddd603fe51e8d4d2c9340d": "4d2eee34c47381d8a4566f1218976f50",
".git/objects/33/c3913a6fb309beeaef6f473218a56657f27017": "15cf7a58c2169657efb187dffd668400",
".git/objects/34/cff4d372107104409ddb36d158a181380c74a6": "ff1e9f25bd68f74f9d3a92ba8b60ba7f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/1f9b64f70825fcb906c44963f66d0afaf67342": "fd6cff73ea42819b344d91251f6a8d7d",
".git/objects/3d/b1288ae0a875ab3c4c706540af781ac91d7cbe": "4f5ded255f1a567136e7fabd97c8632f",
".git/objects/46/100ac20972d448f6c90a4d50287d048231f35f": "a354ff5557b361990de03dce399e007d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/697e0557d98e29535f74db1d16c46bc7bb5df9": "7e0e0ee5e2a096e9d78e0eb5e1fd4e8b",
".git/objects/4a/35953f31d46cf74af49593f5e3319ceb9b106c": "b29e39504a96193542f1df4d557c53e9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4f/6b22dcec140da0f2a489b229114b77376af618": "7f030d85b59cf07fadb3d5d77a41ee34",
".git/objects/50/152648d1fcdb8eff249e6632ff4535e3adb732": "83f9e1ac4e595fb414ac945c5fd66ed1",
".git/objects/50/24b301a6c0f1c590fe3ffcbc27b3246d803ded": "22d8c3a27d3ee139a991d94f7b0685c5",
".git/objects/51/421f3659b8eabdaed622e6c0fca1157ac8cbe1": "1be71a2a29afedebaf086a9d1c94b4d7",
".git/objects/51/9fbb82ca673e44d9635d71f66c2e4eb348d508": "df8b3e03c2d88b5328c5868b261dc670",
".git/objects/56/be2fc56486c92fa24b4cc46154caad3f347aa9": "b9bd384156b9f05a76d7eeb5ab0304e0",
".git/objects/59/5e6b5c1b08881afc08a86ce6e5e97e779acc86": "967359d1236bdfba4f8f300ce633869c",
".git/objects/59/72aefb39d3d923753de424dab8677462bd9775": "097bf0782481d1dd3a67157ca8e51c8d",
".git/objects/60/ac370b8fd54aa9c200a6376597e48ffb1fbeca": "44acded6f346148a12751afd340a6262",
".git/objects/60/f05d73f9cad7050eed9fdb25239786fc3ef94a": "519056e65cb7d2a79be225050efc629e",
".git/objects/64/ad2744e3ee4a58ea044f22a6425747d5efdede": "d9f62d818ee8450a3f319c4825014925",
".git/objects/65/d323e970ee8e81a717959bf391fa93ce34b028": "30be975bd13624787aada520280c641f",
".git/objects/67/5d50317cfd17d8f8dcfdc031da1d4690b2fc19": "5f454506636448883ed7cf0bc15426fd",
".git/objects/68/f7aede013d2b820bfe77c3c150e607f01a5acf": "28071e365bb5fd7155f8fac8c4f554ea",
".git/objects/6d/d10ea1786d077613be36e485f015833b50cc4f": "a8b026a4f28beb4085744ca08696ca44",
".git/objects/71/e5251112bed85d302148aa46ef82e23f2f05cf": "0dffadab345522a3e56fcaa43d9a72d2",
".git/objects/71/fd76e12921208f5a089f8556a92a9e9fbfd513": "6f710ca4197d27a63e1cff09c22395ca",
".git/objects/7c/d7843b7a4ed0dbeb3c2cd746aaa8da68a49ab6": "5e5879eef3e1a2d1f21d55f77cd08f96",
".git/objects/7e/bbc84a0c10960db883b32ed27844a6aa59a31e": "8c642bb0f747a00a21baf8bc6307bd2e",
".git/objects/82/fcf77fc2d6c4e4f88929bf4567a9fcbd285b8a": "d9b36c9c79cb16ed6205cd2e1dabfab9",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/587f4736278398cd9844e72dd004f353c4f850": "d8e77577bbdd9fe98dd899105bc35936",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/ab065da4a69a154bcd3153b18455c12b38e74a": "94762a1ef3e886cc2950d01b743c6d7d",
".git/objects/91/6b8779aaa2010aca08039033c8208d43b96675": "44bf9ae5b9d83a67045e565d85cd5e3b",
".git/objects/91/e4ba98b8b5cf715a08fddfa4d2cab391d2efdc": "91dc78a354fb3ddc237c83cb16ba0944",
".git/objects/95/516a22e99dbd32d56a89f72c37990c9f5ca1b9": "2d872b6291d9fd3aeb1cec55f229c990",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/99/4fff5e4711dc90cfea6b69fbee25cffbccbbbe": "3b72c9adbfd2d6a1fccb661ae0cb937e",
".git/objects/99/771e922ab490bd8a61c1362bfe98d8a8a515b2": "7bedfb6d678c951e189e348ad6c201ce",
".git/objects/99/f6866a218bb2be53f9487d1cf479a6112764df": "d28471bc4fa887d607e735cf524dbf00",
".git/objects/a0/666fe4d8454574b214cc93cc5b975865c6a3b2": "fbd33fc5e3ffb36fff3ad3c4645abfb4",
".git/objects/a0/c800f4499fc75eedc7f9b8d08c8c7bee76c208": "002f3aaf27fc94842efdc928f434334f",
".git/objects/a2/f08e4312048fe885a5303540b0fb436f68e1b1": "99db87751eb3dc86385ca86f72da2548",
".git/objects/a3/f5357387ed74810a4fbbca0f029da6b266c0d7": "00a629aa27b917f8e008f53912c938ca",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/452b56675781f912bbf159536ac2cf190eedc7": "e53168d9ddb0b41c94f23d03cf0157e3",
".git/objects/aa/9417a370b286d6039f624e0d49da3d78bb3d9a": "407362b217abc405950f79488bf29d0a",
".git/objects/aa/e0f293b5f1cceaa08d940c0731778b99072b77": "08817202cfb77a8a3fcf46d1e4bda8ec",
".git/objects/ab/cc0d8b70038c45ac3c9b92c437a6b59559d638": "8c008a1466c3a781c7581b2563a1017b",
".git/objects/ac/cfcb896e9005a071f800d86e5ff1fc329f7fc7": "fe173aaea6b90baa445b875f8b651b38",
".git/objects/ae/445d211c9ea27a0f65fb934776f17fe55d3a98": "d430abe73f3ae74457e26a78f47cae4c",
".git/objects/af/5ba4b9ff9c8fa3f1b4dacb01cd83820dd10e48": "70e9d9ffb1aa3dc7e8eb1525dbeebf65",
".git/objects/b6/74cfffe6d62a8b8822e3284a7fe8022c4fb7f6": "12d5e939829d0262afe99c94f8e719b6",
".git/objects/b7/03cdd7ba5dbb39e0121646a6f6c8b44df5eb34": "a43d3107bf7f7ebecab8cdb893b1e1b3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/d99e4a664a43e9a0c97ba9fab0f27e1ea208ba": "3575eddc481a4eb7a6e133ebc42f0cc2",
".git/objects/c1/9a1b52ad5159c2b95195d607a587e819223742": "dcadbf3ae2859efe7991b44b47dcdccd",
".git/objects/c5/276400805eb60a3f928b283ef811b318a5ae75": "03590ea5f984fe302914c32bd96cce3d",
".git/objects/c5/3c3d3f821065c5b7bb9ff716eb1151acc452cd": "394e0b0d179103e0414cd13d760c9641",
".git/objects/c9/3bf67d6d863f3d7cd6ebb63cb7f9181b228fde": "3ec9829b1324e6eee8de4c0a23bd4205",
".git/objects/ca/03354b5d3919fdb30cbe8276a563b3c60fe6bf": "6782a1649763b8beb69559c0c363e27c",
".git/objects/d1/0fa3558b8895fbcb827bc8c54ac2aec02e29eb": "ab8875a1a78e880ddc29a987ecaf4df9",
".git/objects/d1/4d0a65a31d2cac758613af64bd0b8845d3d46e": "2ae644a4f4e134d29f3b53e8898eb03a",
".git/objects/d3/6c30559e6cfe6f6c7a1aefa6f131f50e26f757": "8db4630639a09d40ca9cefd8d51ff768",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/e07b61458bcdd8d30364a71d0df4421b482879": "cdbca81365e65a94e9baeec654041cf8",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/4d86deaa7be10830ff61c046ab083ac34243aa": "ba2c3b0407d96122ff16502c9cd28e97",
".git/objects/dc/09d135448d5161436f30ec2195c28f738d62cc": "44fa71023f97207e9544381cba71a5f7",
".git/objects/dc/2b757b7f09b56ff75cd2051fd7f6be9ed45f96": "ea78a0db854ae6ca6a1eeca602bead0f",
".git/objects/dc/6081be8f906115597e6aa05860501305795ec5": "e4c5a116b5802900427df93564b6d04e",
".git/objects/e0/91018b53440321cf8551a6f33baaf06a113ca4": "6b70a151f3cf24fc3c3f22a21aeababe",
".git/objects/e7/87467ca9543cc13f44a4954a5e257f92cf62cd": "ea75b9f119fc7c7b5a66f0115b30f66a",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/0e5c6863c3913f95ee02692ebffea3b06731bb": "cf07d867861f87a06060d794c521300f",
".git/objects/ea/169a69beb2ef77b726962c1f53850b25f63372": "626aebe2569ef029274e7c484c2a535a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/f65a45163a7b06d14a6b2ce05e6b723e30ff81": "38a3eafedcb320ba45e451e911642cbe",
".git/objects/f0/2f3d30a45d714193229101148baec008921b3a": "037be6ffce9b7722829fcfbc96cf2296",
".git/objects/f1/65129e04dc1281ec54106f4732e1c6b3862e18": "fc9181a96f2c937a04488b4923c5744b",
".git/objects/f4/d710f2ad54fef77473a2a44e0db91ff994c240": "43942d12d8efb1561ad9870d3190403b",
".git/objects/f5/47e4dffc148331c0e1d12927575e4b1ce256d1": "4e3d46989b26f80fec0ad12630b5ed45",
".git/objects/f7/40e6af9e6c6c67854ed4f98e9c1f003afe6391": "9f63e147b8daec8518822cacefc0cd4c",
".git/objects/f7/86d76258a2a0e274d20532b0c7b40496e48857": "55625412901d4ba24d3db35a2dcdf6bb",
".git/objects/fc/c8601457f09e053417d28f9ae082cb132d8472": "7839671d39506cef7684ef4df41dfbd4",
".git/objects/fc/dc25afd208b13dd8bfb3696a0423455c631a86": "838a54cfa4c54d9fbb627368f176138a",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/016235d5e7fe5a3c581836b91401c73ab15aa4": "d690c0c74db07cf8fe24611606688ac8",
".git/objects/fe/eebb39ed9474efb9ebc9149a7fcd9aafd59676": "9357f25d174b2b520d02790a3daa749f",
".git/refs/heads/master": "393519164b5f03a8bf1c1ff7bf70a09a",
".git/refs/remotes/origin/master": "393519164b5f03a8bf1c1ff7bf70a09a",
"assets/AssetManifest.bin": "55b55a5f28cf4b09079541e55670f622",
"assets/AssetManifest.json": "89c7957cd60b6be10b724401771fd735",
"assets/assets/images/ai_search.png": "308daabc799cca1c294d7c9f1a3f625b",
"assets/assets/images/all_books_search.png": "a7f5811e439147dbb28d6d41278703fb",
"assets/assets/images/artificial-intelligence.png": "2915f534974b3e3866846260909256d4",
"assets/assets/images/book-flipping-pages.gif": "ae5666bebd2342c7f3d30aaf471035bf",
"assets/assets/images/bookshelf.jpg": "dc99a1791b9757b9aafbb2cf5cd2cfb9",
"assets/assets/images/books_search.png": "41fca97891f113580bed571808ace1aa",
"assets/assets/images/book_search.png": "76c234dc101e4a9a3e0508c98c2a8233",
"assets/assets/images/brownbg.jpg": "b9406b07b4a9b3de42a1d4f65677133a",
"assets/assets/images/carouselitem.jpg": "7a0c7c680b822ec923656e760048e50f",
"assets/assets/images/homtest.png": "814573942f352fc03077d47a1c38bbd0",
"assets/assets/images/image155.png": "3acbe7d3369406b900a9b92290853f94",
"assets/assets/images/image75.png": "e8b3264badf5a5da07a9e2cd45a36e29",
"assets/assets/images/image87.png": "f5138a3ff5586359e1e2bcc07ddd8a4e",
"assets/assets/images/logo.png": "542e4274c047f57611902aaea74c36d2",
"assets/assets/images/mainPage.png": "d6a1a0f16835bb59c70414828468a254",
"assets/assets/images/newbg.jpg": "725fd3e182759ba966b5c1bb1ac106c1",
"assets/assets/images/newbg2.jpg": "758c78c24751ac1b92f405de2b7bb468",
"assets/assets/images/notAvailable.png": "fdd90cde0f750346be44568007c5eb8c",
"assets/assets/images/pageBackground.jpg": "7b088d2a10c58708c935dbce0e8a9a6a",
"assets/assets/images/pageflip.gif": "b1efe3a8927d4a796826603cdf1d71f6",
"assets/assets/images/single_book_search.png": "3dd742d37739fd47ab0be91d530d6a5e",
"assets/assets/images/time_search.png": "26d4f2e269db8f2cd044be4edd98e582",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2be35030e17e90d2f8aa29b9fd09bfde",
"assets/NOTICES": "28a1e7e59ffea0a8958f36d72a71c40b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "83bdd88be24d1aa92667cfd4293ed2a1",
"/": "83bdd88be24d1aa92667cfd4293ed2a1",
"main.dart.js": "e27dea0737006743f41615f3aaf8011c",
"manifest.json": "2965c7f231121ec869926b87e30868db",
"version.json": "21eb1578cb9074eb598ad4c78deec032"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
