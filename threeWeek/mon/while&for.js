// 과제 1) 반복문의 마지막 값 : 코드를 실행할 때 마지막 값
let i = 3;
while(i){
    alert(i--);
    //-> 1;
}

// 과제 2) while 반복문의 출력값 예상하기 : 전위형 증가 연산자의 경우 / 후위형 증가 연산자의 경우
// 1. 전위
let k = 0;
while (++k < 5) alert(k);
// -> 1,2,3,4

// 2. 후위
let j = 0;
while (j++ < 5) alert(j);
// -> 0<5 =1, 1<5 =2, 2<5 =3, 3<5 =4, 4<5 =5


// 과제 3) for 반복문의 출력값 예상하기 : 후위형 증가 연산자의 경우 / 전위형 증가 연산자의 경우
// 1. 후위
for(let i = 0; i < 5; i++) alert(i); // -> 0,1,2,3,4

// 2. 전위
for(let i = 0; i < 5; ++i) alert(i); // -> 0,1,2,3,4

// 과제 4) for 반복문을 이용하여 짝수 출력하기
for(let i = 0;i<=10; i++){
    if(i %2 == 0){
        alert(i);
    }
}


// 과제 5) for 반복문을 while 반복문으로 바꾸기
let l = 0;
while(l < 3){
    alert(`number ${l}`);
    l++;
}


//  소수 출력하기 : n = 10 -> 결과 2,3,5,7
for(let n=2; n<=10; n++){
    let sum=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            sum++;
        }
    }
    if(sum == 2){
            alert(n);
    }
    sum=0;
}



/*  while과 for 반복문 
        - for문, while문은 서로 변환이 가능하기 때문에 반복문을 작성할 때 어느 쪽을 선택해도 좋지만, for문은 반복 횟수를 알고 있을 때 주로 사용하고
          while문은 조건에 따라 반복할 때 주로 사용한다.

    while 반복문
        - for문이 정해진 횟수만큼 반복한다면, while 문은 조건식이 true 일 경우에 계속해서 반복, 조건식에는 비교 또는 논리 연산식이 주로오며,
          조건식이 false가 되면 반복 행위를 멈추고 while문을 종료한다.

                while (condition(조건)) {
                    코드
                    (반복문 본문)
                }
        
            -> condition이 truthy이면 반복문 본문의 코드가 실행

                let i = 0;
                while (i<3){
                    alert(i); -> 0,1,2가 출력됨
                    i++; 
                }

            -> 반복문 본문이 한 번 실행되는 것을 반복(iteration, 이터레이션) 이라 부름. 반복문이 세 번의 이터레이션을 만듬
               i++가 없었다면 이론적으로 반복문이 영원히 반복(무한루프), 그런데 브라우저는 이런 무한 반복을 멈추게 해주는 실질적인 수단을 제공,
               서버 사이드 자바스크립트도 이런 수단을 제공해 주므로 무한으로 반복되는 프로세스를 죽일 수 있다.


                let i = 3;
                while(i){ -> while(i!=0)의 조건을 줄여서 사용한것으로 i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춤
                    alert(i);
                    i--;
                }

            -> 위의 본문처럼 한 줄이면 대괄호를 쓰지 않아고 사용가능하다
                
                let i = 3;
                while(i) alert(i--);
            

    do...while 반복문
        - 조건에 따라 반복을 계속할지를 결정할 때 사용하는 것은 while문과 동일, 다만 무조건 중괄호 {} 블럭을 한번 실행하고, 조건을 검사하여 반복 결정
            
                do{
                    반복문 본문
                }while (condition);

            -> 조건을 확인한 후 조건이 truthy인 동안에 본문이 계속 실행

                let i = 0;
                do{
                    alert(i)
                    i++;
                }while(i<3);

            -> do..while 문법은 조건이 truthy인지 아닌지에 상관없이 최소한 한번이라도 실행하고 싶을 때만 사용(대부분 while문을 사용함)


    for 반복문
        - 반복횟수를 알고 있을 때 주로 사용

                for ( begin; condition; step){
                    반복문 본문
                }
            -> 위의 형태로 진행

                for(let i = 0; i < 3; i++){ -> 0,1,2가 출력
                    alert(i)
                }

            begin       : i=0 -> 반복문에 진입할 때 단 한 번 실행(선언)
                -> 카운터 변수 i를 반복문 안에서 선언하는 것을 인라인 변수 선언이라고 부른다, 선언된 변수는 반복문 내에서만 접근이 가능하다
                   반복만 밖에서 선언한 변수를 for(i=0;i<3;i++)의 형태로 진행되면 반복문 밖에서도 값을 출력할 수 있다.(결과 3)
            condition   : i<3 -> 반복마다 해당 조건이 확인됨, false이면 반복문을 멈춤
            body        : alert(i) -> condition이 truthy일 동안 계속해서 실행
            step        : i++ -> 각 반복의 body가 실행된 이후에 실행

            * 반복문 알고리즘
                begin을 실행
                -> condition이 truthy이면 body를 실행 후, step을 실행
                -> falsy이면 반복문 종료


        ※ 구성 요소 생략하기

            * for문의 구성 요소를 생략하는 것도 가능, 반복문이 시작될 때 아무것도 할 필요가 없으면 begin을 생략하는 것이 가능

                    let i = 0; 
                    for(; i < 3; i++){ -> i를 선언하고 값도 할당하였기에, begin을 따로 설정하지 않고 생략가능 
                        alert(i); -> 0,1,2
                    }
            
                -> step 역시 생략가능
                    
                    let i = 0;
                    for(; i < 3;){
                        alert(i++);
                    }
                    -> 위와 같이 for문을 구성하면 while(i < 3)과 동일, for(;;)의 형태로 모든 구성 요소를 생략하면 무한 반복문이 만들어진다.

                ※ for문의 구성요소를 생략할 때 주의할 점은 두 개의 ; 세미콜론을 꼭 넣어줘야 한다, 하나라도 없으면 문법 에러 발생
            
            * 반복문 빠져나오기
                - 반복문의 조건이 falsy가 되면 반복문이 종료, 특별한 지시자인 break를 사용하면 언제든 원하는 때에 반복문을 빠져 나올 수 있다.

                    let sum = 0;
                    while (true){
                        let value = +prompt("숫자를 입력하세요.",'');
                        if(!value) break; // break는 사용자가 아무것도 입력하지 않거나 cancel 버튼을 눌렀을 때 활성화 된다.
                        sum += value;
                    }
                    alert('합계 : ' +sum);

                    -> 보눈 가운데 혹은 본문 여러 곳에서 조건을 확인해야 하는 경우, 무한 반복문 + break 조합을 사용


            * 다음 반복으로 넘어가기
                ※ continue문 : for문, while문, do-while문에서 사용하면 for문에서 continue를 만나게 되면 증감식으로 바로 이동하게 하며, while문,
                  do-while문은 조건식으로 이동한다.

                    - continue 지시자는 break의 가벼운 버전, continue는 전체 반복문을 멈추지 않음, 대신 현재 실행 중인 이터레이션을 멈추고
                      반복문이 다음 이터레이션을 강제로 실행(조건은 통과 시)

                        for(let i = 0; i < 10; i++){
                            ->조건이 참이라면 남아있는 본문은 실행되지 않음
                            if(i % 2 == 0) continue;
                            alert(i); -> 1,3,5,7,9가 차례대로 출력됨
                        }

                        -> 중첩을 줄이는 데 도움이 됨(아래 코드와 위의 코드는 동일 결과)

                        for(let i = 0; i < 10; i++){
                            if(i % 2){
                                alert(i);
                            }
                        }

                        (i > 5) ? alert(i) : continue; 

                        -> ? 오른쪽엔 break나 continue가 올 수 없다, 에러가 발생하는 문법으로 물음표 연산자를 if문 대용으로 쓰지말아야 하는 이유 중 하나이다.


            * break / continue 와 레이블
                    
                - labelName: for(..)의 형태로 빠져나갈 반복문을 설정할 수 있다.
                    -> label은 반복문 앞에 콜론과 함께 쓰인다.
                    -> break와 continue는 반복문 안에서만 사용할 수 있고 레이블은 반드시 break나 continue 지시자 위에 있어야 한다.

                    outer: for(let i = 0; i < 3; i++){
                        for(let j = 0; j < 3; j++){
                            let input = prompt(`(${i},${j})의 값`,''); 

                            -> 사용자가 아무것도 입력하지 않거나ㅣ cancel 버튼을 누르면 두 반복문 모두를 빠져나감
                            if(!input) break outer; -> outer 레이블이 붙은 반복문을 찾고 해당 반복문을 빠져나감

                            -> 입력받은 값을 가지고 무언가를 함
                        }
                    }
                    alert('완료');

                
    ※ 요약 : 세 종류의 반복문에 대해 살펴보기

        * while : 각 반복이 시작하기 전에 조건을 확인
        * do-while : 각 반복이 끝난 후에 조건을 확인
        * for(;;) : 각 반복이 시작하기 전에 조건을 확인함, 추가 세팅을 할 수 있다.
        
        - 무한 반복문은 보통 while(true)를 써서 만듬, 무한 반복문은 여타 반복문과 마찬가지로 break 지시자로 멈출 수 있다.
        - 현재 진행 중인 반복에서 무언가를 더 이상 하지 않고 다음 반복으로 넘어가고 싶다면 continue 지시자를 사용
        - 반복문 앞에 레이블을 붙이고, break / continue 에 이 레이블을 함께 사용
          레이블은 중첩 반복문을 빠져나와 바깥의 반복문으로 갈 수 있게 해주는 유일한 방법
        

*/