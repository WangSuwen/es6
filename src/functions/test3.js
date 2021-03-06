/**
 * Created by wxq on 17-2-26.
 */
/**
 *  用for 循环实现 继发执行
 */
/*(async function () {
    let docs = [{
        a:'a'
    }, {
        a : 'b'
    }, {
        a : 'c'
    }];

    for (let doc of docs) {
        await console.log(doc.a + '===' + Date.now());
    }
})();*/

/**
 * 用 Promise.all 实现并发执行
 */

(async function () {
    let docs = [{
        a:'a'
    }, {
        a : 'b'
    }, {
        a : 'c'
    }];
    let promises = docs.map((doc) => {
        console.log('+++' + Date.now());
        return doc.a + '---' + Date.now();
    });

    let results = await Promise.all(promises);
    console.log(results);
})();
