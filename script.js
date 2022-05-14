let setDiff1 = false;
let setDiff2 = false;
let flag = true;
let value;
let i, j = 0;
let player1 = new Set();
let player2 = new Set();
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 6, 9]);
const set3 = new Set([7, 8, 9]);
const set4 = new Set([1, 4, 7]);
const set5 = new Set([1, 5, 9]);
const set6 = new Set([3, 5, 7]);
const set7 = new Set([2, 5, 8]);
const set8 = new Set([4, 5, 6]);
c = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
const arrayOfAnsSet = [set1, set2, set3, set4, set5, set6, set7, set8];

function render(t) {
    t.addEventListener('click', () => {
        switch (t) {
            case c1: value = 1; break;
            case c2: value = 2; break;
            case c3: value = 3; break;
            case c4: value = 4; break;
            case c5: value = 5; break;
            case c6: value = 6; break;
            case c7: value = 7; break;
            case c8: value = 8; break;
            case c9: value = 9; break;
            default: console.log('error');
        }
        if (flag == true) {
            t.innerText = 'X';
            flag = false;
            player1.add(value);
            i++;
        }
        else {
            t.innerText = '0';
            flag = true;
            player2.add(value);
            j++;
        }
    });
}
function result() {
    if (i > 2) {
        for (x = 0; x < 9; x++) {
            a = arrayOfAnsSet[x];
            setDiff1 = difference(player1, a);
            if (setDiff1 == true) {
                alert('Player1 Wins');
                console.log('Player1 wins');
                // return;
            }
        }
    }
    if (j > 2) {
        arrayOfAnsSet.forEach(a => {
            setDiff2 = difference(player2, a);
            if (setDiff2 == true) {
                alert('Player2 Wins');
                // return;
            }
        });
    }
}
function difference(s1, s2) {
    for (let a of s1) {
        if (!(s2.has(a))) {
            return false;
        }
        return true;
    }
}

c.forEach(click => {
    render(click);
    if (i > 2) {
        result();
    }
});