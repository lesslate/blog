var store = [{
        "title": "\\_config.yml 설정하기",
        "excerpt":"minimal-mistakes 테마의 기본 _config.yml을 수정한 내용입니다 개인적인 의견으로 작성 시 기본 설정 파일을 가지고 내용을 추가해 나가는 것이 편합니다! _config.yml # Welcome to Jekyll!## This config file is meant for settings that affect your entire site, values# which you are expected to set up once and rarely need to edit after that.# For technical reasons, this file is *NOT* reloaded automatically when you use# `jekyll serve`. If you change this file, please restart the server process.# Theme Settings## Review documentation to determine if you should use `theme` or `remote_theme`# https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/#installing-the-theme# 테마 설정에 대한 부분입니다. 기본 설정을 유지하였습니다.theme                  : \"minimal-mistakes-jekyll\"#remote_theme           : \"mmistakes/minimal-mistakes\"# 스킨을 설정하는 부분입니다. minimal_mistakes_skin    : \"dark\" # \"air\", \"aqua\", \"contrast\", \"dark\", \"dirt\", \"neon\", \"mint\", \"plum\", \"sunrise\"# Site Settingslocale                   : \"ko-KR\" # 사이트의 언어 설정을 할 수있습니다.# 표시되는 언어의 내용은 _data/ui-text.yml 에서 수정이 가능합니다.title                    : \"Imreplay blog\" # 블로그 제목title_separator          : \"-\" # 글 제목 - 블로그 제목  과 같이 사이트를 표시해줍니다.name                     : \"Imreplay\" # 사이트 소유자의 이름을 사용합니다.(Used to assign a site author.)description              : \"Imreplay's personal website.\" # 사이트에 대한 간단한 설명입니다.url                      : \"https://blog.imreplay.xyz\" # the base hostname &amp; protocol for your site e.g. \"https://mmistakes.github.io\"# 사이트의 주소를 입력합니다.baseurl                  : # the subpath of your site, e.g. \"/blog\"# 사이트의 baseurl을 설정해 줍니다.repository               : \"imreplay/blog\" # GitHub username/repo-name e.g. \"mmistakes/minimal-mistakes\"teaser                   : # path of fallback teaser image, e.g. \"/assets/images/500x300.png\"# breadcrumbs            : false # true, false (default)words_per_minute         : 200 #read time을 계산하기 위한 분당 읽는 글자수 입니다. comments: # 댓글 설정에 대한부분입니다. 기본적으로 false 로 되어있습니다.  provider               : \"disqus\" # false (default), \"disqus\", \"discourse\", \"facebook\", \"google-plus\", \"staticman\", \"staticman_v2\" \"custom\"  disqus:   #개인적으로 disqus 댓글 모듈을 사용하였습니다.    shortname            : imreplay-blog # https://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-  discourse:    server               : # https://meta.discourse.org/t/embedding-discourse-comments-via-javascript/31963 , e.g.: meta.discourse.org  facebook:    # https://developers.facebook.com/docs/plugins/comments    appid                :    num_posts            : # 5 (default)    colorscheme          : # \"light\" (default), \"dark\"staticman:  allowedFields          : # ['name', 'email', 'url', 'message']  branch                 : # \"master\"  commitMessage          : # \"New comment.\"  filename               : # comment-{@timestamp}  format                 : # \"yml\"  moderation             : # true  path                   : # \"/_data/comments/{options.slug}\" (default)  requiredFields         : # ['name', 'email', 'message']  transforms:    email                : # \"md5\"  generatedFields:    date:      type               : # \"date\"      options:        format           : # \"iso8601\" (default), \"timestamp-seconds\", \"timestamp-milliseconds\"reCaptcha:  siteKey                :  secret                 :atom_feed:  path                   : # blank (default) uses feed.xml#사이트내 검색 설정에 대한 부분입니다.search                   : true # true, false (default)search_full_content      : true # true, false (default)# 저의 경우 algolia 를 사용하고 있으며 추가설정이 필요합니다.search_provider          : algolia # lunr (default), algolia, googlealgolia:  application_id         : 237ZENFYNY # YOUR_APPLICATION_ID  index_name             : blog # YOUR_INDEX_NAME  search_only_api_key    : 5cfd50ded1da95d695708070be40e3b9 # YOUR_SEARCH_ONLY_API_KEY  powered_by             : # true (default), falsegoogle:  search_engine_id       : # YOUR_SEARCH_ENGINE_ID  instant_search         : # false (default), true# SEO Related 웹마스터 도구 사용을 도와주는 부분입니다.google_site_verification :bing_site_verification   :yandex_site_verification :naver_site_verification  :# Social Sharingtwitter:  username               :facebook:  username               :   app_id                 :  publisher              :og_image                 : # Open Graph/Twitter default site image# For specifying social profiles# - https://developers.google.com/structured-data/customize/social-profilessocial:  type                   : # Person or Organization (defaults to Person)  name                   : # If the user or organization name differs from the site's name  links: # An array of links to social media profiles#구글 애널리틱스에 대한 설정입니다.# Analyticsanalytics:  provider               : \"google-gtag\" # false (default), \"google\", \"google-universal\", \"custom\"  google:    tracking_id          : \"UA-120523980-2\"    anonymize_ip         : # true, false (default)# 사이트 소유자에 대한 정보를 작성합니다.# Site Authorauthor:  name             : \"Imreplay\"  avatar           : # path of avatar image, e.g. \"/assets/images/bio-photo.jpg\"  bio              : \"천천히 굴러가는 개인 공부 블로그\"  location         : \"Republic of Korea\"  email            : \"imreplay@imreplay.xyz\"  uri              : \"https://blog.imreplay.xyz\"  home             : # null (default), \"absolute or relative url to link to author home\"  bitbucket        :  codepen          :  dribbble         :  flickr           :  facebook         : \"imreplay08\"  foursquare       :  github           : \"imreplay\"  gitlab           :  google_plus      :  keybase          :  instagram        :  lastfm           :  linkedin         : # \"john-doe-12345678\" (the last part of your profile url, e.g. https://www.linkedin.com/in/john-doe-12345678)  pinterest        :  soundcloud       :  stackoverflow    : # \"123456/username\" (the last part of your profile url, e.g. https://stackoverflow.com/users/123456/username)  steam            : # \"steamId\" (the last part of your profile url, e.g. https://steamcommunity.com/id/steamId/)  tumblr           :  twitter          :  vine             :  weibo            :  xing             :  youtube          : # \"https://youtube.com/c/MichaelRoseDesign\"# Reading Filesinclude:  - .htaccess  - _pagesexclude:  - \"*.sublime-project\"  - \"*.sublime-workspace\"  - vendor  - .asset-cache  - .bundle  - .jekyll-assets-cache  - .sass-cache  - assets/js/plugins  - assets/js/_main.js  - assets/js/vendor  - Capfile  - CHANGELOG  - config  - Gemfile  - Gruntfile.js  - gulpfile.js  - LICENSE  - log  - node_modules  - package.json  - Rakefile  - README  - tmpkeep_files:  - .git  - .svnencoding: \"utf-8\"markdown_ext: \"markdown,mkdown,mkdn,mkd,md\"# Conversionmarkdown: kramdownhighlighter: rougelsi: falseexcerpt_separator: \"\\n\\n\"incremental: false# Markdown Processingkramdown:  input: GFM  hard_wrap: false  auto_ids: true  footnote_nr: 1  entity_output: as_char  toc_levels: 1..6  smart_quotes: lsquo,rsquo,ldquo,rdquo  enable_coderay: false# Sass/SCSSsass:  sass_dir: _sass  style: compressed # http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style# Outputtingpermalink: /:categories/:title/paginate: 5 # amount of posts to showpaginate_path: /page:num/timezone: \"Asia/Seoul\" # https://en.wikipedia.org/wiki/List_of_tz_database_time_zones# 플러그인을 정의하는 부분입니다.# Plugins (previously gems:)plugins:  - jekyll-algolia  - jekyll-paginate  - jekyll-sitemap  - jekyll-gist  - jekyll-feed  - jemoji# mimic GitHub Pages with --safewhitelist:  - jekyll-paginate  - jekyll-sitemap  - jekyll-gist  - jekyll-feed  - jemoji# Archives#  Type#  - GitHub Pages compatible archive pages built with Liquid ~&gt; type: liquid (default)#  - Jekyll Archives plugin archive pages ~&gt; type: jekyll-archives#  Path (examples)#  - Archive page should exist at path when using Liquid method or you can#    expect broken links (especially with breadcrumbs enabled)#  - &lt;base_path&gt;/tags/my-awesome-tag/index.html ~&gt; path: /tags/#  - &lt;base_path/categories/my-awesome-category/index.html ~&gt; path: /categories/#  - &lt;base_path/my-awesome-category/index.html ~&gt; path: /category_archive:  type: liquid  path: /categories/tag_archive:  type: liquid  path: /tags/# https://github.com/jekyll/jekyll-archives# jekyll-archives:#   enabled:#     - categories#     - tags#   layouts:#     category: archive-taxonomy#     tag: archive-taxonomy#   permalinks:#     category: /categories/:name/#     tag: /tags/:name/# HTML Compression# - http://jch.penibelst.de/compress_html:  clippings: all  ignore:    envs: development# Front Matter 설정입니다.# 페이지 본문에 적용되는 기본 설정들을 정의합니다.# path 값으로 경로를 설정해 줍니다.# Defaultsdefaults:  # _posts  - scope:      path: \"\"      type: posts    values:      layout: single      author_profile: true      read_time: true      comments: true      share: true      related: true  # 테마에 포함되어 있던 Docs 폴더의 _config.yml을 참고하여 _pages 폴더를 만들고 그 폴더에 대한 출력 방법을 정의 했습니다.  # _pages  - scope:      path: \"_pages\"      type: pages    values:      layout: single      author_profile: true# Travis-ci 를 사용하기 위해 추가한 부분입니다.# Jasper2 테마의 Travis-ci 설정부분을 사용합니다. ##build option# Settings for builing master branch with travis-ci# with jekyll-travis# Settings for deploy rake task# Username and repo of Github repo, e.g.# https://github.com/USERNAME/REPO.git# username defaults to ENV['GIT_NAME'] used by Travis# repo defaults to USERNAME.github.io# Branch defaults to \"source\" for USERNAME.github.io# or \"master\" otherwisesafe: Falselsi: Falseusername: imreplay # Github Usernamerepo: blog # Github repo namebranch: master # 작업 브랜치를 설정relative_source: ../blog/ # 저는 repo 이름으로 설정했습니다.destination: ../posts # 빌드시 작업파일이 저장될 경로production_url:  https://blog.imreplay.xyz # 사이트 URLsource_url:  https://github.com/imreplay/blog/ # Github 저장소 URL","categories": ["blogging"],
        "tags": ["jekyll"],
        "url": "https://blog.imreplay.xyz/blogging/config-yml/",
        "teaser":null},{
        "title": "minimal mistakes 테마를 이용해 github.io 블로그 구축하기",
        "excerpt":"Intro 처음 만들어보는 페이지이다 보니 부족한 부분이 많습니다.언제든지 댓글 남겨주시면 수정하도록 하겠습니다! 본 포스팅은 블로그 구축 후 작성하는 것으로,  minimal mistakes 테마를 Fork 하여 본인의 입맛에 맞게 수정하는 과정입니다. 또한 일부 내용은 https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/ 의 내용을 참고하였습니다. 테마 Fork 후 불필요한 내용 삭제 저의 경우 minimal mistakes 테마 를 사용했습니다.  위 저장소에 접속 하여 우측 상단의 Fork 버튼을 눌러 자신의 저장소로 복제 해 줍시다. 그 후 테마에 포함되어있는 불필요한 파일들을 삭제 해 줍니다. 목록은 아래와 같습니다.   .editorconfig  .gitattributes  .github  /docs  /test  CHANGELOG.md  minimal-mistakes-jekyll.gemspec  README.md  screenshot-layouts.png  screenshot.png샘플페이지에 대한 데이터는 docs/ 디렉터리에 저장되어 있으니 참고하실 분들은 삭제 하지 않으셔도 되지만 사이트에 샘플 포스트가 표시될 수 있습니다. _config.yml 변경 저장소 최상위 디렉토리에 존재하는 _config.yml 파일을 사용자의 취향에 맞게 설정 해 줍니다. 현재 사이트의 설정은 _config.yml 설정하기 에서 확인할 수 있습니다. _config.yml 에 대한 자세한 설명은 configuration 에서 확인할 수 있습니다. github pages 를 이용하시는 분들은https://github.com/imreplay/minimal-mistakes#github-pages-method 를 참고하여 gem \"github-pages\", group: :jekyll_plugins 추가 및 remote_theme: \"mmistakes/minimal-mistakes\"  설정, theme 부분 주석 처리 해주셔야 합니다! Settings 에서 github pages 브랜치 설정을 master 로 설정해주시면 계정명.github.io/저장소명 으로 접근 가능합니다! 예를 들면 https://imreplay.github.io/test/ 처럼요! Gemfile 설정 최상위 디렉토리에 위치한 Gemfile을 수정해 줍니다. Gemfile에 대해서는 모르는 부분이 많아 샘플 Gemfile을 참고하시는것을 추천드립니다. Gemfile?   다양한 Gem을 등록하는 파일 입니다.  Gem은 루비에서 지원하는 패키지 시스템으로 필요한 프로그램을 관리할 수 있도록 도와줍니다.아래는 예제 파일입니다. minimal mistake 에서 샘플로 제공하는 Gemfile source \"https://rubygems.org\"gem \"github-pages\", group: :jekyll_pluginsgem \"tzinfo-data\"gem \"wdm\", \"~&gt; 0.1.0\" if Gem.win_platform?# If you have any plugins, put them here!group :jekyll_plugins do  gem \"jekyll-paginate\"  gem \"jekyll-sitemap\"  gem \"jekyll-gist\"  gem \"jekyll-feed\"  gem \"jemoji\"  gem \"jekyll-algolia\"end현재 사이트에 적용되어있는 Gemfile source \"https://rubygems.org\"gem \"minimal-mistakes-jekyll\"gem \"jekyll\", \"~&gt; 3.6.2\"gem \"github-pages\", \"~&gt; 168\"gem \"rake\", \"~&gt; 12.3.0\"group :jekyll_plugins do  gem \"jekyll-feed\"  gem \"jekyll-seo-tag\"  gem \"jekyll-sitemap\"  gem \"jekyll-paginate\"  gem \"jekyll-algolia\"endnavigation.yml 수정하기 최상위 디렉토리의 _data/navigation.yml 을 수정합니다. # main linksmain:  - title: \"About\" # 네비게이션 바에 표시 되는 이름    url: \"/about/\" # 클릭시 이동할 URL  - title: \"Category\"    url: /categories/  # - title: \"Sample Collections\"  #   url: /collection-archive/  # - title: \"Sitemap\"  #   url: /sitemap또한 이 파일을 통해 Sidebar를 커스터마이징 하는 기능또한 제공되고 있습니다. 해당 기능에 대한 설명은 custom-sidebar-navigation-menu 에서 확인가능합니다. _pages 추가하기 기본 설정들은 어느정도 끝났으니 몇가지 페이지를 만들어봅시다. 먼저 최상위 폴더에 _pages 라는 폴더를 만들어 준 후 minimal-mistake에서 샘플로 제공되는 페이지 중 필요한 걸 몇가지 가져옵니다. 이번 포스팅에서 추가할 페이지는   404 에러 페이지 (404.md)  about 페이지 (about.md)  카테고리 페이지 (category-archive.md)  태그 페이지 (tag-archive.md)정도만 가져오도록 하겠습니다. /_pages ㄴ404.md ㄴabout.md ㄴcategory-archive.md ㄴtag-archive.md이런 구조가 되겠군요. 추가적으로 필요한 페이지가 있다면 가져오시면 되겠습니다. about.md 페이지를 제외한 나머지 페이지들은 크게 수정할 부분이 없으니 그대로 사용하고, about 페이지는 개인의 취향에 맞게 수정하여 사용하시면 됩니다. 그 후  _config.yml 파일에 _pages에 대한 내용을 추가해줍니다. _config.yml defaults:  # _posts  - scope:      path: \"\"      type: posts    values:      layout: single      author_profile: true      read_time: true      comments: true      share: true      related: true  #&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; 여기서부터 추가 됨  # _pages 부분입니다.  - scope:      path: \"_pages\"      type: pages    values:      layout: single      author_profile: true  # &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; 여기까지 추가 됨포스팅 하기 _posts 디렉토리를 최상위 폴더에 생성한 후 YYYY-MM-DD-제목.md 형식으로 포스팅을 생성합니다. 2018-01-01-hello-world.md 와 같이 작성하시면 됩니다. 그 후, 헤더를 작성하고 글을 포스팅하면 됩니다. ---title: \"minimal mistakes 테마를 이용해 github.io 블로그 구축하기\"categories:   - blogginglast_modified_at: 2018-07-01T13:00:00+09:00toc: true---위와같이 작성 할 수 있으며, 들어가는 항목은 title, categories, tags 등이 있습니다다. https://mmistakes.github.io/minimal-mistakes/ 에서 여러가지 샘플들을 보며 참고하면 편할 듯 합니다. 아래는 몇가지 헤더부분에 들어가는 몇가지 예제입니다. tags: # 태그 사용    - tag1    - tag2categories: #카테고리  - category aauthor_profile: true / false #작성자 프로필 출력여부read_time: false # read_time을 출력할지 여부 1min read 같은것!toc: true #Table Of Contents 목차 보여줌toc_label: \"My Table of Contents\" # toc 이름 정의toc_icon: \"cog\" #font Awesome아이콘으로 toc 아이콘 설정toc_sticky: true # 스크롤 내릴때 같이 내려가는 목차gallery: #이미지 갤러리  - url: /assets/images/unsplash-gallery-image-1.jpg    image_path: /assets/images/unsplash-gallery-image-1-th.jpg    alt: \"placeholder image 1\"    title: \"Image 1 title caption\"  - url: /assets/images/unsplash-gallery-image-2.jpg    image_path: /assets/images/unsplash-gallery-image-2-th.jpg    alt: \"placeholder image 2\"    title: \"Image 2 title caption\"#다음과 같이 본문에서 사용한다.{% include gallery caption=\"This is a sample gallery with **Markdown support**.\" %}header:  # 헤더에 유튜브 비디오 삽입  video:    id: XsxDH4HcOWA    provider: youtubelink: https://github.com # Direct Link 만들기결과 페이지는 https://imreplay.github.io/test/ 처럼 나오네요! 다음 포스팅은 travis-ci를 통해 push를 하면 자동으로 Build되어 gh-pages 브랜치로 결과 파일을 push 해주는 방법에 대하여 포스팅 하도록 하겠습니다. 혹시 안되거나 에러나는 부분들, 설명이 부족한 부분은 댓글로 남겨주세요! ","categories": ["blogging"],
        "tags": ["jekyll"],
        "url": "https://blog.imreplay.xyz/blogging/minimal-mistakes-%ED%85%8C%EB%A7%88%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-githubio-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "Travis-ci를 이용해 배포 자동화 시키기",
        "excerpt":"저번 포스팅에서는 minimal-mistake 테마를 이용해서 기본적인 설정을 했습니다. 이번 포스팅에서는 minimal-mistake 테마에서 Travis-ci라는 서비스를 이용하여 Github에 push하면 자동으로 build 및 gh-pages 브랜치에 push 하는 방법에 대하여 포스팅 하고자 합니다. travis-ci 부분의 내용은 대부분 jasper2에서 사용한 코드를 참고 하였습니다. _config.yml 수정하기 먼저 상단에 위치한 theme / remote_theme 부분을 확인합니다. Github pages 를 사용하는지, travis-ci를 사용하는지에 따라 설정이 달라지기 때문인데요, 먼저, travis-ci를 쓸경우  theme                  : \"minimal-mistakes-jekyll\"#remote_theme           : \"mmistakes/minimal-mistakes\"위와 같이 remote_theme는 주석처리 하도록 합니다. 반대로 github pages 를 사용할 경우, theme를 주석 처리 해주시면 됩니다. 그 다음 아래의 코드를 추가 후 자신의 환경에 맞게 수정해 줍니다. # Settings for builing master branch with travis-ci# with jekyll-travis# Settings for deploy rake task# Username and repo of Github repo, e.g.# https://github.com/USERNAME/REPO.git# username defaults to ENV['GIT_NAME'] used by Travis# repo defaults to USERNAME.github.io# Branch defaults to \"source\" for USERNAME.github.io# or \"master\" otherwisesafe: Falselsi: Falseusername: Superman #Github usernamerepo: my-blog #Github repobranch: masterrelative_source: ../my-blog/destination: ../postsproduction_url:  https://blog.imreplay.xyz # https://[username].github.io/[repo] or Your Custom URLsource_url:  https://github.com/imreplay/blog/ # Github repo URL.travis.yml 수정하기 다음으로 .travis.yml을 수정해줍니다. language: rubycache: bundlerinstall:  # Install Jekyll and dependencies  - bundle installscript:  - bundle exec rake site:deploy --quietbranches:  only:    # Change this to gh-pages if you're deploying using the gh-pages branch    - masterrvm: - 2.4.2# Generate your secure token with the travis gem:# get Github token from your Travis CI profile page# gem install travis# GH_TOKEN from https://github.com/settings/tokens# travis encrypt 'GIT_NAME=\"YOUR_USERNAME\" GIT_EMAIL=\"YOUR_EMAIL\" GH_TOKEN=YOUR_TOKEN'env:  global:    secure: \"your Secure Key\"Gemfile에 rake 추가 하기 Gemfile을 열어 gem \"rake\"를 추가해 줍니다. 없으면 빨리 추가하라고 에러를.. gh-pages 브랜치 만들기 제일 간편한 방법으로 가봅시다.        Github 저장소로 갑니다!         왼쪽 상단에 Branch: master 부분을 클릭합니다         Find or create a branch... 라는 부분이 보인다면 gh-pages 를 입력하고 엔터!         짠! gh-pages 브랜치가 생성되었습니다!   이제 travis-ci 가 빌드한 결과 파일은 gh-pages 브랜치로 Push 될겁니다! travis-ci 연결하고 토큰 발급 받기 travis-ci.org 에 접속하여 github 계정으로 로그인 합니다.  우측 상단의 프로필 메뉴를 클릭해 들어가서,  목록에 보이는 repo 목록중 해당하는 repo를 찾아 활성화 시켜줍니다.  travis-ci 서비스에서 github에 push 할 수 있게 Token을 발급해줍니다. 토큰은 Setting - Developer settings - Personal access tokens 에서 발급받을 수 있습니다.                                                                                                                                                           Generate new Token을 눌러 새로운 토큰을 만들어 줍니다. description을 쓴 후 Select scopes 에서 repo 를 선택한 후 Generate Token 을 누르면 토큰을 발급받을 수 있습니다. 해당 토큰을 바로 사용할 경우 보안상의 위험이 있어, 암호화 하여 사용합니다. secure 값 발급 받기 이번 부분은 Command 환경에서 작업합니다. 저는 우분투 환경에서 작업하였습니다. ruby가 설치되지 않은경우 ruby를 먼저 설치해 줍니다. 그 후 프로젝트 디렉토리로 이동후 진행 합니다. 아직 clone 하지 않았을 경우 clone 하여 해당 디렉토리로 이동합니다.   git clone https://github.com/[username]/[repo] 먼저 travis gem을 설치해 줍니다.   gem install travis 설치를 마친 후 아래 명령어를 자신에게 맞게 수정하여 입력합니다. travis encrypt 'GIT_NAME=\"YOUR_USERNAME\" GIT_EMAIL=\"YOUR_EMAIL\" GH_TOKEN=YOUR_TOKEN' GIT_NAME에는 Github 사용자 이름, GIT_EMAIL에는 Github에서 사용하는 email 주소, GH_TOKEN에는 위에서 발급받았던 토큰 값을 입력해줍니다. 따옴표 부분은 잘못 된 것이 아니며, 그대로 사용하시면 됩니다!! 결과 값으로 나오는 값을 .travis.yml 파일의 secure 부분에 붙여넣어줍니다. JEKYLL_ENV 환경변수 추가해주기 몇몇 기능들은 JEKYLL_ENV 환경변수가 production 일때만 작동하는 부분이 있습니다, 댓글기능, 구글 애널리틱스 등이 포함되어 있습니다. Default 값은 development 로 정의 되어있는데 이걸 production 으로 바꾸어 줍시다. travis-ci 페이지에서 프로필로 들어가 원하는 repo의 Settings로 들어갑니다.  Environment Variables 부분을 찾아 그림과 같이 Name 부분에 JEKYLL_ENV, Value 부분에 production을 입력하고 build logdp 표시 될지 여부를 선택 한 후 Add를 눌러 환경변수를 추가 해 줍니다. Rakefile 작성 최상위 경로에 Rakefile 파일을 수정합니다. 해당 파일은 jasper2의 Rakefile을 사용하였습니다. ############################################################################### Modified version of jekyllrb Rakefile# https://github.com/jekyll/jekyll/blob/master/Rakefile##############################################################################require 'rake'require 'date'require 'yaml'CONFIG = YAML.load(File.read('_config.yml'))USERNAME = CONFIG[\"username\"]REPO = CONFIG[\"repo\"]SOURCE_BRANCH = CONFIG[\"branch\"]DESTINATION_BRANCH = \"gh-pages\"def check_destination  unless Dir.exist? CONFIG[\"destination\"]    sh \"git clone https://$GIT_NAME:$GH_TOKEN@github.com/#{USERNAME}/#{REPO}.git #{CONFIG[\"destination\"]}\"  endendnamespace :site do  desc \"Generate the site\"  task :build do    check_destination    sh \"bundle exec jekyll build\"  end  desc \"Generate the site and serve locally\"  task :serve do    check_destination    sh \"bundle exec jekyll serve\"  end  desc \"Generate the site, serve locally and watch for changes\"  task :watch do    sh \"bundle exec jekyll serve --watch\"  end  desc \"Generate the site and push changes to remote origin\"  task :deploy do    # Detect pull request    if ENV['TRAVIS_PULL_REQUEST'].to_s.to_i &gt; 0      puts 'Pull request detected. Not proceeding with deploy.'      exit    end    # Configure git if this is run in Travis CI    if ENV[\"TRAVIS\"]      sh \"git config --global user.name $GIT_NAME\"      sh \"git config --global user.email $GIT_EMAIL\"      sh \"git config --global push.default simple\"    end    # Make sure destination folder exists as git repo    check_destination    sh \"git checkout #{SOURCE_BRANCH}\"    Dir.chdir(CONFIG[\"destination\"]) { sh \"git checkout #{DESTINATION_BRANCH}\" }    # Generate the site    sh \"bundle exec jekyll build\"        # Commit and push to github    sha = `git log`.match(/[a-z0-9]{40}/)[0]    Dir.chdir(CONFIG[\"destination\"]) do      # check if there is anything to add and commit, and pushes it      sh \"if [ -n '$(git status)' ]; then            git add --all .;            git commit -m 'Updating to #{USERNAME}/#{REPO}@#{sha}.';            git push --quiet origin #{DESTINATION_BRANCH};         fi\"      puts \"Pushed updated branch #{DESTINATION_BRANCH} to GitHub Pages\"    end  endend저장 후 travis-ci가 잘 작동하는지 확인해 봅니다. Commit - Push! 진행상황은 travis-ci 페이지에서 확인 할 수 있습니다. 두근두근.. 에러-수정-빌드-에러-수정-빌드-에러…-빌드 완성!!  약 2~3분정도의 시간이 소요됩니다! 2분 45초정도 소요 되었네요..! 마치며 새로운 저장소를 만들고 한번더 theme와 travis-ci를 연동시켜보니 어느정도 익숙해진 것 같습니다 이제 다음 포스팅에서는 검색 서비스인 algolia, 댓글 기능을 제공하는 disqus 를 적용시켜보고 blogging 포스팅을 마치겠습니다! ","categories": ["blogging"],
        "tags": ["travis-ci"],
        "url": "https://blog.imreplay.xyz/blogging/Travis-ci%EB%A5%BC-%ED%86%B5%ED%95%B4-%EB%B0%B0%ED%8F%AC%EC%9E%90%EB%8F%99%ED%99%94/",
        "teaser":null}]
