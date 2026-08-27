const express = require('express');
const app = express();

/*
미들웨어는 라우터 연결 전/후에 사용할 수 있는 함수(모듈)
app.use() 등의 형태로 사용된다.
미들웨어는 자체 모듈로 사용 가능 하지만, 써드 파티 미들웨어로 많이 사용한다
*/
app.use(function(req, res, next){
    console.log('@pre Handler');
    console.log(req.query);
    if (req.query.grade !== "A"){
        res.status(403).json({'msg': '접근 권한이 없습니다'});
    }else{
    next();
    }
})

app.get('/', (req, res, next)=>{ //next()는 다음으로 넘기는 기능
    console.log("@router");
    res.send('라우터 접근과 반환');
    next();
})

//특정한 요청시에만 동작시킬 경우
app.use('/', (req, res)=>{
    console.log("@Post Handler")
    console.log("일처리 후 뒷정리")
})

app.listen(80, ()=>{
    console.log('http://localhost')
});