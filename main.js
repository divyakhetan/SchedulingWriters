let count = {}
let lessthan10 = 0
d3.csv("writer.csv", function (data) {
    for (let i = 0; i < data.length; i++) {
        if (count[data[i]["writer_id"]])
            count[data[i]["writer_id"]]++;
        else count[data[i]["writer_id"]] = 1
    }

    let freq_sorted = Object.entries(count).sort(function (a, b) {
        return b[1] - a[1];
    });

    let freq_json = []
    for (i = 0; i < freq_sorted.length; i++) {
        if (freq_sorted[i][1] <= 10) lessthan10 += freq_sorted[i][1]
        freq_json.push({ writer_id: freq_sorted[i][0], count: freq_sorted[i][1] });
    }
    console.log("Less than 10 ", lessthan10)
    console.log("Total writers ", freq_json.length)
    console.log(freq_json)
});