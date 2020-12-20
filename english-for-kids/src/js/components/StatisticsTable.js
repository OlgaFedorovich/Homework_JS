import { categories, constantNumbers } from './../data/constants.js';

class StatisticsTable {

    placeDataToLocalStorage() {
        if(!localStorage.getItem('game-statistics')) {
            let statisticsOfGame = [];

            for(let i = 1; i <= constantNumbers.categoriesNum; i++ ) {
                for(let j = 0; j < constantNumbers.cardsNum; j++ ) {
                    let wordStatistics = {
                        category: categories[i].title,
                        word: categories[i].cards[j].word,
                        translation: categories[i].cards[j].translation,
                        hash: categories[i].hash,
                        image: categories[i].cards[j].image,
                        audio: categories[i].cards[j].audioSrc,
                        clicks: 0,
                        correct: 0,
                        wrong: 0,
                        percentMistakes: 0,
                    };
                    statisticsOfGame.push(wordStatistics);
                }
            }
            localStorage.setItem('game-statistics', JSON.stringify(statisticsOfGame));
        }
    }

    renderTableResults() {
        this.statisticsData.forEach((item, index) => {
            const tableRow = document.createElement('tr');
            tableRow.classList.add('table-row');
            tableRow.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.category}</td>
                <td>${item.word}</td>
                <td>${item.translation}</td>
                <td>${item.clicks}</td>
                <td>${item.correct}</td>
                <td>${item.wrong}</td>
                <td>${item.percentMistakes}%</td>   
            `;
                this.statisticsTableBody.appendChild(tableRow);
        });
    }

    createStatisticsTable() {
        this.statisticsTableWrapper = document.createElement('table');
        this.statisticsTableWrapper.classList.add('statistics-table');

        this.statisticsTableWrapper.innerHTML = `
            <thead class="table-header">
                <tr>
                    <th>№</th>
                    <th data-title="category">Category</th>
                    <th data-title="word">Word</th>
                    <th data-title="translation">Translation</th>
                    <th data-title="clicks">Clicks</th>
                    <th data-title="correct">Correct</th>
                    <th data-title="wrong">Wrong</th>
                    <th data-title="percentMistakes">% wrong answers</th>                
                </tr>
            </thead>
        `;

        this.statisticsTableBody = document.createElement('tbody');
        this.statisticsTableBody.classList.add('statistics-body');
        this.statisticsTableWrapper.appendChild(this.statisticsTableBody);

        this.statisticsData = JSON.parse(localStorage.getItem('game-statistics')) || statisticsOfGame;
        this.renderTableResults();

        this.statisticsTableWrapper.addEventListener('click', (e) => {
            const sortTarget = e.target.dataset.title;
            //console.log(sortTarget);
            if(['clicks', 'correct', 'wrong', 'percentMistakes'].includes(sortTarget)) {
                if(!e.target.classList.contains('sort-up')) {
                    this.statisticsData.sort((a, b) => (b[sortTarget] - a[sortTarget]));
                } else {
                this.statisticsData.sort((a, b) => (b[sortTarget] - a[sortTarget])).reverse();
                }
            }

            if(['category', 'word', 'translation'].includes(sortTarget)) {
                if(!e.target.classList.contains('sort-up')) {
                    this.statisticsData.sort((a, b) => (a[sortTarget] > b[sortTarget]) ? 1 : ((b[sortTarget] > a[sortTarget]) ? -1 : 0));
                } else {
                this.statisticsData.sort((a, b) => (a[sortTarget] > b[sortTarget]) ? 1 : ((b[sortTarget] > a[sortTarget]) ? -1 : 0)).reverse();
                } 
            }

            if(e.target.classList.contains('sort-up')) {
                e.target.classList.remove('sort-up');
                e.target.classList.add('sort-down');
            } else if(e.target.classList.contains('sort-down')) {
                e.target.classList.add('sort-up');
                e.target.classList.remove('sort-down');
            } else {
                console.log('no-class');
                if(document.body.querySelectorAll('.sort-up')) {
                    document.body.querySelectorAll('.sort-up').forEach(item => item.classList.remove('sort-up'));
                } 
                if(document.body.querySelectorAll('.sort-down')) {
                    document.body.querySelectorAll('.sort-down').forEach(item => item.classList.remove('sort-down'));}
                e.target.classList.add('sort-up');
            }

            this.statisticsTableBody.innerHTML = '';
            this.renderTableResults();
        });
    }

     initStatisticsTable() {
         this.placeDataToLocalStorage();

         this.createStatisticsTable();

         return this.statisticsTableWrapper;
     }
}

//const statisticsTable = new StatisticsTable().initStatisticsTable();

export default StatisticsTable;