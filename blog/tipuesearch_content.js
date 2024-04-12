var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/KEHUEISIN/cd2024 網站: https://KEHUEISIN.github.io/cd2024 簡報: https://KEHUEISIN.github.io/cd2024/reveal 網誌: https://https://KEHUEISIN.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"W8","text":"第八週實作內容報告 w8 分組影片報告 各組員上傳一支影片講解個人與團隊分配任務製作結果。 41023108 41023110 41023155 41023211","tags":"w8-41023108","url":"./41023108-w8.html"},{"title":"W7","text":"各週上課內容心得及實作項目 更分組網站內容 指派任務與組員，並要求其查找練習2說明如何在 CoppeliaSim 環境中, 利用 IPv6 ZeroMQ Remote API Python 進行兩個自由度的鋼球平衡檯自動控制系統模擬?相關內容。","tags":"w7-41023108","url":"./41023108-w7.html"},{"title":"W6","text":"第六週實作內容報告 w6 在分組網站加入w4任務 第八組自評分數:80分 下面為2a影片嵌入各組員分組網站網頁連結，影片、摘要、字幕文字檔皆在連結內。 41023108 組員自評: 75分 2a-midag8 w4 2a hw4 41023110 組員自評: 70分 2a-midag8 w4 2a hw3 41023155 組員自評: 70分 2a-midag8 w4 2a hw2 41023211 組員自評: 70分 2a-midag8 w4 2a hw1 將w4-w5週影片剪輯實作網址個別建立在此頁每個組員學號下方，並讓其自評自己的分數 也能知道剪輯的各週影片都有什麼?","tags":"w6-41023108","url":"./41023108-w6.html"},{"title":"W5","text":"第五週實作內容報告 w5 統整網誌 將組員個人網誌納入分組倉儲目錄下，並持續更新各影片剪輯後製，在嶔入影片過程中多次校正文檔，我們使用的軟體是https://www.capcut.com/my-edit這個軟體，目前字幕只支援簡體中文所以我們必須在翻完後再重新拉回進度條去逐字更改翻錯的內容及將簡體字改成繁體字，20分鐘以上的影片通常都會要剪上1hr以上時間。","tags":"w5-41023108","url":"./41023108-w5.html"},{"title":"W4","text":"第四週實作內容報告 w4 影片上字幕 將各週影片上字幕並置入分組網頁上。 統整各週內容合併成網誌，目前進度中的專案還有LaTeX轉pdf及各週還有一些影片沒完整上傳 ，對於使用LaTeX還是很有問題，想直接在倉儲裡新建一個新目錄存放圖片檔或後續的零件繪製的檔案，這樣downloaads目錄才不會那麼亂，就只是檔案路徑要改在我自己建立的目錄下。","tags":"w4-41023108","url":"./41023108-w4.html"},{"title":"W3","text":"第三週實作內容報告 w3 如何協同製作分組報告，並將各組組員加入至分組倉儲建立子模組，LaTeX 轉 pdf教學. 期中協同分組報告(將組員的個人倉儲設為分組倉儲子模組) 我是使用可攜環境直接抓取組員倉儲並建立子目錄，前期在git clone時有在putty建立了一個key，有了權限就能克隆及push，如下html 1.創建putty中的key 2.開啟可攜系統cmd 3.開啟後輸入cd tmp 導入tmp目錄中 4.進去tmp後 輸入git clone --recurse-submodules 倉儲網址.git(克隆遠端數據庫) 5.確認tmp目錄下有自己倉儲目錄後 輸入cd 倉儲名稱 6.進入倉儲目錄後，cms即可開啟動態網站 克隆完分組倉儲後，在依照下面html方式抓取: 1.git clone https://github.com/mdecd2024/2a-midag8.git cd 2a-midag8 #克隆完分組倉儲後進入2a-midag x中 。 2.git submodule add 組員課程倉儲網址.git +組員學號(此為子目錄名稱) #有組員學號目的是為了後續抓取組員課程倉儲資料較為方便 3.git add . 4.git commit -m \"\" 5.git push 若要更新組員課程倉儲資料作法如下: 1.cd 2a-midag8 #進入分組倉儲2a-midag x中 。 2.cd 41023108 #輸入 cd 組員子目錄名稱 。 3.git pull origin main #進入組員子目錄中 從遠端拉取最新的子模組代碼。 4.cd .. #退出組員子目錄 5.git add . 6.git commit -m \"\" 7.git push #這是確保在更新子模組之後，將變更提交推送回主存儲庫。 使用 Gitpod 維護倉儲與網站 感覺Gitpod 使用方式和codespaces、replit很像，跟replit差別是，跑的快多了，Gitpod 加上前面幾個維護方式也已經有4個了，都大同小異 有關 LaTeX 轉 pdf 需先將miktex-portable.7z下載並解壓至可攜環境data中，將已經編譯好的.txt檔案上傳至遠端，最終要以latex轉為pdf為下列html中所編譯出的腳本: \\documentclass[12pt,a4paper]{report} %紙張設定 \\usepackage{xeCJK}%中文字體模組 \\setCJKmainfont{標楷體} %設定中文字體 %\\setCJKmainfont{MoeStandardKai.ttf} \\newfontfamily\\sectionef{Times New Roman}%設定英文字體 %\\newfontfamily\\sectionef{Nimbus Roman} \\usepackage{enumerate} \\usepackage{amsmath,amssymb}%數學公式、符號 \\usepackage{amsfonts} %數學簍空的英文字 \\usepackage{graphicx, subfigure}%圖形 \\usepackage{fontawesome5} %引用icon \\usepackage{type1cm} %調整字體絕對大小 \\usepackage{textpos} %設定文字絕對位置 \\usepackage[top=2.5truecm,bottom=2.5truecm, left=3truecm,right=2.5truecm]{geometry} \\usepackage{titlesec} %目錄標題設定模組 \\usepackage{titletoc} %目錄內容設定模組 \\usepackage{textcomp} %表格設定模組 \\usepackage{multirow} %合併行 %\\usepackage{multicol} %合併欄 \\usepackage{CJK} %中文模組 \\usepackage{CJKnumb} %中文數字模組 \\usepackage{wallpaper} %浮水印 \\usepackage{listings} %引用程式碼 \\usepackage{hyperref} %引用url連結 \\usepackage{setspace} \\usepackage{lscape}%設定橫式 \\lstset{language=Python, %設定語言 basicstyle=\\fontsize{10pt}{2pt}\\selectfont, %設定程式內文字體大小 frame=lines, %設定程式框架為線 } %\\usepackage{subcaption}%副圖標 \\graphicspath{{./../images/}} %圖片預設讀取路徑 \\usepackage{indentfirst} %設定開頭縮排模組 \\renewcommand{\\figurename}{\\Large 圖.} %更改圖片標題名稱 \\renewcommand{\\tablename}{\\Large 表.} \\renewcommand{\\lstlistingname}{\\Large 程式.} %設定程式標示名稱 \\hoffset=-5mm %調整左右邊界 \\voffset=-8mm %調整上下邊界 \\setlength{\\parindent}{3em}%設定首行行距縮排 \\usepackage{appendix} %附錄 \\usepackage{diagbox}%引用表格 \\usepackage{multirow}%表格置中 %\\usepackage{number line} %=------------------更改標題內容----------------------=% \\titleformat{\\chapter}[hang]{\\center\\sectionef\\fontsize{20pt}{1pt}\\bfseries}{\\LARGE 第\\CJKnumber{\\thechapter}章}{1em}{}[] \\titleformat{\\section}[hang]{\\sectionef\\fontsize{18pt}{2.5pt}\\bfseries}{{\\thesection}}{0.5em}{}[] \\titleformat{\\subsection}[hang]{\\sectionef\\fontsize{18pt}{2.5pt}\\bfseries}{{\\thesubsection}}{1em}{}[] %=------------------更改目錄內容-----------------------=% \\titlecontents{chapter}[11mm]{}{\\sectionef\\fontsize{18pt}{2.5pt}\\bfseries\\makebox[3.5em][l] {第\\CJKnumber{\\thecontentslabel}章}}{}{\\titlerule*[0.7pc]{.}\\contentspage} \\titlecontents{section}[18mm]{}{\\sectionef\\LARGE\\makebox[1.5em][l] {\\thecontentslabel}}{}{\\titlerule*[0.7pc]{.}\\contentspage} \\titlecontents{subsection}[4em]{}{\\sectionef\\Large\\makebox[2.5em][l]{{\\thecontentslabel}}}{}{\\titlerule*[0.7pc]{.}\\contentspage} %=----------------------章節間距----------------------=% \\titlespacing*{\\chapter} {0pt}{0pt}{18pt} \\titlespacing*{\\section} {0pt}{12pt}{6pt} \\titlespacing*{\\subsection} {0pt}{6pt}{6pt} %=----------------------標題-------------------------=% \\begin{document} %文件 \\sectionef %設定英文字體啟用 \\vspace{12em} \\begin{titlepage}%開頭 \\begin{center} %標題 \\makebox[1.5\\width][s] %[s] 代表 Stretch the interword space in text across the entire width {\\fontsize{24pt}{2.5pt}國立虎尾科技大學}\\\\[18pt] \\makebox[1.5\\width][s] {\\fontsize{24pt}{2.5pt}機械設計工程系}\\\\[18pt] \\sectionef\\fontsize{24pt}{1em}\\selectfont\\textbf { \\vspace{0.5em} ODOO PLM 在協同產品設計上的應用}\\\\[18pt] %設定文字盒子 [方框寬度的1.5倍寬][對其方式為文字平均分分布於方框中]\\\\距離下方18pt \\vspace{1em} %下移 \\fontsize{24pt}{1pt}\\selectfont\\textbf{- 以鋼球平衡台系統設計為例}\\\\ \\vspace{1em} \\sectionef\\fontsize{24pt}{1em}\\selectfont\\textbf { \\vspace{0.5em} Steel Ball Balancing Platform System Design} \\vspace{1em} %=---------------------參與人員-----------------------=% \\end{center} \\begin{flushleft} \\begin{LARGE} \\hspace{32mm}\\makebox[5cm][s] {指導教授：\\quad 嚴\\quad 家\\quad 銘\\quad 老\\quad 師}\\\\[6pt] \\hspace{32mm}\\makebox[5cm][s] {班\\qquad 級：\\quad 四\\quad 設\\quad 二\\quad 甲}\\\\[6pt] \\hspace{32mm}\\makebox[5cm][s] {學\\qquad 生：\\quad 第\\quad 一\\quad 位\\quad(411231xx)} \\\\[6pt] \\hspace{32mm}\\makebox[5cm][s] {\\hspace{43mm}第\\quad 二\\quad 位\\quad(411231xx)}\\\\[6pt] \\hspace{32mm}\\makebox[5cm][s] {\\hspace{43mm}第\\quad 三\\quad 位\\quad(411231xx)}\\\\[6pt] \\hspace{32mm}\\makebox[5cm][s] {\\hspace{43mm}第\\quad 四\\quad 位\\quad(411231xx)}\\\\[6pt] \\hspace{32mm}\\makebox[5cm][s] {\\hspace{43mm}第\\quad 五\\quad 位\\quad(411231xx)}\\\\[6pt] \\hspace{32mm}\\makebox[5cm][s] {\\hspace{43mm}第\\quad 六\\quad 位\\quad(411231xx)}\\\\[6pt] \\hspace{32mm}\\makebox[5cm][s] {\\hspace{43mm}第\\quad 七\\quad 位\\quad(411231xx)}\\\\[6pt] \\hspace{32mm}\\makebox[5cm][s] {\\hspace{43mm}第\\quad 八\\quad 位\\quad(411231xx)}\\\\[6pt] %設定文字盒子[寬度為5cm][對其方式為文字平均分分布於方框中]空白距離{36.5mm}\\空白1em \\end{LARGE} \\end{flushleft} \\vspace{4em} \\fontsize{18pt}{2pt}\\selectfont\\centerline{\\makebox[\\width][s] {中華民國\\hspace{3em} 113 \\quad 年\\quad 3\\quad 月}} \\end{titlepage} \\newpage %=------------------------摘要-----------------------=% \\input{abstract.tex} \\newpage %=------------------------目錄----------------------=% \\renewcommand{\\contentsname}{\\centerline{\\fontsize{18pt}{\\baselineskip}\\selectfont\\textbf{目\\quad 錄}}} \\tableofcontents %目錄產生 \\newpage %=------------------圖表目錄產生----------------------=% \\renewcommand{\\listfigurename}{\\centerline{\\fontsize{18pt}{\\baselineskip}\\selectfont\\textbf{圖\\quad 目\\quad 錄 }}} \\newcommand{\\loflabel}{圖} %定義\\loflabel 文字為圖 \\renewcommand{\\numberline}[1]{\\loflabel~#1\\hspace*{0.5em}} \\listoffigures %\\newcommand{\\captioname}{圖} %\\newpage %\\renewcommand{\\listtablename}{\\centerline{\\fontsize{18pt}{\\baselineskip}\\selectfont\\textbf{表\\quad 目\\quad 錄 }}} %\\newcommand{\\lotlabel}{表} %定義\\lotlabel 文字為表 %\\renewcommand{\\numberline}[1]{\\lotlabel~#1\\hspace*{0.5em}} %\\listoftables \\end{center} %=-------------------------內容----------------------=% \\input{1_introduction.tex} \\input{2_player_making_process.tex} \\input{3_Lua_source_code.tex} \\input{4_timer_scooreboard.tex} \\input{5_Coppeliasim_simulate_scene.tex} \\input{6_game_conection.tex} \\input{7_suggestion.tex} %=---------------------相關資料----------------------=% %\\input{9_reference.tex} %=---------------附錄-----------------=% %\\addcontentsline{toc}{chapter}{附錄} %新增目錄名稱 %\\input{10_appendix.tex} \\newpage \\end{document} 只需將自己資料依照上面模式排版即可得出一個.txt檔案，後續以xelatex 檔名.txt，它就會幫你在分組downloads目錄下上傳一個轉完的.pdf","tags":"w3-41023108","url":"./41023108-w3.html"},{"title":"W2","text":"第二週實作內容報告 w2 建立Github Classroom 指定分組倉儲，並使用replit、Codespaces及可攜環境維護分組倉儲，在git clone至近端執行動態網站. 利用 Github Classroom 指定分組倉儲 1.由組長建立2a-midagx名稱的倉儲分組網站，並找定組員join至剛建立的網站，使用codespaces維護倉儲網站，可直接安裝模組啟動動態網站，做法上和replit很像，一樣使用python3 main.py進入分組動態網站，使用python3 -m http.sever開啟靜態網站，說明codespaces使用上的限制。 2.使用replit管理github分組倉儲 利用 Codespaces 維護倉儲與網站 利用code中的Codespaces維護，開啟後用終端機開啟動態靜態網站，也可以在裡面更新網誌，記得在開啟python3前需要先安裝模組，就跟replit一樣需先確認是否有安裝過模組。 在近端執行動態網站 可攜環境需先至mde.tw網站上下載 portable_2024.7z 這個壓縮檔案，解壓縮至個人隨身系統，步驟如下 1.創建putty中的key 2.開啟可攜系統cmd 3.開啟後輸入cd tmp 導入tmp目錄中 4.進去tmp後 輸入git clone --recurse-submodules 倉儲網址.git(克隆遠端數據庫) 5.確認tmp目錄下有自己倉儲目錄後 輸入cd 倉儲名稱 6.進入倉儲目錄後，cms即可開啟動態網站","tags":"w2-41023108","url":"./41023108-w2.html"},{"title":"W1","text":"第一週實作內容報告 w1 建立個人課程倉儲，下載當期可攜環境檔案後將個人倉儲 import 至 Replit，以及設定個人網誌. 2a 建個人課程倉儲 登入個人github帳號，使用老師給的 https://github.com/mdecycu/cmsimde_site 網址倉儲建立名稱為github名稱/cd2024倉儲。 將個人倉儲 import 至 Replit 登入replit，建議以github直接登入可以在後續認證時他會幫你做相關連接查驗。 設定 Github 帳號的雙重認證 進入個人倉儲settings中的ssh and gpg key 項目裡two-factor authentication選項啟動雙重認證，可以綁定手機或手錶，軟體名稱為authy app 有一點別重要，那就是當認證遺失只能以回復碼，才能找回帳號。 如何 import 倉儲至 Replit 進行改版 Replit中設定個人網誌的方法，使用markdown目錄原始檔做複製，可複製Pelican的程式碼，只需將其中的內容改成自己所要發表的內容即可，而Pelican轉換完的網誌內容則會出現在blog目錄下，如要將markdown中.md檔轉入blog中變成.html檔指令為pelican markdown -o blog -s local_publishconf.py，除了這個設定外還有其他別的的方式設定，這就得看使用者的帳號是甚麼在做其他設定。","tags":"w1-41023108","url":"./41023108-w1.html"}]};