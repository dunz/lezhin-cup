// 32강
// 강 진출시마다 남은 사람중 랜덤으로 설정
// class WorldCup {
//     constructor() {
//         this.container = document.getElementById('dashboard');
//         this.userList = [];
//         this.initUserList();
//         this.userList = this.getMixUserList(this.userList);
//         this.render();
//     }
//
//     initUserList() {
//         this.userList = [
//             {name: '김태희'},
//             {name: '경리'},
//             {name: '아이유'},
//             {name: '수지'}
//         ];
//     }
//
//     render() {
//         this.container.innerHTML = this.getUserListTemplate(this.userList);
//     }
//
//     getUserListTemplate(userList) {
//         return userList.reduce((html, user) => {
//             return `${html}<li>${user.name}</li>`;
//         }, '<ul>') + '</ul>';
//     }
//
//     getMixUserList(userList = []) {
//         for (let i = userList.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [userList[i], userList[j]] = [userList[j], userList[i]];
//         }
//         return userList;
//     }
//
//     getRandomeIndex(range = 0) {
//         return Math.floor(Math.random() * range);
//     }
//
//     initEventHandler() {
//         document.addEventListener('click', () => {
//
//         });
//     }
// };
//
// new WorldCup();

import './utils/shuffle.js';
import IdelsModel from './models/IdelsModel.js';
import Dashboard from './views/dashboard.js';

const idealsModel = new IdelsModel();
new Dashboard(idealsModel);
