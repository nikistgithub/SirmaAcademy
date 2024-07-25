function createPrivateCounter(){
    let count = 0;

    return {
        getCount: function(){
            return count;
        },

        increment: function(){
            count++;
        }
    }
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount());