# 1. 원하는 공유 저장소에 접근

# 2. git 초기화
git init

# 3. 변경한 파일 staged
# git add [원하는 파일]
git add .

# 상태 확인
git status

# commit 하기
git commit -m "first commit"

# commit 의 상채 확인
git log --graph --oneline --all

# 이후 vs 코드로 활용 가능

# 원격 저장소 등록
git remote add origin https://github.com/dg-logs/yeardreamschool6th.git

# 기본 브랜치 이름 변경
git branch -M main

# push
git push -u origin main

# 글로벌 저장소 이름 변경
git config --global user.name "dg"

# 이메일 주소 변경
git config --global user.email "dagyoung2755@gmail.com"

