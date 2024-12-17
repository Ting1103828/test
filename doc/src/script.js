  var userChoices = {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: ''
    };

     function nextQuestion(nextSectionId, questionNumber, answer) {
            // 儲存使用者選擇
            userChoices['question' + questionNumber] = answer;

            // 顯示下一題
            document.querySelector('.question.active').classList.remove('active');
            document.getElementById(nextSectionId).classList.add('active');

            // 如果是最後一題，顯示結果
            if (nextSectionId === 'result') {
                finishQuiz(questionNumber, answer);
            }
        }

        function finishQuiz(questionNumber, answer) {
            userChoices['question' + questionNumber] = answer;

            var resultTitle = '等級 S';
            var resultIt = '友善主廚';
            var resultDescription = '你是料理天才！';
            var resultcharacter = '<img src="https://i.imgur.com/qm2oN8j.png" alt="模擬畫面" />';
            let tags = ['#料理天才', '#完美廚藝', '#美食大師']; // 預設標籤
            let extrasContent = `
        <div>
            最佳共煮拍檔
            <img src="https://example.com/partner.png" alt="最佳共煮拍檔" />
        </div>
        <div>
            炸廚房同夥
            <img src="https://example.com/kitchen.png" alt="炸廚房同夥" />
        </div>
    `;


      if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      } else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/RzCoXGc.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      } else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'c' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'c' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'c' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'c' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultTitle = '等級 S';
        resultIt = '友善主廚';
        resultDescription = '你擁有卓越的烹飪技巧與敏銳的食材觸覺，無論是細膩的調味還是創意的菜式，都能一手掌控。你不僅自己做得出色，還擅長帶領隊伍，讓大家在你的指導下充分發揮潛力。與人合作時，你總是能以平易近人的態度贏得信任，做事既細心又有耐心，是完美的團隊領袖。';
        resultcharacter= '<img src="https://i.imgur.com/9nICmlP.png" alt="模擬畫面" />';
        tags = ['#專業廚藝', '#溫暖引導', '#團隊領袖'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/AZb5AJF.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultTitle = '等級 F';
        resultIt = '做菜雷咖';
        resultDescription = '你現在的廚藝水準可能讓人感到挫折，做出來的料理經常不如預期。然而，這並不代表你沒有希望，反而意味著你有更多學習和進步的空間。你需要更多的練習和指導來克服基礎上的挑戰，並且學會如何保持耐心與細心，讓做菜的過程更加順利。';
        resultcharacter= '<img src="https://i.imgur.com/T8JrNwS.png" alt="模擬畫面" />';
        tags = ['#急需突破', '#學習之路', '#困難重重'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultTitle = '等級 S';
        resultIt = '友善主廚';
        resultDescription = '你擁有卓越的烹飪技巧與敏銳的食材觸覺，無論是細膩的調味還是創意的菜式，都能一手掌控。你不僅自己做得出色，還擅長帶領隊伍，讓大家在你的指導下充分發揮潛力。與人合作時，你總是能以平易近人的態度贏得信任，做事既細心又有耐心，是完美的團隊領袖。';
        resultcharacter= '<img src="https://i.imgur.com/MyZiR2Y.png" alt="模擬畫面" />';
        tags = ['#專業廚藝', '#溫暖引導', '#團隊領袖'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/AZb5AJF.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultTitle = '等級 S';
        resultIt = '友善主廚';
        resultDescription = '你擁有卓越的烹飪技巧與敏銳的食材觸覺，無論是細膩的調味還是創意的菜式，都能一手掌控。你不僅自己做得出色，還擅長帶領隊伍，讓大家在你的指導下充分發揮潛力。與人合作時，你總是能以平易近人的態度贏得信任，做事既細心又有耐心，是完美的團隊領袖。';
        resultcharacter= '<img src="https://i.imgur.com/MyZiR2Y.png" alt="模擬畫面" />';
        tags = ['#專業廚藝', '#溫暖引導', '#團隊領袖'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/AZb5AJF.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultTitle = '等級 B';
        resultIt = '可塑之才';
        resultDescription = '你具備發展潛力，雖然目前的技術可能還未達到頂尖水準，但你的學習能力和適應力極強。隨著時間的推移，經過適當的指導與練習，你有機會成為一名出色的廚師。你願意嘗試新的事物，並且不怕失敗，這讓你擁有無限的可能性。';
        resultcharacter= '<img src="https://i.imgur.com/he7rksO.png" alt="模擬畫面" />';
        tags = ['#學習潛力', '#不斷進步', '#有待挖掘'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'c' && userChoices.question5 === 'a') {
        resultTitle = '等級 S';
        resultIt = '友善主廚';
        resultDescription = '你擁有卓越的烹飪技巧與敏銳的食材觸覺，無論是細膩的調味還是創意的菜式，都能一手掌控。你不僅自己做得出色，還擅長帶領隊伍，讓大家在你的指導下充分發揮潛力。與人合作時，你總是能以平易近人的態度贏得信任，做事既細心又有耐心，是完美的團隊領袖。';
        resultcharacter= '<img src="https://i.imgur.com/MyZiR2Y.png" alt="模擬畫面" />';
        tags = ['#專業廚藝', '#溫暖引導', '#團隊領袖'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/AZb5AJF.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'c' && userChoices.question5 === 'b') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'c' && userChoices.question5 === 'a') {
        resultTitle = '等級 S';
        resultIt = '友善主廚';
        resultDescription = '你擁有卓越的烹飪技巧與敏銳的食材觸覺，無論是細膩的調味還是創意的菜式，都能一手掌控。你不僅自己做得出色，還擅長帶領隊伍，讓大家在你的指導下充分發揮潛力。與人合作時，你總是能以平易近人的態度贏得信任，做事既細心又有耐心，是完美的團隊領袖。';
        resultcharacter= '<img src="https://i.imgur.com/MyZiR2Y.png" alt="模擬畫面" />';
        tags = ['#專業廚藝', '#溫暖引導', '#團隊領袖'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/AZb5AJF.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/TAm3rzz.png" alt="炸廚房同夥" />
            </div>
        `;
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'c' && userChoices.question5 === 'b') {
        resultTitle = '等級 A';
        resultIt = '神隱的副廚';
        resultDescription = '隨心所欲的能力者，明明有能力能夠完成精美的料理，但有時候就是想躺平，需要一個充滿活力的搭檔。';
        resultcharacter= '<img src="https://i.imgur.com/AaFHwTr.png" alt="模擬畫面" />';
        tags = ['#隱藏料理天賦', '#急需督促', '#喜歡被稱讚'];
        extrasContent = `
            <div>
                最佳共煮拍檔
                <img src="https://i.imgur.com/7Fru6po.png" alt="最佳共煮拍檔" />
            </div>
            <div>
                炸廚房同夥
                <img src="https://i.imgur.com/AZb5AJF.png" alt="炸廚房同夥" />
            </div>
        `;
      }

      // 設定結果畫面
      document.getElementById('result-title').innerText = resultTitle;
      document.getElementById('result-it').innerText = resultIt;
      document.getElementById('result-description').innerText = resultDescription;
      document.querySelector('.result-extras').innerHTML = extrasContent;
          
      const tagsContainer = document.querySelector('.result-tags');
    tagsContainer.innerHTML = ''; // 清空現有標籤
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.innerText = tag;
        tagsContainer.appendChild(tagElement);
    });
      
      // 獲取容器元素
var container = document.getElementById('resultCharacterContainer');

// 將 resultcharacter 插入到容器中
container.innerHTML = resultcharacter;

      // 顯示結果
      document.querySelector('.question.active').classList.remove('active');
      document.getElementById('result').style.display = 'block';
    }