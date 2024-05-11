var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://kehueisin.github.io/cd2024/ \n 網誌:\xa0 https://kehueisin.github.io/cd2024/blog \n 簡報:\xa0 https://kehueisin.github.io/cd2024/reveal \n 倉儲:\xa0 https://github.com/KEHUEISIN/cd2024 \n KEHUEISIN個人網站，歡迎瀏覽。 \n', 'tags': '', 'url': 'About.html'}, {'title': '2a-midag8分組內容', 'text': '名字: 41023108 柯惠心\xa0  職位: 第八組組長\xa0 \n 工作內容: 負責派組員各作業任務、解決組員疑難雜症。 \n 下面為w1-w9我所做事項相關內容: \n \n 目前完成中任務有: \n \n \n 2a各週影片剪輯上字幕及摘要。 \n 小組及分組網站自評。 \n 各週網誌內容整合。 \n \n \n 目前進行中的任務: \n \n \n latex pdf檔整合。 \n 個人影片錄製。 \n \n \n', 'tags': '', 'url': '2a-midag8分組內容.html'}, {'title': 'Experience', 'text': '此頁為心得，及問題延伸或感興趣問題議題探討區 \n', 'tags': '', 'url': 'Experience.html'}, {'title': 'Problem discussion', 'text': '問: 分組倉儲子目錄內容沒跟組員倉儲同步 \n chatgpt答: \n 解決方法： \n 手動同步： \n 如果分組倉儲的子目錄內容與組員倉儲不同步，可以手動進行同步。進入子目錄，使用 git pull 命令從組員倉儲拉取最新的更改： \n cd 組員A目錄 # 進入組員 A 的子目錄\ngit pull origin main # 從組員 A 的主分支拉取最新的更改\n \n 檢查分支： \n 確保您正在正確的分支上進行操作。如果組員的更改在另一個分支上，您可能需要切換到該分支才能獲取更新。 \n git checkout 分支名稱 # 切換到組員的分支\ngit pull origin 分支名稱 # 拉取最新的更改\n \n 查看遠端倉儲信息： \n 使用 git remote -v 命令查看當前倉儲關聯的遠端倉庫信息，確保正確關聯組員的遠端倉儲： \n git remote -v\n \n 如果顯示的遠端倉儲不正確，可以使用 git remote add 命令重新添加正確的遠端倉儲： \n git remote add origin_correct_url\n \n 清除快取： \n 有時候可能是快取導致的問題，可以嘗試清除 Git 的快取並再次拉取： \n git rm -r --cached .\ngit reset --hard HEAD\ngit pull origin main\n \n 更新本地分支： \n 如果是因為本地分支落後於遠端分支導致的同步問題，可以先更新本地分支： \n git fetch origin main\ngit merge origin/main\n \n 檢查權限： \n 確保您有足夠的權限訪問組員的遠端倉儲。如果是私有倉儲，可能需要授權或添加 SSH 鑰匙。 \n 進行排查的步驟： \n \n 查看遠端倉儲信息 ：\n \n 使用  git remote -v  命令查看當前關聯的遠端倉庫信息，確保正確連接了組員的遠端倉儲。 \n \n \n \n 查看本地分支情況 ： \n \n 使用  git branch  命令查看本地分支，確保您正在正確的分支上進行操作。 \n \n \n \n 查看本地倉儲狀態 ： \n \n 使用  git status  命令查看本地倉儲狀態，看是否有未提交的更改或者未跟蹤的文件。 \n \n \n \n 查看遠端倉儲情況 ： \n \n 使用 GitHub 等代碼托管平台查看組員的遠端倉儲，確認組員是否已經推送了最新的更改。 \n \n \n \n 檢查 .gitignore 文件 ： \n \n 如果組員的文件被 .gitignore 排除了，可能導致不同步。查看 .gitignore 文件是否排除了組員的文件。 \n \n \n \n 嘗試重新克隆 ： \n \n 如果以上方法都無法解決問題，可以嘗試刪除本地的子目錄，然後重新克隆組員的遠端倉儲： \n \n \n \n cd .. \nrm -rf 組員A目錄 # 刪除子目錄（請謹慎操作） \ngit clone remote_repository_url 組員A目錄 # 重新克隆組員的遠端倉儲\n \n', 'tags': '', 'url': 'Problem discussion.html'}, {'title': 'Problem discussion2', 'text': '同問: 如果不想手動處理 \n \n chatgpt答: \n 使用 Git Hooks： \n Git Hooks 可以讓您在特定的 Git 事件觸發時自動執行腳本或命令。您可以使用  post-merge  或  post-checkout  Hook 來在拉取或切換分支後自動同步子目錄內容。 \n \n \n post-merge Hook ： \n \n 當您從遠端倉儲拉取最新更改並合併到本地分支時觸發。 \n 在倉儲的  .git/hooks  目錄下可以創建一個名為  post-merge  的檔案（無檔名擴展名），並為其添加執行權限。 \n 編輯  post-merge  檔案，加入以下內容： \n \n \n \n #!/bin/sh\ncd path/to/member_A  # 進入組員 A 的子目錄\ngit pull origin main  # 從組員 A 的主分支拉取最新更改\n \n 確保  post-merge  檔案有執行權限： \n chmod +x .git/hooks/post-merge\n \n post-checkout Hook： \n \n 當您從不同分支切換到其他分支時觸發。 \n 同樣，在倉儲的  .git/hooks  目錄下可以創建一個名為  post-checkout  的檔案（無檔名擴展名），並為其添加執行權限。 \n 編輯  post-checkout  檔案，加入以下內容： \n \n #!/bin/sh\ncd path/to/member_A  # 進入組員 A 的子目錄\ngit pull origin main  # 從組員 A 的主分支拉取最新更改\n \n 確保  post-checkout  檔案有執行權限： \n chmod +x .git/hooks/post-checkout\n \n \n \n 注意事項 ： \n \n 將  path/to/member_A  替換為組員 A 的子目錄路徑。 \n 您可以為每個組員的子目錄創建相應的  post-merge  或  post-checkout  Hook。 \n \n \n \n 這樣設置後，每次從遠端倉儲拉取最新更改或者切換分支時，Git 會自動執行對應的 Hook 腳本，自動進行子目錄內容的同步。這樣您就不需要手動處理了。 \n 使用此方法 設置 Hook 時要小心，以免誤操作導致意外的結果. \n', 'tags': '', 'url': 'Problem discussion2.html'}, {'title': 'Problem discussion3', 'text': '問: 說明如何在\xa0 CoppeliaSim \xa0環境中, 利用 IPv6\xa0 ZeroMQ Remote API \xa0Python 進行兩個自由度的鋼球平衡檯自動控制系統模擬? \n chat gpt答: \n \n \n 安装ZeroMQ库和Python API：  确保你的Python环境中已经安装了ZeroMQ库，并且下载了CoppeliaSim的Python API。 \n \n \n 创建仿真场景：  在CoppeliaSim中创建一个仿真场景，包括一个具有两个自由度的钢球平衡台，并设置好仿真参数。 \n \n \n 启用远程API：  在CoppeliaSim的设置中启用远程API，并确保选择了IPv6 ZeroMQ作为通信协议。 \n \n \n 编写Python脚本：  编写Python脚本以连接到CoppeliaSim的远程API，并实现控制算法。这个脚本将使用ZeroMQ库来与CoppeliaSim通信。以下是一个简单的示例： \n \n \n \n \n import zmq\nimport time\n\n# 连接到CoppeliaSim的ZeroMQ远程API\ncontext = zmq.Context()\nsocket = context.socket(zmq.REQ)\nsocket.connect("tcp://[::1]:5555")  # 这里使用IPv6地址，根据你的设置修改\n\n# 控制算法\ndef control_algorithm():\n    # 在这里编写你的控制算法，根据当前状态计算控制命令\n    # 这里只是一个示例，可能需要根据你的具体场景进行修改\n    command = [0.1, 0.2]  # 假设控制命令为两个自由度的力或位移\n    return command\n\n# 主循环\nwhile True:\n    # 获取当前状态\n    socket.send_string("get_state")\n    state = socket.recv_json()\n\n    # 计算控制命令\n    command = control_algorithm()\n\n    # 发送控制命令\n    socket.send_json({"command": command})\n    socket.recv_string()  # 等待确认\n\n    time.sleep(0.1)  # 可根据需要调整控制频率\n \n 请注意，以上示例是一个简单的框架，实际控制算法需要根据你的具体模型和需求进行编写。同时，确保你的控制算法适用于你的平衡台模型，并且实现了适当的反馈控制。 \n \n 运行仿真：  在CoppeliaSim中启动仿真，并运行你的Python脚本。你应该能够看到钢球平衡台根据你的控制算法进行运动。 \n \n', 'tags': '', 'url': 'Problem discussion3.html'}, {'title': 'Problem discussion4', 'text': "問: 分組倉儲其中一組員內容無法同步，案例如下html。 \n git pull origin main #分組倉儲資料夾中進入41023211子模組塊，執行遠端抓取最新資料。\nFrom https://github.com/Wmrtbij49h/cd2024 #下面開始為出現的問題內容。\n * branch            main       -> FETCH_HEAD\nerror: Your local changes to the following files would be overwritten by merge:\n        markdown/20240218.md\nPlease commit your changes or stash them before you merge.\nAborting\nUpdating 403c103..f446e6c \n test: 我想刪除組員子目錄，並重新抓取。 \n 我先將資料夾中關於41023211這個組員的相關資料刪除，後重新又抓取，但可能是我沒刪除乾淨，cmd對我說 Git 認為 '41023211' 已經存在於索引中，這通常意味著 '41023211' 已經被 Git 記錄為一個子模塊。子模塊是 Git 子項目的一部分，我放棄對41023211這位組員子目錄刪除，採用同名稱直接覆蓋的方法，程式碼如下面html檔。 \n chatgpt答: \n git submodule add --force https://github.com/Wmrtbij49h/cd2024.git 41023211\n \n 如果你確定這個本地的 '41023211' 子模塊目錄是正確的且包含了你想要的內容，你可以放心地使用  --force  選項。 \n 請注意，如果你不確定如何處理這個情況，或者你希望使用不同的名稱來避免覆蓋現有的目錄，你可以使用 --name 選項來指定一個新的子模塊名稱。 \n", 'tags': '', 'url': 'Problem discussion4.html'}, {'title': 'Github', 'text': '在git pull遇到下列問題 \n 問題: \n git pull origin main\nFrom https://github.com/mdecd2024/2a-midag8\n* branch main -> FETCH_HEAD\nUpdating c96ebf6..916a3c7\nerror: Your local changes to the following files would be overwritten by merge:\nblog/archives.html\nblog/author/kmol.html\nblog/authors.html\nblog/categories.html\nblog/category/w1.html\nblog/feeds/all.atom.xml\nblog/feeds/w1.atom.xml\nblog/index.html\nblog/pages/about/index.html\nblog/search.html\nblog/sitemap.xml\nblog/tag/wang-zhi-bian-xie.html\nblog/tags.html\nmarkdown/20240218.md\nPlease commit your changes or stash them before you merge. \n 詢問chatgpt後解決的方式: \n 1.git checkout -- <file>  #此程式碼為放棄本地修改， 如果確定不需要這些本地修改，可以使用此命令放棄這些修改\n2.git stash #此程式碼為儲藏本地修改，如果暫時不想提交這些修改但又不想喪失它們，可以使用此命令將修改儲藏起來，然後再執行 git pull origin main。\n3.出現了git stash\nSaved working directory and index state WIP on main: c96ebf6 up這段文字內容。\n4.最後在git pull origin main抓取最新資料。\n\n\n \n 1.git stash pop  #此程式碼為完成拉取後，可以使用將儲藏的修改應用回來。 \n   \n', 'tags': '', 'url': 'Github.html'}, {'title': 'w12 task1', 'text': '因為一開始沒理解完全老師任務所要求的方式倒置整個零組件要重新繪製，我共分成了全手動繪製、 python繪製感覺其實差不多只是有多做一個錄製的動作。下面細分兩種畫法。 \n 使用手動繪製platform這個零件檔案如下: \n platform零件檔 (手動 \n 影片: \n   \n 使用python繪製platform這個零件檔案如下: \n platform零件檔 (python \n 影片: \n', 'tags': '', 'url': 'w12 task1.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};