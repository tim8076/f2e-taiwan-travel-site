import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useCommentsStore = defineStore('comments', {
  state: () => {
    return {
      comments: {
        spot: [
          {
            id: 1,
            type: 'spot',
            title: '路上容易塞車',
            comment: '路上容易塞車，景點門票貴。',
            star: 2.5,
          },
          {
            id: 2,
            type: 'spot',
            title: '景色優美',
            comment: '這個景點的景色非常優美，尤其是在日落時分，天空的顏色變化多端，令人陶醉。然而，這裡的交通並不方便，建議提前規劃行程。此外，景區內的設施相對簡單，遊覽時需自備飲食和必需品。總體來說，這是一個適合拍照和放鬆的好地方。',
            star: 4.0,
          },
          {
            id: 3,
            type: 'spot',
            title: '人潮過多',
            comment: '這個景點風景不錯，但是人實在太多了，幾乎每個角落都是人群，拍照很難避開他人。建議非假日或淡季來訪。',
            star: 3.0,
          },
          {
            id: 4,
            type: 'spot',
            title: '設施完善',
            comment: '這裡的設施非常完善，有乾淨的廁所和多個休息區，非常適合家庭出遊。景區內還有多個小吃攤，食物美味可口。',
            star: 4.5,
          },
          {
            id: 5,
            type: 'spot',
            title: '票價合理',
            comment: '景點的票價非常合理，景區內的環境也保持得很好。工作人員非常友善，給了我們很多幫助。',
            star: 4.0,
          },
          {
            id: 6,
            type: 'spot',
            title: '交通方便',
            comment: '這個景點的交通非常方便，從市中心坐車過來很快就到了。景區內的風景也不錯，是個放鬆心情的好地方。',
            star: 3.5,
          },
          {
            id: 7,
            type: 'spot',
            title: '風景如畫',
            comment: '景點的風景如畫，每個角落都能拍出美麗的照片。只是遊客比較多，建議早上或下午晚些時候來。',
            star: 3.0,
          },
          {
            id: 8,
            type: 'spot',
            title: '自然美景',
            comment: '這裡的自然美景讓人流連忘返，空氣清新，非常適合戶外活動。只是部分路段比較陡峭，需要注意安全。',
            star: 4.5,
          },
          {
            id: 9,
            type: 'spot',
            title: '環境乾淨',
            comment: '景區環境非常乾淨，設施也很新。值得一提的是，這裡的服務人員非常熱情友善。',
            star: 4.0,
          },
          {
            id: 10,
            type: 'spot',
            title: '風光明媚',
            comment: '景點的風光明媚，特別適合拍照和野餐。只是遊客比較多，部分熱門景點需要排隊。',
            star: 3.5,
          },
        ],
        food: [
          {
            id: 1,
            type: 'food',
            title: '美味的牛肉麵',
            comment: '這家餐廳的牛肉麵非常美味，湯頭濃郁，牛肉軟嫩，麵條彈牙。服務人員親切友善，環境乾淨整潔。價格略高，但總體來說，物有所值，推薦給喜歡吃麵食的朋友。',
            star: 4.5,
          },
          {
            id: 2,
            type: 'food',
            title: '令人失望的服務',
            comment: '這家餐廳的食物還算可以，但服務態度實在令人失望。服務生不夠友善，點餐時也沒有耐心解答我們的問題。',
            star: 2.5,
          },
          {
            id: 3,
            type: 'food',
            title: '甜點超棒',
            comment: '這家餐廳的甜點非常棒，特別是巧克力蛋糕，濃郁香甜，口感絕佳。環境也很優雅，非常適合下午茶。',
            star: 4.0,
          },
          {
            id: 4,
            type: 'food',
            title: '價格合理',
            comment: '這家餐廳的價格非常合理，食物的份量也很足。特別喜歡他們的炒飯，口感很好，料也很足。',
            star: 3.5,
          },
          {
            id: 5,
            type: 'food',
            title: '環境優雅',
            comment: '餐廳的環境非常優雅，裝潢很有品味。食物也很好吃，特別是海鮮料理，食材新鮮，味道鮮美。',
            star: 4.0,
          },
          {
            id: 6,
            type: 'food',
            title: '餐點豐富',
            comment: '這家餐廳的菜單非常豐富，從中式到西式都有，選擇很多。每道菜都很有特色，特別推薦他們的燒烤。',
            star: 3.5,
          },
          {
            id: 7,
            type: 'food',
            title: '服務優良',
            comment: '這家餐廳的服務非常優良，服務生都很有禮貌，對顧客的需求也很關心。食物也不錯，特別是他們的沙拉。',
            star: 4.5,
          },
          {
            id: 8,
            type: 'food',
            title: '菜色普通',
            comment: '餐廳的菜色比較普通，沒有什麼特別之處。不過價格還算公道，服務也還不錯。',
            star: 3.0,
          },
          {
            id: 9,
            type: 'food',
            title: '非常推薦',
            comment: '這家餐廳真的非常值得推薦，無論是食物的質量還是服務態度都非常好。特別是他們的牛排，口感極佳。',
            star: 4.5,
          },
          {
            id: 10,
            type: 'food',
            title: '份量足夠',
            comment: '這家餐廳的食物份量非常足夠，價格也很合理。特別喜歡他們的炸雞，外酥內嫩，非常好吃。',
            star: 3.5,
          },
        ],
        event: [
          {
            id: 1,
            type: 'event',
            title: '燈光節驚艷',
            comment: '這次的燈光節真的非常驚艷，各種燈光裝置創意十足，尤其是主題燈展部分，色彩繽紛，場景變化多樣，吸引了大量遊客。活動現場的氛圍也很好，有很多小吃攤和娛樂設施，不過人潮洶湧，建議早點到場以避開高峰期。總的來說，是一個值得一看的精彩活動。',
            star: 4.5,
          },
          {
            id: 2,
            type: 'event',
            title: '音樂會音效差',
            comment: '這次的音樂會雖然表演很精彩，但音效實在太差，影響了整體的觀賞體驗。而且場地的座位安排也不太合理。',
            star: 2.5,
          },
          {
            id: 3,
            type: 'event',
            title: '市集熱鬧',
            comment: '這次的市集非常熱鬧，各種攤位應有盡有，特別是手工藝品和美食攤位，吸引了很多人。現場還有表演活動，非常有趣。',
            star: 4.0,
          },
          {
            id: 4,
            type: 'event',
            title: '煙火表演震撼',
            comment: '煙火表演非常震撼，煙火的設計和顏色搭配都很精彩，看得非常過癮。只是人比較多，建議提早到場找好位置。',
            star: 4.5,
          },
          {
            id: 5,
            type: 'event',
            title: '表演節目豐富',
            comment: '活動的表演節目非常豐富，從音樂到舞蹈應有盡有，每個節目都很精彩。只是場地有點擁擠，建議提早到場。',
            star: 4.0,
          },
          {
            id: 6,
            type: 'event',
            title: '組織混亂',
            comment: '這次的活動組織得不是很好，現場的指引不清楚，讓人有些迷茫。而且人很多，顯得有些混亂。',
            star: 3.0,
          },
          {
            id: 7,
            type: 'event',
            title: '活動氛圍佳',
            comment: '這次活動的氛圍非常好，大家都很熱情，現場的互動也很多。特別是遊戲區，吸引了很多人參與，非常有趣。',
            star: 3.5,
          },
          {
            id: 8,
            type: 'event',
            title: '活動安排得當',
            comment: '活動的安排非常得當，節目安排緊湊而有序，觀賞起來非常舒適。現場的志願者也很熱情，給了我們很多幫助。',
            star: 4.5,
          },
          {
            id: 9,
            type: 'event',
            title: '活動精彩',
            comment: '這次的活動非常精彩，特別是現場的表演和互動環節，非常吸引人。只是人比較多，顯得有些擁擠。',
            star: 4.0,
          },
          {
            id: 10,
            type: 'event',
            title: '活動設計創新',
            comment: '這次活動的設計非常創新，特別是現場的互動裝置和主題區域，非常有創意。只是活動場地有點小，顯得有些擁擠。',
            star: 3.5,
          },
        ]
      },
      currentComments:[],
      sortDirection: '',
      rankLevel: [
        2.5,
        3,
        3.5,
        4,
        4.5,
      ],
    };
  },
  getters: {
    averageStar() {
      const starTotal = this.currentComments.reduce((current, next) => {
        return current + next.star;
      }, 0);
      return Math.round(starTotal / this.currentComments.length);
    },
    sortedComments() {
      if (!this.sortDirection) return this.currentComments;
      if (this.sortDirection === 'highToLow') {
        return [...this.currentComments].sort((a, b) => b.star - a.star);
      }
      if (this.sortDirection === 'LowToHigh') {
        return [...this.currentComments].sort((a, b) => a.star - b.star);
      }
    },
  },
  actions: {
    async getComments(type) {
      const commentNum = Math.floor(Math.random() * (this.comments[type].length - 1));
      const num = commentNum < 3 ? 3 : commentNum;
      const comments = this.comments[type].slice(0, num);
      try {
        const path = `${import.meta.env.VITE_API_RANDOM_USER}/?results=${num}`;
        const res = await axios.get(path);
        this.currentComments = comments.map((comment, index) => {
          const user = res.data.results[index];
          return {
            ...comment,
            user,
          }
        })
      } catch(err) {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: '確認',
        });
      }
    },
    createRank({ level, color }) {
      let randomLevel = this.rankLevel[Math.floor(Math.random() * this.rankLevel.length)];
      if (level) randomLevel = level;
      let fullStar = new URL(`../assets/images/star/star-filled.svg`, import.meta.url).href;
      let halfStar = new URL(`../assets/images/star/half-star-filled.svg`, import.meta.url).href;
      let outLineStar = new URL(`../assets/images/star/star-outline.svg`, import.meta.url).href;
      if (color === 'yellow') {
        fullStar = new URL(`../assets/images/star/star-filled-yellow.svg`, import.meta.url).href;
        halfStar = new URL(`../assets/images/star/half-star-filled-yellow.svg`, import.meta.url).href;
        outLineStar = new URL(`../assets/images/star/star-outline-yellow.svg`, import.meta.url).href;
      }
      if (randomLevel === 2.5) {
        return [fullStar, fullStar, halfStar, outLineStar, outLineStar];
      } else if (randomLevel === 3) {
        return [fullStar, fullStar, fullStar, outLineStar, outLineStar];
      } else if (randomLevel === 3.5) {
        return [fullStar, fullStar, fullStar, halfStar, outLineStar];
      } else if (randomLevel === 4) {
        return [fullStar, fullStar, fullStar, fullStar, outLineStar];
      } else if (randomLevel === 4.5) {
        return [fullStar, fullStar, fullStar, fullStar, halfStar];
      } else {
        return [fullStar, fullStar, fullStar, fullStar, fullStar];
      }
    },
    sortComment(direction) {
      this.sortDirection = direction;
    }
  },
})

// 

// 幫我依照 js 上面物件格式， type 分為 spot、food、event。title 為評論的主題，約10字以內， comment 為評論內容，約150字以內。針對 type: 'spot' ，產生遊客對景點的評論。 type: 'food'，產生客人對餐廳或食物的評論。 type: 'event，產生遊客對活動的評論，都以繁體中文產生。
// 

