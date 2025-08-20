var tbody = document.querySelector("table tbody");
var pagination = document.querySelector(".pagination");
var numPerPage = 4;
var totalPage;

var urlObject = new URL(window.location.href);
var page = urlObject.searchParams.get("page") ?? 1;
console.log(page);

loadData();

async function loadData() {
    const url = "./data.json"


    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json()
        console.log(result);
        totalPage = Math.round(result.length / numPerPage);
        console.log(totalPage);
        for (let i = 0; i < totalPage; i++) {
            const node = document.createElement("li");
            const active = page == (i + 1) ? "active" : "";
            node.className = ("page-item", active);
            node.innerHTML = `<a class="page-link" href="?page=${i + 1}#file2">${i + 1}</a>`;
            pagination.append(node);
        }




        let contentHTML = "";

        const start = numPerPage * (page - 1);
        const end = numPerPage * page;

        result.slice(start, end).forEach((value, index) => {
            console.log(value["地區"]);
            contentHTML += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${value["地區"]}</td>
                    <td>${value["欄位名稱"]}</td>
                    <td>${value["數值"]}</td>
                </tr>
            `;
        });

        // Process the data
        tbody.innerHTML = contentHTML;
    } catch (error) {
        console.error("Error processing data:", error);
    }
}